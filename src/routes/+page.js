import {error} from '@sveltejs/kit'
import {AUTHOR_CARD_FRAGMENT, getPostsQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

/** type {import('./$types').PageLoad} */
// Fetch all valid posts & authors to display in the homepage
export async function load() {
  const {posts} = await client.fetch(/* groq */ `{
		"posts": ${getPostsQuery()}[0...15]
  }`)
  const {authors} = await client.fetch(/* groq */ `{
		"authors": *[_type == "author" && defined(slug.current) && !(_id in path('drafts.**'))] {
			${AUTHOR_CARD_FRAGMENT}
		}
  }`)

  if (posts && authors) {
    return {
      posts,
      authors
    }
  }

  error(404, 'Not found');
}
