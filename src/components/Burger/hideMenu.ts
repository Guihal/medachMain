import { show } from '../../utilities/custom-functions'
import { hide } from '../../utilities/custom-functions'

export function hideMenu() {
  const nav = document.getElementById('navigation')
  const main = document.getElementById('main')
  const header = document.querySelector('header')

  if (!nav || !main || !header) return
  const mainOpenStyles =
    'dark:bg-[#1D1D1D] bg-white transition-all duration-500 absolute top-96 md:top-64 xl:top-80 3xl:top-32 z-50 right-0 3xl:right-5 w-full 3xl:w-fit opacity-100'
  const mainDefaultStyles = 'dark:bg-[#1D1D1D] bg-white transition-all duration-500 opacity-100'

  if (!main.classList.contains('open-burger')) {
    hide(header, 200)
    hide(main, 200)

    document.body.style.overflow = 'hidden'

    setTimeout(() => {
      main.classList.add('open-burger')
      show(nav, 200, 'block')
      show(main, 200, 'block')
    }, 200)
  } else {
    hide(nav, 200)
    hide(main, 200)

    document.body.style.overflow = 'auto'

    setTimeout(() => {
      main.classList.remove('open-burger')
      show(header, 200, 'block')
      show(main, 200, 'block')
    }, 200)
  }
}
