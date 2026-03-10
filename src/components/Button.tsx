type ButtonProps = {
    text:string,
    color:string,
    bg:string,
    onClick:(text:string)=>void
};
export default function Button({text,color,bg, onClick}:ButtonProps){
    return (
        <button className={`p-8 border ${color} ${bg}  border-white font-bold  text-2xl`}
         onClick={()=>onClick(text)}>{text}
        </button>
    )
}