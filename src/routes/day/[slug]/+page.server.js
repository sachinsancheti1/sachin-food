import {error} from '@sveltejs/kit'
import {client} from '$lib/sanityClient'
import {dev} from '$app/environment'
import {addDays} from 'date-fns'
export const csr = false

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
  if (dev) {
    console.log(`[Server] Opened Page: ${params.slug}`)
  }

  const parsed = new Date(params.slug)
  if (isNaN(parsed.getTime())) {
    error(400, 'Invalid date')
  }

  const rfcdate = parsed.toISOString()
  const rfcdate1 = addDays(parsed, 1).toISOString()

  const {posts} = await client.fetch(
    /* groq */ `{
      "posts": *[dateTime(consumedAt) > dateTime($from) && dateTime(consumedAt) < dateTime($to) && !(_id in path('drafts.**'))]{
        ...,
        "image": mainImage
      } | order(consumedAt asc)
    }`,
    {from: rfcdate, to: rfcdate1}
  )

  if (posts) {
    if (dev) {
      console.log(`[Server] Day opened is ${params.slug}`)
    }
    return {posts}
  }
  error(404, 'Not found here')
}
