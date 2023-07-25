import React, { useState } from "react";
import './BatchDetails.css';

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

export default function  BatchDetail({onButtonClick}) {

    const [uBatchno,usetBatchno]=useState("");
      const [ubatchSize,usetBatchSize]=useState(""); 
      const [upacking ,usetPacking]=useState('');
      const [umfgdate ,usetMfgdate]=useState('');
      const [uexpdate ,usetExpdate]=useState('');
      const [uretestdate ,usetRetestdate]=useState('');
      const[usample,usetSample]=useState('');
      const [editId ,setEditId]=useState(-1);
  const[data,setData]=useState([]);
  const[items,setItems]=useState([]);
    const { Formik } = formik;
    const navigate = useNavigate();
    const schema = yup.object().shape({
      Batchno: yup.string().required(),
      mfgdate: yup.string().required(),
      expdate: yup.string().required(),
      retestdate: yup.string().required(),
      batchSize:yup.string().required(),
      packing:yup.string().required(),
      sample:yup.string().required(),
  
  
    });
// useEffect(()=>{
    
// },[])

const handleSubmit=(values,{setSubmitting})=>{
  console.log("val", values)

  const id = data.length +1;
  axios.post('http://localhost:3000/batches', {id:id,values: values})
.then(res => setItems(res))
.catch(err =>console.log(err));
setSubmitting(false);
axios.get('http://localhost:3000/batches')
    .then(res =>setData(res.data))
    .catch(err =>console.log(err));

}
const handleEdit=(id,values)=>{
  axios.get('http://localhost:3000/batches/'+id)
  .then(res =>{
    usetBatchno(res.data.values.Batchno)
    usetBatchSize(res.data.values.batchSize)
    usetPacking(res.data.values.packing)
    usetMfgdate(res.data.values.mfgdate)
    usetExpdate(res.data.values.expdate)
    usetRetestdate(res.data.values.retestdate)
    usetSample(res.data.values.sample)
  })
  .catch(err =>console.log(err));

setEditId(id)
}
const handleUpdate=()=>{
  axios.put('http://localhost:3000/batches/'+editId,{id:editId,values:{uBatchno,ubatchSize,upacking,umfgdate,uexpdate,uretestdate,usample} })
  .then(res => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    setEditId(-1);
  }).catch(err=>console.log(err));
}
const handlePage=(id)=>{
  axios.delete('http://localhost:3000/batches/'+id)
  .then(res =>{
   // eslint-disable-next-line no-restricted-globals
   location.reload()
  })
  .catch(err =>console.log(err));
  navigate('TypeOfAnalysis')
}
 const handleDelete=(id)=>{
axios.delete('http://localhost:3000/batches/'+id)
  .then(res =>{
   // eslint-disable-next-line no-restricted-globals
   location.reload()
  })
  .catch(err =>console.log(err));

 }
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
 
                 <Formik
  validationSchema={schema}
  onSubmit={handleSubmit}
  initialValues={{
    Batchno: '',
    mfgdate: '',
    expdate: '',
    retestdate: '',
    batchSize:'',
    packing:'',
    sample:'',

  }}
  >
             {({isSubmitting, handleSubmit, handleChange,handleReset, values, touched, errors }) => (
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

               <Form.Group as={Col} controlId="validationFormik02">
                 <Form.Label className="cardcolhed">
                 Batch Size
                  
                 </Form.Label>
                 <Form.Control className="cardcolhedinput"
                 type="text"
                 name="batchSize"
                 value={values.batchSize}
                 onChange={handleChange} 
                 //isInvalid={!!errors.batchSize}    
                 />
                 {/* <Form.Control.Feedback type="invalid">
              {errors.batchSize}
            </Form.Control.Feedback> */}
               </Form.Group>

               <Form.Group as={Col} controlId="validationFormik03">
                 <Form.Label className="cardcolhed">
                 Nature Of Packing
                   
                 </Form.Label>
                 <Form.Control className="cardcolhedinput" 
                 type="text"
                 name="packing"
                 value={values.packing}
                 onChange={handleChange}
                // isInvalid={!!errors.packing}  
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
                  value={values.mfgdate}
                  onChange={handleChange}
                  isInvalid={!!errors.mfgdate}
                />
                 <Form.Control.Feedback type="invalid">
            {errors.mfgdate}
          </Form.Control.Feedback>
               </Form.Group>

               <Form.Group as={Col} controlId="validationFormik05">
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

               <Form.Group as={Col} controlId="validationFormik06">
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
               <Form.Group as={Col} controlId="validationFormik07">
                 <Form.Label className="cardcolhed">
                 Sample Quantity
                 </Form.Label>
                 <Form.Control className="cardcolhedinput"
                 type="text"
                 //  placeholder="City"
                  name="sample"
                  value={values.sample}
                  onChange={handleChange}
                  //isInvalid={!!errors.sample}
                  />
                  {/* <Form.Control.Feedback type="invalid">
            {errors.sample}
          </Form.Control.Feedback> */}
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
                  onClick={handleReset}
                  >
                   <AiOutlineClose size={24} /> Clear
                </button>
                <button className="cardbutton" type="submit" disabled={isSubmitting}
                onClick={handleSubmit}
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
                        {
                            data.map((user,index) => ( 
                              user.id === editId ?
                              <tr>
                                <td>{user.id}</td>
                                <td><input type="text" value={uBatchno} onChange={(e=>usetBatchno(e.target.value))}/></td>
                                <td><input type="text" value={ubatchSize} onChange={(e=>usetBatchSize(e.target.value))}/></td>
                                <td><input type="text" value={upacking} onChange={(e=>usetPacking(e.target.value))}/></td>
                                <td><input type="text" value={umfgdate} onChange={(e=>usetMfgdate(e.target.value))}/></td>
                                <td><input type="text" value={uexpdate} onChange={(e=>usetExpdate(e.target.value))}/></td>
                                <td><input type="text" value={uretestdate} onChange={(e=>usetRetestdate(e.target.value))}/></td>
                                <td><input type="text" value={usample} onChange={(e=>usetSample(e.target.value))}/></td>
                                <td >
                            <div>
                            <BiEdit  size={20} color={'#9AC037'} onClick={handleUpdate}/>
                            </div>
                            </td>
                              </tr>: 

                     <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.values.Batchno}</td>
                        <td>{user.values.batchSize}</td>
                        <td>{user.values.packing}</td>
                        <td>{user.values.mfgdate}</td>
                        <td>{user.values.expdate}</td>
                        <td>{user.values.retestdate}</td>
                        <td>{user.values.sample}</td>
                        <td >
                            <div>
                            <BiEdit  size={20} color={'#9AC037'} onClick={()=>handleEdit(user.id)}/>
                            <RiDeleteBinLine className='tablerowicon' size={20} color={'#9AC037'} onClick={()=> handleDelete(user.id)}/>
                            </div>
                            </td>
                            </tr>
                   

                            ))
}

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