'use client'
import Logo from '../Svg/Logo'
import ThemeSwitcherIcon from '../Svg/ThemeSwitcherIcon'
import { hideMenu } from './hideMenu'

export default function BurgerMenu() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[92px] grid grid-cols-3 justify-between items-center">
        <div className="">
          <button
            className="btn-reset burger burger--active burger-menu"
            aria-label="Открыть меню"
            aria-expanded="false"
            data-burger
            onClick={hideMenu}
          >
            <span className="burger__line"></span>
          </button>
        </div>
        <div className="md:flex justify-center">
          <Logo classes="" />
        </div>
        <div className="hidden md:flex items-center cursor-pointer justify-end ">
          <button className="btn-reset btn-search" data-graph-path="search">
            <svg
              className="w-6 h-6 bg-transparent"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8616 21.7402C9.91504 21.7402 5.90507 17.7302 5.90507 12.7837C5.90507 7.83712 9.91504 3.82715 14.8616 3.82715C19.8081 3.82715 23.8181 7.83712 23.8181 12.7837C23.8181 17.7302 19.8081 21.7402 14.8616 21.7402Z"
                stroke="#323232"
                strokeWidth="2.23913"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.66602 23.9805L8.53613 19.1104"
                stroke="#323232"
                strokeWidth="2.23913"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="themeSwitcher">
            <ThemeSwitcherIcon classes="w-6 h-6 bg-transparent ml-16 cursor-pointer" />
          </button>

          {/* <div className="relative">
            <button className="w-8 h-8 bg-[#E5E5E5] dark:bg-white p-1 border border-[#565656] dark:border-[##E5E5E5] rounded-md cursor-pointer profile-page flex-center relative userBtn">
              <div className="absolute -top-2 -right-1 w-4 h-4 bg-[#DE532D] border-2 border-[#FAFAFA] rounded-full"></div>
              <svg className="w-5 h-5">
                <use href="../img/sprite.svg#user"></use>
              </svg>
            </button>
            <div className="absolute w-[200px] min-h-[100px] bg-[#323232]/90 top-12 left-[5px] xxs:left-auto xxs:right-[5px] rounded-br-lg rounded-bl-lg rounded-tl-lg z-10 flex-col items-center role hidden shadow-lg">
              <button className="w-11/12 text-white/60 focus:font-helvetica focus:text-white text-base font-normal focus:font-semibold pt-5 flex items-start px-1 pb-2 border-b-[1px] border-b-black">
                Пользователь
              </button>
              <button className="w-11/12 text-white/60 focus:text-white text-base font-normal focus:font-helvetica focus:font-semibold pt-2 flex items-start px-1 mb-5">
                Администратор
              </button>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="flex md:hidden items-center cursor-pointer">
        <button className="btn-reset btn-search" data-graph-path="search">
          <svg className="w-6 h-6 bg-transparent">
            <use href="../img/sprite.svg#search-light"></use>
          </svg>
        </button>
        <button className="themeSwitcher mx-16">
          <svg className="w-6 h-6 bg-transparent cursor-pointer">
            <use href="../img/sprite.svg#light-mode-light"></use>
          </svg>
        </button>

        <div className="relative">
          <button className="w-8 h-8 bg-[#E5E5E5] dark:bg-white p-1 border border-[#565656] dark:border-[##E5E5E5] rounded-md cursor-pointer profile-page flex-center relative userBtn">
            <div className="absolute -top-2 -right-1 w-4 h-4 bg-[#DE532D] border-2 border-[#FAFAFA] rounded-full"></div>
            <svg className="w-5 h-5">
              <use href="../img/sprite.svg#user"></use>
            </svg>
          </button>
          <div className="absolute w-[200px] min-h-[100px] bg-[#323232]/90 top-12 -left-40 xxs:left-auto xxs:right-[5px] rounded-br-lg rounded-bl-lg rounded-tl-lg z-10 flex-col items-center role hidden shadow-lg">
            <button className="w-11/12 text-white/60 focus:font-helvetica focus:text-white text-base font-normal focus:font-semibold pt-5 flex items-start px-1 pb-2 border-b-[1px] border-b-black">
              Пользователь
            </button>
            <button className="w-11/12 text-white/60 focus:text-white text-base font-normal focus:font-helvetica focus:font-semibold pt-2 flex items-start px-1 mb-5">
              Администратор
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}
