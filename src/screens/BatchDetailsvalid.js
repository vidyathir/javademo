import React,{useState} from 'react'
import Sidenavbar from '../components/Sidenavbar';
import Titlebar from '../components/Titlebar';
import { Card,Col,Row,Form,Table } from 'react-bootstrap';
// import {useNavigate} from 'react-router-dom';

import {BiRightArrowAlt} from 'react-icons/bi'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {AiOutlineClose } from 'react-icons/ai'
import {MdOutlineAdd,} from 'react-icons/md'
import {RiDeleteBinLine} from 'react-icons/ri'
import {BiEdit} from 'react-icons/bi'
import * as formik from 'formik';
import * as Yup from 'yup';


export default function BatchDetails({onButtonClick}) {

    // const navigate = useNavigate();
    const [batchNo,setBatchNO]=useState("");
    const [batchSize,setBatchSize]=useState(""); 
    const [packing ,setPacking]=useState('');
    const [mfg ,setMfg]=useState('');
    const [exp ,setExp]=useState('');
    const [reTest ,setReTest]=useState('');
    const [sample ,setSample]=useState('');
  const [allData,setAllData]=useState([])
  const [show,setShow]=useState(false)
  const [editIndex,setEditIndex]=useState()
  const { Formik } = formik;

  const schema = Yup.object().shape({
    batchNo: Yup.string()
    .required('required'),
    batchSize: Yup.string()
    .required('required'),
    packing: Yup.string()
    .required('required'),
    mfg: Yup.string()
    .required('required'),
  exp: Yup.string()
    .required('required'),
    reTest: Yup.string()
    .required('required'),
  sample: Yup.string()
    .required('required'),
  
  })


  const handleAdd=()=>{
      if(batchNo.length!==0){
      setAllData(newData=>[...newData,batchNo])
      setBatchNO("")
      }
      if(batchSize.length!==0){
        setAllData(newData=>[...newData,batchSize])
        setBatchSize("")
        }
        if(packing.length!==0){
          setAllData(newData=>[...newData,packing])
          setPacking("")
          }
          if(mfg.length!==0){
            setAllData(newData=>[...newData,mfg])
            setMfg("")
            }
            if(exp.length!==0){
              setAllData(newData=>[...newData,exp])
              setExp("")
              }
              if(reTest.length!==0){
                setAllData(newData=>[...newData,reTest])
                setReTest("")
                }
                if(sample.length!==0){
                  setAllData(newData=>[...newData,sample])
                  setSample("")
                  }

  }

  const handleDelete=(index)=>{
      allData.splice(index,1)
      setAllData([...allData])
  }

  const handleEdit=(i)=>{
      setAllData(allData[i])
      setShow(true)
      setEditIndex(i)
  }
  const handleUpdate=()=>{
      allData.splice(editIndex,1,allData)
      setAllData([...allData])
      setShow(false)
      setBatchNO("")
      setBatchSize('')
      setPacking('')
      setMfg('')
      setExp('')
      setReTest('')
      setSample('')
  }

const handleClear=()=>{
  setBatchNO("")
  setBatchSize('')
  setPacking('')
  setMfg('')
  setExp('')
  setReTest('')
  setSample('')
}

  return (
    
<div>
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
      onSubmit={handleAdd}
      initialValues={{
        batchNo: '',
        batchSize: '',
        packing: '',
        mfg: '',
        exp: '',
        reTest: '',
        sample: ''
       
      }}
      >
         {({ handleSubmit, handleChange, handleReset, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
                 <Row className="mb-3 ">
                   <Form.Group as={Col} controlId="validationFormik01">
                     <Form.Label className="cardcolhed">
                     Batch No./Lot No(s)<text className="cardcolhedstar">*</text><text className='cardcolhedtextsm'></text>
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" 
                    type="text"
                    name="batchNo"
                    value={values.batchNo}
                    onChange={handleChange}
                    isInvalid={!!errors.batchNo}
                   />
                   <Form.Control.Feedback type="invalid">
                 {errors.batchNo}
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
                     isInvalid={!!errors.batchSize}
                    />
                    <Form.Control.Feedback type="invalid">
                  {errors.batchSize}
                </Form.Control.Feedback>
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
                     isInvalid={!!errors.packing}
                    />
                    <Form.Control.Feedback type="invalid">
                  {errors.packing}
                </Form.Control.Feedback>
                   </Form.Group>
                 </Row>
 
                 {/* ---------------------------------   card column start  -------------------------------------------- */}
 
                 <Row className="mb-3 ">
                   <Form.Group as={Col} controlId="validationFormik04">
                     <Form.Label className="cardcolhed">
                     Mfg. Date<text className="cardcolhedstar">*</text>{" "}
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" type='date' 
                     
                     name="mfg"
                     value={values.mfg}
                     onChange={handleChange}
                     isInvalid={!!errors.mfg}
                    />
                    <Form.Control.Feedback type="invalid">
                  {errors.mfg}
                </Form.Control.Feedback>
                   </Form.Group>
 
                   <Form.Group as={Col} controlId="validationFormik05">
                     <Form.Label className="cardcolhed">
                     Exp. Date<text className="cardcolhedstar">*</text>
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" type='date'
                
                     name="exp"
                     value={values.exp}
                     onChange={handleChange}
                     isInvalid={!!errors.exp}
                    />
                    <Form.Control.Feedback type="invalid">
                  {errors.exp}

                </Form.Control.Feedback>
                   </Form.Group>
 
                   <Form.Group as={Col}controlId="validationFormik06">
                     <Form.Label className="cardcolhed">
                     Retest Date<text className="cardcolhedstar">*</text>{" "}
                     </Form.Label>
                     <Form.Control className="cardcolhedinput" type='date'
                  
                     name="reTest"
                     value={values.reTest}
                     onChange={handleChange}
                     isInvalid={!!errors.reTest}
                    />
                    <Form.Control.Feedback type="invalid">
                  {errors.reTest}
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
                     name="sample"
                     value={values.sample}
                     onChange={handleChange}
                     isInvalid={!!errors.sample}
                    />
                    <Form.Control.Feedback type="invalid">
                  {errors.sample}
                </Form.Control.Feedback>
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
                     <button className="cardbutton" type='reset'
                     onClick={handleReset}
                      >
                       <AiOutlineClose size={24} /> Clear
                    </button>
                    {!show? <button className="cardbutton" type='submit'
                     
                      >
                       <MdOutlineAdd size={24} /> Add
                    </button>:<button className="cardbutton" type='submit'
                    
                      >
                       <MdOutlineAdd size={24} /> Update
                    </button>}
                   </Form.Group>
                 </Row>
                 </Form>
          )}
                </Formik>
 
                 {/* ---------------------------------   card column start  -------------------------------------------- */}
 
                     <hr className='hrcolor'/>

                     {
                allData.map((val,i)=>
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
                     <td>{val.i}</td>
                        <td>{val.batchNo}</td>
                        <td>{val.batchSize}</td>
                        <td>{val.packing}</td>
                        <td>{val.mfg}</td>
                        <td>{val.exp}</td>
                        <td>{val.reTest}</td>
                        <td>{val.Sample}</td>
                        <td></td>
                        <td >
                            <div>
                            <BiEdit  size={20} color={'#9AC037'} onClick={()=>handleEdit()}/>
                            <RiDeleteBinLine className='tablerowicon' size={20} color={'#9AC037'} onClick={()=>handleDelete()}/>
                            </div>
                            </td>

                     </tr>

                    

                     </tbody>
                    </Table>
                </Card>
                )}
                <div className='cardbuttonboubleend'>
                <button className="cardbuttonoutline"
                   onClick={() => onButtonClick("SampleDetails")}
                      >
                       <BiLeftArrowAlt size={24} /> Previous
                    </button>
                    <button className="cardbutton"
                    onClick={() =>onButtonClick("TypeOfAnalysis")}
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