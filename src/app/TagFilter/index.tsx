'use client'

import { useRef, useState } from 'react'
import { showTooltip } from './events/showTooltip'
import { queryHomePage } from '@/utilities/queryHomePage'
import { useRouter } from 'next/navigation'
import { getTags } from './getTags'
import { debounce } from '@/utilities/debounce'
import { useHide } from './events/hide'
import { throttle } from '@/utilities/throttle'

export default function TagFilter({ tags, nameBlock, query }) {
  const [tooltip, tooltipCon] = [useRef(null), useRef(null)]
  const [state, setState] = useState(false)
  const [chosen, unChosen] = getTags(tags, nameBlock, query)

  useHide(tooltipCon, setState)

  const router = useRouter()

  let queryClone = Object.assign({}, query)

  const pushRouterDebounced = debounce((router, queryUrl) => {
    router.push(`${window.location.origin}/?${queryUrl}`, { scroll: false })
  }, 300)

  function routerEvent(ev) {
    const queryObj = queryHomePage(queryClone, ev.target.dataset.id, nameBlock)
    const queryUrl = new URLSearchParams(queryObj).toString()

    queryClone = queryObj

    ev.target.classList.add('hidden')

    if (!ev.target.parentNode.querySelector('.tag-btn:not(.hidden)')) {
      setState(false)
    }

    pushRouterDebounced(router, queryUrl)
  }

  return (
    <div
      ref={tooltipCon}
      className={`lg:flex tags tags__tooltip flex gap-[10px] flex-wrap text-[#9799A5] mt-3 ${state ? 'show' : ''}`}
    >
      {chosen.map((tag) => (
        <div onClick={routerEvent} key={tag.id} data-id={tag.id} className="tag-btn">
          {tag.title}
        </div>
      ))}
      <p
        onClick={(ev) => {
          showTooltip(tooltip.current, state, setState)
        }}
        className={`tag-btn w-[30px] h-[30px] border-[#9799A5] border-2 rounded-lg flex-center cursor-pointer font-helvetica ${unChosen.length === 0 ? 'unshow' : ''}`}
      >
        +
      </p>
      <div ref={tooltip} className="left tags__tooltip-wrapper">
        {unChosen.map((tag) => (
          <div onClick={routerEvent} key={tag.id} data-id={tag.id} className="tag-btn">
            {tag.title}
          </div>
        ))}
      </div>
    </div>
  )
}
