import React ,{useState} from 'react'

export default function Statefun() {
    let [count,updatecount]=useState(0)
    let [name,updatename]=useState("ABC")
    return (
        <div>
            <h1 onMouseOver={()=>{updatename("ABCDEF")}}
            onMouseLeave={()=>{updatename("ABC")}}>
                {name}
            <h1>{count}</h1>
            </h1>
            <button onClick={()=>{updatecount(count+1)}}>Increment</button>
            <button onClick={()=>{updatecount(count-1)}}>Decrement</button>
            <button onClick={()=>{updatecount(0)}}>Reset</button>
        
        </div>

    )
}
