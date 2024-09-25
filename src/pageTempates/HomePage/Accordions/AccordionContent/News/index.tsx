import Accordion from '../../Accordion'
import { LongCard } from '@/components/Cards/LongCard'
import { MiniCard } from '@/components/Cards/MiniCard'
import TagFilter from '@/app/TagFilter'
import { AccordionEmpty } from '../AccordionEmpty'
import { BigCard } from '@/components/Cards/BigCard'

export function News({ data }) {
  const nameBlock = 'news'
  // console.log(data)
  const posts = data.posts[nameBlock].data

  const arrays: any = {
    left: [],
    right: [],
    singleRight: [],
  }

  for (let i = 0; i < posts.length; i++) {
    if (i === 0) {
      arrays.left.push(posts[i])
    } else if (i <= 2) {
      arrays.right.push(posts[i])
    } else {
      arrays.singleRight.push(posts[i])
    }
  }

  const dataMaterial = {
    title: 'Новости',
    color: '#BFDBFE',
    gradient: 'bg-linear-blue-pink',
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
          Все новости &#8594;
        </p>
        <div className="row-wrapper">
          {arrays.right.map((post) => (
            <LongCard key={post.id} post={post} nameBlock={nameBlock} />
          ))}
        </div>
        {arrays.singleRight.map((post) => (
          <MiniCard key={post.id} post={post} nameBlock={nameBlock} />
        ))}
      </div>
    </Accordion>
  )
}
