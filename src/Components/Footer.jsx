import React from "react";



function Footer() {
 

  return (
   <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
<li>©️ Copyright - Barbara Papa</li>
<li>©️ Copyright - Masouma Rasouli</li>
<li> <div style={{position: 'relative', maxWidth: '100%'}}> <img src="/polygon-1@2x.png" alt="" />
<div style={{position: 'absolute', top:'50%', left:'50%', transform:'translate(-50%,-80%)', color: 'white', textAlign:'center', fontWeight: 'bold', fontSize:'30px'}}> Thanks for Watching</div>
</div>
</li>
<li>©️ Copyright - Diego LLerena</li>
<li>©️ Copyright - Deolindo Baptista</li>

   </ul>


  )


}

export default Footer;
