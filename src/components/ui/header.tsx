'use client'
import React , {useContext, useState} from 'react'
import { CursorContext } from './cursorcontext'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineMenu} from 'react-icons/ai'
import Mobilenav from './mobilenav'
import Nav from './nav'


const Header = () => {

  const {mouseEnterHandler,mouseLeaveHandler}:any= useContext(CursorContext)
  const [mobileNav,setMobileNav] = useState(true)
  console.log('setMobileNav header:', setMobileNav); 
  
  return (
    <motion.header
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='pb-6 xl:pb:[50px] fixed z-40 w-full bg-accent-100 bx:bg-transparent'>
        <div className='bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0'>
          topbar
        </div>
        <div className='container mx-auto flex items-center justify-between px-6 '>
            <div>
              <Link href="/">
                  <Image src="/asserts/logo.svg" alt='' height="22"
                  width="120"/>            
              </Link>
            </div>
            {/* mobile nav  trigger*/}
            <div className='xl:hidden cursor-pointer' onClick={() => {setMobileNav(!mobileNav)}}>
              <AiOutlineMenu className='text-3xl text-primary'/>
            </div>
            {/* mobile nav  */}
            <motion.div 
            className='fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50 '>
              <Mobilenav setMobileNav = {setMobileNav}/>
            </motion.div>

            {/* desktop Nav */}
            <div className='hidden xl:block'>
              <Nav />
            </div>
        </div>
      
    </motion.header>
  )
}

export default Header


