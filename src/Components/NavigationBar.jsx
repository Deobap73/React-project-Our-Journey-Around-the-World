import React from "react";
import "./NavigationBar.css"; 


function NavigationBar() {
 
  return (
   <ul className="container" >
<li> <a href="#">HOME</a> </li>
<li> <a href="#">ABOUT US</a></li>
<li>  <a href="#">THE PROJECT</a></li>
<li> <a href="#">LOCATIONS</a></li>
<li> <a href="#">GALLERY</a></li>
<li> <a href="#">CONTACT</a></li>

   </ul>
  )
}

export default NavigationBar;