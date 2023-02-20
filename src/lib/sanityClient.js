import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = '7b9gtmpn'
const dataset = 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2021-10-21',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}
