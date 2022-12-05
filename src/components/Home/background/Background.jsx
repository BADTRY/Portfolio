//importing the scss of background
import "./background.scss";
import React from "react";
//import imgs from '.;

function Background() {
    return (
        <div className="background">
        <div className="bgimg">   
            <img src='./Assets/profile1.PNG' alt="background" /> 
            <h1>THINK TRICE BEFORE YOU ACT</h1>

            <div className="container">
                   <div className="left">
                        <img src="./assets/profile1.PNG" alt="imgs"/>
                   </div>
                   <div className="right">
                        <h1>Lloyd P Concepcion</h1>
                        <h5>Bachelor of Science in Information Technology</h5>
                   </div>       
            </div>
        </div>           
        </div>
    )
}

export default Background
