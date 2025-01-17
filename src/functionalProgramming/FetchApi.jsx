import { useEffect, useState } from "react";

export default function App() {

  const [state, setState] = useState(null)
  const [count,setCount]=useState(1)

  useEffect(()=>{
    console.log('yes')
    fetch(`https://swapi.py4e.com/api/planets/${count}/`).then(res=>res.json())
    .then(data=>setState(data))
  },[count]) 
  return (
    <div>
      <h2>The count is{count}</h2>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Get next character</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}