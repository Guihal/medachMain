import Image from 'next/image'
import { Category } from './utils/Category'
import { CardInfo } from './utils/CardInfo'
import Link from 'next/link'

interface cardMini {
  post: any
  nameBlock?: string
}

export function LongCard({ post: post, nameBlock }: cardMini) {
  const url = `/${post.slugCollection}/${post.slug}`

  return (
    <div className="card--long">
      <Link href={url}>
        <Image
          width={276}
          height={196}
          src={post.image.url}
          className="rounded-lg"
          alt={post.image.alt}
          loading="lazy"
        />
      </Link>
      <div className="absolute left-1 top-1 flex flex-col gap-1">
        <Category post={post} />
      </div>
      <div className="flex flex-col">
        <Link href={url}>
          <p className="font-semibold card_title font-golos text-xl text-[#323232]">{post.title}</p>
        </Link>
        <p className="text-[#52525B] card_descr text-lg font-helvetica">{post.description}</p>
        <CardInfo
          post={post}
          nameBlock={nameBlock}
          className="text-[#9799A5] text-[14px] xl:text-[17px] font-golos font-normal leading-[22px]"
          spanClassName="flex items-center text-[12px] flex-wrap  xl:text-[16px] font-inter"
        />
      </div>
    </div>
  )
}
