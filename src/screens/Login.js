import React,{useState} from "react";
import logo from "../assets/loginImage.png";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './MStyles.css';
import logo2 from  '../assets//LoginLogo.png';
import {AiOutlineEyeInvisible,AiFillEye} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


// const validationSchema = Yup.object().se({
//   email: Yup.string().email('Invalid email address').required('required'),
//   password: Yup.string().required('required')
// });

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email address')
    .required('required'),
    password: Yup.string()
    .required('required')
  });
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {

      setSubmitting(false);
    }, 500);
    navigate("/Progress")
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);


 return (
     

 <div className="row">
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
          <img src={logo2} />
     

        <div className="login-form" style={{justifySelf:'center'}}>
          <h5 className="loginhead mt-5">Login</h5>
          <p className="mb-3">Please enter your login details to sign in.</p>
        <br /> 
      
        <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit} > 
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
            <label style={{ color: "#818181",fontSize:12,fontWeight:500,marginBottom:10 }}>Email Address</label>
            <div>
              <div className="form-control " style={{outline:'none'}}>
            <input
              type="email"
              className="loginInputEmail"
              placeholder="example@gmail.com" 
              value={values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              style={{color:'#3A4175',outline:'none',border:"none",height:40,width:400,alignSelf:'center',fontSize:12,fontWeight:500}}
            />
 
            </div>  
        
             <div style={{color:"red"}}>{touched.email && errors.email}</div>           
            <br />
            <label style={{ color: "#818181",fontSize:12,fontWeight:500,marginBottom:10,marginTop:15 }}>Password</label>

            <div className="form-control"style={{flexDirection:'row',alignItems:'center',display:'flex',justifyContent:'space-between',}}>
              <div>
            <input 
              type={passwordVisible ? 'text' : 'password'}
              className="loginInputPass"
              placeholder="***********" color="#3A4175"
              value={values.password}
            onChange={handleChange("password")}
            onBlur={handleBlur("password")}
             />
             
              </div>
              <div onClick={togglePasswordVisibility}>  
             
              {passwordVisible ? <AiFillEye size={24} color="#3A4175" /> : <AiOutlineEyeInvisible size={24} color="#3A4175" />}
           
             </div>
              </div>  
              <div style={{color:"red"}}>{touched.password && errors.password}</div>
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
          </Form>);
                }}
          </Formik>
        </div>

</div>
</div>
</div>
);
};

export default Login;