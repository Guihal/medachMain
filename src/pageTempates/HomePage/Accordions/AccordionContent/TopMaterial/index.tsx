import Accordion from '../../Accordion'
import { LongCard } from '@/components/Cards/LongCard'
import { MiniCard } from '@/components/Cards/MiniCard'
import TagFilter from '@/app/TagFilter'
import { AccordionEmpty } from '../AccordionEmpty'

export function TopMaterial({ data }) {
  const nameBlock = 'top'
  // console.log(data)
  const posts = data.posts[nameBlock].data

  const arrays: any = {
    left: [],
    right: [],
    singleLeft: [],
    singleRight: [],
  }

  for (let i = 0; i < posts.length; i++) {
    if (i <= 1) {
      arrays.left.push(posts[i])
    } else if (i <= 3) {
      arrays.right.push(posts[i])
    } else if (i == 4) {
      arrays.singleLeft.push(posts[i])
    } else {
      arrays.singleRight.push(posts[i])
    }
  }

  const dataMaterial = {
    title: 'Топ-материалы',
    color: '#FDBA74',
    gradient: 'bg-linear-yellow-blue',
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
        <div className="row-wrapper">
          {arrays.left.map((post) => (
            <LongCard key={post.id} post={post} nameBlock={nameBlock} />
          ))}
        </div>
        {arrays.singleLeft.map((post) => (
          <MiniCard key={post.id} post={post} nameBlock={nameBlock} />
        ))}
      </div>
      <div className="flex lg:items-start flex-col overflow-hidden">
        <p className="mt-16 lg:mt-24 lg-xl:mt-14 text-lg font-medium font-helvetica">
          Все топ-материалы &#8594;
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
