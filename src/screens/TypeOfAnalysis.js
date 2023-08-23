
import React, { useState } from "react";


import { Form, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { MdOutlineUploadFile } from "react-icons/md";
import "./Styles.css";
import { useForm } from "react-hook-form";
import { changeTypeofAnalysis } from "../redux/FormSlice";

export default function TypeOfAnalysis({ onButtonClick }) {
  

  const [radioDisabled, setRadioDisabled] = useState(false);
  const [checkboxDisabled, setCheckboxDisabled] = useState(false);

  const handleRadioClick = () => {
    setCheckboxDisabled(true);
  };

  const handleCheckboxClick = () => {
    setRadioDisabled(true);
  };

  const dispatch = useDispatch();


  // ---------------Start of --------------RadioButtons Functionalities using USESTATE-----------------------

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(
      changeTypeofAnalysis({
        analyticalfeasibile: data.analyticalfeasibile,
        choosefile: data.choosefile,
        formfilling: data.formfilling,
        methodologyfollowed: data.methodologyfollowed,
        methodvalidation: data.methodvalidation,
        specialinstruction: data.specialinstruction,
        test: data.test,
      })
    );
    console.log("data", data);

    onButtonClick("ConfirmDetails");
  };

  // ---------------End  of --------------RadioButtons Functionalities using USESTATE-----------------------

  return (
    <div>
      <div>
        <div>
          <div className="Progressbar"></div>

          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Type of Analysis</text>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="cardcolumnpadding">
                  <div className="row">
                    <div className="col">
                      <Col
                        md={12}
                        style={{ display: "block" }}
                        className="mb-3"
                      >
                        <Form.Group as={Row}>
                          <Form.Label className="cardcolhed">
                            <div className="mb-3">
                            Is comes under?
                              
                          
                              <text className="cardcolhedstar">*</text>
                            </div>
                            <div className="row">
                              <div
                                className="col-6"
                                style={{ display: "flex" }}
                              >
                                <div className="col">
                                  <div
                                    style={{
                                      display: "flex",
                                      marginBottom: 20,
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      style={{ height: 20, width: 20 }}
                                    />
                                    <label className="space">Regulatory</label>
                                  </div>
                                </div>

                                <div className="col">
                                  <div style={{ display: "flex" }}>
                                    <input
                                      type="radio"
                                      style={{ height: 20, width: 20 }}
                                    ></input>
                                    <label className="space">
                                      {" "}
                                      Other than Regulatory
                                    </label>
                                  </div>
                                </div>
                              </div>

                          
                            </div>
                            <div className="text-danger">
                              {errors.formfilling?.type === "required" &&
                                "This field is required."}
                            </div>
                          </Form.Label>
                        </Form.Group>
                      </Col>
                      <hr />

                      <Col
                        md={12}
                        style={{ display: "block" }}
                        className="mb-3"
                      >
                        <Form.Group as={Row}>
                          <Form.Label className="cardcolhed">
                            <div className="mb-3">
                              Regulatory
                              <text>
                                (Form-39/DMF Filing/ANDA Filing/Any Query)
                              </text>
                              <text className="cardcolhedstar">*</text>
                            </div>
                            <div className="row">
                              <div
                                className="col-12"
                                style={{ display: "flex" }}
                              >
                                <div className="col">
                                  <div
                                    style={{
                                      display: "flex",
                                      marginBottom: 20,
                                    }}
                                  >
                                    <input
                                      {...register("formfilling", {
                                        required: true,
                                      })}
                                      type="radio"
                                      onClick={handleRadioClick}
                                      disabled={radioDisabled}
                                      value="validation"
                                      name="formfilling"
                                      //checked={selectedOption === "option1"}
                                      //onChange={handleOptionChange}
                                      style={{ height: 20, width: 20 }}
                                    />
                                    <label className="space">Validation</label>
                                  </div>
                                </div>

                                <div className="col">
                                  <div style={{ display: "flex" }}>
                                    <input
                                      {...register("formfilling", {
                                        required: true,
                                      })}
                                      type="radio"
                                      onClick={handleRadioClick}
                                      disabled={radioDisabled}
                                      value="verification"
                                      name="formfilling"
                                      //checked={selectedOption === "option2"}
                                      // onChange={handleOptionChange}
                                      style={{ height: 20, width: 20 }}
                                    ></input>
                                    <label className="space">
                                      Verification
                                    </label>
                                  </div>
                                </div>

                                <div className="col">
                                  <div style={{ display: "flex" }}>
                                    <input
                                      {...register("formfilling", {
                                        required: true,
                                      })}
                                      type="radio"
                                      onClick={handleRadioClick}
                                      disabled={radioDisabled}
                                      value="transfer"
                                      name="formfilling"
                                      // checked={selectedOption === "option3"}
                                      //onChange={handleOptionChange}
                                      style={{ height: 20, width: 20 }}
                                    ></input>
                                    <label className="space">Transfer</label>
                                  </div>
                                </div>

                                <div className="col">
                                  <div style={{ display: "flex" }}>
                                    <input
                                      {...register("formfilling", {
                                        required: true,
                                      })}
                                      type="radio"
                                      onClick={handleRadioClick}
                                      disabled={radioDisabled}
                                      value="stability"
                                      name="formfilling"
                                      //checked={selectedOption === "option4"}
                                      // onChange={handleOptionChange}
                                      style={{ height: 20, width: 20 }}
                                    ></input>
                                    <label className="space">Stability</label>
                                  </div>
                                </div>

                                <div className="col">
                                  <div style={{ display: "flex" }}>
                                    <input
                                      {...register("formfilling", {
                                        required: true,
                                      })}
                                      type="radio"
                                      onClick={handleRadioClick}
                                      disabled={radioDisabled}
                                      value="batchrelease"
                                      name="formfilling"
                                      //checked={selectedOption === "option5"}
                                      //onChange={handleOptionChange}
                                      style={{ height: 20, width: 20 }}
                                    ></input>
                                    <label className="space">
                                      Batch Release
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="col-12"
                                style={{ display: "flex" }}
                              >
                                <div className="col">
                                  <div style={{ display: "flex" }}>
                                    <input
                                      {...register("formfilling", {
                                        required: true,
                                      })}
                                      type="radio"
                                      onClick={handleRadioClick}
                                      disabled={radioDisabled}
                                      value="usfda"
                                      name="formfilling"
                                      //checked={selectedOption === "option6"}
                                      //onChange={handleOptionChange}
                                      style={{ height: 20, width: 20 }}
                                    ></input>
                                    <label className="space">USFDA</label>
                                  </div>
                                </div>

                                <div className="col">
                                  <div style={{ display: "flex" }}>
                                    <input
                                      {...register("formfilling", {
                                        required: true,
                                      })}
                                      type="radio"
                                      onClick={handleRadioClick}
                                      disabled={radioDisabled}
                                      value="eugmp"
                                      name="formfilling"
                                      //checked={selectedOption === "option7"}
                                      //onChange={handleOptionChange}
                                      style={{ height: 20, width: 20 }}
                                    ></input>
                                    <label className="space">EU GMP</label>
                                  </div>
                                </div>

                                <div className="col">
                                  <div style={{ display: "flex" }}>
                                    <input
                                      {...register("formfilling", {
                                        required: true,
                                      })}
                                      type="radio"
                                      onClick={handleRadioClick}
                                      disabled={radioDisabled}
                                      value="localfda"
                                      name="formfilling"
                                      //checked={selectedOption === "option8"}
                                      //onChange={handleOptionChange}
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
                                      {...register("formfilling", {
                                        required: true,
                                      })}
                                      type="radio"
                                      onClick={handleRadioClick}
                                      disabled={radioDisabled}
                                      value="nabl"
                                      name="formfilling"
                                      //checked={selectedOption === "option9"}
                                      // onChange={handleOptionChange}
                                      style={{ height: 20, width: 20 }}
                                    ></input>
                                    <label className="space">NABL</label>
                                  </div>
                                </div>

                                <div className="col">
                                  <div style={{ display: "flex" }}>
                                    <input
                                      {...register("formfilling", {
                                        required: true,
                                      })}
                                      type="radio"
                                      onClick={handleRadioClick}
                                      disabled={radioDisabled}
                                      value="other"
                                      name="other"
                                      //checked={selectedOption === "option10"}
                                      //onChange={handleOptionChange}
                                      style={{ height: 20, width: 20 }}
                                    ></input>
                                    <label className="space">Other</label>
                                    {/* <input
                                    type="text"
                                    style={{ marginLeft: 15,marginTop:-10,border:'1px solid #d1d1d1',height:40,width:'100%',borderRadius:6,color:'#8F8F8F',fontSize:12,paddingLeft:10 }}
                                  ></input> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-danger mt-3">
                              {errors.formfilling?.type === "required" &&
                                "This field is required."}
                            </div>
                          </Form.Label>
                        </Form.Group>
                      </Col>
                      <hr />

                      {/*----------------------------------------------- First Column End ------------------------------------*/}
                    </div>
                  </div>

                  <Row className="cardcolhed">
                    <Col md={6} style={{}}>
                      {/* <div className="col-6 "> */}

                      <div className="mb-3">
                        <text className="mb-3">Other than Regulatory</text>
                        <text className="cardcolhedstar">*</text>
                      </div>
                      <div className="d-flex">
                        <div style={{ display: "flex", marginBottom: 20 }}>
                          <div
                            style={{ alignItems: "center", display: "flex" }}
                          >
                            <input
                              {...register("analyticalfeasibile", {
                                required: true,
                              })}
                              type="checkbox"
                              onClick={handleCheckboxClick}
                              disabled={checkboxDisabled}
                              value="r&dsample"
                              name="analytical"
                              // checked={selectedOption1 === "option11"}
                              // onChange={handleOptionChange1}
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
                              {...register("analyticalfeasibile", {
                                required: true,
                              })}
                              type="checkbox"
                              onClick={handleCheckboxClick}
                              disabled={checkboxDisabled}
                              value="r&dsample"
                              name="analyticalfeasibile"
                              // checked={selectedOption1 === "option12"}
                              // onChange={handleOptionChange1}
                              style={{ height: 20, width: 20 }}
                            ></input>
                            <label className="space">R&D Sample</label>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input
                            {...register("analyticalfeasibile", {
                              required: true,
                            })}
                            type="checkbox"
                            onClick={handleCheckboxClick}
                            disabled={checkboxDisabled}
                            value="methoddevelopement"
                            name="analyticalfeasibile"
                            // checked={selectedOption1 === "option13"}
                            // onChange={handleOptionChange1}
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
                            {...register("analyticalfeasibile", {
                              required: true,
                            })}
                            type="checkbox"
                            onClick={handleCheckboxClick}
                            disabled={checkboxDisabled}
                            value="batchanalysis"
                            name="analyticalfeasibile"
                            // checked={selectedOption1 === "option14"}
                            // onChange={handleOptionChange1}
                            style={{ height: 20, width: 20 }}
                          ></input>
                          <label className="space">Batch Analysis</label>
                        </div>
                      </div>
                      <div className="text-danger mt-3">
                        {errors.analyticalfeasibile?.type === "required" &&
                          "This field is required."}
                      </div>
                      {/* </div> */}
                    </Col>

<<<<<
                    <Col md={6} style={{ display: "block" }}>
                      <div className=" cardcolhedd">
                        <div className="mb-3">
                          <text>
                            If Method
                            Validation/Verification/Transfer/Development are
                            performed at Revin Labs please specify the Report
                            Ref. No.
                          </text>
                        </div>

                        <div className="d-flex">
                          <div
                            style={{ alignItems: "center", display: "flex" }}
                          >
                            <input
                              {...register("methodvalidation", {
                                required: false,
                              })}
                              type="radio"
                              value="no"
                              name="methodvalidation"
                              // checked={selectedOption2 === "option14"}
                              //onChange={handleOptionChange2}
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
                              {...register("methodvalidation", {
                                required: false,
                              })}
                              type="radio"
                              value="yes"
                              name="methodvalidation"
                              //checked={selectedOption2 === "option15"}
                              //onChange={handleOptionChange2}
                              style={{ height: 20, width: 20 }}
                            />
                            <label className="space">yes</label>
                          </div>
                          <div>
                            <input type="text" className="methodValidation" />
                          </div>
                        </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <hr />
                  {/* --------------------------------------------3rd Column starting ----------------------------------*/}
                  <Row>
                    <Col
                      md={6}
                      className="col-12 cardcolhed"
                      // style={{ display: "flex" }}
                    >
                      {/* <div className="col-6"> */}

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
                            {...register("methodologyfollowed")}
                            type="radio"
                            value="stp"
                            name="methodologyfollowed"
                            //checked={selectedOption4 === "option22"}
                            //onChange={handleOptionChange4}
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
                            {...register("methodologyfollowed")}
                            type="radio"
                            value="gtp"
                            name="methodologyfollowed"
                            //checked={selectedOption4 === "option23"}
                            //onChange={handleOptionChange4}
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
                            {...register("methodologyfollowed")}
                            type="radio"
                            value="referenceno"
                            name="methodologyfollowed"
                            //checked={selectedOption4 === "option24"}
                            //onChange={handleOptionChange4}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">Reference No</label>
                        </div>
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input type="text" className="methodology" />
                        </div>
                      </div>
                    </Col>

                    <Col md={6} className="cardcolhed">
                      <div className="mb-3">
                        <text>Test to be carried out as per</text>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginRight: 40,
                          }}
                        >
                          <input
                            {...register("test")}
                            type="checkbox"
                            value="usp"
                            name="test"
                            //checked={selectedOption3 === "option16"}
                            //onChange={handleOptionChange3}
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
                            {...register("test")}
                            type="checkbox"
                            value="bp"
                            name="test"
                            //checked={selectedOption3 === "option17"}
                            //onChange={handleOptionChange3}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">BP</label>
                        </div>
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input
                            {...register("test")}
                            type="checkbox"
                            value="ep"
                            name="test"
                            // checked={selectedOption3 === "option18"}
                            //onChange={handleOptionChange3}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">EP</label>
                        </div>
                      </div>
                      <div style={{ display: "flex", marginTop: 20 }}>
                        <div
                          style={{
                            alignItems: "center",
                            display: "flex",
                            marginRight: 52,
                          }}
                        >
                          <input
                            {...register("test")}
                            type="checkbox"
                            value="ip"
                            name="test"
                            //checked={selectedOption3 === "option19"}
                            //onChange={handleOptionChange3}
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
                            {...register("test")}
                            type="checkbox"
                            value="is"
                            name="test"
                            //checked={selectedOption3 === "option20"}
                            //onChange={handleOptionChange3}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">IS</label>
                        </div>
                        <div style={{ alignItems: "center", display: "flex" }}>
                          <input
                            {...register("test")}
                            type="checkbox"
                            value="methodofanalysis"
                            name="test"
                            //checked={selectedOption3 === "option21"}
                            //onChange={handleOptionChange3}
                            style={{ height: 20, width: 20 }}
                          />
                          <label className="space">Method of Analysis</label>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr />

                  {/*------------------------------------------------------ second column End--------------------------------------------------- */}

                  <Row>
                    <Col
                      md={6}
                      className="col-12 cardcolhed"
                      style={{ display: "block" }}
                    >
                      {/* <div className="col-6"> */}

                      <div className=" mb-3">
                        <text>Attachfile</text>
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
                          }}
                        >
                          <div>
                            <MdOutlineUploadFile size={24} color="#9AC037" />
                            <input
                              type="file"
                              name="choosefile"
                              className="customInput"
                              {...register("choosefile")}
                            />
                          </div>
                        </Card>
                      </div>

                      {/* </div> */}
                    </Col>
                    <Col
                      md={6}
                      className="cardcolhed"
                      style={{ display: "block" }}
                    >
                      <div className="mb-3">
                        <text>Special Instructions If any other</text>
                      </div>
                      <div>
                        <input
                          name="specialinstruction"
                          type="textarea"
                          className="spclInstruction"
                          {...register("specialinstruction")}
                        />
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
                        <button
                          type="button"
                          className="previous"
                          onClick={() => onButtonClick("BatchDetails")}
                        >
                          <BiLeftArrowAlt size={24} color="#9AC037" />
                          Previous
                        </button>
                        <button type="submit" className="next" name="Next">
                          Next <BiRightArrowAlt size={24} color="#fff" />
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
