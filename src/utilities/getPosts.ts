interface PostFind {
  limit: number
  sort?: string
  depth?: number
  pagination?: boolean
  where?: object
}

export async function getPosts(
  payload,
  obj: PostFind = {
    depth: 5,
    limit: 10,
    sort: '-createdAt',
    pagination: false,
    where: {},
  },
  collections = ['videos', 'vacancy', 'news', 'articles', 'podcasts', 'infographics', 'events'],
) {
  return new Promise<any>(async (resolve: any) => {
    const getPromises = () => {
      const promises: any = []
      if (obj.hasOwnProperty('sort')) {
        if (obj.sort.includes('views')) {
          promises.push(
            payloadFindWithoutError(payload, {
              collection: 'views',
              sort: obj.sort,
              limit: obj.limit,
              depth: obj.depth,
              where: {
                and:
                  obj.where != undefined && JSON.stringify(obj.where) != '{}'
                    ? [{ or: getOr(collections, obj) }, obj.where]
                    : [{ or: getOr(collections, obj) }],
              },
            }),
          )

          return promises
        }
      }

      for (let i = 0; i < collections.length; i++) {
        const request = formatRequest(collections[i], obj)

        promises.push(payloadFindWithoutError(payload, request))
      }

      return promises
    }

    const postsArrays = await Promise.all(getPromises())

    const posts = formatPosts(postsArrays, obj)

    resolve(posts)
  })
}

function getOr(collections, obj) {
  let or: any = []

  const getOr = () => {
    for (let i = 0; i < collections.length; i++) {
      or.push({
        collectionItem: {
          relationTo: collections[i],
          value: obj.where,
        },
      })
    }
  }
  return or
}

function formatPosts(postsArrays, obj) {
  if (obj.hasOwnProperty('sort')) {
    if (obj.sort.includes('views')) {
      return sliceArray(sortPosts(remakeArray(postsArrays, obj), obj.sort), obj.limit)
    } else {
      return sliceArray(sortPosts(concatArrays(postsArrays), obj.sort), obj.limit)
    }
  }

  return sliceArray(concatArrays(postsArrays), obj.limit)
}

function remakeArray(postsArrays, obj) {
  const array: any = []

  postsArrays = concatArrays(postsArrays)

  for (let i = 0; i < postsArrays.length; i++) {
    const data: any = postsArrays[i].collectionItem.value
    data.slugCollection = postsArrays[i].collectionSlug
    array.push(data)
  }

  return array
}

// function concatArrays(postsArrays) {
//   let posts = []

//   for (let i = 0; i < postsArrays.length; i++) {
//     posts = posts.concat(postsArrays[i])
//   }

//   return posts
// }

function concatArrays(postsArrays) {
  let posts: any = []

  for (let i = 0; i < postsArrays.length; i++) {
    posts = [...posts, ...postsArrays[i]]
  }

  return posts
}

function sliceArray(array, limit) {
  if (array.length <= limit) return array

  array.splice(limit, array.length - limit)

  return array
}

function formatRequest(collection, obj) {
  return Object.assign(
    {
      collection: collection,
    },
    obj,
  )
}

function addCollectionAttr(collections, slugCollection) {
  for (let i = 0; i < collections.length; i++) {
    collections[i].slugCollection = slugCollection
  }

  return collections
}

export async function payloadFindWithoutError(payload, obj) {
  return new Promise<any>(async (resolve: any) => {
    try {
      const data = await payload.find(obj)

      resolve(addCollectionAttr(data.docs, obj.collection))
    } catch (error) {
      console.log(error)

      resolve([])
    }
  })
}

function sortPosts(posts, sort) {
  switch (sort) {
    case '-createdAt':
      posts.sort((a, b) => {
        return Date.parse(b.createdAt) - Date.parse(a.createdAt)
      })
      break
    case '+createdAt':
      posts.sort((a, b) => {
        return Date.parse(a.createdAt) - Date.parse(b.createdAt)
      })
      break
    case '-views':
      posts.sort((a, b) => {
        return b.views - a.views
      })
      break
    case '+views':
      posts.sort((a, b) => {
        return a.views - b.views
      })
      break
    default:
      break
  }

  return posts
}
