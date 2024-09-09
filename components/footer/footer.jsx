import React from "react";
import "./footer.css";

function footer(){
    return (
<div className="main1-footer">
   <div className="main2-footer">
        <div className="main3-footer-section1">
            <img src="./src/img/payless.png" alt="" className=""/>
        </div>
        <div className="main3-footer-section2">
            <div>
              <h3>Archiact</h3>
              <p>
                Home
             </p>
             <p>
                About
             </p>
             <p>
                Career
             </p>
            </div>
            <div>
            <h3>Services</h3>
              <p>
               Games
             </p>
             <p>
               Publishing
             </p>
             <p>
                solutions
             </p>
            </div>
            <div>
            <h3>Events</h3>
              <p>
              CVR
             </p>
             <p>
               Publishing
             </p>
             <p>
                solutions
             </p>
            </div>
        </div>
   </div>
</div>
    )
}

export default footer;