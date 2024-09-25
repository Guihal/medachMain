export function showTooltip(tooltip, state, setState) {
  const tooltipPosition = tooltip.getBoundingClientRect()

  if (tooltipPosition.left <= 0) {
    tooltip.classList.remove('right')
    tooltip.classList.add('left')
  }

  if (tooltipPosition.right >= window.innerWidth) {
    tooltip.classList.add('right')
    tooltip.classList.remove('left')
  }

  setState(!state)
}
