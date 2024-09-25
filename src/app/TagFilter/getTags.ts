export function getTags(tags, nameBlock, query) {
  if (!query.hasOwnProperty(nameBlock)) {
    return [[], tags]
  }

  const chosenQuery = JSON.parse(query[nameBlock])
  const chosen: any = []
  const unChosen: any = []

  tags.sort((a, b) => a.length - b.length)

  tags.forEach((tag) => {
    if (chosenQuery.includes(tag.id)) {
      chosen.push(tag)
    } else {
      unChosen.push(tag)
    }
  })

  return [chosen, unChosen]
}
