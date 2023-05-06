import React from "react"
import { data } from "./data"
import { Basket } from "./components/basket"

export const App=()=>{
  return(
    <div className="App">
{data.map((el,id)=>{
  return <Basket con={el} key={id}/>
})}
    </div>
  )
}

