import "./bar.css"
import { FaHome, FaRProject, FaTable, FaUser, FaVestPatches, FaViber } from "react-icons/fa";
function Bar({barStatus}){
    return(
  

        <div className={`main ${barStatus}`}>
         
        <div className="upper d-flex">
                <img src=" https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logo-ct-dark.png" alt=""  className="img"/>
                <p>so UI development</p>

                </div>
           
            <div className="navbar p-20px">

                <ol>
              
                    <li><a href="/" className="name"> <div className="iconDiv"> <FaHome/></div> dashboard</a></li>
                    
                    
                    <li><a href="" className="o">  <FaTable />Tables </a></li>
                    <li><a href="" className="o"> <FaVestPatches />  Billing </a> </li>
                    <li><a href=""  className="o">    <FaViber />Virtual Reality</a></li>
                    <li><a href="" className="o"> < FaRProject /> RTl</a></li>
                    <li><a href="" className="o"> < FaUser/> Profile</a></li>
 
                    
                    

    
                </ol>
             

            </div>
        
        </div>
    );
}
export default Bar;