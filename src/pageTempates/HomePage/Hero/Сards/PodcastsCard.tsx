import Link from 'next/link'
import Image from 'next/image'
import { formatDataForCard } from './formatDataForCard'
import { getPosts } from '@/utilities/getPosts'
import { heroData } from '@/utilities/heroData'

export async function PodcastsCard() {
  const data = await heroData()
  const result = data.podcast

  const [date, title, imageUrl, alt, url] = [
    formatDataForCard(result[0].createdAt),
    result[0].title,
    result[0].image.url,
    result[0].image.alt,
    `/${result[0].slugCollection}/${result[0].slug}`,
  ]

  return (
    <Link href={url} className="grid-card">
      <div className="w-full h-full relative group flex flex-col card-bg flex items-center justify-center">
        <Image
          className="h-full w-full absolute z-0"
          src={imageUrl}
          width={292}
          height={141}
          alt={alt}
          loading="lazy"
        />
        <div className="h-full w-full absolute z-10 gradient"></div>
        <div className="z-20 w-full h-full opacity-0 group-hover:opacity-100 absolute bg-radial-gradient-podcast transition-all duration-500 rounded-lg"></div>
        <h2 className="z-20 flex flex-col items-center text-white group-hover:text-[#FDE68A] transition-all duration-500 text-sm font-semibold">
          <div className="flex-center text-sm font-semibold">
            <div className="w-5 h-5 rounded-full bg-[#FDE68A] mr-3"></div>
            Подкасты
          </div>
          <span className="z-20 mt-3 text-lg">
            <svg
              className="group-hover:fill-[#FDE68A]"
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.491699 21V0L15.9917 10.5L0.491699 21Z" fill="currentColor" />
            </svg>
          </span>
        </h2>
      </div>
    </Link>
  )
}
