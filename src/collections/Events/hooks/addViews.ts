import { addViewsInCollection } from '@/utilities/addViewsInCollection'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { CollectionAfterChangeHook } from 'payload'
import configPromise from '@payload-config'
import { getTags } from '@/utilities/getTags'

export const addViews: CollectionAfterChangeHook = async ({
  doc, // full document data
  req, // full express request
  previousDoc, // document data before updating the collection
  operation, // name of the operation ie. 'create', 'update'
}) => {
  const payload = await getPayloadHMR({ config: configPromise })

  try {
    const result = await payload.find({
      collection: 'views',
      limit: 1,
      pagination: false,
      depth: 2,
      where: {
        collectionSlug: {
          equals: 'events',
        },
        collectionItemId: {
          equals: doc.id,
        },
      },
    })

    if (result.docs.length === 0) {
      addViewsInCollection(payload, doc, 'events')
      return doc
    }

    if (doc.hasOwnProperty('tags')) return
    if (doc.tags.length === 0) return

    const resultUpdate = await payload.update({
      collection: 'views',
      id: doc.id,
      data: {
        tags: getTags(doc),
      },
    })

    console.log(resultUpdate)
  } catch (error) {
    addViewsInCollection(payload, doc, 'events')
  }

  return doc
}
