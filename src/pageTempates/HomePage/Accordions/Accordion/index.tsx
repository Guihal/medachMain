'use client'

import { useRef } from 'react'
import { AccordionBtn } from './AccordionBtn'

export default function Accordion({ data: data, children }) {
  const accordionContent = useRef(null)

  return (
    <section className={`${data.mtop} wrapper relative accordion-wrapper`}>
      <div className="w-full flex items-center flex-wrap xs:flex-nowrap relative">
        <div
          className="w-[20px] z-[1000] h-[20px] rounded-full hidden lg:block absolute -left-[29px] xl:-left-10"
          style={{ background: data.color }}
        ></div>
        <h2 className="title xs:whitespace-nowrap">{data.title}</h2>
        <span className={`h-[1px] bg-[#9799A5] w-full ml-8 opacity-50 hidden xs:block`}></span>
        <AccordionBtn accordionContent={accordionContent} />
      </div>
      <div className="relative">
        <div
          className={`line w-[2px] lg:h-[118%] lg-xl:h-[120%] 2xl:h-[123%] ${data.gradient} hidden lg:block absolute lg:-left-[20px] xl:-left-[30px] -top-7 z-[999]`}
        ></div>
        <div
          ref={accordionContent}
          className="overflow-hidden accordion-content grid grid-cols-1 lg:grid-cols-2 gap-16 transition-all duration-700 ease-in-out grid-rows-[1fr] opacity-100 "
        >
          {children}
        </div>
      </div>
    </section>
  )
}
