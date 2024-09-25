export function queryHomePage(query, tagId, nameBlock) {
  if (!query.hasOwnProperty(nameBlock)) {
    query[nameBlock] = JSON.stringify([tagId])

    return query
  }

  const array = JSON.parse(query[nameBlock])
  const index = array.indexOf(tagId)

  if (index === -1) {
    array.push(tagId)
  } else {
    array.splice(index, 1)
  }

  if (array.length === 0) {
    delete query[nameBlock]
  } else {
    query[nameBlock] = JSON.stringify(array)
  }

  return query
}
