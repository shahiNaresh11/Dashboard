import React from 'react';
import "./header.css"


const Header = () => {
  return (

  
    <div  className="heo " style={{ height: "110px", ...headerStyle }} >
          <div className="right"> page/dashboard
           
             </div>
        <div className="hero "style={{ margintop:"0", display:"flex", alignItems:"center"}}>
      
        
        <input
  type="search"
  placeholder="Search..."
  className="form-control  search" 
/>

          <button className="btn btn md-2  " style={{border:"1px solid #f00488 " ,color:""}}>online builder</button>

          
          <i className="bi bi-gear ms-3" style={iconStyle}></i>

       
          <i className="bi bi-bell ms-3" style={iconStyle}></i>
          

       
          <button className="btn btn-outline-secondary ms-3">Sign In</button>
        </div>
      </div>
     
  );
};


const headerStyle = {
  with:'100%',
  width: '80vw', 
  padding: '10px 20px', 
  borderBottom: '1px solid #ddd', 
  backgroundColor: '#f8f9fa', 
  zIndex: 1000, 
  margintop:"20px"
};

const iconStyle = {
  fontSize: '1.5rem', 
  cursor: 'pointer',
};

export default Header;
