import Link from 'next/link'
import Image from 'next/image'
import { formatDataForCard } from './formatDataForCard'
import { heroData } from '@/utilities/heroData'

export async function ArticlesCard() {
  const data = await heroData()
  const result = data.articles

  const [date, title, imageUrl, alt, url] = [
    formatDataForCard(result[0].createdAt),
    result[0].title,
    result[0].image.url,
    result[0].image.alt,
    `/${result[0].slugCollection}/${result[0].slug}`,
  ]

  return (
    <Link href={url} className="grid-card grid-card-3">
      <div className="w-full h-full relative group flex flex-col justify-between card-bg">
        <Image
          className="h-full w-full absolute z-0"
          src={imageUrl}
          width={292}
          height={292}
          alt={alt}
          loading="lazy"
        />
        <div className="h-full w-full absolute z-10 gradient"></div>
        <div className="z-20 w-full h-full opacity-0 group-hover:opacity-100 absolute bg-radial-gradient-pink transition-all duration-500 rounded-lg"></div>
        <h2 className="z-20 ml-2 mt-[10px] flex items-center text-white group-hover:text-[#F9A8D4] transition-all duration-500 text-sm font-semibold">
          <div className="w-5 h-5 rounded-full bg-[#F9A8D4] mr-3"></div>
          Статьи
        </h2>
        <div className="z-20 mx-10 mb-6 max-w-60 text-base font-medium">
          <span className="line-clamp-4 2xl:line-clamp-none">{title}</span>
          <p className="mt-2 font-normal text-white/60 text-sm">{date}</p>
        </div>
      </div>
    </Link>
  )
}
