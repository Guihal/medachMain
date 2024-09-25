import Image from 'next/image'
import { Category } from './utils/Category'
import { CardInfo } from './utils/CardInfo'
import Link from 'next/link'
interface cardBig {
  post: any
  nameBlock?: string
}

export function BigCard({ post, nameBlock }: cardBig) {
  const url = `/${post.slugCollection}/${post.slug}`
  return (
    <div className="card--big">
      <Link href={url}>
        <Image width={624} height={364} src={post.image.url} alt={post.image.alt} loading="lazy" />
        <div className="absolute left-2 top-2 flex gap-[6px]">
          <Category post={post} />
        </div>
        <h3 className="font-semibold text-[27px] text-[#323232] font-golos mt-5 leading-[32px]">
          {post.title}
        </h3>
        <p className="text-[#52525B] text-lg mt-3">{post.description}</p>
      </Link>
      <CardInfo post={post} nameBlock={nameBlock} />
    </div>
  )
}
