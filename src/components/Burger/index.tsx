import BurgerMenu from './BurgerMenu'

export default function BurgerBody() {
  return (
    <div
      id="navigation"
      className="bg-[#242424] hidden h-screen fixed w-full overflow-hidden opacity-0 transition-all duration-500"
    >
      <BurgerMenu />
      <div className="text-white pt-4 md:pt-0 font-medium">
        <ul className="grid justify-items-center grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-3 3xl:flex 3xl:flex-col mt-10 3xl:mt-50">
          <li className="xl:mb-8 cursor-pointer transition-all duration-300 hover:text-[#F87171] text-center 3xl:text-left menuLink">
            <a href="#last_material">Последние материалы</a>
          </li>
          <li className="xl:mb-8 cursor-pointer transition-all duration-300 hover:text-[#FDBA74] menuLink">
            <a href="#top_material">Топ-Материалы</a>
          </li>
          <li className="xl:mb-8 cursor-pointer transition-all duration-300 hover:text-[#BFDBFE] menuLink">
            <a href="#news">Новости</a>
          </li>
          <li className="xl:mb-8 cursor-pointer transition-all duration-300 hover:text-[#F9A8D4] menuLink">
            <a href="#articles">Статьи</a>
          </li>
          <li className="xl:mb-8 cursor-pointer transition-all duration-300 hover:text-[#F81717] menuLink">
            <a href="#video">Видео</a>
          </li>
          <li className="xl:mb-8 cursor-pointer transition-all duration-300 hover:text-[#FFB800] menuLink">
            <a href="#audio">Подкасты</a>
          </li>
          <li className="xl:mb-8 cursor-pointer transition-all duration-300 hover:text-[#77C845] menuLink">
            <a href="#info">Инфографика</a>
          </li>
          <li className="xl:mb-8 cursor-pointer transition-all duration-300 hover:text-[#008FA0] menuLink">
            <a href="#jobs">Вакансии</a>
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-[#A78BFA] menuLink">
            <a href="#events">Мероприятия</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
