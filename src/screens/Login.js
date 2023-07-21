import React,{useState} from "react";
import "./Login.css";
import loginImage from "../assets/loginImage.png";
import logo2 from "../assets/logo 2.png";
import { Formik,  Form } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
// import {Form} from 'react-bootstrap'
import {AiOutlineEyeInvisible,AiFillEye} from 'react-icons/ai'

  const LoginForm = () => {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const validationSchema = Yup.object().shape({
      email: Yup.string()
      .email('Invalid email address')
      .required('required'),
      password: Yup.string()
      .required('required')
    });
  
    const handleSubmit = (
      { email, password },
  ) => {
      console.log("email", email, "password", password);
      // setTimeout(() => {
      // }, 1000);
      navigate('Progress')
  }; 
    
    
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);


  return (
    <div className="app" >
      <div className="division-left">
        <div className="image">
          <img src={loginImage} />
        </div>
      </div>
      <div className="division-right" style={{flex:1,padding:'3%'}}>
        <div className="logo">
          <img src={logo2} />
        </div>

        <div className="login-form" style={{justifySelf:'center'}}>
          <h5 className="loginhead">Login</h5>
          <p>Please enter your login details to sign in.</p>
        <br /> 
        <Formik initialValues={{
                    email: "",
                    password: "",
                  
                }}
        validationSchema={validationSchema}
        onSubmit={(values,errors) =>{
          handleSubmit(values,errors);
        }} > 
    {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                }) => {
                  return(
           <Form onSubmit={handleSubmit}> 
            <label style={{ color: "#818181",fontSize:12,fontWeight:500 }}>Email Address</label>
            <div>
              <div className="form-control" style={{outline:'none'}}>
            <input
              type="email"
              className=""
              placeholder="example@gmail.com" 
              value={values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              style={{color:'#3A4175',outline:'none',border:"none",height:40,width:400,alignSelf:'center',fontSize:12,fontWeight:500}}
            />
 
            </div>  
        
             <div>{touched.email && errors.email}</div> 
           
            <label style={{ color: "#818181",fontSize:12,fontWeight:500 }}>Password</label>

            <div className="form-control"style={{flexDirection:'row',alignItems:'center',display:'flex',justifyContent:'space-between',}}>
              <div>
            <input 
          type= {passwordVisible ? 'text' : 'password'}
              className=""
              placeholder="***********" color="#3A4175"
              style={{border:'none',outline:'none',width:360,color:'#3A4175',fontSize:20,fontWeight:600,}}
             value={values.password}
            onChange={handleChange("password")}
            onBlur={handleBlur("password")}
            />
           
            
              </div>
              <div >  
              <span className="icon-span" onClick={togglePasswordVisibility}>
        {passwordVisible ? <AiFillEye size={24} color="#3A4175"/> : <AiOutlineEyeInvisible size={24} color="#3A4175"/>}
      </span>
            
            </div>
              
              </div>  
            <div>{touched.password && errors.password}</div>
           
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'center' }}>
                <input  type="checkbox"  style={{height:23,width:23,color:'#3A4175',outline:'none',cursor:'pointer',}} />
                <text style={{fontSize:16,fontWeight:500,color:'#818181',paddingLeft:4}}>keep me logged in</text> 
              </div>

              <p className="forgotpassword" >
                <a href ="#" style={{color:'#9AC037',fontSize:16,fontWeight:500,cursor:'pointer'}}>Forgot Password?</a>
              </p>
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
          </Form>);
                }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
