type inputProps = {
    input:string
}
export default function Calculator({input}:inputProps){
    return (
        <div className=" h-18 mt-2 bg-gray-600">
            <p className="text-4xl text-white flex justify-end items-end">{input}</p>
        </div>
    )
}