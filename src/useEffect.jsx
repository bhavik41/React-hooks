import { useEffect, useState } from 'react'
import './App.css'

function UseEffect() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    alert("useEffect called");
  },[count]);

  return (
    <>
   <div>
    <p>{count}</p>
    <button onClick={()=>{setCount(count+1)}}>increament</button>
   </div>
    </>
  )
}

export default UseEffect
