import { getPosts } from '../getPosts'

export async function getCity(payload) {
  const city = await getPosts(
    payload,
    {
      limit: 1000,
      pagination: false,
    },
    ['city'],
  )

  return city
}
