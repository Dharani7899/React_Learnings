import Hello from "./component/Hello"
import Bye from "./component/Bye"
import Func from "./component/Func"
import Proppss from "./component/Proppss"
import Destruct_prop from "./component/Destruct_prop"
import Arrayy from "./component/Arrayy"
import Array_lis from "./component/Array_lis"
import Arr_obj from "./component/Arr_obj"
function App() {
  return (
    <>
      <Hello />
      <Bye />
      <Func />
      <Proppss name="dharani" age="19" />
      <Proppss name="miya" age="20" />
      <Destruct_prop name="karthikeyan" age="50" />
      <Arrayy />
      <Array_lis />
      <Arr_obj />


    </>
  )
}
export default App