import { client } from './sanity.client'
import ImageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from sanity client
const builder = ImageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source)
}
