'use client'
import React from 'react'
import {IoCloseOutline} from 'react-icons/io5'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Socials from './socials'

const Links = [
  {
      href:'/',
      name:'Home'
  },
  {
      href:'/about',
      name:'About'
  },
  {
      href:'/treatments',
      name:'Treatments'
  },
  {
      href:'/contact',
      name:'Contact'
  },
]


const Mobilenav = ({setMobileNav}:any) => {
  
    const pathname = usePathname();

  return (
    <nav className='relative flex-col justify-between h-full p-8'>
        <div className='curser-pointer text-accent ' onClick={()=>setMobileNav(false)}>
             <IoCloseOutline className='text-4xl'/>
        </div>
        <ul className='flex flex-col gap-10 text-white text-xl'>
          {Links.map((link,index)=>{
            return <Link href={link.href} key={index} className={`${pathname === link.href && "border-b-2 border-accent"} uppercase mx-auto max-w-max`}>
              {link.name}
            </Link>
          })}
        </ul>
        <Socials containerStyles="flex text-white text-lg gap-6 justify-center "/>
         
    </nav>
  )
}

export default Mobilenav
