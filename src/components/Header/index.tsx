'use client'
// import Link from 'next/link'
//import Image from 'next/image'
// import { SvgIcon } from '@mui/material'
import Logo from '../Svg/Logo'
import { Nav } from './components/nav'
import { HeaderBtns } from './components/HeaderBtns'
// import { authenticated } from '../../../payload/access/authenticated'
// import React from 'react'

export function Header() {
  return (
    <header className="h-[70px] xs:h-[92px] sticky top-0 bg-white w-full">
      <div className="header-wrapper grid grid-cols-3 justify-items-center items-center">
        <div className="w-full flex justify-start">
          <Nav />
        </div>
        <div>
          <Logo classes="dark:bg-white dark:p-1 dark:dark:border-[##E5E5E5] dark:rounded-md h-[30px] xs:h-auto logo" />
        </div>
        <div className="w-full flex justify-end">
          <HeaderBtns />
        </div>
      </div>
    </header>
  )
}
