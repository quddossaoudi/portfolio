import ReactDOM  from "react-dom";
import React from "react";
import App from "./App"
import "./index.css"

setTimeout(function(){
    var msg = document.getElementById("fade-in");
    msg.parentNode.removeChild(msg);
}, 8000);

ReactDOM.render(<App/>, document.querySelector("#root"));