export function show(el, tr, dspl) {
  el.style.transition = 'all ' + tr + 'ms ease '
  el.style.cssText += 'display: ' + dspl + ' !important'
  setTimeout(() => {
    el.style.opacity = 1
  }, 50)
}

export function hide(el, tr) {
  el.style.transition = 'all ' + tr + 'ms ease '
  el.style.opacity = 0
  setTimeout(() => {
    el.style.cssText += 'display: none !important'
  }, tr)
}
