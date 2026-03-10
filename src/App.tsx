import Operators from "./components/Operators";
import Calculator from "./components/Calculator";
import Numbers from "./components/Numbers";
import { useState } from "react";
function App(){
  const [number,setNumber] = useState<string>("0")
  const handleClick = (value:string)=>{
    setNumber(value)
  }
  return (
    <div className="w-96 mx-auto">
      <Calculator input={number}/>
      <div className="flex">
        <Numbers handleClick={handleClick} />
        <Operators handleClick={handleClick}/>
      </div>
      
    </div>
  )

}
export default App;