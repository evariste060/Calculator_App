import Button from "./Button"
export default function Operators(){
    const operators = ["/","x","-","+","="]
    return (
        <div className=" flex flex-col ">
            {operators.map(operator=><Button text={operator} color="bg-orange-500 flex-1" bg="text-white"/>)}
        </div>
    )

}