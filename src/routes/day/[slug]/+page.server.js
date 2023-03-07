import {error} from '@sveltejs/kit'
import {client} from '$lib/sanityClient'
import {dev} from '$app/environment'
import {setDate} from 'date-fns'
export const csr = false

// Gets a specific blog post from its slug.current value

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
  if (dev) {
    console.log(`[Server] Opened Page: ${params.slug}`)
  }
  const rfcdate = new Date(params.slug).toISOString()
  const rfcdate1 = setDate(new Date(params.slug), new Date(params.slug).getDate() + 1).toISOString()
  console.log(`From ${rfcdate} to ${rfcdate1}`)
  const {posts} = await client.fetch(/* groq */ `{
      "posts": *[dateTime(consumedAt) > dateTime("${rfcdate}") && dateTime(consumedAt) < dateTime("${rfcdate1}")]{
    ...,
    "image": mainImage
  } | order(consumedAt asc)
}`)

  if (posts) {
    if (dev) {
      console.log(`[Server] Day opened is ${params.slug}`)
    }
    return {
      posts
    }
  }
  throw error(404, 'Not found here')
}
