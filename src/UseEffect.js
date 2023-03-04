import React, { useEffect, useState } from "react";

function UseEffect(){
    const [name, setName] = useState("변경전 닉네임");

    useEffect(() => {
        console.log("컴포넌트 나타남"); //2
        console.log(name);

        return () => {
          console.log("컴포넌트 사라짐") // 1
        }
      }
    )

    const handleClick= () => { 
      setName("변경후 닉네임")
    }

    return (
      <div>
        {name} <button onClick = {handleClick}>변경</button>
      </div>
    )
}

export default UseEffect;