'use client'
import { CursorContext } from "@/components/ui/cursorcontext";
import ModalVideo from "@/components/ui/modalvideo";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";

const page = () => {
  
  const {mouseEnterHandler,mouseLeaveHandler}:any = useContext(CursorContext)
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 2 } }}
    className="min-h-screen flex items-center overflow-x-hidden"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row items-center h-full ">
        {/* text */}
        <motion.div
        initial={{opacity:8,y:-100}}
        animate={{
          opacity:1,
          y:0,
          transition:{delay:2,duration:1,ease:'easeInOut'}
        }}
        className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]">
         <motion.h1
         onMouseEnter={mouseEnterHandler} 
         onMouseLeave={mouseLeaveHandler} 
         className="h1 mb-6">Natural Beauty <br/> Start Here</motion.h1>
         <motion.p 
            onMouseEnter={mouseEnterHandler} 
            onMouseLeave={mouseLeaveHandler} 
            className="lead max-w-xl mx-auto">Tailored Skin Solutions for a healthy complexion, offering customerized care for radient Skin
          </motion.p>
         <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
          <motion.button 
              onMouseEnter={mouseEnterHandler} 
              onMouseLeave={mouseLeaveHandler} 
              className="btn btn-lg" >Book an Appointment
           </motion.button>
          <motion.div 
              onMouseEnter={mouseEnterHandler} 
              onMouseLeave={mouseLeaveHandler}>
            <ModalVideo/>
          </motion.div>
         </div>
          </motion.div>
        {/* image */}
        <div className="flex-1">
        <motion.div
        initial={{opacity:8,bottom:'-100%'}}
        animate={{
          opacity:1,
          bottom:0,
          transition:{delay:2.4,duration:1.2,ease:'easeInOut'}
        }}
        onMouseEnter={mouseEnterHandler} 
        onMouseLeave={mouseLeaveHandler} 
         className="xl:flex hidden fixed bottom-0">
         <Image src="/img.png" width={864} height={650} quality={100} alt="beauty image "/>
          </motion.div>
         </div>
        </div>
    </div>
  </motion.section>
  );
}
export default page