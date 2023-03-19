import React from "react";
import Light from "./Light";


function SmartHome(){


 const toggleMaster = () =>{}

 const toggleKitchen = () =>{}

 const toggleBath = () =>{}

  return(
    <div>
      <Light room="침실" on={masterOn} toggle ={toggleMaster} ></Light>
      <Light room="주방" on={KitchenOn} toggle ={toggleKitchen}></Light>
      <Light room="욕실" on={bathOn} toggle={toggleBath}></Light>
    </div>
  )

}

export default SmartHome;