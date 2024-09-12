import React from 'react';
import "./body.css"
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Body = () => {
  return (
    <div style={bodyStyle}>
     
      <div className="row mt-5">
        <div className="col-md-3">
          <div className="card shadow-sm text-start">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-subtitle mb-2 text-muted">Today's Money</h6>
                <h5 className="card-title">$53,000 <span style={percentageStyle}>+55%</span></h5>
              </div>
              <i className="bi bi-currency-dollar text-primary " style={iconStyle}></i>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card shadow-sm text-start">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-subtitle mb-2 text-muted">Today's Users</h6>
                <h5 className="card-title">2,300 <span style={percentageStyle}>+3%</span></h5>
              </div>
              <i className="bi bi-people text-primary" style={iconStyle}></i>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-start">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-subtitle mb-2 text-muted">New Clients</h6>
                <h5 className="card-title">+3,462 <span style={negativePercentageStyle}>-2%</span></h5>
              </div>
              <i className="bi bi-person-plus text-primary" style={iconStyle}></i>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-start">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-subtitle mb-2 text-muted">Sales</h6>
                <h5 className="card-title">$103,430 <span style={percentageStyle}>+5%</span></h5>
              </div>
              <i className="bi bi-bag-check text-primary" style={iconStyle}></i>
            </div>
          </div>
        </div>
      </div>

      

      
      <div className="row" style={{marginTop:"100px" , height:"250px"}}>
        <div className="col-md-4" >
    
            <div className="card-body " style={{backgroundColor:"aliceblue",height:"250px"}}>
              <div className="d-flex align-items-center">
                <div className="ms-4">
                  <h5 className='' style={{marginTop:"19px"}}>Built by developers</h5>
                  <p className="text-muted">
                    Soft UI Dashboard - From colors, cards, typography to complex elements, you will find the full documentation.
                  </p>  
                  <a href="#" className="btn my " style={{marginTop:"30px"}}>Read More </a>
                </div>
              </div>
            </div>
          </div>
        
   <div className='col-md-4'>
 
    
      <div className="d-flex align-items-center">
        <img
          className="img-fluid"
          style={{ width: '50px', height: '50px', background: "linear-gradient(310deg, #7928ca, #ff0080)", ...bigRocketIconStyle }}
          src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png"
          alt="Rocket"
        />
        <div className="ms-4">
         
       
      </div>
 
  </div>
</div>

        <div className="col-md-4  res " >
          <div className="card res  " style={textCardStyle}>
            
              <h5>Work with the rockets</h5>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reprehenderit soluta nihil, lam veniam commodi qui praesentium! Distinctio quaerat nobis labore.</p>
              <a href="#" className="btn "  style={{marginTop:"30px",color:"white"}}>Read More</a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for the body component
const bodyStyle = {

  paddingLeft: '20px',
  paddingRight: '20px',
 
 
  backgroundColor: '#f8f9fa',
  overflowY: 'auto',
  height: '100vh',
};

const percentageStyle = {
  color: 'green',
  fontSize: '0.8rem'
};

const negativePercentageStyle = {
  color: 'red',
  fontSize: '0.8rem'
  
};

const iconStyle = {
  fontSize: '2rem',
  marginBottom: '10px',
 background: "linear-gradient(310deg, #7928ca, #ff0080" ,
 padding:"9px",
  borderRadius: '10px'
 

};

const bigRocketIconStyle = {
 height:"250px",
 width:"400px"
};

const rocketCardStyle = {
  backgroundColor: '#f1f3f4',
  padding: '15px'
};

const textCardStyle = {
  backgroundColor: '#344675', // Matches blue-like color in the image
  color: '#fff',
  padding: '15px',
  height:"250px",
  
};

export default Body;
