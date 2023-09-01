import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import React, {useState } from "react";

import { Row, Col, Card } from "react-bootstrap";
import "./Styles.css";

import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { changeSampleDetails } from '../redux/FormSlice';
export default function SampleDetails({ onButtonClick }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const [selectedOptioncheck, setSelectedOptioncheck] = useState(false);
  const [selectedOptioncheck1, setSelectedOptioncheck1] = useState(false);

  const dispatch = useDispatch();
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state });

 
   const handlecheckboxchange = () => {
   setSelectedOptioncheck(!selectedOptioncheck);;
   };
   
   const handlemsdschange = () => {
    setSelectedOptioncheck1(!selectedOptioncheck1);;
    };
  const saveData = (data) => {
    setState({ ...state, ...data });
    dispatch(changeSampleDetails(
      {
natureofsample:data.natureofsample,
report:data.report,
samplename:data.samplename,
sampletype:data.sampletype,
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
                  <Field label="Name of the Sample" className="defaultStyles">
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
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              ><div>
                                <Field>
                                  <Input
                                    {...register("report", { required: true })}
                                    type="radio"
                                    id="yes"
                                    value="yes"
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
                                    id="no"
                                    value="no"
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
                                    id="local"
                                    value="local"
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
                              <span  style={{
                                flexDirection:'row',
                                display:'flex' }}>
                                  <div>
                                <Field>
                                  <Input
                                    {...register("storage", { required: true })}
                                    type="radio"
                                    name="storage"
                                    id="Freezer"
                                    value="Freezer"
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
                                    id="Refrigerator"
                                    value="Refrigerator"
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
                                    value="intermediate"
                                    checked={selectedOption === "intermediate"}
                                    onChange={() =>
                                      setSelectedOption("intermediate")
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
                                    id="drugproduct"
                                    name="natureofsample"
                                    value="drugproduct"
                                    checked={selectedOption === "drugproduct"}
                                    onChange={() =>
                                      setSelectedOption("drugproduct")
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
                                    {...register("natureofsample", {
                                      required: true,
                                    })}
                                    type="radio"
                                    id="others"
                                    name="natureofsample"
                                    value="others"
                                    checked={selectedOption === "others"}
                                    onChange={() =>
                                      setSelectedOption("others")
                                    }
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
                                {selectedOption === "others" && (
                                  <Input
                                    type="text"
                                    className="NatureOfSample"
                                  />
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
                                    value="hygroscopic"
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
                                     value="lightsensitive"
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
                                    value="non-hazardous"
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
                                      value="hazardous"
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
                                      value="msds"
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
                                      value="others"
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
                                    <Input
                                      className="cardcolumninputtype"
                                      //value="sampletype"
                                      id="sampletype"
                                    />
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
                                    id="yes"
                                    value="yes"
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
                                    id="no"
                                    value="no"
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
                                    id="person"
                                    value="person"
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
                                    id="courier"
                                    value="courier"
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
                                    id="Bypost"
                                    value="Bypost"
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
