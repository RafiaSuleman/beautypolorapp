"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CursorContext } from "@/components/ui/cursorcontext";
import { useContext } from "react";
import StatsItem from "@/components/ui/statsitem";

const About = () => {
  const {mouseEnterHandler,mouseLeaveHandler}:any = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      onMouseEnter={mouseEnterHandler} 
      onMouseLeave={mouseLeaveHandler} 
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      {/*  */}
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32  ">  
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
          {/* image */}
           <motion.div 
           initial={{opacity:0 ,x:-60}}
           animate={{
             opacity:1,
             x:0,
             transition:{delay:2,duration:0.8,ease:'easeInOut'}
           }}
           className="relative w-[384px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0">
            <Image
              src="/faical.png"
              fill
              quality={100}
              priority
              className="object-contain"
              alt="faical image"
            />
          </motion.div> 
          {/* text */}
          <motion.div 
           initial={{opacity:0 ,x:60}}
           animate={{
             opacity:1,
             x:0,
             transition:{delay:2,duration:0.8,ease:'easeInOut'}
           }}
           onMouseEnter={mouseEnterHandler} 
           onMouseLeave={mouseLeaveHandler} 
           className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0 ">
           <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">Commited on your skin Health and Beauty</h2> 
           <p className="lead max-w-[600px] mx-auto xl:mx-0">
            Tailored skincare solutins for a healthy complexion, offering customerized crae and radiant skin
           </p>
           {/* items */}
           <div      
           className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0 mt-10">
            <div><StatsItem countNum={13} text="Years on Market"/></div>
            <div><StatsItem countNum={35} countText="k+" text="Happy Clients"/></div>
            <div><StatsItem countNum={97} countText="%" text="Natural Ingredients" /></div>
           
           </div>
           {/* btn */}
           <button className="btn mx-auto xl:mx-0 ">Contact Us</button>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default About;
