import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import React, {useState,useEffect } from "react";

import { Row, Col, Card } from "react-bootstrap";
import "./Styles.css";

import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { changeSampleDetails } from '../redux/FormSlice';
export default function SampleDetails({ onButtonClick }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptioncheck, setSelectedOptioncheck] = useState(false);
  const [selectedOptioncheck1, setSelectedOptioncheck1] = useState(false);
  const [otherValue, setOtherValue] = useState('');
  const [sampleTypeOther, setSampleTypeOther] = useState('');
  
  const dispatch = useDispatch();
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: state });

 
   const handlecheckboxchange = () => {
   setSelectedOptioncheck(!selectedOptioncheck);
   if (!selectedOptioncheck) {
    // Reset the sampleTypeOther when "Others" is selected
    setSampleTypeOther('');
  }
   };
   useEffect(() => {
    // Set the initial value of "selectedOption" and "otherValue" when the component mounts
    const initialNatureOfSample = state.natureofsample || null;
    setSelectedOption(initialNatureOfSample);
     const initialSampleType = state.sampletype || null;
    setSelectedOptioncheck(initialSampleType);
    if (initialNatureOfSample === "Others") {
      const initialSamplename = state.othersample || '';
      setOtherValue(initialSamplename);
      // Set the value of "otherValue" in react-hook-form
      setValue("othersample", initialSamplename);
    }
    if (initialSampleType === "Others") {
      const initialSample = state.othercheck || '';
      setSampleTypeOther(initialSample);
      // Set the value of "otherValue" in react-hook-form
      setValue("othercheck", initialSample);}

  }, [state.natureofsample,state.sampletype]);


   const handlemsdschange = () => {
    setSelectedOptioncheck1(!selectedOptioncheck1);;
    };
    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      setOtherValue(inputValue);
      
      // Update the value of the "samplename" field in react-hook-form
      setValue("othersample", inputValue);
    };
    const handleRadioChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
      
      // When a radio option other than "Others" is selected, clear the "otherValue" and react-hook-form field
      if (selectedValue !== "Others") {
        setOtherValue('');
        setValue("othersample", '');
      }
    };
  const saveData = (data) => {
    if (data.natureofsample !== "Others") {
      data.othersample = ""; // Reset the value if it's not "Others"
    }
    setState({ ...state, ...data });
    dispatch(changeSampleDetails(
      {
     
natureofsample:`${data.natureofsample} (${data.othersample})`,
report:data.report,
samplename:data.samplename,
sampletype:data.sampletype.concat(sampleTypeOther),
sampleretension:data.sampleretension,
storage:data.storage,
submissiontype:data.submissiontype,

      })
    )
    onButtonClick("BatchDetails");
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Sample Details</text>
              </div>
              <Form onSubmit={handleSubmit(saveData)}>
                <fieldset>
                <div className="cardcolumnpadding">
                  <div  className="cardcolhed mb-4"> <label> Name of the Sample</label></div>
                  <Field>
                    <Input {...register("samplename")} id="samplename"  className="form-control1" />
                  </Field>
                  <hr />
                  <div className="">
                    <Row>
                      <Col>
                        <div
                          className="cardcolhed mb-4"
                          style={{ }}
                        >
                          <Field label=" Report required as per Form-39">
                            <text className="cardcolhedstar">*</text>
                          </Field>
                          <div
                            style={{
                              //flexDirection: "row",
                              justifyContent: "space-between",
                              display: "flex",
                              //alignItems: "center",
                              //marginTop: "5px",

                              fontSize: "12px",
                              fontWeight: 400,
                            }}
                          >
                            <div className="col">
                              <span

                                  style={{
                                    flexDirection:'row',
                                    display:'flex',}}
                              ><div>
                                <Field>
                                  <Input
                                    {...register("report", { required: true })}
                                    type="radio"
                                    id="Yes"
                                    value="Yes"
                                    name="report"
                                    // checked={selectedOption === "option1"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Yes</label>
                                </div>
                              </span>
                              </div>
                              <div className="col">
                              <span  style={{
                                flexDirection:'row',
                                display:'flex',}}>
                                  <div>
                                <Field>
                                  <Input
                                    {...register("report", { required: true })}
                                    type="radio"
                                    id="No"
                                    value="No"
                                    name="report"
                                    // checked={selectedOption === "option2"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">No</label>
                                </div>
                              </span>
                              </div>
                              <div className="col">
                              <span  style={{
                                flexDirection:'row',
                                display:'flex'}}>
                                  <div>
                                <Field>
                                  <Input
                                    {...register("report", { required: true })}
                                    type="radio"
                                    id="Local FDA(DCA)"
                                    value="Local FDA(DCA)"
                                    name="report"
                                    // checked={selectedOption === "option2"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Local FDA(DCA)</label>
                                </div>
                              </span>
                              </div>
                            </div>
                          

                          <div className="text-danger mt-3">
                            {errors.report?.type === "required" &&
                              "This field is required."}
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          className="cardcolhed mb-4"
                          style={{ }}
                        >
                          <Field label="Storage Condition">
                            <text className="cardcolhedstar">*</text>
                          </Field>
                          <div
                            style={{
                             // flexDirection: "row",
                              justifyContent: "space-between",
                              display: "flex",
                              marginTop: "5px",
                              fontSize: "12px",
                              fontWeight: 400,
                            }}
                          >
                            <div className="col">
                              <span  style={{
                                flexDirection:'row',
                                display:'flex'}}>
                                  <div>
                                <Field>
                                  <Input
                                    {...register("storage", { required: true })}
                                    type="radio"
                                    name="storage"
                                    value="Ambient/RT"
                                    // checked={selectedOption3 === "option13"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                    id="Ambient/RT"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Ambient/RT</label>
                                </div>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{
                                flexDirection:'row',
                                display:'flex' }}
                                >
                                  <div>
                                <Field>
                                  <Input
                                    {...register("storage", { required: true })}
                                    type="radio"
                                    name="storage"
                                    id="Freezer (-20°C)"
                                    value="Freezer (-20°C)"
                                    // checked={selectedOption3 === "option14"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Freezer (-20°C)</label>
                                </div>
                              </span>
                            </div>
                            <div className="">
                              <span  style={{
                                flexDirection:'row',
                                display:'flex' }}>
                                  <div>
                                <Field>
                                  <Input
                                    {...register("storage", { required: true })}
                                    type="radio"
                                    id="Refrigerator (2-8°C)"
                                    value="Refrigerator (2-8°C)"
                                    name="storage"
                                    // checked={selectedOption3 === "option15"}
                                    // onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">
                                Refrigerator (2-8°C)
                              </label>
                              </div>
                              </span>
                            </div>
                          </div>
                          <div className="text-danger mt-3">
                            {errors.storage?.type === "required" &&
                              "This field is required."}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col md={6}>
                        <div>
                        <div
                          className="cardcolhed mb-4"
                          style={{ }}
                        >
                          <Field label="Nature of Sample">
                            <text className="cardcolhedstar">*</text>
                          </Field>
                          <div>
                          <div
                            style={{
                              //flexDirection: "row",
                              justifyContent: "space-between",
                              display: "flex",
                              //alignItems: "center",
                              marginTop: "5px",

                              fontSize: "12px",
                              fontWeight: 400,
                            }}
                          >
                            <div className="col">
                              <span
                                style={{
                                  //alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <div>
                                <Field>
                                  <Input
                                    {...register("natureofsample", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="RM"
                                    name="natureofsample"
                                    value="RM"
                                    checked={selectedOption === "RM"}
                                    onChange={() =>
                                      setSelectedOption("RM")
                                    }
                                    //checked={selectedOption1 === "option4"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">RM</label>
                                </div>
                              </span>
                            </div>

                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <div>
                                <Field>
                                  <Input
                                    {...register("natureofsample", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="In-Progress"
                                    name="natureofsample"
                                    value="In-Progress"
                                    checked={selectedOption === "In-Progress"}
                                    onChange={() =>
                                      setSelectedOption("In-Progress")
                                    }
                                    //checked={selectedOption1 === "In-Progress"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">In-Progress</label>
                                </div>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <div>
                                <Field>
                                  <Input
                                    {...register("natureofsample", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="Intermediate"
                                    name="natureofsample"
                                    value="Intermediate"
                                    checked={selectedOption === "Intermediate"}
                                    onChange={() =>
                                      setSelectedOption("Intermediate")
                                    }
                                    //checked={selectedOption1 === "option6"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Intermediate</label>
                                </div>
                              </span>
                            </div>
                          </div>
                      

                        <div
                          className="cardcolhed mt-4"
                          style={{ display: "block" }}
                        >
                          <div
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              display: "flex",
                              marginBottom:'5px',
                              fontSize: "12px",
                              fontWeight: 400,
                            }}
                          >
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <div>
                                <Field>
                                  <Input
                                    {...register("natureofsample", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="API"
                                    name="natureofsample"
                                    value="API"
                                    checked={selectedOption === "API"}
                                    onChange={() =>
                                      setSelectedOption("API")
                                    }
                                    //checked={selectedOption1 === "option7"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">API</label>
                                </div>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <div>
                                <Field>
                                  <Input
                                    {...register("natureofsample", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="Excipient"
                                    name="natureofsample"
                                    value="Excipient"
                                    checked={selectedOption === "Excipient"}
                                    onChange={() =>
                                      setSelectedOption("Excipient")
                                    }
                                    //checked={selectedOption1 === "option8"}
                                    // onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Excipient</label>
                                </div>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <div>
                                <Field>
                                  <Input
                                    {...register("natureofsample", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="Drug Product"
                                    name="natureofsample"
                                    value="Drug Product"
                                    checked={selectedOption === "Drug Product"}
                                    onChange={() =>
                                      setSelectedOption("Drug Product")
                                    }
                                    //checked={selectedOption1 === "option9"}
                                    //onChange={handleChange}
                                    //checked={!showTextBox}
                                    //onChange={handleRadioChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Drug Product</label>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div
                          className="cardcolhed mt-4"
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
                                <div>
                                <Field>
                                  <Input
                                    {...register("natureofsample", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="Others"
                                    name="natureofsample"
                                    value="Others"
                                    checked={selectedOption === "Others"}
                                    onChange={handleRadioChange}
                                    
                                    //checked={selectedOption1 === "option10"}
                                    //checked={showTextBox}
                                    //onChange={handleRadioChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Others</label>
                                </div>
                              </span>
                            </div>

                            <div className="col">
                              <span>
                                {selectedOption === "Others" && (
                                  <Field>
                                  <Input
                                  {...register("othersample")}
                                  
                                    type="text"
                                    className="NatureOfSample"
                                    onChange={handleInputChange}
                                    value={otherValue}
                                  />
                                  </Field>
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div className="text-danger mt-3">
                            {errors.natureofsample?.type === "required" &&
                              "This field is required."}
                          </div>
                        </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                        <div
                          className="cardcolhed mb-4"
                          style={{ display: "block" }}
                        >
                          <Field label="Sample Type">
                            <text className="cardcolhedstar">*</text>
                          </Field>
                          <div
                            style={{
                              //flexDirection: "row",
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
                                style={{
                                //  alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <div>
                                <Field>
                                  <Input
                                    {...register("sampletype", {
                                      required: true,
                                    })}
                                    type="checkbox"
                                
                                    name="sampletype"
                                    value="Hygroscopic"
                                   // id="hygroscopic"
                                    // checked={selectedOptioncheck === "hygroscopic"}
                                    // onChange={() =>
                                    //   setSelectedOptioncheck("hygroscopic")
                                    // }
                                   
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Hygroscopic</label>
                                </div>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <div>
                                <Field>
                                  <Input
                                    {...register("sampletype", {
                                      required: true,
                                    })}
                                    type="checkbox"
                                     value="Lightsensitive"
                                    name="sampletype"
                                  
                                   // id="lightsensitive"
                                    // checked={selectedOptioncheck === "lightsensitive"}
                                    // onChange={() =>
                                    //   setSelectedOptioncheck("lightsensitive")
                                    // }
                                  
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Light Sensitive</label>
                                </div>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <div>
                                <Field>
                                  <Input
                                    {...register("sampletype", {
                                      required: true,
                                    })}
                                    type="checkbox"
                  
                                    name="sampletype"
                                    value="Non-Hazardous"
                                    //id="non-hazardous"
                                   // checked={selectedOptioncheck === "non-hazardous"}
                                    // onChange={() =>
                                    //   setSelectedOptioncheck("non-hazardous")
                                    // }
                                   
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Non-Hazardous</label>
                                </div>
                              </span>
                            </div>
                          </div>
</div>
                          <div
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
                                  <div>
                                  <Field>
                                    <input
                                      {...register("sampletype", {
                                        required: true,
                                      })}
                                      type="checkbox"
                                      name="sampletype"
                                      value="Hazardous"
                                      //id="hazardous"
                                      // checked={
                                      //   selectedOptioncheck === "hazardous"
                                      // }
                                      // onChange={() =>
                                      //   setSelectedOptioncheck("hazardous")
                                      // }
                                     
                                      className="customRadio"
                                    />
                                  </Field>
                                  </div>
                                  <div>
                                  <label className="space">Hazardous</label>
                                  </div>
                                </span>
                              </div>
                              <div className="col">
                                <span style={{ display: "flex" }}>
                                  <div>
                                  <Field>
                                    <Input
                                      {...register("sampletype", {
                                        required: true,
                                      })}
                                      type="checkbox"
                                      //id="msds"
                                      name="sampleType"
                                      value="MSDS Attached"
                                      checked={selectedOptioncheck1}
                                      onChange={handlemsdschange}
                                      className="customRadio"
                                    />
                                  </Field>
                                  </div>
                                  <div>
                                  <label className="space">MSDS Attached</label>
                                  </div>
                                </span>
                              </div>

                              <div className="col">
                                <span style={{ display: "flex" }}>
                                  <div>
                                  <span>
                                  {selectedOptioncheck1  && (
                                    <Input
                                      type="file"
                                      
                                      style={{ width: 170 }}
                                      className="customInput"
                                    />)}
                                  </span>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div
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
                                  <div>
                                  <Field>
                                    <Input
                                      {...register("sampletype", {
                                        required: true,
                                      })}
                                      type="checkbox"
                                    
                                      name="sampletype"
                                      value="Others"
                                      //id="others"
                                      checked={selectedOptioncheck}
                                      onChange={handlecheckboxchange}
                                      
                                      className="customRadio"
                                    />
                                  </Field>
                                  </div>
                                  <div>
                                  <label className="space">Others</label>
                                  </div>
                                </span>
                              </div>
                              <div className="col">
                                <span>
                                  {selectedOptioncheck  && (
                                    <Field>
                                    <Input
                                    {...register("othercheck")}
                                    type="text"
                                    name="othercheck"
                                    value={sampleTypeOther}
                                      className="cardcolumninputtype"
                                      //value="sampletype"
                                      id="sampletype"
                                      onChange={(e) =>{setSampleTypeOther(e.target.value);
                                      setValue("othercheck", e.target.value);
        }}
                                    />
                                    </Field>
                                  )}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-danger mt-3">
                            {errors.sampletype?.type === "required" &&
                              "This field is required."}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr />

                    <Row>
                      <Col md={6}>
                        <div
                          className="cardcolhed mb-4"
                          style={{ display: "block" }}
                        >
                          <Field label="Sample Retention required(Drug Product/Substance)">
                            <text className="cardcolhedstar">*</text>
                          </Field>
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
                                <div>
                                <Field>
                                  <Input
                                    {...register("sampleretension", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="Yes"
                                    value="Yes"
                                    //checked={selectedOption2 === "option11"}
                                    // onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Yes</label>
                                </div>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <div>
                                <Field>
                                  <Input
                                    {...register("sampleretension", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="No"
                                    value="No"
                                    //checked={selectedOption2 === "option12"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">No</label>
                                </div>
                              </span>
                            </div>
                           <div className="col">
                            <span style={{ display: "flex" }}>
                            
                              <label className="space"></label>
                            </span>
                          </div>
                          </div>
                          <div className="text-danger mt-3">
                            {errors.sampleretension?.type === "required" &&
                              "This field is required."}
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div
                          className="cardcolhed mb-4"
                          style={{ display: "block" }}
                        >
                          <Field label="Type of Submission">
                            <text className="cardcolhedstar">*</text>
                          </Field>
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
                                <div>
                                <Field>
                                  <Input
                                    {...register("submissiontype", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="Person"
                                    value="Person"
                                    //checked={selectedOption5 === "option22"}
                                    //onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Person</label>
                                </div>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <div>
                                <Field>
                                  <Input
                                    {...register("submissiontype", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="Courier"
                                    value="Courier"
                                    // checked={selectedOption5 === "option23"}
                                    // onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">Courier</label>
                                </div>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <div>
                                <Field>
                                  <Input
                                    {...register("submissiontype", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="By Post"
                                    value="By Post"
                                    //checked={selectedOption5 === "option24"}
                                    // onChange={handleChange}
                                    className="customRadio"
                                  />
                                </Field>
                                </div>
                                <div>
                                <label className="space">By Post</label>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="text-danger mt-3">
                            {errors.submissiontype?.type === "required" &&
                              "This field is required."}
                          </div>
                        </div>
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
                      <Button
                        type="button"
                        className="previous"
                        onClick={() => onButtonClick("CustomerDetailes")}
                      >
                        <BiLeftArrowAlt size={24} color="#9AC037" />
                        Previous
                      </Button>

                      <Button type="submit" className="next">
                        Next <BiRightArrowAlt size={24} color="#fff" />
                      </Button>
                    </div>
                    </Row>
                  </div>
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
