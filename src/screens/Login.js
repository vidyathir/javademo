import React,{useEffect, useState} from "react";
import logo from "../assets/loginImage.png";
import{useForm} from 'react-hook-form';
import './Styles.css';
import logo2 from  '../assets//LoginLogo.png';
import {AiOutlineEyeInvisible,AiFillEye} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUserToken } from "../redux/FormSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [userToken, setUserToken] = useState({});
const[data1,setData1] =useState({
})
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

 
  const navigate = useNavigate();

 
  useEffect(()=>{
    let items = {
      email:data1.email,
      password:data1.password
    };
  
    fetch("http://3.91.97.121:3000/api/revinlabsUsers/signIn", {
         
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           // add any other headers you need here
           Accept: "application/json",
         },
         body: JSON.stringify(items),
       })
         .then((response) => response.json())
         .then((responseData) => setUserToken(responseData))
         console.log("usertoken", userToken)
 }, [data1.email, data1.password, userToken],

  );
  
  function onSubmit(data1) {
    dispatch(
      changeUserToken({
        usertype:userToken.userType,
        token:userToken.id
      }))
    setData1({...data1})
    //const userData = JSON.parse(localStorage.getItem(data.email));
    // getItem can return actual value or null
   if(userToken!==null){
    if (userToken.userType === "SRO") {
      navigate("/Progress");
    }
    if (userToken.userType === "Analyst") {
      navigate("/AnalystDashboaed");
    }
    if (userToken.userType === "Reviewer") {
      navigate("/ReviewDashboard");
    }
    if (userToken.userType === "Approver") {
      navigate("/approverDashboard");
    }}
    else{
      alert("invalid login")
    }
  
  }

 


 return (
     

 <div className="row ">
 <div className="col-sm-6 xs-6 md-6" >
 {/* Image */}
 <img
 src={logo}
 alt="Logi"
 className="img-fluid logoimage"
 style={{width:'100vh',height:'100vh',objectFit:'cover'}}
 />
 </div>
  <div className="col-sm-6 xs-6 md-6  p-3" style={{alignItems:'center'}}>
 {/* Login Form */}

 <div className="logo">
        
          <img src={logo2} alt="" />
     

        <div className="login-form" style={{justifySelf:'center'}}>
          <h5 className="loginhead mt-5">Login</h5>
          <p className="mb-3">Please enter your login details to sign in.</p>
        <br /> 
      
           <form onSubmit={handleSubmit(onSubmit)}> 
            <label style={{ color: "#818181",fontSize:12,fontWeight:500,marginBottom:10 }}>Email Address</label>
            <div>
              <div className="form-control " style={{outline:'none'}}>
            <input
              type="email"
              className="loginInputEmail"
              placeholder="example@gmail.com" 
              {...register("email", { required: true })} 
              style={{color:'#3A4175',outline:'none',border:"none",height:40,width:400,alignSelf:'center',fontSize:12,fontWeight:500}}
            />
            </div>  
        
            {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
            <br />
            <label style={{ color: "#818181",fontSize:12,fontWeight:500,marginBottom:10,marginTop:15 }}>Password</label>

            <div className="form-control"style={{flexDirection:'row',alignItems:'center',display:'flex',justifyContent:'space-between',}}>
              <div>
            <input 
              type={passwordVisible ? 'text' : 'password'}
              className="loginInputPass"
              placeholder="***********" color="#3A4175"
              {...register("password", { required: true })} 
          
             />
             
              </div>
              <div onClick={togglePasswordVisibility}>  
             
              {passwordVisible ? <AiFillEye size={24} color="#3A4175" /> : <AiOutlineEyeInvisible size={24} color="#3A4175" />}
           
             </div>
              </div>  
              {errors.email && <span style={{ color: "red" }}>
                    *password* is mandatory </span>}
            <br /> 
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                width:434,
                marginTop:15,
                marginBottom:15
              }}
            >
              <div style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'center' }}>
                <input  type="checkbox"  style={{height:23,width:23,color:'#3A4175',outline:'none',cursor:'pointer',}} />
                <text style={{fontSize:16,fontWeight:500,color:'#818181',paddingLeft:4}}>keep me logged in</text> 
              </div>

              <div className="forgotpassword" >
                <a href ="/" style={{color:'#9AC037',fontSize:16,fontWeight:500,cursor:'pointer'}}>Forgot Password?</a>
              </div>
            </div>
          </div>
          <br />
          <button 
            type="submit"
            className="button"
            style={{ fontSize: 20, fontWeight: 700 }}
          >
            Log In
          </button>
          </form>
        </div>

</div>
</div>
</div>
);
};

export default Login;