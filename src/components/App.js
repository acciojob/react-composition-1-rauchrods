
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs.js";

let arr = [ { titles: "Tab", contents :"1" }, { titles: "Tab", contents:"2" },{ titles: "Tab", contents :"3" }];

const App = () => {

  
  return (
    <div>
        <Tabs arr = {arr} ></Tabs>
    </div>
  )
}

export default App
