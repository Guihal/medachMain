import { AdminLink } from './AdminLink'
import ThemeSwitcherIcon from '../../Svg/ThemeSwitcherIcon'

export function HeaderBtns() {
  return (
    <div className="hidden md:flex items-center cursor-pointer gap-16">
      <button className="btn-reset btn-search header-search" data-graph-path="search">
        <svg
          className="w-6 h-6 bg-transparent dark:w-8 dark:h-8 dark:bg-white dark:p-1 dark:dark:border-[##E5E5E5] dark:rounded-md"
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
        <ThemeSwitcherIcon classes="w-6 h-6 bg-transparent cursor-pointer dark:w-8 dark:h-8 dark:bg-white dark:p-1 dark:dark:border-[##E5E5E5] dark:rounded-md" />
      </button>
      <AdminLink />
    </div>
  )
}
