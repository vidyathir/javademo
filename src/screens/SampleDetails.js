import React,{useState} from "react";
import Sidenavbar from "../components/Sidenavbar";
import Titlebar from "../components/Titlebar";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


import {BiRightArrowAlt,BiLeftArrowAlt} from 'react-icons/bi';

export default function SampleDetails({onButtonClick}) {
  const navigate = useNavigate();

   // ---------------Start of --------------RadioButtons Functionalities using USESTATE-----------------------

   const [selectedOption, setSelectedOption] = useState("");

   const handleOptionChange = (event) => {
     setSelectedOption(event.target.value);
   };
 
   const [selectedOption1, setSelectedOption1] = useState("");
   const handleOptionChange1 = (event) => {
     setSelectedOption1(event.target.value);
   };
 
   const [selectedOption2, setSelectedOption2] = useState("");
   const handleOptionChange2 = (event) => {
     setSelectedOption2(event.target.value);
   };
 
   const [selectedOption3, setSelectedOption3] = useState("");
   const handleOptionChange3 = (event) => {
     setSelectedOption3(event.target.value);
   };
   const [selectedOption4, setSelectedOption4] = useState("");
   const handleOptionChange4 = (event) => {
     setSelectedOption4(event.target.value);
   };

   const [selectedOption5, setSelectedOption5] = useState("");
   const handleOptionChange5 = (event) => {
     setSelectedOption5(event.target.value);
   };
 
   // ---------------End  of --------------RadioButtons Functionalities using USESTATE-----------------------
 
  return (
    <div >
      {/* <Sidenavbar /> */}
      <div >
        <div >
          {/* <Titlebar /> */}
          <div className="Progressbar"></div>

          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Sample Details</text>
              </div>
              <div className="cardcolumnpadding">
                <label style={{fontSize:12,fontWeight:500,color:'#8F8F8F'}}>Name of the Sample</label>
                <input className="form-control1"></input>

                <hr />
                {/* ---------------------------------   card column start  -------------------------------------------- */}
                <div className="row">
                  <div className="col-12" style={{display:'flex',flexDirection:'row',}}>
                <div className="col-6">
                <Col className="mb-3" style={{ width:350 }}>
                  <Form.Group as={Row}>
                    <Form.Label className="cardcolhed">
                      Report required as per Form-39{" "}
                      <text className="cardcolhedstar">*</text> 
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          marginTop:'5px',
                          fontSize:'12px',
                          fontWeight:400,
                          width:'350px'                     }}
                      >
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio" 
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleOptionChange}
                        style={{ height: 20, width: 20 }} />
                        <label className="space">Yes</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleOptionChange}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">No</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio" 
                        value="option3"
                        checked={selectedOption === "option3"}
                        onChange={handleOptionChange}
                        style={{ height: 20, width: 20 }} />
                        <label className="space">Local FDA(DCA)</label>
                        </span>
                        </div>
                      </div>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <hr />

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Col className="mb-3" style={{ width: 350 }}>
                  <Form.Group as={Row}>
                    <Form.Label className="cardcolhed" >
                    Nature of Sample <text className="cardcolhedstar">*</text>{" "}
                 
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          alignItems:'center',
                          marginTop:'5px',
                          width:'350px',
                          fontSize:'12px',
                          fontWeight:400,  
                      
                        }}
                      >
                        <div className="col">
                          {/* <Form.Check type="radio" style={{height:20,width:20}} label="RM"></Form.Check> */}
                       <span style={{alignItems:'center',display:'flex',}}>
                         <input type="radio"
                          value="option4"
                          checked={selectedOption1 === "option4"}
                          onChange={handleOptionChange1}
                         
                          style={{ height: 20, width: 20 }} />
                        <label className="space">RM</label>
                        </span>
                        </div>

                        <div className="col">
                        <span style={{display:'flex'}}>
                          <input type="radio"
                           value="option5"
                           checked={selectedOption1 === "option5"}
                           onChange={handleOptionChange1}
                           style={{ height: 20, width: 20 }} />
                        <label className="space">In-Progress</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio"
                         value="option6"
                         checked={selectedOption1 === "option6"}
                         onChange={handleOptionChange1}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">Intermediate</label>
                        </span>
                        </div>
                      </div>
                    </Form.Label>
                  </Form.Group>
                </Col>

                {/* ---------------------------------   card column end  -------------------------------------------- */}
                <Col className="mb-3" style={{ width: 350 }}>
                  <Form.Group as={Row}>
                    <Form.Label className="cardcolhed">
                      
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          width:'350px',
                          fontSize:'12px',
                          fontWeight:400,  
                        
                        }}
                      >
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio"
                         value="option7"
                         checked={selectedOption1 === "option7"}
                         onChange={handleOptionChange1}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">API</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio" 
                         value="option8"
                         checked={selectedOption1 === "option8"}
                         onChange={handleOptionChange1}
                        style={{ height: 20, width: 20 }} />
                        <label className="space">Excipient</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio"
                         value="option9"
                         checked={selectedOption1 === "option9"}
                         onChange={handleOptionChange1}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">Drug Product</label>
                        </span>
                        </div>  
                      
                      </div>
                    </Form.Label>
                  </Form.Group>
                </Col>

                <Col className="mb-3" style={{ width: 350 }}>
                  <Form.Group as={Row}>
                    <Form.Label className="cardcolhed">
                
                      
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          fontSize:'12px',
                          fontWeight:400,
                          width:'350px'  
                        }}
                      >
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio" 
                         value="option10"
                         checked={selectedOption1 === "option10"}
                         onChange={handleOptionChange1}
                        style={{ height: 20, width: 20 }} />
                        <label className="space">Others</label>
                        </span>
                        </div>
                        <div className="col">
                        <span>
                        <input type="text" style={{ height: 40, width: 290,marginLeft:50,border:'1px solid #d1d1d1',borderRadius:'6px' }} />
                        </span>
                        </div>
                      </div>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <hr />

                <Col className="mb-3" style={{ width: 350 }}>
                  <Form.Group as={Row}>
                    <Form.Label className="cardcolhed">
                    Sample Retention required(Drug Product/Substance) <text className="cardcolhedstar">*</text>{" "}
                  
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          width:230,
                          marginTop:'5px',
                          fontSize:'12px',
                          fontWeight:400,
                            
                        }}
                      >
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio" 
                        value="option11"
                        checked={selectedOption2 === "option11"}
                        onChange={handleOptionChange2}
                        style={{ height: 20, width: 20 }} />
                        <label className="space">Yes</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio" 
                        value="option12"
                        checked={selectedOption2 === "option12"}
                        onChange={handleOptionChange2}
                        style={{ height: 20, width: 20 }} />
                        <label className="space">No</label>
                        </span>
                        </div>
                        
                      </div>
                    </Form.Label>
                  </Form.Group>
                </Col>
                
                <hr />
                </div>




                <div className="col-6">
                <Col className="mb-3" style={{ width: 400 }}>
                  <Form.Group as={Row}>
                    <Form.Label className="cardcolhed">
                      Storage Condition{" "}
                      <text className="cardcolhedstar">*</text>
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          marginTop:'5px',
                          fontSize:'12px',
                          fontWeight:400,  
                          width:'400px'
                        }}
                      >
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio"
                         value="option13"
                         checked={selectedOption3 === "option13"}
                         onChange={handleOptionChange3}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">Ambient/RT</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio" 
                         value="option14"
                         checked={selectedOption3 === "option14"}
                         onChange={handleOptionChange3}
                        style={{ height: 20, width: 20 }} />
                        <label className="space">Freezer (-20°C)</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio"
                         value="option15"
                         checked={selectedOption3 === "option15"}
                         onChange={handleOptionChange3}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">Refrigerator (2-8°C)</label>
                        </span>
                        </div>
                      </div>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <hr />

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Col className="mb-3" style={{ width: 400 }}>
                  <Form.Group as={Row}>
                    <Form.Label className="cardcolhed">
                    Sample Type <text className="cardcolhedstar">*</text>{" "}
                  
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          alignItems:'center',
                          marginTop:'5px',
                          fontSize:'12px',
                          fontWeight:400,  
                        }}
                      >
                        <div className="col">
                       <span style={{alignItems:'center',display:'flex'}}>
                         <input type="checkbox"
                          value="option16"
                          checked={selectedOption4 === "option16"}
                          onChange={handleOptionChange4}
                          style={{ height: 20, width: 20 }} />
                        <label className="space">Hygroscopic</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                          <input type="checkbox"
                           value="option17"
                           checked={selectedOption4 === "option17"}
                           onChange={handleOptionChange4}
                           style={{ height: 20, width: 20 }} />
                        <label className="space">Light Sensitive</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="checkbox"
                         value="option18"
                         checked={selectedOption4 === "option18"}
                         onChange={handleOptionChange4}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">Non-Hazardous</label>
                        </span>
                        </div>
                      </div>
                    </Form.Label>
                  </Form.Group>
                </Col>

                {/* ---------------------------------   card column end  -------------------------------------------- */}
                <Col className="mb-3" style={{ width: 300 }}>
                  <Form.Group as={Row}>
                    <Form.Label className="cardcolhed">
                    
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          width:'265px',
                          fontSize:'12px',
                          fontWeight:400,
                            
                        }}
                      >
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="checkbox" 
                         value="option19"
                         checked={selectedOption4 === "option19"}
                         onChange={handleOptionChange4}
                        style={{ height: 20, width: 20 }} />
                        <label className="space">Hazardous</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="checkbox"
                         value="option20"
                         checked={selectedOption4 === "option20"}
                         onChange={handleOptionChange4}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">MSDS Attached</label>
                        </span>
                        </div>
                        {/* <span style={{display:'flex'}}>
                        <input type="radio" style={{ height: 20, width: 20 }} />
                        <label>Drug Product</label> */}
                        {/* </span> */}
                      
                      </div>
                    </Form.Label>
                  </Form.Group>
                </Col>

                <Col className="mb-3" style={{ width: 300 }}>
                  <Form.Group as={Row}>
                    <Form.Label className="cardcolhed">
                
                      
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          fontSize:'12px',
                          fontWeight:400,  
                          
                        }}
                      >
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="checkbox"
                         value="option21"
                         checked={selectedOption4 === "option21"}
                         onChange={handleOptionChange4}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">Others</label>
                        </span>
                        </div>
                        <div className="col">
                        <span>
                        <input type="text" style={{ height: 40, width: 290,marginLeft:75,border:'1px solid #d1d1d1',borderRadius:'6px' }} />
                        </span>
                        </div>
                      </div>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <hr />

                <Col className="mb-3" style={{ width: 300 }}>
                  <Form.Group as={Row}>
                    <Form.Label className="cardcolhed">
                    Type of Submission
                     <text className="cardcolhedstar">*</text>{" "}
                   
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          width:'400px',
                          marginTop:'5px',
                          fontSize:'12px',
                          fontWeight:400,  
                        }}
                      >
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio"
                         value="option22"
                         checked={selectedOption5 === "option22"}
                         onChange={handleOptionChange5}
                        
                         style={{ height: 20, width: 20 }} />
                        <label className="space">Person</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio"
                        value="option23"
                        checked={selectedOption5 === "option23"}
                        onChange={handleOptionChange5}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">Courier</label>
                        </span>
                        </div>
                        <div className="col">
                        <span style={{display:'flex'}}>
                        <input type="radio"
                        value="option24"
                        checked={selectedOption5 === "option24"}
                        onChange={handleOptionChange5}
                         style={{ height: 20, width: 20 }} />
                        <label className="space">By Post</label>
                        </span>
                        </div>
                        
                      </div>
                      
                    </Form.Label>
                  </Form.Group>
                </Col>
                <hr />
                <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',margin:10}}>
                  <Button  onClick={() => onButtonClick("CustomerDetailes")}style={{height:'40px',width:'122px',borderRadius:'6px',backgroundColor:'#fff',borderColor:'#9AC037',color:'#9AC037',fontSize:12,fontWeight:600,marginRight:10}}><BiLeftArrowAlt size={24} color="#9AC037"/>Previous</Button>
                  <Button onClick={() => onButtonClick("BatchDetails")}style={{height:'40px',width:'122px',borderRadius:'6px',backgroundColor:'#3A4175',fontWeight:600,fontSize:12}} name="Next">Next <BiRightArrowAlt  size={24} color="#fff"/></Button>
                </div>
              
                </div>






                </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
