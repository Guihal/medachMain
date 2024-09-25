import Accordion from '../../Accordion'
import { LongCard } from '@/components/Cards/LongCard'
import { MiniCard } from '@/components/Cards/MiniCard'
import TagFilter from '@/app/TagFilter'
import { AccordionEmpty } from '../AccordionEmpty'
import { BigCard } from '@/components/Cards/BigCard'

export function Videos({ data }) {
  const nameBlock = 'video'
  // console.log(data)
  const posts = data.posts[nameBlock].data

  const arrays: any = {
    left: [],
    right: [],
  }

  const dataMaterial = {
    title: 'Видео',
    color: '#F81717',
    gradient: 'bg-linear-lightred-lightyellow',
    mtop: 'mt-24',
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

        {arrays.left.map((post) => (
          <BigCard key={post.id} post={post} nameBlock={nameBlock} />
        ))}
      </div>
      <div className="flex lg:items-start flex-col overflow-hidden">
        <p className="mt-16 lg:mt-24 lg-xl:mt-14 text-lg font-medium font-helvetica">
          Все статьи &#8594;
        </p>
        {arrays.right.map((post) => (
          <BigCard key={post.id} post={post} nameBlock={nameBlock} />
        ))}
      </div>
    </Accordion>
  )
}
