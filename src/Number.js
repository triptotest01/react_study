import React, {useEffect, useState} from "react";

const Number = ()=>{
 
  const [number, setNumber] = useState(0)
  const [name,setName] =useState("변경전 이름")
  // useEffect(()=>{console.log('hello')})
  // useEffect(()=>{console.log('hello')}, [])
  useEffect(()=>{console.log('hello')}, [name])

  const counter = () => setNumber(number+1);
  const nameChnager = () => setName('변경후 이름')

  return(
   <div>
    <button onClick={counter}>클릭</button>
    <button onClick={nameChnager}>변경</button>
    <div>{number}</div>
    <div>{name}</div>
  </div>  
  )

}

export default Number;