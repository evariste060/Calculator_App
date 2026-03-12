import Operators from "./components/Operators";
import Calculator from "./components/Calculator";
import Numbers from "./components/Numbers";
import { useState } from "react";
function App(){
  const [number,setNumber] = useState<string>("0")
  const [operator,setOperator] = useState<string|null>(null)
  const [previous,setPrevious] = useState<string|null>(null)
  const display = (value:string) =>{
    setNumber(prev=>prev!=="0"?prev+value:value)
  }
  const changeSign = () =>{
    setNumber(prev=> String(-Number(prev)))
  }
  const handleOperator = (op:string) => {
    setPrevious(number)
    setOperator(op)
    setNumber("")
  }
  const calculate = () => {
  if (!operator || !previous) return
  const prev = Number(previous)
  const current = Number(number)
  let result = 0
  switch (operator){
    case "+":
      result = prev + current
      break
    case "-":
      result = prev - current
      break
    case "X":
      result = prev * current
      break
    case "/" :
      result = (current !== 0)? prev/current:0
      break
    case "%" :
      result =(current !== 0)? prev%current:0
      break
  }
  setNumber (String(result))
  setOperator(null)
  setPrevious(null)
}
  const handleClick = (value:string)=>{
    if(!isNaN(Number(value))){
      display(value)
      return
    }
    switch(value) {
      case "AC":
        setNumber("0")
        setOperator(null)
        setPrevious(null)
        break
      case "=":
        calculate()
        break
      case "+/-":
        changeSign()
        break
      default:
        handleOperator(value)

    }
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