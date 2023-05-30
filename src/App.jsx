import Navbar from "./components/Navbar"
import About from './components/About'
import Model from './components/Model'
import { BrowserRouter } from "react-router-dom"
import imageUrl from './assets/herobg.png'
import Left from "./components/Left"
import Right from "./components/Right"

const App = () => { 
   
  console.log(typeof imageUrl)

  const hero = <div className="bg-bgimage bg-center bg-no-repeat bg-cover">
                 <Model/>
               </div>



  return (
    <BrowserRouter>
      <div className= 'relative w-full h-full z-0'>  
        <Navbar/>
        <div className="flex flex-row justify-start translate-y-[80px]" >
          <Left/>
          <Right>

          </Right>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
