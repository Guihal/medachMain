import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Infographic } from '../../../../payload-types'

export const revalidateInfographics: CollectionAfterChangeHook<Infographic> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/infographic/${doc.slug}`

    payload.logger.info(`Revalidating post at path: ${path}`)

    revalidatePath(path)
  }

  // If the post was previously published, we need to revalidate the old path
  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/infographic/${previousDoc.slug}`

    payload.logger.info(`Revalidating old post at path: ${oldPath}`)

    revalidatePath(oldPath)
  }

  return doc
}
