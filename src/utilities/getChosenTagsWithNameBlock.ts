export function getChosenTagsWithNameBlock(nameBlock, query, tags) {
  if (!query.hasOwnProperty(nameBlock)) return []

  const chosen = JSON.stringify(query[nameBlock])
}
