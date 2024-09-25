'use client'

import { throttle } from '@/utilities/throttle'

export function hideTagsOverflow(cardsContainer, showBtn) {
  if (cardsContainer.classList.contains('init')) return

  cardsContainer.classList.add('init')

  const gap = getGap(cardsContainer)
  let tags = cardsContainer.querySelectorAll('.tag-btn')

  function changeStateTags() {
    tags = cardsContainer.querySelectorAll('.tag-btn')

    if (showBtn.classList.contains('unshow')) return

    const cardsContainerWidth = getWidth(cardsContainer) - 10
    let pass = true
    let counter = 0
    let width = getWidth(showBtn)

    for (let i = 0; i < tags.length; i++) {
      if (pass) {
        width += getWidth(tags[i]) + gap
      }

      if (width >= cardsContainerWidth && pass) {
        pass = false

        if (width - getWidth(showBtn) - gap < cardsContainerWidth && i == tags.length - 1) {
          pass = true
        }
      }

      if (!pass) {
        counter++
        tags[i].classList.add('unshow')
      } else {
        tags[i].classList.remove('unshow')
      }
    }

    if (pass) {
      showBtn.classList.add('superhide')
    } else {
      showBtn.classList.remove('superhide')
      showBtn.textContent = `+${counter}`
    }
  }

  changeStateTags()

  window.addEventListener('resize', throttle(changeStateTags, 200))

  showBtn.addEventListener('click', () => {
    tags = cardsContainer.querySelectorAll('.tag-btn')

    showBtn.classList.add('unshow')

    for (let i = 0; i < tags.length; i++) {
      tags[i].classList.remove('unshow')
    }
  })

  function getWidth(el) {
    return el.getBoundingClientRect().width
  }
}

function getGap(el) {
  const cardsContainerGapString = window.getComputedStyle(el).getPropertyValue('gap')

  return cardsContainerGapString.includes('px')
    ? Number(cardsContainerGapString.replace('px', ''))
    : 0
}
