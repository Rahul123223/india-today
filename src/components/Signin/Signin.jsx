import React from "react";
import "../styles/Signin.css";

export const Signin = () => {
    return(
   <div className="SignIn">
       <div className="Signin_header">
       
           <h1 className="india">Back To India Today</h1>
           <img className="img" src="https://auth.indiatoday.in/sites/all/themes/itg/images/span_itg_group.png" alt="img" />
       </div>
       <h3 className="top">Sign In To India Today</h3>
       <p className="top1"><b>Dont have an account ?  </b><span className="top2">  <b> Sign Up Now >></b> </span> </p>
  <div className="deco">
  <h3>Sign In Via</h3>
   
   <div className="icon">

   <a href="https://auth.indiatoday.in/saml_login/twitter/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ==" class="sso-twitter"> Twitter</a>
   <a href="https://auth.indiatoday.in/saml_login/facebook/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ==" class="sso-facebook"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
   <a href="https://auth.indiatoday.in/saml_login/google/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ==" class="sso-google"> Google</a>
   </div>
    <h3 className="one"><b>Or Sign In using your Email or Mobile no.</b></h3>
    </div>
    <div className="ary1">
        <div className="aa">
            <img className="bb"></img>
        </div>
    <input placeholder="Enter Your Email/Mobile" type="text" id="cc"  ></input>


</div>
    </div>
    
  

  
  
  
   




    );

};
