import Link from 'next/link'
import Image from 'next/image'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { heroData } from '@/utilities/heroData'

export async function AdvertisementCard() {
  const data = await heroData()
  const result = data.ad

  return (
    <Link href="/" className="grid-card grid-card-2">
      <Image
        className="h-full w-full absolute z-0"
        src={result.url}
        width={292}
        height={292}
        alt={result.alt}
        loading="lazy"
      />
      <div className="h-full w-full absolute z-10 gradient"></div>
      <div className="z-20 w-full h-full text-right pr-3 pt-2 relative">Реклама</div>
    </Link>
  )
}
