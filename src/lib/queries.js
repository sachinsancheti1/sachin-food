/**
 * Example of how you could re-use GROQ queries across different contexts with Javascript.
 * As your schema evolves, this pattern will be useful to keep your data in sync across all surfaces.
 */
export function getPostsQuery(extraFilter) {
  return /* groq */ `*[
    _type == "post" &&
    defined(slug.current)
    ${extraFilter ? `&& ${extraFilter}` : ''}
  ] | order(consumedAt desc) {
    title,
    slug,
    "image": mainImage,
    spice,
    heavy,
    consumedAt
  }`
}

/**
 * You can also re-use parts of projections as fragments.
 * In this case, we're defining that, to render an author card, we need their name, slug & image.
 */
export const AUTHOR_CARD_FRAGMENT = `
name,
slug,
image,
`
