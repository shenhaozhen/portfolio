import {useState} from 'react'
import {motion,useAnimate} from 'framer-motion'
import { useEffect } from 'react';

const pageGenerator = (text,deg ,top,left) => {
    return {text,deg,top,left};
}

const Left = () => {

  const pageList = [
    pageGenerator('page1',0,-15,140),
    pageGenerator('page2',45,30,240),
    pageGenerator('page3',90,130,285),
    pageGenerator('page4',135,240,240),
    pageGenerator('page5',180,285,140),
  ];

  const [rdeg, setRdeg] = useState(45);
  const [scope, animate] = useAnimate()
  const [active, setActive] = useState(1);

  useEffect(()=>{
    animate(scope.current, {rotate: rdeg + 'deg'})
  },[rdeg])

  const clickHander = (deg) => {
    setRdeg(90 -deg)
  }

  const pageLink = (text,deg,idx,top,left) =>
  <motion.div onClick={()=>{clickHander(deg);setActive(idx)}} key={idx} className='absolute' style={{top: top+'px',left:left+'px',rotate: -rdeg + 'deg'}}>      
    <motion.span className="w-[20px] h-[20px] rounded-full inline-block align-middle" style={{backgroundColor: active == idx? 'lawngreen': 'aqua'}}/>
    <motion.span className='absolute translate-x-[2px]'>{text}</motion.span>
  </motion.div>   


  return (
    <div className="text-cyan-100 bg-transparent pt-[150px]">
        <div className='translate-x-[-150px]'>
        <motion.div ref={scope} className="w-[300px] h-[300px] border-dashed border-indigo-400 border-4 rounded-full relative ">
          {pageList.map((i,idx) => pageLink(i.text,i.deg,idx,i.top,i.left))}
        </motion.div>
        </div>
    </div>
  )
}

export default Left