import { useForm } from "react-hook-form";

import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import React, { useState ,useEffect} from "react";
import { useDispatch } from "react-redux";
import { MdOutlineUploadFile } from "react-icons/md";
import { changeTypeofAnalysis } from "../redux/FormSlice";
import { Row, Col, Card } from "react-bootstrap";
import "./Styles.css";

import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

export default function TypeOfAnalysis({ onButtonClick }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState(() => {
    const storedValue = localStorage.getItem("selectedRadio");
    // Use the stored value if available, otherwise default to "Regulatory"
    return storedValue !== null ? storedValue : "Regulatory";
  });
  const [selectedOptionmet, setSelectedOptionmet] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState([]);
  const [selectedOptionvalid, setSelectedOptionvalid] = useState(null);
  const [otherValue, setOtherValue] = useState('');
  const [otherreg, setOtherreg] = useState('');
  const [othervalid, setOthervalid] = useState('');
  const dispatch = useDispatch();
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    setValue,
    // formState: {},
  } = useForm({ defaultValues: state });
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOptionmet(selectedValue);
    
    // When a radio option other than "Others" is selected, clear the "otherValue" and react-hook-form field
    if (selectedValue !== "GTP" ) { 
      setOtherValue('');
      setValue("referencetext", '');
    }
    if (selectedValue !== "STP" ) { 
      setOtherValue('');
      setValue("referencetext", '');
    }
    if (selectedValue !== "Reference No" ) { 
      setOtherValue('');
      setValue("referencetext", '');
    }
  };
  const handleOtherchange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    
    // When a radio option other than "Others" is selected, clear the "otherValue" and react-hook-form field
    if (selectedValue !== "Other" ) { 
      setOtherreg('');
      setValue("otherregulatory", '');
    }
    
  };
  const handleRadioValid = (event) => {
    const selectedValue = event.target.value;
    setSelectedOptionvalid(selectedValue);
    
    // When a radio option other than "Others" is selected, clear the "otherValue" and react-hook-form field
    if (selectedValue !== "Yes" ) { 
      setOthervalid('');
      setValue("yesvalid", '');
    }
    
  };
  useEffect(() => {
    // Set the initial value of "selectedOption" and "otherValue" when the component mounts
    const initialMethodology = state.methodologyfollowed || null;
    setSelectedOptionmet(initialMethodology);
    const initialRegulatory = state.formfilling || null;
    setSelectedOption(initialRegulatory);
    const initialValid = state.methodvalidation || null;
    setSelectedOptionvalid(initialValid);
     
    if (initialMethodology === "GTP" || "STP" ||"Reference No") {
      const initialSamplename = state.referencetext || '';
      setOtherValue(initialSamplename);
      // Set the value of "otherValue" in react-hook-form
      setValue("referencetext", initialSamplename);
    }
    if (initialRegulatory === "Other" ) {
      const initialSamplename = state.otherregulatory || '';
      setOtherreg(initialSamplename);
      // Set the value of "otherValue" in react-hook-form
      setValue("otherregulatory", initialSamplename);
    }
    if (initialRegulatory === "Yes" ) {
      const initialSamplename = state.yesvalid || '';
      setOthervalid(initialSamplename);
      // Set the value of "otherValue" in react-hook-form
      setValue("yesvalid", initialSamplename);
    }

  }, [state.methodologyfollowed,state.formfilling]);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setOtherValue(inputValue);
    
    // Update the value of the "samplename" field in react-hook-form
    setValue("referencetext", inputValue);
  };
  const handleOtherInputchange = (event) => {
    const inputValue = event.target.value;
    setOtherreg(inputValue);
    
    // Update the value of the "samplename" field in react-hook-form
    setValue("otherregulatory", inputValue);
  };
  const handleInputValidChange = (event) => {
    const inputValue = event.target.value;
    setOthervalid(inputValue);
    
    // Update the value of the "samplename" field in react-hook-form
    setValue("yesvalid", inputValue);
  };
  const saveData = (data) => {
    // if (data.methodologyfollowed !== "") {
    //   data.referencetext = ""; // Reset the value if it's not "Others"
    // }
    setState({ ...state, ...data });

    if (selectedRadio === "Regulatory") {
      dispatch(
        changeTypeofAnalysis({
          analyticalfeasibile: null,
          choosefile: data.choosefile,
          formfilling: data.formfilling,
          methodologyfollowed: data.methodologyfollowed,
          methodvalidation: data.methodvalidation,
          specialinstruction: data.specialinstruction,
          test: data.test,
          referencetext:data.referencetext,
          otherregulatory:data.otherregulatory,
          yesvalid:data.yesvalid
        })
      );
    } else {
      dispatch(
        changeTypeofAnalysis({
          analyticalfeasibile: data.analyticalfeasibile,
          choosefile: data.choosefile,
          formfilling: null,
          methodologyfollowed: data.methodologyfollowed,
          methodvalidation: data.methodvalidation,
          specialinstruction: data.SpecialInstruction,
          test: data.test,
          referencetext:data.referencetext,
          otherregulatory:data.otherreg,
          yesvalid:data.othervalid

        })
      );
    }

    onButtonClick("ConfirmDetails");
  };
  const handleOptionChange = (event) => {
    const selectedOptionValue = event.target.value;
    setSelectedRadio(selectedOptionValue);

    // Store the selected value in localStorage
    localStorage.setItem("selectedRadio", selectedOptionValue);

    // Clear the values of the corresponding fields when switching between options
    if (selectedOptionValue === "Regulatory") {
      setValue("analyticalfeasibile", ""); // Clear the value of analyticalfeasibile
    } else if (selectedOptionValue === "NonRegulatory") {
      setValue("formfilling", ""); // Clear the value of formfilling
    }
  };
  const renderRadioList = () => {
    if (selectedRadio === "Regulatory") {
      return (
        <Row>
          <div className="cardcolhed">
            <div className="mb-3">
              <Field label="Regulatory">
                <text>(Form-39/DMF Filing/ANDA Filing/Any Query)*</text>
              </Field>
            </div>
            {selectedRadio === "Regulatory" && (
              <div className="row">
                <div className="col">
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div>
                      <Field>
                        <Input
                          {...register("formfilling")}
                          type="radio"
                          id="Validation"
                          value="Validation"
                          name="formfilling"
                          disabled={selectedRadio === "NonRegulatory"}
                          checked={selectedOption === "Validation"}
                          onChange={handleList1Change}
                          className="customRadio"
                        />
                      </Field>
                    </div>
                    <div>
                      <label className="space">Validation</label>
                    </div>
                  </div>

                  <div className="col">
                    <div style={{ display: "flex" }}>
                      <div>
                        <Field>
                          <Input
                            {...register("formfilling")}
                            type="radio"
                            id="USFDA"
                            value="USFDA"
                            name="formfilling"
                            disabled={selectedRadio === "NonRegulatory"}
                            checked={selectedOption === "USFDA"}
                            onChange={handleList1Change}
                            className="customRadio"
                          />
                        </Field>
                      </div>
                      <div>
                        <label className="space">USFDA</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div style={{ display: "flex" }}>
                    <div>
                      <Field>
                        <Input
                          {...register("formfilling")}
                          type="radio"
                          id="Verification"
                          value="Verification"
                          name="formfilling"
                          disabled={selectedRadio === "NonRegulatory"}
                          checked={selectedOption === "Verification"}
                          onChange={handleList1Change}
                          className="customRadio"
                        />
                      </Field>
                    </div>
                    <div>
                      <label className="space">Verification</label>
                    </div>
                  </div>

                  <div className="col">
                    <div style={{ display: "flex" }}>
                      <div>
                        <Field>
                          <Input
                            {...register("formfilling")}
                            type="radio"
                            id="EU GMP"
                            value="EU GMP"
                            name="formfilling"
                            disabled={selectedRadio === "NonRegulatory"}
                            checked={selectedOption === "EU GMP"}
                            onChange={handleList1Change}
                            className="customRadio"
                          />
                        </Field>
                      </div>
                      <div>
                        <label className="space">EU GMP</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div style={{ display: "flex" }}>
                    <div>
                      <Field>
                        <Input
                          {...register("formfilling")}
                          type="radio"
                          id="Transfer"
                          value="Transfer"
                          name="formfilling"
                          disabled={selectedRadio === "NonRegulatory"}
                          checked={selectedOption === "Transfer"}
                          onChange={handleList1Change}
                          className="customRadio"
                        />
                      </Field>
                    </div>
                    <div>
                      <label className="space">Transfer</label>
                    </div>
                  </div>

                  <div className="col">
                    <div style={{ display: "flex" }}>
                      <div>
                        <Field>
                          <Input
                            {...register("formfilling")}
                            type="radio"
                            id="Local FDA(DCA)"
                            value="Local FDA(DCA)"
                            name="formfilling"
                            disabled={selectedRadio === "NonRegulatory"}
                            checked={selectedOption === "Local FDA(DCA)"}
                            onChange={handleList1Change}
                            className="customRadio"
                          />
                        </Field>
                      </div>
                      <div>
                        <label className="space">Local FDA(DCA)</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div style={{ display: "flex" }}>
                    <div>
                      <Field>
                        <Input
                          {...register("formfilling")}
                          type="radio"
                          id="Stability"
                          value="Stability"
                          name="formfilling"
                          disabled={selectedRadio === "NonRegulatory"}
                          checked={selectedOption === "Stability"}
                          onChange={handleList1Change}
                          className="customRadio"
                        />
                      </Field>
                    </div>
                    <div>
                      <label className="space">Stability</label>
                    </div>
                  </div>

                  <div className="col">
                    <div style={{ display: "flex" }}>
                      <div>
                        <Field>
                          <Input
                            {...register("formfilling")}
                            type="radio"
                            id="NABL"
                            value="NABL"
                            name="formfilling"
                            disabled={selectedRadio === "NonRegulatory"}
                            checked={selectedOption === "NABL"}
                            onChange={handleList1Change}
                            className="customRadio"
                          />
                        </Field>
                      </div>
                      <div>
                        <label className="space">NABL</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div style={{ display: "flex" }}>
                    <div>
                      <Field>
                        <Input
                          {...register("formfilling")}
                          type="radio"
                          id="Batch Release"
                          value="Batch Release"
                          name="formfilling"
                          disabled={selectedRadio === "NonRegulatory"}
                          checked={selectedOption === "Batch Release"}
                          onChange={handleList1Change}
                          className="customRadio"
                        />
                      </Field>
                    </div>
                    <div>
                      <label className="space">Batch Release</label>
                    </div>
                  </div>

                  <div className="col">
                    <div style={{ display: "flex" }}>
                      <div>
                        <Field>
                          <Input
                            {...register("formfilling")}
                            type="radio"
                            id="Other"
                            value="Other"
                            name="formfilling"
                            checked={selectedOption === "Other"}
                            onChange={handleOtherchange}
                            className="customRadio"
                          />
                        </Field>
                      </div>
                      <div>
                        <label className="space">Other</label>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col">
                  <span>
                    {selectedOption === "Other" && (
                      <Field>
                      <Input 
                      {...register("otherregulatory")}
                      type="text" className="NatureOfSample" 
                      onChange={handleOtherInputchange}
                      value={otherreg}/>
                      </Field>
                    )}
                  </span>
                </div>
              </div>
            )}
          </div>
        </Row>
      );
    } else {
      return (
        <Col md={6} className="cardcolhed">
          <div className="mb-3">
            <Field>
              <text className="mb-3">Other than Regulatory</text>
            </Field>
          </div>
          {selectedRadio === "NonRegulatory" && (
            <div style={{ display: "flex", marginBottom: 20 }}>
              <div>
                <Field>
                  <Input
                    {...register("analyticalfeasibile")}
                    type="checkbox"
                    value="AnalyticalFeasibility"
                    id="AnalyticalFeasibilty"
                    name="analyticalfeasibile"
                    disabled={selectedRadio === "Regulatory"}
                    checked={selectedOption1.includes("AnalyticalFeasibility")}
                    onChange={handleList2Change}
                    className="customRadio"
                  />
                </Field>
              </div>
              <div>
                <label className="space">Analytical Feasibility</label>
              </div>

              <div
                style={{
                  marginLeft: 60,
                  alignItems: "center",
                  display: "flex",
                }}
              ></div>
              <div>
                <Field>
                  <Input
                    {...register("analyticalfeasibile")}
                    type="checkbox"
                    value="R&D Sample"
                    id="R&D Sample"
                    name="analyticalfeasibile"
                    disabled={selectedRadio === "Regulatory"}
                    checked={selectedOption1.includes("R&D Sample")}
                    onChange={handleList2Change}
                    className="customRadio"
                  />
                </Field>
              </div>
              <div>
                <label className="space">R&D Sample</label>
              </div>
            </div>
          )}

          {selectedRadio === "NonRegulatory" && (
            <div style={{ display: "flex" }}>
              <div>
                <Field>
                  <Input
                    {...register("analyticalfeasibile")}
                    type="checkbox"
                    value="Method Developement"
                    id="Method Developement"
                    name="analyticalfeasibile"
                    disabled={selectedRadio === "Regulatory"}
                    checked={selectedOption1.includes("Method Developement")}
                    onChange={handleList2Change}
                    className="customRadio"
                  />
                </Field>
              </div>
              <div>
                <label className="space">Method Development</label>
              </div>

              <div
                style={{
                  marginLeft: 50,
                  alignItems: "center",
                  display: "flex",
                }}
              ></div>
              <div>
                <Field>
                  <Input
                    {...register("analyticalfeasibile")}
                    type="checkbox"
                    value="Batch Analysis"
                    id="Batch Analysis"
                    name="analyticalfeasibile"
                    disabled={selectedRadio === "Regulatory"}
                    checked={selectedOption1.includes("Batch Analysis")}
                    onChange={handleList2Change}
                    className="customRadio"
                  />
                </Field>
              </div>
              <div>
                <label className="space">Batch Analysis</label>
              </div>
            </div>
          )}
        </Col>
      );
    }
  };
  // useEffect(() => {

  //   if (selectedRadio === "Regulatory") {
  //     setValue("choice","");
  //     setValue("choosefile", ""); // Update with the default value for "choosefile"
  //     setValue("formfilling", ""); // Update with the default value for "formfilling"

  //   } else if (selectedRadio === "NonRegulatory") {
  //     setValue("choice","");
  //     setValue("analyticalfeasibile", ""); // Update with the default value for "analyticalfeasibile"
  //     // ... Set other fields to their default values for "nonregulatory"
  //   }
  // }, [selectedRadio, setValue]);

  const handleList1Change = (event) => {
    setSelectedOption(event.target.value);
    setSelectedOption1([]);
  };
  const handleList2Change = (event) => {
    const value = event.target.value;
    if (selectedOption1.includes(value)) {
      setSelectedOption1(selectedOption1.filter((item) => item !== value));
    } else {
      setSelectedOption1([...selectedOption1, value]);
    }
    setSelectedOption(null);
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Type of Analysis</text>
              </div>
              <Form onSubmit={handleSubmit(saveData)}>
                <fieldset>
                  <div className="cardcolumnpadding">
                    <label className="cardcolhed mb-2">Is comes under?</label>

                    <div className="row">
                      <div className="col-6" style={{ display: "flex" }}>
                        <div className="col">
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <div>
                              <Field>
                                <Input
                                  {...register("choice")}
                                  type="radio"
                                  id="Regulatory"
                                  value="Regulatory"
                                  name="choice"
                                  checked={selectedRadio === "Regulatory"}
                                  onChange={handleOptionChange}
                                  className="customRadio"
                                />
                              </Field>
                            </div>
                            <div className="cardcolhed">
                              <label className="space">Regulatory</label>
                            </div>
                          </div>
                        </div>

                        <div className="col">
                          <div style={{ display: "flex" }}>
                            <div>
                              <Field>
                                <Input
                                  {...register("choice")}
                                  type="radio"
                                  id="NonRegulatory"
                                  value="NonRegulatory"
                                  name="choice"
                                  checked={selectedRadio === "NonRegulatory"}
                                  onChange={handleOptionChange}
                                  className="customRadio"
                                />
                              </Field>
                            </div>
                            <div className="cardcolhed">
                              <label className="space">
                                Other than Regulatory
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <Col md={12} style={{ display: "block" }} className="mb-3">
                      {renderRadioList()}
                    </Col>
                    <hr />

                    {/*----------------------------------------------- First Column End ------------------------------------*/}

                    <Row className="cardcolhed">
                      <Col md={6} style={{ display: "block" }}>
                        <div className=" cardcolhedd">
                          <div className="mb-3">
                            <Field>
                              <text>
                                If Method
                                Validation/Verification/Transfer/Development are
                                performed at Revin Labs please specify the
                                Report Ref. No.
                              </text>
                            </Field>
                          </div>
                          <div className="d-flex">
                            <div className="col">
                              <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                <div>
                                  <Field>
                                    <Input
                                      {...register("methodvalidation")}
                                      type="radio"
                                      value="No"
                                      id="No"
                                      checked={selectedOptionvalid === "No"}
                                      onChange={() =>
                                        setSelectedOptionvalid("No")
                                      }
                                      name="methodvalidation"
                                      // checked={selectedOption2 === "option14"}
                                      //onChange={handleOptionChange2}
                                      className="customRadio"
                                    />
                                  </Field>
                                </div>
                                <div>
                                  <label className="space">No</label>
                                </div>
                              </div>
                            </div>

                            <div className="col">
                              <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                <div>
                                  <Field>
                                    <Input
                                      {...register("methodvalidation")}
                                      type="radio"
                                      value="Yes"
                                      id="Yes"
                                      checked={selectedOptionvalid === "Yes"}
                                      onChange={handleRadioValid}
                                      name="methodvalidation"
                                      //checked={selectedOption2 === "option15"}
                                      //onChange={handleOptionChange2}
                                      className="customRadio"
                                    />
                                  </Field>
                                </div>
                                <div>
                                  <label className="space">Yes</label>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="col">
                                <span>
                                  {selectedOptionvalid === "Yes" && (
                                    <Field>
                                    <Input
                                    {...register("yesvalid")}
                                      type="text"
                                      className="methodValidation"
                                      onChange={handleInputValidChange}
                                      value={othervalid}
                                    />
                                    </Field>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={6} className="cardcolhed">
                        <div className="mb-3">
                          <label>Test to be carried out as per</label>
                        </div>

                        <div style={{ display: "flex" }}>
                          <div
                            className="col"
                            style={{
                              display: "flex",
                              //marginRight: 40,
                            }}
                          >
                            <div>
                              <Field>
                                <Input
                                  {...register("test")}
                                  type="checkbox"
                                  value="USP"
                                  name="test"
                                  //checked={selectedOption3 === "option16"}
                                  //onChange={handleOptionChange3}
                                  className="customRadio"
                                />
                              </Field>
                            </div>
                            <div>
                              <label className="space">USP</label>
                            </div>
                          </div>
                          <div
                            className="col"
                            style={{
                              display: "flex",
                              // marginRight: 40,
                            }}
                          >
                            <div>
                              <Field>
                                <Input
                                  {...register("test")}
                                  type="checkbox"
                                  value="BP"
                                  name="test"
                                  //checked={selectedOption3 === "option17"}
                                  //onChange={handleOptionChange3}
                                  className="customRadio"
                                />
                              </Field>
                            </div>
                            <div>
                              <label className="space">BP</label>
                            </div>
                          </div>
                          <div className="col" style={{ display: "flex" }}>
                            <div>
                              <Field>
                                <Input
                                  {...register("test")}
                                  type="checkbox"
                                  value="EP"
                                  name="test"
                                  // checked={selectedOption3 === "option18"}
                                  //onChange={handleOptionChange3}
                                  className="customRadio"
                                />
                              </Field>
                            </div>
                            <div>
                              <label className="space">EP</label>
                            </div>
                          </div>
                        </div>

                        <div style={{ display: "flex", marginTop: 5 }}>
                          <div
                            className="col"
                            style={{
                              display: "flex",
                              //marginRight: 52,
                            }}
                          >
                            <div>
                              <Field>
                                <Input
                                  {...register("test")}
                                  type="checkbox"
                                  value="IP"
                                  name="test"
                                  //checked={selectedOption3 === "option19"}
                                  //onChange={handleOptionChange3}
                                  className="customRadio"
                                />
                              </Field>
                            </div>
                            <div>
                              <label className="space">IP</label>
                            </div>
                          </div>
                          <div
                            className="col"
                            style={{
                              display: "flex",
                              //marginRight: 45,
                            }}
                          >
                            <div>
                              <Field>
                                <Input
                                  {...register("test")}
                                  type="checkbox"
                                  value="IS"
                                  name="test"
                                  //checked={selectedOption3 === "option20"}
                                  //onChange={handleOptionChange3}
                                  className="customRadio"
                                />
                              </Field>
                            </div>
                            <div>
                              <label className="space">IS</label>
                            </div>
                          </div>
                          <div className="col" style={{ display: "flex" }}>
                            <div>
                              <Field>
                                <Input
                                  {...register("test")}
                                  type="checkbox"
                                  value="Method of AnalysiS"
                                  name="test"
                                  //checked={selectedOption3 === "option21"}
                                  //onChange={handleOptionChange3}
                                  className="customRadio"
                                />
                              </Field>
                            </div>
                            <div>
                              <label className="space">
                                Method of Analysis
                              </label>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    {/* --------------------------------------------3rd Column starting ----------------------------------*/}
                    <Row>
                     <div  className="col-12 cardcolhed">
                        <div className="mb-3">
                          <label>Methodology</label>
                        </div>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <div className="col">
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <div>
                                <Field>
                                  <Input
                                    {...register("methodologyfollowed")}
                                    type="radio"
                                    id="STP"
                                    value="STP"
                                    checked={selectedOptionmet === "STP"}
                                    onChange={handleRadioChange}
                                    name="methodologyfollowed"
                                    //checked={selectedOption4 === "option22"}
                                    //onChange={handleOptionChange4}
                                    className="customRadio"
                                  />
                                </Field>
                              </div>
                              <div>
                                <label className="space">STP</label>
                              </div>
                            </div>
                        
                          </div>
                          <div 
                           
                          >
                            {selectedOptionmet === "STP" && (
                              <Field>
                              <Input
                                {...register("referencetext")}
                                type="text"
                                className="methodology"
                                onChange={handleInputChange}
                                    value={otherValue}
                              />
                              </Field>
                            )}
                          </div>
                          <div  className="col">
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <div>
                                <Field>
                                  <Input
                                    {...register("methodologyfollowed")}
                                    type="radio"
                                    id="GTP"
                                    value="GTP"
                                    checked={selectedOptionmet === "GTP"}
                                    onChange={handleRadioChange}
                                    name="methodologyfollowed"
                                    //checked={selectedOption4 === "option23"}
                                    //onChange={handleOptionChange4}
                                    className="customRadio"
                                  />
                                </Field>
                              </div>
                              <div>
                                <label className="space">GTP</label>
                              </div>

                              <div 
                            style={{ alignItems: "center", display: "flex" }}
                          >
                            {selectedOptionmet === "GTP" && (
                              <Input
                                {...register("referencetext")}
                                type="text"
                                className="methodology"
                                onChange={handleInputChange}
                                    value={otherValue}
                              />
                            )}
                          </div>
                            </div>

                          
                           
                          </div>

                         
                          <div  className="col">
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <div>
                                <Field>
                                  <Input
                                    {...register("methodologyfollowed")}
                                    type="radio"
                                    className="customRadio"
                                    id="Reference No"
                                    value="Reference No"
                                    checked={
                                      selectedOptionmet === "Reference No"
                                    }
                                    onChange={handleRadioChange}
                                    name="methodologyfollowed"
                                    //checked={selectedOption4 === "option24"}
                                    //onChange={handleOptionChange4}
                                  />
                                </Field>
                              </div>
                              <div>
                                <label className="space">Reference No</label>
                              </div>

                              <div
                            style={{ alignItems: "center", display: "flex" }}
                          >
                            {selectedOptionmet === "Reference No" && (
                              <Input
                                {...register("referencetext")}
                                type="text"
                                className="methodology"
                                onChange={handleInputChange}
                                    value={otherValue}
                              />
                            )}
                          </div>
                            </div>
                          </div>

                          
                        </div>
                      </div>
                    </Row>
                    <hr />

                    {/*------------------------------------------------------ second column End--------------------------------------------------- */}

                    <Row>
                      <Col
                        md={6}
                        className="col-12 cardcolhed mb-3"
                        style={{ display: "block" }}
                      >
                        <div className=" mb-3">
                          <label>Attachfile</label>
                        </div>
                        <div>
                          <Card
                            style={{
                              height: 70,
                              width: "100%",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: 12,
                              fontWeight: 500,
                              color: "#8F8F8F",
                              border: "1px dashed",
                              display: "flex",
                            }}
                          >
                            <div className="d-flex">
                              <MdOutlineUploadFile size={24} color="#9AC037" />
                              
                                <Input
                                  type="file"
                                  name="choosefile"
                                  className="customInput"
                                  {...register("choosefile")}
                                />
                              
                            </div>
                          </Card>
                        </div>
                      </Col>
                      <Col
                        md={6}
                        className="cardcolhed"
                        style={{ display: "block" }}
                      >
                        <div className="mb-3">
                          <label>Special Instructions If any other</label>
                        </div>
                        <div>
                          <Field>
                            <Input
                              name="specialinstruction"
                              type="textarea"
                              className="spclInstruction"
                              {...register("specialinstruction")}
                            />
                          </Field>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            margin: 10,
                            marginTop: 50,
                          }}
                        >
                          <Button
                            type="button"
                            className="previous"
                            onClick={() => onButtonClick("BatchDetails")}
                          >
                            <BiLeftArrowAlt size={24} color="#9AC037" />
                            Previous
                          </Button>
                          <Button type="submit" className="next" name="Next">
                            Next <BiRightArrowAlt size={24} color="#fff" />
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </fieldset>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
