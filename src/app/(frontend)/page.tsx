import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import { Hero } from '@/pageTempates/HomePage/Hero'
import { Accordions } from '@/pageTempates/HomePage/Accordions'
import { accordionsData } from '@/utilities/accordionsData'

export default async function Page({ params: { slug = 'home' }, searchParams }) {
  console.time('start')

  const data = await accordionsData(searchParams)

  console.timeEnd('start')

  return (
    <>
      <Hero />
      <Accordions data={data} />
    </>
  )
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = draftMode()

  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    overrideAccess: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
