import { getPosts } from '../getPosts'

export function getData(payload, query, cache: any = false) {
  return new Promise<any>(async (resolve, reject) => {
    const names = [
      'top',
      'news',
      'info',
      'podcast',
      'last',
      'video',
      'vacancy',
      'event',
      'articles',
    ]
    const array: any = []

    // console.time('cache')

    if (cache && cache.posts != undefined) {
      for (const key of Object.keys(cache.posts)) {
        if (query[key] === undefined) {
          if (cache.posts[key].query === 'false') {
            getCacheResolve(cache.posts[key], key)
            continue
          }

          getPromiseByKey(key)
          continue
        }

        getPromiseByKey(key, JSON.parse(query[key]))
      }
    }

    for (const key of names) {
      console.log(names)
      if (query[key] != undefined) {
        getPromiseByKey(key, JSON.parse(query[key]), false)
      } else {
        getPromiseByKey(key, false, false)
      }
    }

    // console.timeEnd('cache')

    const data = await Promise.all(array)

    const response = {}

    data.forEach((ar) => {
      response[ar.key] = ar
    })

    resolve(response)
    return

    function getCacheResolve(cache, key) {
      // console.log(cache)
      array.push(
        new Promise<any>((resolve, reject) => {
          resolve(cache)
        }),
      )

      const index = names.indexOf(key)

      if (index !== -1) {
        names.splice(index, 1)
      }
    }

    function getPromiseByKey(key, queryData: any = false, del = true) {
      switch (key) {
        case 'top':
          array.push(
            addPromise(
              key,
              formatRequest(
                {
                  sort: '-views',
                  limit: 6,
                  depth: 5,
                  pagination: false,
                },
                queryData,
              ),
              queryData,
            ),
          )
          break
        case 'last':
          array.push(
            addPromise(
              key,
              formatRequest(
                {
                  sort: '-createdAt',
                  limit: 4,
                  depth: 5,
                  pagination: false,
                },
                queryData,
              ),
              queryData,
            ),
          )
          break
        case 'news':
          array.push(
            addPromise(
              key,
              formatRequest(
                {
                  sort: '-createdAt',
                  limit: 4,
                  depth: 5,
                  pagination: false,
                },
                queryData,
              ),
              queryData,
              ['news'],
            ),
          )
          break
        case 'info':
          array.push(
            addPromise(
              key,
              formatRequest(
                {
                  sort: '-views',
                  limit: 6,
                  depth: 5,
                  pagination: false,
                },
                queryData,
              ),
              queryData,
              ['infographics'],
            ),
          )
          break
        case 'articles':
          array.push(
            addPromise(
              key,
              formatRequest(
                {
                  sort: '-views',
                  limit: 2,
                  depth: 5,
                  pagination: false,
                },
                queryData,
              ),
              queryData,
              ['articles'],
            ),
          )
          break
        case 'podcast':
          array.push(
            addPromise(
              key,
              formatRequest(
                {
                  sort: '-views',
                  limit: 8,
                  depth: 5,
                  pagination: false,
                },
                queryData,
              ),
              queryData,
              ['podcasts'],
            ),
          )
          break
        case 'video':
          array.push(
            addPromise(
              key,
              formatRequest(
                {
                  sort: '-views',
                  limit: 6,
                  depth: 5,
                  pagination: false,
                },
                queryData,
              ),
              queryData,
              ['videos'],
            ),
          )
          break
        case 'vacancy':
          array.push(
            addPromise(
              key,
              formatRequest(
                {
                  sort: '-views',
                  limit: 2,
                  depth: 5,
                  pagination: false,
                },
                queryData,
              ),
              queryData,
              ['vacancy'],
            ),
          )
          break
        case 'event':
          array.push(
            addPromise(
              key,
              formatRequest(
                {
                  sort: '-views',
                  limit: 2,
                  depth: 5,
                  pagination: false,
                },
                queryData,
              ),
              queryData,
              ['events'],
            ),
          )
          break
      }

      if (!del) return

      const index = names.indexOf(key)

      console.log(`${index} ${key}`)

      if (index !== -1) {
        names.splice(index, 1)
      }
    }

    function addPromise(key, obj, queryData, collection: any = false) {
      return new Promise<any>(async (resolve, reject) => {
        const data = collection
          ? await getPosts(payload, obj, collection)
          : await getPosts(payload, obj)

        resolve({
          query: JSON.stringify(queryData),
          key: key,
          data: data,
        })
      })
    }
  })
}

function formatRequest(request, query, rel = 'tags', where = {}) {
  if (!query) {
    return request
  }

  // console.log(query)

  const obj: any = {
    where: {
      and: [where],
    },
  }

  if (query) {
    switch (rel) {
      case 'tags':
        query.forEach((el) => {
          obj.where.and.push({
            tags: {
              equals: el,
            },
          })
        })
        break

      default:
        query.forEach((el) => {
          obj.where.and.push({
            city: {
              equals: el,
            },
          })
        })
        break
    }
  }

  const total = Object.assign(request, obj)

  return total
}
