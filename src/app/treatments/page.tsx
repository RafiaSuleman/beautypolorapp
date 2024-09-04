'use client'
import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { CursorContext } from '@/components/ui/cursorcontext'
const Treatments = () => {
  const {mouseEnterHandler,mouseLeaveHandler}:any = useContext(CursorContext)
  return (
     <motion.section
     initial={{ opacity: 0 }}
     animate={{ opacity: 1, transition: { delay: 2 } }}
     className="min-h-screen flex items-center overflow-x-hidden "
  >
    <div className='container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0'>
      
      <div className='w-full h-full flex items-center justify-between '>
        {/* text */}
        <motion.div 
         initial={{opacity:0 ,x:-60}}
         animate={{
           opacity:1,
           x:0,
           transition:{delay:2,duration:0.8,ease:'easeInOut'}
         }}
         onMouseEnter={mouseEnterHandler} 
         onMouseLeave={mouseLeaveHandler} 
        className='flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto '>
       <h2 className='h2 xl:mt-20 mb-6 mx-auto max-w-[540px] xl:max-w-none'>
       Indulge in our Luxurious Treatments
        </h2>
        <p className='lead max-w-[600px] mx-auto xl:mx-0'>
        Tailored skincare solutins for a healthy complexion, offering customerized crae and radiant skin
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-14 mx-auto xl:mx-0'>
         {/* items */}
        <div className='flex-1 flex flex-col justify-center items-center xl:items-start mt-5'>
         <div className='flex items-center gap-[12px] mb-2'>
          <div className='w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-te-[4px]'></div>
          <h3 className='text-2xl '>Classic Facial</h3>
          
         </div>
         <p className='pl-6 text-[15px]'>Deep Cleansing, exfoliation and hydration for a refreshed complexion 
          </p>
          </div>
           {/* end items */}
             {/* items */}
        <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
         <div className='flex items-center gap-[12px] mb-2'>
          <div className='w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-te-[4px]'></div>
          <h3 className='text-2xl '>Chemical Peel</h3>
          
         </div>
         <p className='pl-6 text-[15px]'>Exfoliationg treatment to improve skin texture and tone
          </p>
          </div>
           {/* end items */}
             {/* items */}
        <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
         <div className='flex items-center gap-[12px] mb-2'>
          <div className='w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-te-[4px]'></div>
          <h3 className='text-2xl '>Eyebrow Waxing/Shaping</h3>
          
         </div>
         <p className='pl-6 text-[15px]'>Deep Cleansing, exfoliation and hydration for a refreshed complexion 
          </p>
          </div>
           {/* end items */}
             {/* items */}
        <div className='flex-1 flex flex-col justify-center items-center xl:items-start'>
         <div className='flex items-center gap-[12px] mb-2'>
          <div className='w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-te-[4px]'></div>
          <h3 className='text-2xl '>Hydra Facial</h3>
          
         </div>
         <p className='pl-6 text-[15px]'>Multi-step treatment for instant hydration and glow
          </p>
          </div>
           {/* end items */}
        {/* btn */}
        </div>
        <button className='btn mx-auto xl:mx-0'>Discover more</button>
       
        </motion.div>
      {/* image */}
      <motion.div 
       initial={{opacity:0 ,x:60}}
       animate={{
         opacity:1,
         x:0,
         transition:{delay:2.4,duration:0.8,ease:'easeInOut'}
       }}
       onMouseEnter={mouseEnterHandler} 
       onMouseLeave={mouseLeaveHandler} 
      className='hidden xl:flex w-[384px] h-[534px] relative'>
        <Image src={'/treatment.jpg'} fill quality={100} className='object-contain' alt={'treament image'} />
      </motion.div>
    
    </div>
    </div>
   </motion.section>
  )
}

export default Treatments
