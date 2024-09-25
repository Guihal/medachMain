import { getPosts } from '../getPosts'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { redis } from '../cacheRedis'
import { getTags } from './getTags'
import { getData } from './getData'
import { getCity } from './getCity'

// interface AccordionData {
//   query: {};
//   tags: [];
//   cities: [];
//   data: {
//     last: AccordionBlock,
//     editors: AccordionBlock,
//     top: AccordionBlock,
//     news: AccordionBlock,
//     info: AccordionBlock,
//     ad: AccordionBlock,
//     articles: AccordionBlock,
//     podcast: AccordionBlock,
//     video: AccordionBlock,
//     vacancy: AccordionBlock,
//     event: AccordionBlock,
//   }
// }

// interface AccordionBlock{
//   query: {},
//   data: [],
// }

export const accordionsData = async (query) => {
  const cache = await redis.get('accordions')

  let cacheParse: any = false

  if (cache != null && cache != '[object Object]') {
    cacheParse = JSON.parse(cache)

    if (JSON.stringify(cacheParse.query) === JSON.stringify(query)) return cacheParse

    const payload = await getPayloadHMR({ config: configPromise })

    const data = await getData(payload, query, cacheParse)

    const response = {
      query: query,
      tags: cacheParse.tags,
      city: cacheParse.city,
      posts: data,
    }

    redis.set('accordions', JSON.stringify(response), 'EX', Number(process.env.CACHE_LIFETIME))

    return response
  }

  const payload = await getPayloadHMR({ config: configPromise })

  const [tags, city, data] = await Promise.all([
    getTags(payload),
    getCity(payload),
    getData(payload, query, false),
  ])

  const response = {
    query: query,
    tags: tags,
    city: city,
    posts: data,
  }

  // console.log(response)
  // console.log(JSON.stringify(response))

  redis.set('accordions', JSON.stringify(response), 'EX', Number(process.env.CACHE_LIFETIME))

  return response
}
