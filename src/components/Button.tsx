type ButtonProps = {text:string|number,color:string,bg:string};
export default function Button({text,color,bg}:ButtonProps){
    return (
        <button className={`p-8 border ${color} ${bg}  border-white font-bold  text-2xl`}>{text}</button>
    )
}