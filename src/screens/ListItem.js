import React,{useState} from "react";
import './BatchDetails.css';

import { Card,Col,Row,Form,Table } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';
import {AiOutlineClose } from 'react-icons/ai'
import {MdOutlineAdd,} from 'react-icons/md'

import {RiDeleteBinLine} from 'react-icons/ri'
import {BiEdit} from 'react-icons/bi';


export const ListItem = () => {
  const [items,setItems]=useState([]);
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
  const [Batchno,setBatchno]=useState("");
    const [batchSize,setBatchSize]=useState(""); 
    const [packing ,setPacking]=useState('');
    const [mfgdate ,setMfgdate]=useState('');
    const [expdate ,setExpdate]=useState('');
    const [retestdate ,setRetestdate]=useState('');
    const [sample ,setSample]=useState('');
  // const addItem1 = (_) => {
  //   addItemProp1({
  //     id: new Date().getTime(),
  //     Batchno,
  //     packing,
  //     mfgdate,
  //     expdate,retestdate,sample,batchSize,
     
  //   })
  //   setBatchno("");
  //   setBatchSize("");
  //   setExpdate("");
  //   setMfgdate("");
  //   setPacking("");
  //   setRetestdate("");
  //   setSample("");
  // };
const handleSubmit = (values, { setSubmitting }) => {
  // Handle form submission logic here
  console.log(values,"val");
  setItems(values);

  setSubmitting(false);
  console.log("data",items)
};
  // const addItem = item =>{  
    
  //         id: new Date().getTime(),
  //         Batchno,
  //         packing,
  //         mfgdate,
  //         expdate,retestdate,sample,batchSize,
  //   };
    const deleteItem = (idToDelete) => {
      // Filter out the row with the given id from the data array
      const newData = items.filter(item => item.id !== idToDelete);
      setItems(newData);
    };
    
    
    
  //const deleteItem = (_) => deleteItemProp(product);

  return (
    <div>
    <div>
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

                 
             {/* ---------------------------------   card column end  -------------------------------------------- */}
           </div>
         </Card>
       </div>
  
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
       {
        items.map((item,index) =>(
        
          // <div key={item.id}>

<tbody className='tablebody-custom'>
       <tr>
           <td>{index}</td> 
          <td>{item.Batchno}</td>
          <td>{item.batchSize}</td>
          <td>{item.packing}</td>
          <td>{item.mfgdate}</td>
          <td>{item.expdate}</td>
          <td>{item.retestdate}</td>
          <td>{item.sample}</td>
          <td >
              <div>
              
              <BiEdit  size={20} color={'#9AC037'}/>
            
              
              <RiDeleteBinLine className='tablerowicon' size={20} color={'#9AC037'}
              onClick={() => deleteItem(item.id)}/>
              
              </div>
              </td>

       </tr>
       </tbody>
      
        ))  
       
       
}
      </Table>
  </Card>
  </div>
  </div>
  

  )}