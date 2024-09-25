'use client'

import { useRef, useEffect } from 'react'
import { hideTagsOverflow } from './hideTagsOverflow'
import { queryHomePage } from '@/utilities/queryHomePage'
import { useRouter } from 'next/navigation'

interface Tags {
  data: any
  className?: any
  nameBlock?: any
}

export default function Tags({
  data,
  className = 'tags flex gap-[10px] flex-wrap text-[#9799A5] mt-3',
  nameBlock = false,
}: Tags) {
  const [btnsContainer, showBtn] = [useRef(null), useRef(null)]
  const router = useRouter()

  let queryClone: any = false

  function routerEvent(ev) {
    if (!queryClone) {
      queryClone = Object.fromEntries(new URLSearchParams(window.location.search))
    }

    const queryObj = nameBlock ? queryHomePage(queryClone, ev.target.dataset.id, nameBlock) : {}
    const queryUrl = new URLSearchParams(queryObj).toString()

    queryClone = queryObj

    router.push(`${window.location.origin}/?${queryUrl}`, { scroll: false })
  }

  data.sort((a, b) => {
    return a.title.length - b.title.length
  })

  useEffect(() => {
    hideTagsOverflow(btnsContainer.current, showBtn.current)
  }, [])

  return (
    <div ref={btnsContainer} className={className}>
      {data.map((tag) => (
        <Tag
          onClick={(ev) => {
            routerEvent(ev)
          }}
          key={tag.id}
          tag={tag}
        />
      ))}

      <p
        ref={showBtn}
        className="w-[30px] h-[30px] border-[#9799A5] border-2 rounded-lg flex-center cursor-pointer font-helvetica"
      >
        +
      </p>
    </div>
  )
}

export function Tag({ tag, onClick }) {
  if (tag.hasOwnProperty('value')) {
    if (Array.isArray(tag.value)) {
      return (
        <div onClick={onClick} data-id={tag.id} className="tag-btn unshow">
          {tag.value}
        </div>
      )
    }

    return (
      <div onClick={onClick} data-id={tag.value.id} className="tag-btn unshow">
        {tag.value.title}
      </div>
    )
  }

  if (tag.hasOwnProperty('title')) {
    return (
      <div onClick={onClick} data-id={tag.id} className="tag-btn unshow">
        {tag.title}
      </div>
    )
  }

  return <></>
}
