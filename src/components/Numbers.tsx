
import Button from "./Button"
export type buttonType = {
    handleClick :(value:string) => void;
}
export default function Numbers({handleClick}:buttonType){
    const numbers = ['AC','+/-',"%","7","8","9","4","5","6","1","2","3","0","."]
    return (
        <div className="grid grid-cols-3">
            {numbers.map((num,i)=>(
                <Button 
                key={i}
                onClick={handleClick} 
                text={num} 
                color="bg-gray-300" 
                bg={`${num=="0"?"col-span-2":"col-span-1"}`}
                />))}
        </div>
    )
}