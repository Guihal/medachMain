import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { slugField } from '../../fields/slug'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateVacancy } from './hooks/revalidateVacancy'
import { addViews } from './hooks/addViews'
import {
  descriptionField,
  editorsField,
  imageField,
  tagsField,
  titleField,
  words,
  viewsField,
} from '../../fields'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Vacancy: CollectionConfig = {
  slug: 'vacancy',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'image', 'slug', 'updatedAt', 'description'],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          path: `/vacancy/${typeof data?.slug === 'string' ? data.slug : ''}`,
        })
        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: (doc) =>
      generatePreviewPath({ path: `/vacancy/${typeof doc?.slug === 'string' ? doc.slug : ''}` }),
    useAsTitle: 'title',
  },
  fields: [
    titleField,
    descriptionField,
    imageField,
    tagsField,
    editorsField,
    words,
    viewsField,
    {
      name: 'salary',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'city',
      type: 'relationship',
      required: true,
      relationTo: ['city'],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'experience',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'categories',
            },
          ],
          label: 'Meta',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    // {
    //   name: 'populatedAuthors',
    //   type: 'array',
    //   access: {
    //     update: () => false,
    //   },
    //   admin: {
    //     disabled: true,
    //     readOnly: true,
    //   },
    //   fields: [
    //     {
    //       name: 'id',
    //       type: 'text',
    //     },
    //     {
    //       name: 'name',
    //       type: 'text',
    //     },
    //   ],
    // },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateVacancy, addViews],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
