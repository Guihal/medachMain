import { getPosts } from '../getPosts'

export const getTags = async (payload) => {
  const tags = await getPosts(
    payload,
    {
      limit: 1000,
      pagination: false,
    },
    ['tags'],
  )

  return tags
}
