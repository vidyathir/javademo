import React, { useState } from "react";
import Sidenavbar from "../components/Sidenavbar";
import Titlebar from "../components/Titlebar";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { MdOutlineUploadFile } from "react-icons/md";

export default function TypeOfAnalysis({onButtonClick}) {
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

  // ---------------End  of --------------RadioButtons Functionalities using USESTATE-----------------------

  return (
    <div>
    
      <div>
        <div >
          
          <div className="Progressbar"></div>

          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Type of Analysis</text>
              </div>
              <div className="cardcolumnpadding">
                <div className="row">
                  <div className="col">
                    <Col className="mb-3">
                      <Form.Group as={Row}>
                        <Form.Label className="cardcolhed">
                          <div className="mb-3">
                            Regulatory
                            <text>
                              (Form-39/DMF Filing/ANDA Filing/Any Query)
                            </text>
                            <text className="cardcolhedstar">*</text>
                          </div>
                          <div className="row" style={{ width: "100%" }}>
                            <div className="col-12" style={{ display: "flex" }}>
                              <div className="col">
                                <div
                                  style={{ display: "flex", marginBottom: 20 }}
                                >
                                  <input
                                    type="radio"
                                    value="option1"
                                    checked={selectedOption === "option1"}
                                    onChange={handleOptionChange}
                                    style={{ height: 20, width: 20 }}
                                  />
                                  <label className="space">Validation</label>
                                </div>
                              </div>

                              <div className="col">
                                <div style={{ display: "flex" }}>
                                  <input
                                    type="radio"
                                    value="option2"
                                    checked={selectedOption === "option2"}
                                    onChange={handleOptionChange}
                                    style={{ height: 20, width: 20 }}
                                  ></input>
                                  <label className="space">Verification</label>
                                </div>
                              </div>

                              <div className="col">
                                <div style={{ display: "flex" }}>
                                  <input
                                    type="radio"
                                    value="option3"
                                    checked={selectedOption === "option3"}
                                    onChange={handleOptionChange}
                                    style={{ height: 20, width: 20 }}
                                  ></input>
                                  <label className="space">Transfer</label>
                                </div>
                              </div>

                              <div className="col">
                                <div style={{ display: "flex" }}>
                                  <input
                                    type="radio"
                                    value="option4"
                                    checked={selectedOption === "option4"}
                                    onChange={handleOptionChange}
                                    style={{ height: 20, width: 20 }}
                                  ></input>
                                  <label className="space">Stability</label>
                                </div>
                              </div>

                              <div className="col">
                                <div style={{ display: "flex" }}>
                                  <input
                                    type="radio"
                                    value="option5"
                                    checked={selectedOption === "option5"}
                                    onChange={handleOptionChange}
                                    style={{ height: 20, width: 20 }}
                                  ></input>
                                  <label className="space">Batch Release</label>
                                </div>
                              </div>
                            </div>

                            <div className="col-12" style={{ display: "flex" }}>
                              <div className="col">
                                <div style={{ display: "flex" }}>
                                  <input
                                    type="radio"
                                    value="option6"
                                    checked={selectedOption === "option6"}
                                    onChange={handleOptionChange}
                                    style={{ height: 20, width: 20 }}
                                  ></input>
                                  <label className="space">USFDA</label>
                                </div>
                              </div>

                              <div className="col">
                                <div style={{ display: "flex" }}>
                                  <input
                                    type="radio"
                                    value="option7"
                                    checked={selectedOption === "option7"}
                                    onChange={handleOptionChange}
                                    style={{ height: 20, width: 20 }}
                                  ></input>
                                  <label className="space">EU GMP</label>
                                </div>
                              </div>

                              <div className="col">
                                <div style={{ display: "flex" }}>
                                  <input
                                    type="radio"
                                    value="option8"
                                    checked={selectedOption === "option8"}
                                    onChange={handleOptionChange}
                                    style={{ height: 20, width: 20 }}
                                  ></input>
                                  <label className="space">
                                    Local FDA(DCA)
                                  </label>
                                </div>
                              </div>

                              <div className="col">
                                <div style={{ display: "flex" }}>
                                  <input
                                    type="radio"
                                    value="option9"
                                    checked={selectedOption === "option9"}
                                    onChange={handleOptionChange}
                                    style={{ height: 20, width: 20 }}
                                  ></input>
                                  <label className="space">NABL</label>
                                </div>
                              </div>

                              <div className="col">
                                <div style={{ display: "flex" }}>
                                  <input
                                    type="radio"
                                    value="option10"
                                    checked={selectedOption === "option10"}
                                    onChange={handleOptionChange}
                                    style={{ height: 20, width: 20 }}
                                  ></input>
                                  <label className="space">Other</label>
                                  <input
                                    type="text"
                                    style={{ marginLeft: 15,marginTop:-10,border:'1px solid #d1d1d1',height:40,width:'100%',borderRadius:6,color:'#8F8F8F',fontSize:12,paddingLeft:10 }}
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Form.Label>
                      </Form.Group>
                    </Col>
                    <hr />

                    {/*----------------------------------------------- First Column End ------------------------------------*/}
                  </div>
                </div>

                <div className="row cardcolhed">
                  <Col
                    className="col-12"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className="col-6 ">
                      <div className="mb-3">
                        <text className="mb-3">Other than Regulatory</text>
                        <text className="cardcolhedstar">*</text>
                      </div>
                      <div style={{ display: "flex", marginBottom: 20 }}>
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input
                            type="checkbox"
                           
                            style={{ height: 20, width: 20 }}
                          ></input>
                          <label className="space">
                            Analytical Feasibility
                          </label>
                        </div>

                        <div
                          style={{
                            marginLeft: 60,
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <input
                            type="checkbox"
                           
                            onChange={handleOptionChange1}
                            style={{ height: 20, width: 20 }}
                          ></input>
                          <label className="space">R&D Sample</label>
                        </div>
                      </div>

                      <div style={{ display: "flex" }}>
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input
                            type="checkbox"
                          
                            style={{ height: 20, width: 20 }}
                          ></input>
                          <label className="space">Method Development</label>
                        </div>

                        <div
                          style={{
                            marginLeft: 50,
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <input
                            type="checkbox"
                              
                            style={{ height: 20, width: 20 }}
                          ></input>
                          <label className="space">Batch Analysis</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 cardcolhedd">
                      <div className="mb-3">
                        <text>
                          If Method Validation/Verification/Transfer/Development
                          are performed at Revin Labs please specify the Report
                          Ref. No.
                        </text>
                      </div>

                      <div className="d-flex">
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input
                            type="radio"
                            value="option14"
                            checked={selectedOption2 === "option14"}
                            onChange={handleOptionChange2}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">No</label>
                        </div>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginLeft: 10,
                          }}
                        >
                          <input
                            type="radio"
                            value="option15"
                            checked={selectedOption2 === "option15"}
                            onChange={handleOptionChange2}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">yes</label>
                        </div>
                        <div>
                          <input type="text" style={{ marginLeft: 20,border:'1px solid #d1d1d1',height:40,width:'100%',borderRadius:6,color:'#8F8F8F',fontSize:12,paddingLeft:10 }} />
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
                <hr />
                {/* --------------------------------------------3rd Column starting ----------------------------------*/}
                <div className="row">
                  <Col
                    className="col-12 cardcolhed"
                    style={{ display: "flex" }}
                  >
                    <div className="col-6">
                      <div className="mb-3">
                        <text>
                          Analytical Test Parameter; If require attach Annexure
                          along with this filled TRF
                        </text>
                        <text className="cardcolhedstar">*</text>
                      </div>
                      <div>
                        <Form.Select
                          defaultValue="..."
                          style={{ width: "70%" }}
                        >
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Select>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="mb-3">
                        <text>Test to be carried out as per</text>
                      </div>
                      <div style={{ display: "flex", }}>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginRight: 40,
                          }}
                        >
                          <input
                            type="radio"
                            value="option16"
                            checked={selectedOption3 === "option16"}
                            onChange={handleOptionChange3}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">USP</label>
                        </div>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginRight: 40,
                          }}
                        >
                          <input
                            type="radio"
                            value="option17"
                            checked={selectedOption3 === "option17"}
                            onChange={handleOptionChange3}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">BP</label>
                        </div>
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input
                            type="radio"
                            value="option18"
                            checked={selectedOption3 === "option18"}
                            onChange={handleOptionChange3}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">EP</label>
                        </div>
                      </div>
                      <div style={{ display: "flex" ,marginTop:20}}>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginRight: 52,
                          }}
                        >
                          <input
                            type="radio"
                            value="option19"
                            checked={selectedOption3 === "option19"}
                            onChange={handleOptionChange3}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">IP</label>
                        </div>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginRight: 45,
                          }}
                        >
                          <input
                            type="radio"
                            value="option20"
                            checked={selectedOption3 === "option20"}
                            onChange={handleOptionChange3}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">IS</label>
                        </div>
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input
                            type="radio"
                            value="option21"
                            checked={selectedOption3 === "option21"}
                            onChange={handleOptionChange3}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">Method of Analysis</label>
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
                <hr />

                {/*------------------------------------------------------ second column End--------------------------------------------------- */}

                <div className="row">
                  <Col
                    className="col-12 cardcolhed"
                    style={{ display: "flex" }}
                  >
                    <div className="col-6">
                      <div className="mb-3">
                        <text>Methodology</text>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "normal",
                        }}
                      >
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input
                            type="radio"
                            value="option22"
                            checked={selectedOption4 === "option22"}
                            onChange={handleOptionChange4}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">STP</label>
                        </div>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginLeft: 50,
                          }}
                        >
                          <input
                            type="radio"
                            value="option23"
                            checked={selectedOption4 === "option23"}
                            onChange={handleOptionChange4}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space"> GTP</label>
                        </div>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginLeft: 50,
                          }}
                        >
                          <input
                            type="radio"
                            value="option24"
                            checked={selectedOption4 === "option24"}
                            onChange={handleOptionChange4}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">Reference no</label>
                        </div>
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input type="text" style={{ marginLeft: 30 ,border:'1px solid #d1d1d1',height:40,width:'100%',borderRadius:6,color:'#8F8F8F',fontSize:12,paddingLeft:10}} />
                        </div>
                      </div>
                      <div className="mt-3 mb-3">
                        <text>Attachfile</text>
                      </div>
                      <div>
                        <Card
                          style={{
                            height: 70,
                            width: "80%",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 12,
                            fontWeight: 500,
                            color: "#8F8F8F",
                          }}
                        >
                          <div>
                            <MdOutlineUploadFile size={24} color="#8F8F8F" />
                            <input type="file" />
                          </div>
                        </Card>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <text>Special Instructions If any/Additional Information</text>
                      </div>
                      <div>
                        <input
                          type="textarea"
                          style={{
                            height: 70,
                            width: "80%",
                            borderRadius: 6,
                            border: "1px solid #d1d1d1",
                            color:'#8F8F8F',fontSize:12,paddingLeft:10
                          }}
                        />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          margin: 10,
                          marginTop:50
                        }}
                      >
                        <Button
                         onClick={() => onButtonClick("BatchDetails")}
                          style={{
                            height: "40px",
                            width: "122px",
                            borderRadius: "6px",
                            backgroundColor: "#fff",
                            borderColor: "#9AC037",
                            color: "#9AC037",
                            fontSize: 12,
                            fontWeight: 600,
                            marginRight: 10,
                          }}
                        >
                          <BiLeftArrowAlt size={24} color="#9AC037" />
                          Previous
                        </Button>
                        <Button
                          onClick={()=>onButtonClick("ConfirmDetails")}
                          style={{
                            height: "40px",
                            width: "122px",
                            borderRadius: "6px",
                            backgroundColor: "#3A4175",
                            fontWeight: 600,
                            fontSize: 12,
                          }}
                          name="Next"
                        >
                          Next <BiRightArrowAlt size={24} color="#fff" />
                        </Button>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
