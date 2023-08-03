import React, { useState } from "react";
import './MStyles.css';
import {  Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {  BiLeftArrowAlt } from "react-icons/bi";
import {MdDone} from 'react-icons/md'
import{TbLogout2} from 'react-icons/tb'
// import { MdOutlineUploadFile } from "react-icons/md";

export default function SampleVerification({onButtonClick}) {
  const navigate = useNavigate();

  // ---------------------------------------Radiobuttons functionality starts---------------------------------------------

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
  const [selectedOption6, setSelectedOption6] = useState("");
  const handleOptionChange6 = (event) => {
    setSelectedOption6(event.target.value);
  };
  const [selectedOption7, setSelectedOption7] = useState("");
  const handleOptionChange7 = (event) => {
    setSelectedOption7(event.target.value);
  };
  const [selectedOption8, setSelectedOption8] = useState("");
  const handleOptionChange8 = (event) => {
    setSelectedOption8(event.target.value);
  };
  const [selectedOption9, setSelectedOption9] = useState("");
  const handleOptionChange9 = (event) => {
    setSelectedOption9(event.target.value);
  };
  const [selectedOption10, setSelectedOption10] = useState("");
  const handleOptionChange10 = (event) => {
    setSelectedOption10(event.target.value);
  };
  // ---------------------------------------Radiobuttons functionality ends---------------------------------------------

  return (
    <div >
    
      <div>
        <div>
          <div className="Progressbar"></div>
          <Card className="maincards">
            <div className="cardtitle">
              <text className="cardtitlehed">Sample Verification List</text>
            </div>
            <div className="cardcolumnpadding">
              <div className="row">
                <div className="col-12 d-flex new">
                  <div className="col-6">
                    <div className="cardcolhed p-3">
                      <div className="mb-3 new1">
                        <text>
                          Whether the sample received along with the Test
                          Requisition Form (TRF) or through customer IOC? Please
                          (Ö) on the specific received copy (TRF/IOC)
                        </text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleOptionChange}
                            className="customRadio"
                            
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleOptionChange}
                            className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={handleOptionChange}
                            className="customRadioMargin"
                          ></input>
                          <label
                            className="space"
                           
                          >
                            NA
                          </label>
                        </span>
                      </div>

                      <div className="mt-3 mb-3 new1">
                        <text>
                          Is the Sample Name, Batch No. & Storage condition
                          details mentioned on the TRF?
                        </text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option4"
                            checked={selectedOption1 === "option4"}
                            onChange={handleOptionChange1}
                            className="customRadio"
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option5"
                            checked={selectedOption1 === "option5"}
                            onChange={handleOptionChange1}
                           className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option6"
                            checked={selectedOption1 === "option6"}
                            onChange={handleOptionChange1}
                            className="customRadioMargin"
                          ></input>
                          <label
                            className="space"
                          
                          >
                            NA
                          </label>
                        </span>
                      </div>

                      <div className="mt-3 mb-3 new1">
                        <text>
                          For the regulatory batch release is the product Method
                          Validation/Verification/Transfer is done at (Revin)?
                        </text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option7"
                            checked={selectedOption2 === "option7"}
                            onChange={handleOptionChange2}
                            className="customRadio"
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option8"
                            checked={selectedOption2 === "option8"}
                            onChange={handleOptionChange2}
                            className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option9"
                            checked={selectedOption2 === "option9"}
                            onChange={handleOptionChange2}
                            style={{ height: 20, width: 20, marginLeft: 40 }}
                          ></input>
                          <label
                            className="space"
                            
                          >
                            NA
                          </label>
                        </span>
                      </div>

                      <div className="mt-3 mb-3 new1">
                        <text>
                          Is the sample packing or container free from
                          damage/leakage?
                        </text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option10"
                            checked={selectedOption3 === "option10"}
                            onChange={handleOptionChange3}
                            className="customRadio"
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option11"
                            checked={selectedOption3 === "option11"}
                            onChange={handleOptionChange3}
                            className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option12"
                            checked={selectedOption3 === "option12"}
                            onChange={handleOptionChange3}
                            className="customRadioMargin"
                          ></input>
                          <label
                            className="space"
                          >
                            NA
                          </label>
                        </span>
                      </div>

                      <div className="mt-3 mb-3 new1">
                        <text>
                          Is there any special instruction mention on TRF?
                        </text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option13"
                            checked={selectedOption4 === "option13"}
                            onChange={handleOptionChange4}
                            className="customRadio"
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option14"
                            checked={selectedOption4 === "option14"}
                            onChange={handleOptionChange4}
                            className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option15"
                            checked={selectedOption4 === "option15"}
                            onChange={handleOptionChange4}
                            className="customRadioMargin"
                          ></input>
                          <label
                            className="space"
                            style={{ height: 20, width: 20 }}
                          >
                            NA
                          </label>
                        </span>
                      </div>

                      <div className="mt-3 mb-3 new1">
                        <text>
                          Whether the data logger is placed in sample kit for
                          sensitive products?
                        </text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option16"
                            checked={selectedOption5 === "option16"}
                            onChange={handleOptionChange5}
                            className="customRadio"
                          
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option17"
                            checked={selectedOption5 === "option17"}
                            onChange={handleOptionChange5}
                            className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option18"
                            checked={selectedOption5 === "option18"}
                            onChange={handleOptionChange5}
                            className="customRadioMargin"
                          ></input>
                          <label
                            className="space"
                            
                          >
                            NA
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ----------------------------------Second Column----------------------------- */}
                  <div className="col-6">
                    <div className="cardcolhed p-3">
                      <div className="mb-3 new1">
                        <text>
                          TRF received along with sample details matches with
                          the details mentioned on the sample label?
                        </text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option19"
                            checked={selectedOption6 === "option19"}
                            onChange={handleOptionChange6}
                            className="customRadio"
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option20"
                            checked={selectedOption6 === "option20"}
                            onChange={handleOptionChange6}
                            className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option21"
                            checked={selectedOption6 === "option21"}
                            onChange={handleOptionChange6}
                            className="customRadioMargin"
                          ></input>
                          <label
                            className="space"
                            
                          >
                            NA
                          </label>
                        </span>
                      </div>

                      <div className="mt-3 mb-3 new1">
                        <text>
                          Is the Method of analysis/Pharmacopeial reference
                          details mentioned on the TRF?
                        </text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option22"
                            checked={selectedOption7 === "option22"}
                            onChange={handleOptionChange7}
                           className="customRadio"
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option23"
                            checked={selectedOption7 === "option23"}
                            onChange={handleOptionChange7}
                            className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option24"
                            checked={selectedOption7 === "option24"}
                            onChange={handleOptionChange7}
                            className="customRadioMargin"
                          ></input>
                          <label
                            className="space"
                           
                          >
                            NA
                          </label>
                        </span>
                      </div>

                      <div className="mt-3 mb-3 new1">
                        <text>
                          For regulatory release approved
                          STP/Specification/justification (if any) is received
                          from the customer to initiate the batch analysis
                        </text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option25"
                            checked={selectedOption8 === "option25"}
                            onChange={handleOptionChange8}
                            className="customRadio"
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option26"
                            checked={selectedOption8 === "option26"}
                            onChange={handleOptionChange8}
                            className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option27"
                            checked={selectedOption8 === "option27"}
                            onChange={handleOptionChange8}
                            className="customRadioMargin"
                          ></input>
                          <label
                            className="space"
                           
                          >
                            NA
                          </label>
                        </span>
                      </div>

                      <div className="mt-3 mb-3 new1">
                        <text>Is the sample type marked on the TRF?</text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option28"
                            checked={selectedOption9 === "option28"}
                            onChange={handleOptionChange9}
                            className="customRadio"
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option29"
                            checked={selectedOption9 === "option29"}
                            onChange={handleOptionChange9}
                            className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option30"
                            checked={selectedOption9 === "option30"}
                            onChange={handleOptionChange9}
                            className="customRadioMargin"
                          ></input>
                          <label
                            className="space"
                          >
                            NA
                          </label>
                        </span>
                      </div>

                      <div className="mt-3 mb-3 new1">
                        <text>
                          Is the Analytical test parameter of the sample mention
                          on TRF?
                        </text>
                      </div>
                      <div className="d-flex">
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option31"
                            checked={selectedOption10 === "option31"}
                            onChange={handleOptionChange10}
                         className="customRadio"
                          ></input>
                          <label className="space">Yes</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            value="option32"
                            checked={selectedOption10 === "option32"}
                            onChange={handleOptionChange10}
                            className="customRadioMargin"
                          ></input>
                          <label className="space">No</label>
                        </span>
                        <span style={{ display: "flex" }}>
                          <input
                            type="radio"
                            className="customRadioMargin"
                          ></input>
                          <label
                            className="space"
                          
                          >
                            NA
                          </label>
                        </span>
                      </div>

                      <div className="mt-3 mb-3 new1">
                        <text>Comments</text>
                      </div>
                      <div className="d-flex">
                        <input
                        className="commentsInput"
                          type="text"  />
                      </div>

                     
                    </div>
                  </div>
                </div>







              </div>

              <div className="mt-3 mb-3">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            margin: 10,
                          
                            
                          }}
                        >
                          <div>
                            <Button
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
                                justifyContent:'space-between',
                                
                              }}onClick={()=>onButtonClick("ConfirmDetails")}
                            >
                              <BiLeftArrowAlt size={24} color="#9AC037" />&nbsp;
                              Previous
                            </Button>
                          </div>
                            
                            <div>
                          <Button
                          onClick={()=>navigate("RLPLNotgenerated")}
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
                            <TbLogout2 size={24} color="#9AC037" />&nbsp;
                            Reject
                          </Button>
                          <Button
                            onClick={() => navigate("RLPLgenerated")}
                            style={{
                              height: "40px",
                              width: "122px",
                              borderRadius: "6px",
                              backgroundColor: "#3A4175",
                              fontWeight: 600,
                              fontSize: 12,
                              border:'none'
                            }}
                            name="Next"
                          >
                             <MdDone size={24} color="#fff" />&nbsp;Accept
                          </Button>
                          </div>
                        </div>
                      </div>






            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
