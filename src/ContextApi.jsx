import React, { createContext ,useContext,useState} from 'react'
import { CountAtom,evenSelector } from './atom';

const CountContext = createContext();


function ContextApi() {
    const [count,setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
    <Count/>
    </CountContext.Provider >
  )
}

function Count(){
    return <div>
        <CountRenderer/>
        <Button />
    </div>
}

function CountRenderer(){
    const {count} = useContext(CountContext);
return <div>
<p>{count}</p>
</div>
}

function evenCountRenderer(){
    const isEven = useContext(evenSelector)
}
function Button(){

    const {setCount,count} = useContext(CountContext)
    return <div>
        <button onClick={()=>{setCount(count + 1)}}>increament</button>
    </div>
}
export default ContextApi