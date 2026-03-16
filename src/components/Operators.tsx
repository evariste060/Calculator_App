import Button from "./Button"
import type { buttonType } from "./Numbers"
export default function Operators({handleClick}:buttonType){
    const operators = ["/","X","-","+","="]
    return (
        <div className=" flex flex-col ">
            {operators.map((operator,i)=>(
                <Button 
                    key={i} 
                    onClick={handleClick}
                    text={operator} 
                    color="bg-orange-500 flex-1" 
                    bg="text-white"
                />))}
        </div>
    )

}