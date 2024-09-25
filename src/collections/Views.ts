import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { tagsField } from '../fields/'

const Views: CollectionConfig = {
  slug: 'views',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'views',
  },
  fields: [
    {
      name: 'collectionItem',
      type: 'relationship',
      required: true,
      index: true,
      unique: true,
      relationTo: ['articles', 'events', 'infographics', 'news', 'podcasts', 'vacancy', 'videos'],
    },
    {
      name: 'collectionItemId',
      type: 'text',
      required: true,
      index: true,
      unique: true,
    },
    {
      name: 'collectionSlug',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'views',
      type: 'number',
      required: true,
      index: true,
    },
    tagsField,
  ],
}

export default Views
