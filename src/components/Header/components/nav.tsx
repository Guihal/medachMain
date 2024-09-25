'use client'

// import { MenuContext } from '../../../context/navState'
// import { useContext } from 'react'
import { showMenu } from './showMenu'

export function Nav() {
  return (
    <nav className="flex items-center justify-start">
      <button className="btn-reset burger text-white" onClick={showMenu} data-burger>
        <span className="burger__line"></span>
      </button>
      <ul className="ml-5 hidden lg:flex text-[19px] nav__menu">
        <li className="mr-5">
          <a href="#news" className="hover:text-black transition-all duration-500 hover:underline">
            Новости
          </a>
        </li>
        <li className="mr-5">
          <a
            href="#articles"
            className="hover:text-black transition-all duration-500 hover:underline"
          >
            Статьи
          </a>
        </li>
        <li className="mr-5">
          <a
            href="#events"
            className="hover:text-black transition-all duration-500 hover:underline"
          >
            Мероприятия
          </a>
        </li>
        <li className="">
          <a href="#jobs" className="hover:text-black transition-all duration-500 hover:underline">
            Вакансии
          </a>
        </li>
      </ul>
    </nav>
  )
}
