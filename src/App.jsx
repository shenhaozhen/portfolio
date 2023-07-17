import Navbar from "./components/Navbar"
import Model from './components/Model'
import { BrowserRouter } from "react-router-dom"
import imageUrl from './assets/herobg.png'
import Right from "./components/Right"
import {createContext, useState, useRef} from "react"
import LeftSteps from "./components/LeftSteps"


const App = () => { 

 
  const activeContext = createContext(1);
  const [active, setActive] = useState(1);
   
  const hero = <div className="bg-bgimage bg-center bg-no-repeat bg-cover">
                 <Model/>
               </div>

  return (
    <BrowserRouter>
      <activeContext.Provider value = {{active, setActive}}>
      <div className= 'relative w-full h-full z-0'>  
        <Navbar/>
        <div className="h-screen flex flex-row justify-start items-center" >
          <LeftSteps/>
          <Right/>
        </div>
      </div>
      </activeContext.Provider>
    </BrowserRouter>
  )
}

export default App
