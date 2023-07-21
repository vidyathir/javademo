import React from 'react'
import './BatchDetails.css';
import Sidenavbar from '../components/Sidenavbar';
import Titlebar from '../components/Titlebar';
import { Card,Col,Row,Form,Table } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';

import {BiRightArrowAlt} from 'react-icons/bi'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {AiOutlineClose } from 'react-icons/ai'
import {MdOutlineAdd,} from 'react-icons/md'
import {RiDeleteBinLine} from 'react-icons/ri'
import {BiEdit} from 'react-icons/bi'

export default function BatchDetails() {

    const { Formik } = formik;

  const schema = yup.object().shape({
    Batchno: yup.string().required(),
    mfgdate: yup.string().required(),
    expdate: yup.string().required(),
    retestdate: yup.string().required(),

  });


    const navigate = useNavigate();

  return (
    
<div >
        
        
 
        <div >
         <div >
          
        
 
         <div className='mt-3'>
         {/* <Progressbar steps={steps} activeStep={activeStep} />
       <button onClick={() => handleStepClick(activeStep - 1)}>Previous</button>
       <button onClick={() => handleStepClick(activeStep + 1)}>Next</button> */}
           </div>
 
           <div>
             <Card className="maincards">
               <div className="cardtitle">
                 <text className="cardtitlehed">Batch Details</text>
               </div>
               <div className="cardcolumnpadding">
                 {/* ---------------------------------   card column start  -------------------------------------------- */}
 
                 <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        Batchno: '',
        mfgdate: '',
        expdate: '',
        retestdate: '',

      }}
      >
                 {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
                 <Row className="mb-3 ">
                   <Form.Group as={Col} controlId="validationFormik01">
                     <Form.Label className="cardcolhed">
                     Batch No./Lot No(s)<text className="cardcolhedstar">*</text><text className='cardcolhedtextsm'>(Attach Annexure If multiple sample batches with this TRF)</text>
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" 
                      type="text"
                      name="Batchno"
                      value={values.Batchno}
                      onChange={handleChange}
                      isInvalid={!!errors.Batchno}     
                       />
                        <Form.Control.Feedback type="invalid">
                  {errors.Batchno}
                </Form.Control.Feedback>
                    
                   </Form.Group>
 
                   <Form.Group as={Col}>
                     <Form.Label className="cardcolhed">
                     Batch Size
                      
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" />
                   </Form.Group>
 
                   <Form.Group as={Col}>
                     <Form.Label className="cardcolhed">
                     Nature Of Packing
                       
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" />
                   </Form.Group>
                 </Row>
 
                 {/* ---------------------------------   card column start  -------------------------------------------- */}
 
                 <Row className="mb-3 ">
                   <Form.Group as={Col} controlId="validationFormik03">
                     <Form.Label className="cardcolhed">
                     Mfg. Date<text className="cardcolhedstar">*</text>{" "}
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" 
                     type="date"
                     //  placeholder="City"
                      name="mfgdate"
                      value={values.mfgdate}
                      onChange={handleChange}
                      isInvalid={!!errors.mfgdate}
                    />
                     <Form.Control.Feedback type="invalid">
                {errors.mfgdate}
              </Form.Control.Feedback>
                   </Form.Group>
 
                   <Form.Group as={Col} controlId="validationFormik04">
                     <Form.Label className="cardcolhed">
                     Exp. Date<text className="cardcolhedstar">*</text>
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" 
                     type="date"
                     //  placeholder="City"
                      name="expdate"
                      value={values.expdate}
                      onChange={handleChange}
                      isInvalid={!!errors.expdate}
                     />
                     <Form.Control.Feedback type="invalid">
                {errors.expdate}
              </Form.Control.Feedback>
                   </Form.Group>
 
                   <Form.Group as={Col} controlId="validationFormik05">
                     <Form.Label className="cardcolhed">
                     Retest Date<text className="cardcolhedstar">*</text>{" "}
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" 
                      type="date"
                      //  placeholder="City"
                       name="retestdate"
                       value={values.retestdate}
                       onChange={handleChange}
                       isInvalid={!!errors.retestdate}
                     />
                      <Form.Control.Feedback type="invalid">
                {errors.retestdate}
              </Form.Control.Feedback>
                   </Form.Group>
                 </Row>
 
                 {/* ---------------------------------   card column start  -------------------------------------------- */}
 
                 <Row className="mb-3 ">
                   <Form.Group as={Col}>
                     <Form.Label className="cardcolhed">
                     Sample Quantity
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" />
                   </Form.Group>
 
                   <Form.Group as={Col}>
                     {/* <Form.Label className="cardcolhed">
                       Address Line2{" "}
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" /> */}
                   </Form.Group>
 
                   <Form.Group as={Col} className="cardbuttonwiddouble">
                     {/* <Form.Label > </Form.Label> */}
                     {/* <Form.Control className="cardcolhedinput" /> */}
                     <button className="cardbutton"
                    //  onClick={() => navigate("batchdetails")}
                      >
                       <AiOutlineClose size={24} /> Clear
                    </button>
                    <button className="cardbutton"
                    //  onClick={() => navigate("batchdetails")}
                      >
                       <MdOutlineAdd size={24} /> Add
                    </button>
                   </Form.Group>
                 </Row>
                 </Form>
         )}
                 </Formik>
                 {/* ---------------------------------   card column start  -------------------------------------------- */}
 
                     <hr className='hrcolor'/>


                <Card className='cardtablesize'>
                    <Table responsive>
                     <thead className='table-custom' >
                     <tr >
                        <th>S.No</th>
                        <th>Batch No./Lot No(s)</th>
                        <th>Batch Size</th>
                        <th>Nature Of Packaging</th>                        
                        <th>Mfg. Date</th>
                        <th>Exp. Date</th>
                        <th>Retest Date</th>
                        <th>Sample Quantity</th>
                        <th>Edit & Delete</th>


                     </tr>
                     </thead>
                     <tbody className='tablebody-custom'>
                     <tr>
                        <td>01</td>
                        <td>0101</td>
                        <td>xxxxx</td>
                        <td>xxxxx</td>
                        <td>11/02/2023</td>
                        <td>31/04/2023</td>
                        <td>01/02/2023</td>
                        <td>xxxxxx</td>
                        <td >
                            <div>
                            <BiEdit  size={20} color={'#9AC037'}/>
                            <RiDeleteBinLine className='tablerowicon' size={20} color={'#9AC037'}/>
                            </div>
                            </td>

                     </tr>

                     <tr>
                        <td>01</td>
                        <td>0101</td>
                        <td>xxxxx</td>
                        <td>xxxxx</td>
                        <td>11/02/2023</td>
                        <td>31/04/2023</td>
                        <td>01/02/2023</td>
                        <td>xxxxxx</td>
                        <td >
                            <div>
                            <BiEdit  size={20} color={'#9AC037'}/>
                            <RiDeleteBinLine className='tablerowicon' size={20} color={'#9AC037'}/>
                            </div>
                            </td>

                     </tr>

                     </tbody>
                    </Table>
                </Card>

                <div className='cardbuttonboubleend'>
                <button className="cardbuttonoutline"
                     onClick={() => navigate("SampleDetails")}
                      >
                       <BiLeftArrowAlt size={24} /> Previous
                    </button>
                    <button className="cardbutton" type='submit'
                     onClick={() => navigate("TypeOfAnalysis")}
                      >
                      Next <BiRightArrowAlt size={24} /> 
                    </button>
                </div>
 
                 {/* ---------------------------------   card column end  -------------------------------------------- */}
               </div>
             </Card>
           </div>
 
           </div>
           </div>
           
         
         </div>
   )
 }
