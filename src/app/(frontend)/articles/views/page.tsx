import { addViewsInCollection } from '@/utilities/addViewsInCollection'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

const handler = async ({ params, searchParams }) => {
  const payload = await getPayloadHMR({ config: configPromise })

  addViewsInCollection(payload, { id: searchParams.id }, 'articles')
}

export default handler
