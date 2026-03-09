import Operators from "./components/Operators";
import Calculator from "./components/Calculator";
import Numbers from "./components/Numbers";
function App(){
  return (
    <div className="w-96 mx-auto">
      <Calculator/>
      <div className="flex">
        <Numbers/>
        <Operators/>
      </div>
      
    </div>
  )

}
export default App;