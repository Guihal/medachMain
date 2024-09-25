import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Article } from '../../../../payload-types'

export const revalidateArticle: CollectionAfterChangeHook<Article> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/article/${doc.slug}`

    payload.logger.info(`Revalidating post at path: ${path}`)

    revalidatePath(path)
  }

  // If the post was previously published, we need to revalidate the old path
  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/article/${previousDoc.slug}`

    payload.logger.info(`Revalidating old post at path: ${oldPath}`)

    revalidatePath(oldPath)
  }

  return doc
}
