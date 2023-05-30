import { MotionConfig } from 'framer-motion'
import React from 'react'
import LaptopCanvas from './canvas/LaptopCanvas'
import {motion} from 'framer-motion'

const Model = () => {
  return (
    <section className="text-white h-screen w-full mx-auto relative">
      <div className="absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5" >
          <div className="ml-5 flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"> </div>
          </div>
          <div>
            <h1> Hi, I'm <span className='text-[#70c6d0]'>Shen Haozhen.</span></h1>
            <h1> 你好，我是 <span className='text-[#70c6d0]'>沈皓臻</span></h1>
            <p>个人简介放这</p>
          </div>
          <LaptopCanvas/>
      </div>
      <div className="absolute bottom-[10px] w-full flex justify-center items-center" >
                <a href="">
                   <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                      <motion.div animate={{y: [0, 24, 0],}} 
                                 transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop",}}
                                 className='w-3 h-3 rounded-full bg-[#aaa6c3] mb-1'>                   
                      </motion.div>
                   </div>
                </a>
      </div>
    </section>
  )
}

export default Model