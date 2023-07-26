import React, { useState } from "react";
import './Styles.css';

import { Card,Col,Row,Form,Table } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';
import axios from "axios";
import {BiRightArrowAlt} from 'react-icons/bi'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {AiOutlineClose } from 'react-icons/ai'
import {MdOutlineAdd,} from 'react-icons/md'
import {RiDeleteBinLine} from 'react-icons/ri'
import {BiEdit} from 'react-icons/bi'
import { useEffect } from "react";
import {useForm} from "react-hook-form";
export default function  BatchDetail({onButtonClick}) {
  const [inputs, setInputs] = useState({
    batchno: "",
    batchSize: "",
    packing:"",
    mfgdate:"",
    expdate:"",
    retestdate:"",
    sample:""
  });
const {
  register,
  handleSubmit,formState:{errors}}
  =useForm();

    const navigate = useNavigate();
    const schema = yup.object().shape({
      batchno: yup.string().required('required'),
      mfgdate: yup.string().required('required'),
      expdate: yup.string().required('required'),
      retestdate: yup.string().required('required'),
    
     
  
  
    });
    const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    
  };
  const onSubmit = (inputs) => {
   // e.preventDefault();
    //const id = inputs.length +1;
  console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
         batchno: "",
        batchSize: "",
        packing:"",
        mfgdate:"",
        expdate:"",
        retestdate:"",
        sample:""
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        batchno: "",
        batchSize: "",
        packing:"",
        mfgdate:"",
        expdate:"",
        retestdate:"",
        sample:""
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ batchno: tempData.batchno, batchSize: tempData.batchSize,packing: tempData.packing, 
    mfgdate:tempData.mfgdate,expdate: tempData.expdate, retestdate:tempData.retestdate,sample: tempData.sample });
    setEditClick(true);
    setEditIndex(index);
  };

  return(
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
                 <form  onSubmit={handleSubmit(onSubmit)}>
             <Row className="mb-3 ">
               <Form.Group as={Col} controlId="validationFormik01">
                 <Form.Label className="cardcolhed">
                 Batch No./Lot No(s)<text className="cardcolhedstar">*</text><text className='cardcolhedtextsm'>(Attach Annexure If multiple sample batches with this TRF)</text>
                 </Form.Label>
                 <Form.Control className="cardcolhedinput" 
                  type="text"
                  name="batchno"
                 //value={inputs.batchno}
                  onChange={handleChange}
                  //isInvalid={!!errors.batchno} 
                  {...register("batchno",{
                    required:"required",
                    pattern:{
                      message:'please enter a batch no'
                    }
                  })}    
                   />
                    
              {errors.batchno && <p className="errorMsg">{errors.batchno.message}</p>}
            
                
               </Form.Group>

               <Form.Group as={Col} controlId="validationFormik02">
                 <Form.Label className="cardcolhed">
                 Batch Size
                  
                 </Form.Label>
                 <Form.Control className="cardcolhedinput"
                 type="text"
                 name="batchSize"
                 //value={inputs.batchSize}
                 onChange={handleChange} 
                 //isInvalid={!!errors.batchSize}  
                 {...register("batchSize")}    
                 />
               </Form.Group>

               <Form.Group as={Col} controlId="validationFormik03">
                 <Form.Label className="cardcolhed">
                 Nature Of Packing
                   
                 </Form.Label>
                 <Form.Control className="cardcolhedinput" 
                 type="text"
                 name="packing"
                 //value={inputs.packing}
                 onChange={handleChange}
                // isInvalid={!!errors.packing}  
                {...register("packing")}  
                 />
                 {/* <Form.Control.Feedback type="invalid">
              {errors.packing}
            </Form.Control.Feedback> */}
               </Form.Group>
             </Row>

             {/* ---------------------------------   card column start  -------------------------------------------- */}

             <Row className="mb-3 ">
               <Form.Group as={Col} controlId="validationFormik04">
                 <Form.Label className="cardcolhed">
                 Mfg. Date<text className="cardcolhedstar">*</text>{" "}
                 </Form.Label>
                 <Form.Control className="cardcolhedinput" 
                 type="date"
                 //  placeholder="City"
                  name="mfgdate"
                  //value={inputs.mfgdate}
                  onChange={handleChange}
                 // isInvalid={!!errors.mfgdate}
                 {...register("mfgdate",{
                  required:"required",
                  pattern:{
                    message:'please enter a mfg date'
                  }
                })}    
                 />
                  
            {errors.mfgdate && <p className="errorMsg">{errors.mfgdate.message}</p>}
               </Form.Group>

               <Form.Group as={Col} controlId="validationFormik05">
                 <Form.Label className="cardcolhed">
                 Exp. Date<text className="cardcolhedstar">*</text>
                 </Form.Label>
                 <Form.Control className="cardcolhedinput" 
                 type="date"
                 //  placeholder="City"
                  name="expdate"
                  //value={inputs.expdate}
                  onChange={handleChange}
                 // isInvalid={!!errors.expdate}
                 {...register("expdate",{
                  required:"required",
                  pattern:{
                    message:'please enter a exp date'
                  }
                })}    
                 />
                  
            {errors.expdate && <p className="errorMsg">{errors.expdate.message}</p>}
               </Form.Group>

               <Form.Group as={Col} controlId="validationFormik06">
                 <Form.Label className="cardcolhed">
                 Retest Date<text className="cardcolhedstar">*</text>{" "}
                 </Form.Label>
                 <Form.Control className="cardcolhedinput" 
                  type="date"
                  //  placeholder="City"
                   name="retestdate"
                   //value={inputs.retestdate}
                   onChange={handleChange}
                  // isInvalid={!!errors.retestdate}
                  {...register("retestdate",{
                    required:"required",
                    pattern:{
                      message:'please enter a retest date'
                    }
                  })}    
                   />
                    
              {errors.retestdate && <p className="errorMsg">{errors.retestdate.message}</p>}
               </Form.Group>
             </Row>

             {/* ---------------------------------   card column start  -------------------------------------------- */}

             <Row className="mb-3 ">
               <Form.Group as={Col} controlId="validationFormik07">
                 <Form.Label className="cardcolhed">
                 Sample Quantity
                 </Form.Label>
                 <Form.Control className="cardcolhedinput"
                 type="text"
                 //  placeholder="City"
                  name="sample"
                  //value={inputs.sample}
                  onChange={handleChange}
                  //isInvalid={!!errors.sample}
                  {...register("sample")}    
                   />
                    
    
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
                 <button className="cardbutton" type="reset"
                
                  >
                   <AiOutlineClose size={24} /> Clear
                </button>
                <button className="cardbutton" type="submit" 
                onClick={handleSubmit}
                  >{editClick ? "update" : "Add"}
                   <MdOutlineAdd size={24} />
                </button>
               </Form.Group>
             </Row>
             </form>
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
                     {tableData.map((item, i) => (
                              <tr>
                                <td>{i}</td>
                                <td>{item.batchno}</td>
                        <td>{item.batchSize}</td>
                        <td>{item.packing}</td>
                        <td>{item.mfgdate}</td>
                        <td>{item.expdate}</td>
                        <td>{item.retestdate}</td>
                        <td>{item.sample}</td>
                        <td >
                            <div>
                            <BiEdit  size={20} color={'#9AC037'} onClick={()=>handleEdit(i)}/>
                            <RiDeleteBinLine className='tablerowicon' size={20} color={'#9AC037'} onClick={()=> handleDelete(i)}/>
                            </div>
                            </td>     
                              </tr>

                   

                     ))}

                     </tbody>
                    </Table>
                </Card>

                <div className='cardbuttonboubleend'>
                <button className="cardbuttonoutline"
                     onClick={() => onButtonClick("SampleDetails")}
                      >
                       <BiLeftArrowAlt size={24} /> Previous
                    </button>
                    <button className="cardbutton" type='submit'
                     onClick={()=>onButtonClick("TypeOfAnalysis")}
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