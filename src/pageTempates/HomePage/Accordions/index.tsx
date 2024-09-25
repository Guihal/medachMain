import { getPosts } from '@/utilities/getPosts'
import dynamic from 'next/dynamic'
import { LastMaterial } from './AccordionContent/LastMaterial'
import { TopMaterial } from './AccordionContent/TopMaterial'
import { News } from './AccordionContent/News'

export async function Accordions({ data }) {
  return (
    <>
      <LastMaterial data={data} />
      <TopMaterial data={data} />
      <News data={data} />
    </>
  )
}
