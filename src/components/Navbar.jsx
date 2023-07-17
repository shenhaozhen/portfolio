import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import logoUrl from '../assets/nemo-logo.png'

const Navbar = () => {

  const [active, setActive] = useState('');
  const [closed, setClosed] = useState(false);
  const [show, setShow] = useState(-1);

  const objects = [
    {text:'About'},
    {text:'Projects',
     children:['project1', 'project2', 'project3']
    },
    {text:'Contact',
     children:['email', 'other']
    }
  ];

  return (
    <nav className='text-white w-full fixed top-0 z-20 bg-indigo-500' >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
              <Link to="/" className='flex items-center gap-2' 
                    onClick={()=>{setActive('');window.scrollTo(0,0)}}> 
                <img src={logoUrl} alt="my logo" className='w-[100px] h-[80px] object-contain'/>
                <p> Shen Haozhen</p>
              </Link>
              <ul className="list-none sm:flex flex-row gap-10">
                  {objects.map((i,index) => {
                     if (i?.children) {
                      return (
                        <div key={index} className="relative" onMouseEnter={()=>{setShow(index)}} onMouseLeave={()=>{setShow(-1)}}>
                          <li  className='hover:text-green-300'>
                              {i.text}
                          </li>
                          <div className='absolute left-[-35px] w-[130px] h-[130px] bg-indigo-400' style={{display: show!=index? 'none': 'block'}}>
                            <ul className="pl-[5px]">
                              {i.children.map((child,idx) => {
                                return <li key={idx} className="mt-[10px] hover:text-green-300 text-center" onClick={()=>console.log(child)}>{child} </li>
                              })}
                            </ul>
                          </div>
                        </div>
                       )
                      } else {
                        return (
                          <li key={index} className='hover:text-green-300'>
                          {i.text}
                          </li>
                        ) 
                      }})}
              </ul>
        </div>
    </nav>
  )
}

export default Navbar