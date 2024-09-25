export function formatDataForCard(dateString) {
  const date = new Date(dateString).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const dateSplit = date.split(' ')

  return `${dateSplit[0]} ${dateSplit[1]}`
}
