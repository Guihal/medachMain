'use client'

import { useEffect } from 'react'

export function AddViews({ doc }) {
  const string = new URLSearchParams({
    id: doc.id,
  }).toString()

  useEffect(() => {
    fetch(`${window.location.origin}/articles/views/?${string}`)
  }, [])

  return <></>
}
