import React,{useState,useEffect} from "react";
import "./Styles.css";
import {
  Card,
  Col,
  Row,
  //   Form,
  Table,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { BiRightArrowAlt, BiEdit, BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { changeBatchDetails } from "../redux/FormSlice";
import Select from "react-select";
import { Form } from "../Forms";

export default function BatchDetails({onButtonClick}) {
  const dispatch = useDispatch();
 const [state, setState] = useAppState();
  const testparameters=[
 {value:'1',label:"Test Parameter Name"},
 {value:'2',label:'pH'},
 {value:"3", label:"Conductivity "},
 {value:"4", label:"Identification by IR with ATR"},
 {value:"5",label:"Identification by IR with KBR"},
 {value:"6", label:"Identification by UV"},
 {value:"7",label:"Specific optical rotation"},
 {value:"8", label:"Refractive index"},
 {value:"9",label:"Sulphated Ash"},
 {value:"10", label:"Residual on Ignition"},
 {value:"11",label:"Turbidity"},
 {value:"12", label:"TDS"},
 {value:"13",label:"Loss on drying"},
 {value:"14", label:"HPLC - Purity"},
 {value:"15",label:"HPLC - RS"},

]
const { handleSubmit } = useForm({ defaultValues: state });
const [inputs, setInputs] = useState({
    batchNo: "",
    batchSize: "",
    natureOfPacking:"",
    mfgDate:"",
    expDate:"",
    retestDate:"",
    sampleQuantity:"",
    testparameters:[],

  });
  const [disabletext,setDisabletext]=useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    setInputs({
      batchNo: inputs.batchNo,
       batchSize:inputs.batchSize,
     natureOfPacking:inputs.natureOfPacking,
       mfgDate:inputs.mfgDate,
       expDate:inputs.expDate,
       retestDate:inputs.retestDate,
       sampleQuantity:inputs.sampleQuantity,
    testparameters:selectedOptions,
  });
  
    
  };
  console.log("input" ,inputs);
  const handleChange = (e) => {
  
  setInputs({
       ...inputs,
       [e.target.name]: e.target.value,
     });
    
   };
   
  const handleadd = (e) => {
   e.preventDefault();

    setFormErrors(validate(inputs))
    
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
         batchNo: "",
        batchSize: "",
        natureOfPacking:"",
        mfgDate:"",
        expDate:"",
        retestDate:"",
        sampleQuantity:"",
        testparameters:[],
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        batchNo: "",
        batchSize: "",
        natureOfPacking:"",
        mfgDate:"",
        expDate:"",
        retestDate:"",
        sampleQuantity:"",
        testparameters:[],
      });
    }
    setSelectedOptions(null)
    console.log("inputs", inputs)
    setIsSubmit(true)
  };

  useEffect(() => {
   
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(inputs)
    }
  }, [formErrors, inputs, isSubmit]);

const saveData=(inputs)=>{
  dispatch(changeBatchDetails(tableData))
  setState({ ...state, ...inputs})
  console.log("tableData", tableData);
  sessionStorage.setItem('tableData', JSON.stringify(tableData));
  onButtonClick("TypeOfAnalysis")
}
useEffect(()=>{
  const storedTableData =sessionStorage.getItem("tableData");
  if(storedTableData){
    setTableData(JSON.parse(storedTableData));
  }
},[])

const handleTextChange=()=>{
  setDisabletext(!disabletext );
}

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ batchNo: tempData.batchNo, batchSize: tempData.batchSize, natureOfPacking: tempData.natureOfPacking,
    mfgDate:tempData.mfgDate,expDate: tempData.expDate, retestDate:tempData.retestDate,sampleQuantity: tempData.sampleQuantity ,testparameters:tempData.testparameters});
    setEditClick(true);
    setEditIndex(index);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.batchNo) {
      errors.batchNo = "This field is required!";
    }
    if (!values.mfgDate) {
      errors.mfgDate = "This field is required!";
    }
    if (!values.expDate) {
      errors.expDate = "This field is required!";
    }
    if (!values.retestDate) {
      errors.retestDate = "This field is required!";
    }
    if (!values.testparameters) {
      errors.testparameters = "This field is required!";
    }
    return errors;
  };
  return (
    <div>
    

      <div>
    
        <div>
          <div >
            <div>
    
            
              <Card className="maincards">
                <div className="cardtitle">
                  <text className="cardtitlehed">Batch Details</text>
                </div>
                <div className="cardcolumnpadding">
                  {/* ---------------------------------   card column start  -------------------------------------------- */}
                  <Form validate onSubmit={handleSubmit(saveData)}>
                  <Row className="mb-3 rowtabview">
                    <Col>
                      <div>
                        <label className="cardcolhed">
                          Batch No./Lot No(s)
                          <text className="cardcolhedstar">*</text>
                        </label>
                      </div>
                      <div>
                        <input type="text" className="cardcolumninputtype" 
                        name="batchNo"
                         value={inputs.batchNo}
                         onChange={handleChange}/>
                      </div>
                      <p style={{color:"red"}}>{formErrors.batchNo}</p>
                    </Col>

                    <Col>
                      <div>
                        <label className="cardcolhed">
                          Batch Size
                          {/* <text className="cardcolhedstar">*</text> */}
                        </label>
                      </div>
                      <div>
                        <input type="text" className="cardcolumninputtype" 
                        name="batchSize"
                        value={inputs.batchSize}
                        onChange={handleChange}/>
                      </div>

                    </Col>

                    <Col>
                      <div>
                        <label className="cardcolhed">
                          {" "}
                          Nature Of Packing
                          {/* <text className="cardcolhedstar">*</text> */}
                        </label>
                      </div>
                      <div>
                        <input type="text" className="cardcolumninputtype"
                        name="natureOfPacking"
                        value={inputs.natureOfPacking}
                        onChange={handleChange} />
                      </div>
                    </Col>
                  </Row>

 <div style={{alignItems:'center',display:'flex'}} className="mb-3"> 
 <div>               {/* ---------------------------------   card column start  -------------------------------------------- */}
<label className="cardcolhed me-2" >NA</label>
</div>
<div>
  <input className="customRadio"
type="checkbox"
onChange={handleTextChange}
checked={disabletext}/>
</div>
</div>
                  <Row className="mb-3 rowtabview">
                    <Col>
                      <div>
                        <label className="cardcolhed">
                          Mfg. Date
                          <text className="cardcolhedstar">*</text>
                        </label>
                      </div>
                      <div>
                        <input type="date" className="cardcolumninputtype"
                        name="mfgDate"
                        value={inputs.mfgDate}
                        onChange={handleChange}
                        disabled={disabletext} />
                      </div>
                      <p style={{color:"red"}}>{formErrors.mfgDate}</p>
                    </Col>

                    <Col>
                      <div>
                        <label className="cardcolhed">
                          Exp. Date
                          <text className="cardcolhedstar">*</text>
                        </label>
                      </div>
                      <div>
                        <input type="date" className="cardcolumninputtype"
                        name="expDate"
                        value={inputs.expDate}
                        onChange={handleChange}
                        min={inputs.mfgDate}
                        disabled={disabletext} />
                      </div>
                      <p style={{color:"red"}}>{formErrors.expDate}</p>
                    </Col>

                    <Col>
                      <div>
                        <label className="cardcolhed">
                          Retest Date
                          <text className="cardcolhedstar">*</text>
                        </label>
                      </div>
                      <div>
                        <input type="date" className="cardcolumninputtype" 
                        name="retestDate"
                        value={inputs.retestDate}
                        min={inputs.expDate}
                        onChange={handleChange}
                        disabled={disabletext}/>
                      </div>
                      <p style={{color:"red"}}>{formErrors.retestDate}</p>
                    </Col>
                  </Row>

                  {/* ---------------------------------   card column start  -------------------------------------------- */}

                  <Row className="mb-3 rowtabview">
                    <Col>
                      <div>
                        <label className="cardcolhed">
                          Sample Quantity
                          {/* <text className="cardcolhedstar">*</text> */}
                        </label>
                      </div>
                      <div>
                        <input type="text" className="cardcolumninputtype"
                        name="sampleQuantity"
                        value={inputs.sampleQuantity}
                        onChange={handleChange} />
                      </div>
                    </Col>

                    <Col>
                    <div>
                    <label className="cardcolhed" >
                    Analytical Test Parameter
                    </label>
                   {/* <text style={{fontSize:10.5,fontWeight:300}}>(If require attach Annexure
                          along with this filled TRF)</text>  */}
                          {/* <text className="cardcolhedstar">*</text> */}
                       
                        </div>
                    <div>
                      
                    <Select name="testparameters"  value={selectedOptions} 
        onChange={handleSelectChange}style={{borderRadius:6}} options={testparameters} isClearable isMulti={true} />
            
                      </div>
                      <p style={{color:"red"}}>{formErrors.testparameters}</p>
                    </Col>

                    <Col>
                      <div>
                        <label className="cardcolhed">
                          {/* <text className="cardcolhedstar">*</text> */}
                        </label>
                      </div>
                      <div className="cardbuttonwiddouble">
                        {/* <input type="date" className="cardcolumninputtype"/> */}

                        <button type="reset"
                          className="cardbutton"
                        
                        >
                          <AiOutlineClose size={18} /> Clear
                        </button>
                        
                        <button type="submit"
                          className="cardbutton"
                            onClick={handleadd}
                        >
                             {editClick ? "update" : "Add"}
                          <MdOutlineAdd size={20} />
                        </button>
                         
                      </div>
                    </Col>
                  </Row>

                  {/* ---------------------------------   card column start  -------------------------------------------- */}

                  <hr className="hrcolor" />
                
                  {/* <Card className="cardtablesize"> */}
                  <Table responsive border={1}>
                    <thead className="table-custom">
                      <tr>
                        <th>S.No</th>
                        <th>Batch No./Lot No(s)</th>
                        <th>Batch Size</th>
                        <th>Nature Of Packaging</th>
                        <th>Mfg. Date</th>
                        <th>Exp. Date</th>
                        <th>Retest Date</th>
                        <th>Sample Quantity</th>
                        <th>Test Parameter</th>
                        <th>Edit & Delete</th>
                      </tr>
                    </thead>
                   
                    <tbody className="tablebody-custom ">
                    {tableData.map((item, i) => (
                      <tr key={item.id}>
                        <td>{i+1}</td>
                                <td>{item.batchNo}</td>
                        <td>{item.batchSize}</td>
                        <td>{item.natureOfPacking}</td>
                        <td>{item.mfgDate}</td>
                        <td>{item.expDate}</td>
                        <td>{item.retestDate}</td>
                        <td>{item.sampleQuantity}</td>
                  
                        <td>{item.testparameters.map(option=>option.label).join(',')}</td>
                        {/* <td>{selectedOptions.map(option => option.label).join(', ')}</td> */}
                        <td>
                          <div className="tablerowicon">
                            <BiEdit size={20} color={"#9AC037"} onClick={() => handleEdit(i)} />
                            <RiDeleteBinLine size={20} color={"#9AC037"}  onClick={() => handleDelete(i)}/>
                          </div>
                        </td>
                      </tr>

))}


                    </tbody>
                   
                  </Table>
                  {/* </Card> */}

                  <div className="cardbuttonboubleend">
                    <button
                      className="cardbuttonoutline"
                       onClick={() => onButtonClick("SampleDetails")}
                    >
                      <BiLeftArrowAlt size={24} /> Previous
                    </button>
                    <button type="submit"
                      className="cardbutton"
        
                    
                    >
                      Next <BiRightArrowAlt size={24} />
                    </button>
                
                  </div>

                  {/* ---------------------------------   card column end  -------------------------------------------- */}
               </Form>
                </div>
                
              </Card>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}