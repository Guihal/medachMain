import Accordion from '../../Accordion'
import { getPosts } from '@/utilities/getPosts'
import { BigCard } from '@/components/Cards/BigCard'
import { MiniCard } from '@/components/Cards/MiniCard'
import TagFilter from '@/app/TagFilter'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { AccordionEmpty } from '../AccordionEmpty'

export function LastMaterial({ data }) {
  const nameBlock = 'last'
  const posts = data.posts[nameBlock].data

  const dataMaterial = {
    title: 'Последние Материалы',
    color: '#F87171',
    gradient: 'bg-linear-red-yellow',
    mtop: 'mt-40',
  }

  if (posts.length === 0 || posts === undefined) {
    return <AccordionEmpty dataMaterial={dataMaterial} data={data} nameBlock={nameBlock} />
  }

  return (
    <Accordion data={dataMaterial}>
      <div className="flex flex-col ">
        <p className="mt-3 text-base text-[#9CA3AF]">
          Выбранные Тэги для данной категории материала
        </p>
        <TagFilter query={data.query} tags={data.tags} nameBlock={nameBlock} />
        <BigCard post={posts[0]} nameBlock={nameBlock} />
      </div>
      <div className="flex lg:items-start flex-col overflow-hidden">
        <p className="mt-16 lg:mt-24 lg-xl:mt-14 text-lg font-medium font-helvetica">
          Все последние материалы &#8594;
        </p>
        <div className="flex flex-col mt-7 gap-7">
          {posts.slice(1).map((post) => (
            <MiniCard key={Math.random()} post={post} nameBlock={nameBlock} />
          ))}
        </div>
      </div>
    </Accordion>
  )
}
