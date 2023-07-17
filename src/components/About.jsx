import React, {useRef} from 'react'
import { Tilt } from 'react-tilt'
import { isTypedArray } from 'three/src/animation/AnimationUtils'
import './style/about.css'
import { motion} from 'framer-motion'

const cards = [
  {
    url: '/src/assets/tech/html.png',
    text: '对于html常见的标签都比较熟悉，没用过的标签很快也能掌握'
  },
  {
    url: '/src/assets/tech/css.png',
    text: '关于css，最基础的css本身，scss,tailwind都能熟练使用'
  },
  {
    url: '/src/assets/tech/javascript.png',
    text: 'js和es6及之后的新语法都很熟悉，毕竟js是根本'
  },
  {
    url: '/src/assets/tech/typescript.png',
    text: '主要是js用的多，ts有所了解还需精进'
  },
  {
    url: '/src/assets/tech/reactjs.png',
    text: 'react是我最擅长也是最喜欢的框架,相关生态如redux,react router'
  },
  {
    url: '/src/assets/tech/vue.png',
    text: '其实在vue2的时候不是很喜欢vue，因为比起选项式还是更喜欢组合式，vue3加入了组合式以后好多了感觉比react用的还舒服'
  },
  {
    url: '/src/assets/tech/nodejs.png',
    text: 'node主要是用来写一些web后端的，对于node用的较多的也是和web有关的如http，socket之类的'
  },
  {
    url: '/src/assets/tech/redux.png',
    text: 'redux和react redux都熟悉，不过以前用的多，现在zustand用的多，因为zustand比起redux轻量'
  },
  {
    url: '/src/assets/tech/mongodb.png',
    text: 'mongodb用的比较多因为是json格式，sql数据库和语法有了解，日后会再精进'
  },


]

const cardsVariant = {
  visible : {opacity: 1, transition: {staggerChildren: 0.2}},
  hidden: {opacity: 0},
  
}

const cardVariant = {
  visible: {opacity: 1},
  hidden: {opacity: 0}
}


const Card = ({url,text}) => {
  
  return (
    <motion.div className="w-[300px] h-[300px] bg-gradient-to-r from-cyan-500 to-blue-500 pt-[10px] pl-[10px] pr-[10px] rounded-[25px] mr-[20px] " variants={cardVariant}>
      <motion.div className="w-[280px] h-[280px] rounded-[25px] bg-indigo-300 flex flex-col justify-center items-center">
        <img src={url} className="translate-y-[-10px] w-[100px] h-[100px]"/>
        <div className='text-center'> {text} </div>
      </motion.div>
    </motion.div>
  )
}



const About = () => {

  const Cards = cards.map((item,index) => <Card key={index} url={item.url} text={item.text}/>)

  return (
    <>
      <div className='text-white font-bold text-[45px] mb-[20px]'>关于我</div>
      <p className="w-[70%] mb-[20px]">
          我是一名web前端开发者，能熟练使用html，css和javascript编写网页，typescript还在精进中。用的最多也最擅长react，其次是vue，包括这两个框架对应生态。后端方面nodejs和mongodb较熟悉，sql类型数据库也有所了解。
      </p>
      <motion.div className="flex flex-row w-[1300px] overflow-x-scroll cards mb-[20px]" variants={cardsVariant} initial="hidden" whileInView="visible">
        {Cards}
      </motion.div>
      <p className="w-[70%] mb-[20px]">
          对于没有工作经验是因为毕业一开始并未确定方向，走了弯路后来决定选择前端，然后开始自学前端，顺便享受了生活，时间一久就这样了，不管相信与否这就是事实。如果需要一个实际经验丰富的前端开发我可能还有所欠缺，但是如果是初级的开发工作我觉得以我的水平完全可以胜任。我是一个愿意学习新技术的人，现在欠缺的实际开发经验和实际开发中所需的技术在工作中我都可以去学。
      </p>
    </>
  )
}

export default About