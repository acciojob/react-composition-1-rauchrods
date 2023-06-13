import React, { useState } from "react";


const Tabs = ({arr}) => {

    let [currtab, setCurrentTab]  =useState("Tab 1");

    function update(event){
          setCurrentTab(event.target.innerText);
    }

    return (
        <>
       
      <ul>
        {
            arr.map((obj)=>{
             return <li onClick={update}>{obj.title + " " +  obj.content}</li>
            })
        }
      </ul>

      <p>This is the content for {currtab}</p>
      </>
    )
  }
  
  export default Tabs