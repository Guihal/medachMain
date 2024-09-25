import { getPosts } from './getPosts'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { redis } from './cacheRedis'
import { cache } from 'react'

export const heroData = cache(async () => {
  const cache = await redis.get('hero')

  // const cache = null

  if (cache !== null && cache !== '[object Object]') {
    const cacheParse = JSON.parse(cache)

    // let pass = true
    // for (const [key, value] of Object.keys(cacheParse)) {
    //   if (value.length === 0 && key != 'ad') {
    //     pass = false
    //   }
    // }

    // if (pass) {
    //   return cacheParse
    // }

    return cacheParse
  }

  const data = await getData()

  redis.set('hero', JSON.stringify(data), 'EX', Number(process.env.CACHE_LIFETIME))

  return data
})

async function getData() {
  const payload = await getPayloadHMR({ config: configPromise })

  const [last, editors, top, news, info, ad, articles, podcast, video, vacancy, event] =
    await Promise.all([
      getPosts(payload, {
        limit: 1,
        sort: '-createdAt',
        pagination: false,
      }),
      getPosts(payload, {
        limit: 1,
        sort: '-createdAt',
        pagination: false,
        where: {
          editorsChoice: {
            equals: true,
          },
        },
      }),
      getPosts(payload, {
        sort: '-views',
        limit: 1,
        pagination: false,
      }),
      getPosts(
        payload,
        {
          pagination: false,
          limit: 1,
          sort: '-createdAt',
        },
        ['news'],
      ),
      getPosts(
        payload,
        {
          pagination: false,
          limit: 1,
          sort: '-createdAt',
        },
        ['infographics'],
      ),
      payload.findByID({
        collection: 'media',
        id: '66e99d772aa8c15db2b577d6',
      }),
      getPosts(
        payload,
        {
          pagination: false,
          limit: 1,
          sort: '-createdAt',
        },
        ['articles'],
      ),
      getPosts(
        payload,
        {
          pagination: false,
          limit: 1,
          sort: '-createdAt',
        },
        ['podcasts'],
      ),
      getPosts(
        payload,
        {
          pagination: false,
          limit: 1,
          sort: '-createdAt',
        },
        ['videos'],
      ),
      getPosts(
        payload,
        {
          pagination: false,
          limit: 1,
          sort: '-createdAt',
        },
        ['vacancy'],
      ),
      getPosts(
        payload,
        {
          pagination: false,
          limit: 1,
          sort: '-createdAt',
        },
        ['events'],
      ),
    ])

  return {
    last: last,
    editors: editors,
    top: top,
    news: news,
    info: info,
    ad: ad,
    articles: articles,
    podcast: podcast,
    video: video,
    vacancy: vacancy,
    event: event,
  }
}
