import TagFilter from '@/app/TagFilter'
import Accordion from '../Accordion'

export function AccordionEmpty({ dataMaterial, data, nameBlock }) {
  return (
    <Accordion data={dataMaterial}>
      <div className="flex flex-col ">
        <p className="mt-3 text-base text-[#9CA3AF]">
          Выбранные Тэги для данной категории материала
        </p>
        <TagFilter query={data.query} tags={data.tags} nameBlock={nameBlock} />
      </div>
      Тут ничего нет :(
    </Accordion>
  )
}
