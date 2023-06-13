
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs.js";

const App = () => {

  let arr = [ { title: "Tab", content :"1" }, { title: "Tab", content :"2" },{ title: "Tab", content :"3" }]

  return (
    <div>
        <Tabs arr = {arr} ></Tabs>
    </div>
  )
}

export default App
