import React,{useState} from "react";
import { unstable_HistoryRouter } from "react-router-dom";
import "../styles/register.css";


export const Register = () => {

    const [userRegistration, setuserRegistration] = useState( {
       username: "",
       email:"",
       password:""
    });
    const handleInput = () => {

    }

    return(
   <div className="SignIn">
       <div className="Signin_header">
       
           <h1 className="india">Back To India Today</h1>
           <img className="img" src="https://auth.indiatoday.in/sites/all/themes/itg/images/span_itg_group.png" alt="img" />
       </div>
      
  <div className="deco">
  <h3>Sign Up By</h3>
   
   <div className="icon">

   <a href="https://auth.indiatoday.in/saml_login/twitter/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ==" class="sso-twitter"> Twitter</a>
   <a href="https://auth.indiatoday.in/saml_login/facebook/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ==" class="sso-facebook"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
   <a href="https://auth.indiatoday.in/saml_login/google/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ==" class="sso-google"> Google</a>
   </div>
   <h3>OR</h3>
    <h3 className="one"> Sign Up using your Email Id/Mobile No.</h3>
    </div>
    <div class="input1">
        <select className="country">
            <option>India</option>
            <option>USA</option>
            <option>UK</option>


         </select> 
        <input placeholder="Enter Your Full Name"  className="Name"  value="userRegistration.username "  onChange={handleInput} id="username"/>
    </div>
    <div class="input2">
    <input placeholder="Enter Your Email"  className="Name"  value={userRegistration.email}  onChange={handleInput} id="email"/>
        <input placeholder=" * Password"  className="Name"    value={userRegistration.password}  onChange={handleInput} id="password"/>
    </div>
    <div className="box">
    <input className="inpt" type="text" />
    <span className="span"> I agree to the SSO login privacy terms and I warrant that I am above 16 years of age. <span className="xx">*</span></span>

    <input className="inpt" type="text" />
    <span className="span"> I agree to the processing of my personal information for profiling such as My Credits,
         Follow activity , Personalised recommendations and Advertisements. </span>

         <input className="inpt" type="text" />
    <span className="span">I wish to receive custom communications i.e. Emails, newsletters, SMS, notifications from India Today based on my interests and my activities on the website. </span>

         </div>
         <button className="ss" type="submit">Sign Up</button>

         <div className="tt"> 
         <p1 className="pp"><span className="xx">*</span><b>Mandotory Fields</b></p1>
         <p1 className="pp"><b>Already Register??</b><span className="xx"><b>Sign In >></b></span></p1>

         </div>
    
   <div className="footer">
       <div className="foot1">
           <p1 className="network">One Network One Account</p1>
         <div className="imgy"><img  className ="imgx"  src="https://smedia2.intoday.in/aajtak/aajtakhd/images/aajtakHd_logo.png?bypass=true"/></div> 
        <div className="imgy">  <img  className ="imgx" src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?576"/></div>
           <div className="imgy"><img  className ="imgx" src="https://akm-img-a-in.tosshub.com/sites/btmt/businesstoday/resources/css/images/btnav-newlogo.png?size=48:21"/></div>
       
       </div>
       <div className="foot2">
           <p1 className="last">Copyright © 2022 Living Media India Limited. For reprint rights: Syndications Today</p1>
       </div>
   </div>
  

  
  
  
   </div>




    );

};