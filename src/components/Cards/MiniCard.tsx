import Image from 'next/image'
import { Category } from './utils/Category'
import { CardInfo } from './utils/CardInfo'
import Link from 'next/link'

interface cardMini {
  post: any
  nameBlock?: string
}

export function MiniCard({ post: post, nameBlock }: cardMini) {
  const url = `/${post.slugCollection}/${post.slug}`

  return (
    <div className="card">
      <Link href={url}>
        <Image
          width={200}
          height={160}
          src={post.image.url}
          className="rounded-lg"
          alt={post.image.alt}
          loading="lazy"
        />
      </Link>
      <div className="absolute left-1 top-1 flex flex-col gap-1">
        <Category post={post} />
      </div>
      <div className="flex flex-col ml-3">
        <Link href={url}>
          <p className="card_title font-golos text-[#323232] opacity-70 font-medium text-lg line-clamp-3 leading-[23px]">
            {post.title}
          </p>
        </Link>
        <CardInfo
          post={post}
          nameBlock={nameBlock}
          className="text-[#9799A5] text-[14px] xl:text-[17px] font-golos flex-wrap font-normal leading-[22px]"
          spanClassName="flex items-center text-[12px] xl:text-[16px] font-inter"
        />
      </div>
    </div>
  )
}
