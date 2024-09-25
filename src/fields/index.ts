import type { Field } from 'payload'

export const titleField: Field = {
  name: 'title',
  type: 'text',
  required: true,
  admin: {
    position: 'sidebar',
  },
}

export const descriptionField: Field = {
  name: 'description',
  type: 'textarea',
  required: true,
  admin: {
    position: 'sidebar',
  },
}

export const viewsField: Field = {
  name: 'views',
  type: 'relationship',
  relationTo: 'views',
  admin: {
    position: 'sidebar',
  },
}

// export const viewsField: Field = {
//   name: 'views',
//   type: 'number',

//   admin: {
//     position: 'sidebar',
//   },
// }

export const words: Field = {
  name: 'words',
  type: 'number',
  required: true,
  admin: {
    position: 'sidebar',
  },
}

export const imageField: Field = {
  name: 'image',
  type: 'upload',
  required: true,
  relationTo: 'media',
  filterOptions: {
    mimeType: { contains: 'image' },
  },
  admin: {
    position: 'sidebar',
  },
}

export const tagsField: Field = {
  name: 'tags',
  type: 'relationship',
  relationTo: 'tags',
  index: true,
  hasMany: true,
  admin: {
    position: 'sidebar',
  },
}

export const editorsField: Field = {
  name: 'editorsChoice',
  type: 'checkbox',
  label: 'Выбор редакции',
  admin: {
    position: 'sidebar',
  },
}
