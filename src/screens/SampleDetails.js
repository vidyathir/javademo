import React, { useState } from "react";
import Sidenavbar from "../components/Sidenavbar";
import Titlebar from "../components/Titlebar";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './MStyles.css';


import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

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
    <div>

      <div>
        <div >
        
         
        

          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Sample Details</text>
              </div>
              <div className="cardcolumnpadding">
                <label className="defaultStyles"> Name of the Sample</label>
                <input className="form-control1"></input>

                <hr />
                <div className="row d-flex">
                  <Row>
                    <Col md={6}>
                    <Form.Label
                        className="cardcolhed mb-4"
                        style={{ display: "block" }}
                      >
                         Report required as per Form-39{" "}
                        <text className="cardcolhedstar">*</text>{" "}
                        <div
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "5px",

                            fontSize: "12px",
                            fontWeight: 400,
                          }}
                        >
                          <div className="col">                            <span
                              style={{ alignItems: "center", display: "flex" }}
                            >
                              <input
                                type="radio"
                                value="option1"
                                checked={selectedOption === "option1"}
                                onChange={handleOptionChange}
                                className="customRadio"
                              />
                              <label className="space">Yes</label>
                            </span>
                          </div>

                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option2"
                                checked={selectedOption === "option2"}
                                onChange={handleOptionChange}
                                className="customRadio"
                              />
                              <label className="space">No</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option3"
                                checked={selectedOption === "option3"}
                                onChange={handleOptionChange}
                                className="customRadio"
                              />
                              <label className="space">Local FDA(DCA)</label>
                            </span>
                          </div>
                        </div>
                      </Form.Label>
                      </Col>
                      <Col md={6}>
                      <Form.Label
                        className="cardcolhed mb-4"
                        style={{ display: "block" }}
                      >
                        Storage Condition{" "}
                        <text className="cardcolhedstar">*</text>
                        <div
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",
                            marginTop: "5px",
                            fontSize: "12px",
                            fontWeight: 400,
                          }}
                        >
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option13"
                                checked={selectedOption3 === "option13"}
                                onChange={handleOptionChange3}
                                className="customRadio"
                              />
                              <label className="space">Ambient/RT</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option14"
                                checked={selectedOption3 === "option14"}
                                onChange={handleOptionChange3}
                                className="customRadio"
                              />
                              <label className="space">Freezer (-20°C)</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option15"
                                checked={selectedOption3 === "option15"}
                                onChange={handleOptionChange3}
                                className="customRadio"
                              />
                              <label className="space">
                                Refrigerator (2-8°C)
                              </label>
                            </span>
                          </div>
                        </div>
                      </Form.Label>
                      </Col>
                      </Row>
                      <hr />
                    
                     
                          <Row>
                            <Col md={6}>
                      <Form.Label
                        className="cardcolhed mb-4"
                        style={{ display: "block" }}
                      >
                        Nature of Sample{" "}
                        <text className="cardcolhedstar">*</text>{" "}
                        <div
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "5px",

                            fontSize: "12px",
                            fontWeight: 400,
                          }}
                        >
                          <div className="col">                            <span
                              style={{ alignItems: "center", display: "flex" }}
                            >
                              <input
                                type="radio"
                                value="option4"
                                checked={selectedOption1 === "option4"}
                                onChange={handleOptionChange1}
                                className="customRadio"
                              />
                              <label className="space">RM</label>
                            </span>
                          </div>

                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option5"
                                checked={selectedOption1 === "option5"}
                                onChange={handleOptionChange1}
                                className="customRadio"
                              />
                              <label className="space">In-Progress</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option6"
                                checked={selectedOption1 === "option6"}
                                onChange={handleOptionChange1}
                                className="customRadio"
                              />
                              <label className="space">Intermediate</label>
                            </span>
                          </div>
                        </div>
                      </Form.Label>

                      <Form.Label
                        className="cardcolhed mb-4"
                        style={{ display: "block" }}
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",

                            fontSize: "12px",
                            fontWeight: 400,
                          }}
                        >
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option7"
                                checked={selectedOption1 === "option7"}
                                onChange={handleOptionChange1}
                                className="customRadio"
                              />
                              <label className="space">API</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option8"
                                checked={selectedOption1 === "option8"}
                                onChange={handleOptionChange1}
                                className="customRadio"
                              />
                              <label className="space">Excipient</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option9"
                                checked={selectedOption1 === "option9"}
                                onChange={handleOptionChange1}
                                className="customRadio"
                              />
                              <label className="space">Drug Product</label>
                            </span>
                          </div>
                        </div>
                      </Form.Label>

                      <Form.Label
                        className="cardcolhed mb-4"
                        style={{ display: "block" }}
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",
                            fontSize: "12px",
                            fontWeight: 400,
                          }}
                        >
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option10"
                                checked={selectedOption1 === "option10"}
                                onChange={handleOptionChange1}
                                className="customRadio"
                              />
                              <label className="space">Others</label>
                            </span>
                          </div>
                          <div className="col">
                            <span>
                              <input type="text" className="NatureOfSample" />
                            </span>
                          </div>
                        </div>
                      </Form.Label>
                      </Col>
                      <Col md={6}>
                      <Form.Label
                        className="cardcolhed mb-4"
                        style={{ display: "block" }}
                      >
                        Sample Type <text className="cardcolhedstar">*</text>{" "}
                        <div
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",
                            alignItems: "center",
                            marginTop: "5px",
                            fontSize: "12px",
                            fontWeight: 400,
                          }}
                        >
                          <div className="col">
                            <span
                              style={{ alignItems: "center", display: "flex" }}
                            >
                              <input
                                type="checkbox"
                                value="option16"
                                // checked={selectedOption4 === "option16"}
                                // onChange={handleOptionChange4}
                                className="customRadio"
                              />
                              <label className="space">Hygroscopic</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                value="option17"
                                // checked={selectedOption4 === "option17"}
                                // onChange={handleOptionChange4}
                                className="customRadio"
                              />
                              <label className="space">Light Sensitive</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                value="option18"
                                // checked={selectedOption4 === "option18"}
                                // onChange={handleOptionChange4}
                                className="customRadio"
                              />
                              <label className="space">Non-Hazardous</label>
                            </span>
                          </div>
                        </div>
                      </Form.Label>

                      <Form.Label
                        className="cardcolhed mb-4"
                        style={{ display: "block" }}
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",

                            fontSize: "12px",
                            fontWeight: 400,
                          }}
                        >
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                value="option19"
                                // checked={selectedOption4 === "option19"}
                                // onChange={handleOptionChange4}
                                className="customRadio"
                              />
                              <label className="space">Hazardous</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                value="option20"
                                // checked={selectedOption4 === "option20"}
                                // onChange={handleOptionChange4}
                                className="customRadio"
                              />
                              <label className="space">MSDS Attached</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                             
                              <label className="space"> </label>
                            </span>
                          </div>
                        </div>
                      </Form.Label>

                      <Form.Label
                        className="cardcolhed mb-4"
                        style={{ display: "block" }}
                      >
                        <div
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",
                            fontSize: "12px",
                            fontWeight: 400,
                          }}
                        >
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                value="option21"
                                checked={selectedOption4 === "option21"}
                                onChange={handleOptionChange4}
                                className="customRadio"
                              />
                              <label className="space">Others</label>
                            </span>
                          </div>
                          <div className="col">
                            <span>
                              <input type="text" className="SampleType" />
                            </span>
                          </div>
                        </div>
                      </Form.Label>
                      </Col>
                      </Row>
                      <hr />

                      <Row>
                        <Col md={6}>
                      <Form.Label
                        className="cardcolhed mb-4"
                        style={{ display: "block" }}
                      >
                        Sample Retention required(Drug Product/Substance){" "}
                        <text className="cardcolhedstar">*</text>{" "}
                        <div
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",
                            
                            marginTop: "5px",
                            fontSize: "12px",
                            fontWeight: 400,
                          }}
                        >
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option11"
                                checked={selectedOption2 === "option11"}
                                onChange={handleOptionChange2}
                                className="customRadio"
                              />
                              <label className="space">Yes</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option12"
                                checked={selectedOption2 === "option12"}
                                onChange={handleOptionChange2}
                                className="customRadio"
                              />
                              <label className="space">No</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                            
                              <label className="space"></label>
                            </span>
                          </div>
                        </div>
                      </Form.Label>
                      </Col>
                      <Col md={6}>
                      <Form.Label
                        className="cardcolhed mb-4"
                        style={{ display: "block" }}
                      >
                        Type of Submission{" "}
                        <text className="cardcolhedstar">*</text>{" "}
                        <div
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            display: "flex",

                            marginTop: "5px",
                            fontSize: "12px",
                            fontWeight: 400,
                          }}
                        >
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option22"
                                checked={selectedOption5 === "option22"}
                                onChange={handleOptionChange5}
                                className="customRadio"
                              />
                              <label className="space">Person</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option23"
                                checked={selectedOption5 === "option23"}
                                onChange={handleOptionChange5}
                                className="customRadio"
                              />
                              <label className="space">Courier</label>
                            </span>
                          </div>
                          <div className="col">
                            <span style={{ display: "flex" }}>
                              <input
                                type="radio"
                                value="option24"
                                checked={selectedOption5 === "option24"}
                                onChange={handleOptionChange5}
                                className="customRadio"
                              />
                              <label className="space">By Post</label>
                            </span>
                          </div>
                        </div>
                      </Form.Label>
                    </Col>
                     
                        
                    
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        margin: 10,
                      }}
                    >
                      <button className="previous" onClick={()=>onButtonClick("CustomerDetailes")}
                       
                      >
                        <BiLeftArrowAlt size={24} color="#9AC037" />
                        Previous
                      </button>
                      
                      <button
                        onClick={() => onButtonClick("BatchDetail")}
                        className="next"
                        name="Next"
                      >
                        Next <BiRightArrowAlt size={24} color="#fff" />
                      </button>
                    </div>
                  </Row>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}