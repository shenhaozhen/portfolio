import Tech from "./Tech"
import About from "./About"
import Model from "./Model"
import { useCurrentStore } from "../../utils/zustand"

const Right = (props) => {
  
  return (
    <div className="self-start translate-y-[100px] translate-x-[200px]">
      <Model/>
      <About/>
      <Tech/>
    </div>
  )
}

export default Right