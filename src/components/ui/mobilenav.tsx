
import React from 'react'
import {IoCloseOutline} from 'react-icons/io5'

const Mobilenav = ({setMobileNav}:any) => {
    console.log('setMobileNav:', setMobileNav); 
  return (
    <nav className='text-white'>
        <div className='curser-pointer ' onClick={()=>setMobileNav(false)}>
             <IoCloseOutline className='text-4xl'/>
        </div>
    </nav>
  )
}

export default Mobilenav
