import { FaAssistiveListeningSystems,  FaBars,  FaUser } from "react-icons/fa"
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./head.css"
export default function Head({ barStatus, setBarStatus }){

   return (
   <div className="head">
       
        <div className="box1">
            pages/Dashboard <p>
                <span className=""style={{fontWeight:"bold" , fontSize:"17px"}}> Dashboard</span>
            </p>
        
        </div>
<div className="box2">
<input  className="m" style={{borderRadius:"7px", border:"2px solid #e1e1e2 ",background:"#ffffff", textAlign:"end" }} type="search" placeholder="search" />
<button className="n" style={{borderRadius:"7px ",border:"  1px solid  #f00488   ",  color:" #f00488"}}> online Bulider  </button>
     <a href="" className=" sign"style={{fontSize:"15px", textDecoration:"none" ,color:"#67748e"}}><FaUser /> sign in</a>
    <span style={{fontSize:"25px", color:"#67748e"}} onClick={()=>setBarStatus(!barStatus)} className="d-lg-none">  <FaBars/></span>
    <a href="" style={{fontSize:"25px", color:"#67748e"}}>  <CiSettings /></a>
    
    <a href="" style={{fontSize:"25px" ,color:"#67748e"}}> <IoIosNotificationsOutline /></a>


            </div>
      
    </div>
   )
}