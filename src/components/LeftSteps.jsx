import React , {Fragment, useState} from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion';
import './style/leftsteps.css'

const LeftSteps = () => {

  const steps = ['关于','技术','项目','联系方式'];
  const [current, setCurrent] = useState(0);
  const {scrollYProgress} = useScroll()
  console.log(scrollYProgress)

  //useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //  console.log("Page scroll: ", latest)
  //})

  return (
    <div className="text-black flex flex-row h-[200px] bg-transparent flex flex-row items-center origin-left rotate-[90deg] translate-x-[50px] translate-y-[-250px] fixed max-[1500px]:scale-75 max-[1500px]:translate-y-[-190px]">
        {
           steps.map((item,index) => {
               if (index != 0) {
                 return <Fragment key={index}><span className={index > current? "progress": "progress-active"}></span> <div className={index > current ? "step-normal": "step-active"}> {item}</div></Fragment>
               } else {
                return <div key={index} className="step-active"> {item} </div>
               }
           })
        }
    </div>
  )
}

export default LeftSteps