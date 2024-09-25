import { getTags } from './getTags'

export async function addViewsInCollection(payload, doc, collection: any, update = true) {
  new Promise<any>(async (resolve, reject) => {
    try {
      const result = await payload.find({
        collection: 'views',
        limit: 1,
        pagination: false,
        depth: 2,
        where: {
          collectionSlug: {
            equals: collection,
          },
          collectionItemId: {
            equals: doc.id,
          },
        },
      })

      if (result.docs.length === 0) {
        createViews()
        return
      }

      if (update) {
        updateViews(result.docs[0])
      }
    } catch (error) {
      createViews()
    }

    async function createViews() {
      console.log(doc)

      const result = await payload.create(getData())

      checkContainsViewsInCollection(result)
    }

    async function updateViews(view) {
      const result = await payload.update({
        collection: 'views',
        id: view.id,
        data: {
          views: view.views + 1,
        },
      })

      resolve(1)

      checkContainsViewsInCollection(result)
    }

    async function checkContainsViewsInCollection(view) {
      if (doc.hasOwnProperty('views')) {
        if (doc.views != null) return
      }

      const addViews = await payload.update({
        collection: collection,
        id: doc.id,
        data: {
          views: view.id,
        },
      })
    }

    function getData() {
      return {
        collection: 'views',
        data: {
          collectionItem: {
            relationTo: collection,
            value: doc.id,
          },
          collectionSlug: collection,
          collectionItemId: doc.id,
          views: 1,
          tags: getTags(doc),
        },
      }
    }
  })
}
