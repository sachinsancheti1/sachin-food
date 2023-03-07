import {error} from '@sveltejs/kit'
import {client} from '$lib/sanityClient'

/** type {import('./$types').PageLoad} */
// Fetch all valid posts & authors to display in the homepage
export async function load() {
  const {days} = await client.fetch(/* groq */ `{
    "days": *[defined(consumedAt)]{
  consumedAt
} | order(consumedAt asc)
}`)
  const formatday = Object.values(
    days.reduce((acc, obj) => {
      const [[key, val]] = Object.entries(obj)
      return (
        (acc[val] = {
          [key]: new Date(val).toLocaleDateString('en', {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
          })
        }),
        acc
      )
    }, {})
  )

  const uniquedays = Object.values(
    formatday.reduce((acc, obj) => {
      const [[key, val]] = Object.entries(obj)
      return (acc[val] = {[key]: val}), acc
    }, {})
  )

  if (uniquedays) {
    console.log(uniquedays)
    return {
      uniquedays
    }
  }

  throw error(404, 'Not found')
}
