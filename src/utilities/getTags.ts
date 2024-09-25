export function getTags(doc) {
  const array: any = []

  if (!doc.hasOwnProperty('tags')) return {}
  if (doc.tags.length == 0) return {}

  doc.tags.forEach((tag) => {
    array.push(tag.id)
  })

  return array
}
