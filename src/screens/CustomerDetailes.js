import React,{useState} from 'react'
import './Styles.css';
import Sidenavbar from '../components/Sidenavbar';
import profilepic from "../assets/avater2.jpg";
import {IoIosAddCircleOutline} from 'react-icons/io';
import { AiOutlineLeft, AiOutlineCheck } from "react-icons/ai";
import {BiRightArrowAlt} from 'react-icons/bi'
import Titlebar from '../components/Titlebar';
import { Card,Col,Row,Form, Button,InputGroup,} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import * as formik from 'formik';
import * as Yup from 'yup';
import Select from 'react-select'
import { useDispatch } from 'react-redux';
import { changeCustomerDetails } from '../redux/FormSlice';

export default function CustomerDetailes({onButtonClick}) {
const[formState, setFormState]=useState(true);
  const navigate = useNavigate();
  const { Formik } = formik;
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    companyName: Yup.string()
    .required('required'),
    contactPersonName: Yup.string()
    .required('required'),
    licenceNo: Yup.string()
    .required('required'),
    phoneNo: Yup.string()
    .required('required'),
    emailId: Yup.string()
    .required('required'),
    address1: Yup.string()
    .required('required'),
  city: Yup.string()
    .required('required'),
    state: Yup.string()
    .required('required'),
    pincode: Yup.string()
    .required('required')
  })
  
  const handleSubmit=(values)=>{
    dispatch(changeCustomerDetails(
      {
companyName:values.companyName,
contactPersonName:values.contactPersonName,
licenceNo:values.licenceNo,
phoneNo:values.phoneNo,
emailId:values.emailId,
address1:values.address1,
city:values.city,
state:values.state,
pincode:values.pincode,
phoneNo1:values.phoneNo1,
address2:values.address2

      })
    )
    onButtonClick("SampleDetails")
  }

  return (

    <div >
        
      

       <div >
        <div >
         

        <div>
        
          </div> 

          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Customer Details</text>
              </div>
              <div className="cardcolumnpadding">
                {/* ---------------------------------   card column start  -------------------------------------------- */}
                <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        companyName: '',
        contactPersonName: '',
        licenceNo: '',
        phoneNo: '',
        phoneNo1:'',
        emailId: '',
        address1: '',
        address2:'',
        city: '',
        state: '',
        pincode: '',
       
      }}
      >
         {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3 ">
                                   <Form.Group as={Col} controlId="validationFormik01">
                    <Form.Label className="cardcolhed">
                      Company Name<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    {/* <Form.Select  className='cardcolhedinput' aria-label="Default select example">
      <option>Select companyName</option>
      <option value="1">Ranbaxy</option>
      <option value="2">Mankindpharma</option>
      <option value="3">aboot</option>
      <option value="3">Dr Reddys</option>
    </Form.Select> */}
     {/* <Form.Select defaultValue="Ranbaxy" name='companyName' value={values.companyName}
     isInvalid={!!errors.companyName}>
          
            <option >Ranbaxy</option>
      <option>Mankindpharma</option>
      <option >aboot</option>
      <option>Dr Reddys</option>
           </Form.Select> */}
                       <Form.Control className="cardcolhedinput"
                     type="text"
                     name="companyName"
                     value={values.companyName}
                     onChange={handleChange}
                     isInvalid={!!errors.companyName}
                    />  
                     <Form.Control.Feedback type="invalid">
                  {errors.companyName}
                </Form.Control.Feedback> 
            
                  </Form.Group> 
                   <Form.Group as={Col} controlId="validationFormik02">
                    <Form.Label className="cardcolhed">
                      Contact Person Name
                      {/* <text className="cardcolhedstar">*</text>{" "} */}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput"
                    type="text"
                    name="contactPersonName"
                    value={values.contactPersonName}
                    onChange={handleChange}
                    isInvalid={!!errors.contactPersonName}
                    />
                     <Form.Control.Feedback type="invalid">
                  {errors.contactPersonName}
                </Form.Control.Feedback> 
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik15">
                    <Form.Label className="cardcolhed">
                      Manufacturing Lic No
                      <text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <InputGroup hasValidation>
                    {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                    <Form.Control className="cardcolhedinput" 
                     type="text"
                    //  placeholder="Username"
                     aria-describedby="inputGroupPrepend"
                     name="licenceNo"
                     value={values.licenceNo}
                     onChange={handleChange}
                     isInvalid={!!errors.licenceNo}
                    />
                    <Form.Control.Feedback type="invalid">
                  {errors.licenceNo}
                </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Row className="mb-3 ">
                  <Form.Group as={Col} controlId="validationFormik03">
                    <Form.Label className="cardcolhed">
                      Phone Number
                      {/* <text className="cardcolhedstar">*</text>{" "} */}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" 
                     type="numeric"
                
                    //  placeholder="City"
                     name="phoneNo"
                     value={values.phoneNo}
                     onChange={handleChange}
                     isInvalid={!!errors.phoneNo}
                    />
                      <Form.Control.Feedback type="invalid">
                {errors.phoneNo}
              </Form.Control.Feedback> 
                  </Form.Group>

                  <Form.Group as={Col} >
                    <Form.Label className="cardcolhed">
                      Additional Phone Number{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" 
                     type="numeric"
                  
                     //  placeholder="City"
                      name="phoneNo1"
                      value={values.phoneNo1}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik04">
                    <Form.Label className="cardcolhed">
                      Email Id
                      {/* <text className="cardcolhedstar">*</text>{" "} */}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" 
                     type="email"
                    //  placeholder="State"
                     name="emailId"
                     value={values.emailId}
                     onChange={handleChange}
                    isInvalid={!!errors.emailId}
                    />
                      <Form.Control.Feedback type="invalid">
                {errors.emailId}
              </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Row className="mb-3 ">
                  <Form.Group as={Col} controlId="validationFormik05">
                    <Form.Label className="cardcolhed">
                      Address Line1<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput"
                     type="text"
                    //  placeholder="Zip"
                     name="address1"
                     value={values.address1}
                     onChange={handleChange}
                     isInvalid={!!errors.address1}
                    />
                     <Form.Control.Feedback type="invalid">
                {errors.address1}
              </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label className="cardcolhed">
                      Address Line2{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" 
                    type="text"
                    //  placeholder="Zip"
                     name="address2"
                     value={values.address2}
                     onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik06">
                    <Form.Label className="cardcolhed">
                      City<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" 
                    type="text"
                    // placeholder="Zip"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                    />
                     <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Row className="mb-3 ">
                  <Form.Group as={Col} controlId="validationFormik07">
                    <Form.Label className="cardcolhed">
                      State<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput" 
                     type="text"
                    //  placeholder="State"
                     name="state"
                     value={values.state}
                     onChange={handleChange}
                     isInvalid={!!errors.state}
                    />
                     <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="validationFormik08">
                    <Form.Label className="cardcolhed">
                      Pincode<text className="cardcolhedstar">*</text>{" "}
                    </Form.Label>
                    <Form.Control className="cardcolhedinput"
                     type='numeric'
                
                    //  placeholder="Zip"
                     name="pincode"
                     value={values.pincode}
                     onChange={handleChange}
                     isInvalid={!!errors.pincode}
                    />
                    
              <Form.Control.Feedback type="invalid">
                {errors.pincode}
              </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} className="cardbuttonwid">
                    <Form.Label></Form.Label>
                    <button className="cardbutton" type="submit"
                      
                      >
                      <AiOutlineCheck /> Next
                    </button>
                  </Form.Group>
                </Row>
                </Form>
          )}
                </Formik>

       {/* ---------------------------------   card column end  -------------------------------------------- */}
              </div>
            </Card>
          </div>

          </div>
          </div>
          
        
        </div>
  )
}