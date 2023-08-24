import React, { useState } from "react";

import { Form, Row, Col, Card } from "react-bootstrap";
import "./Styles.css";

import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeSampleDetails } from "../redux/FormSlice";
export default function SampleDetails({ onButtonClick }) {
  const dispatch = useDispatch();

  // ---------------Start of --------------RadioButtons Functionalities using USESTATE-----------------------

  const [selectedOption, setSelectedOption] = useState(null);

  const [selectedOptioncheck, setSelectedOptioncheck] = useState(null);

  //const schema = yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(
      changeSampleDetails({
        natureofsample: data.natureofsample,
        report: data.report,
        samplename: data.samplename,
        sampletype: data.sampletype,
        sampleretension: data.sampleretension,
        storage: data.storage,
        submissiontype: data.submissiontype,
      })
    );
    console.log("useForm", data);
    onButtonClick("BatchDetails");
  };

  // ---------------End  of --------------RadioButtons Functionalities using USESTATE-----------------------

  return (
    <div>
      <div>
        <div>
          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Sample Details</text>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="cardcolumnpadding">
                  <label className="defaultStyles"> Name of the Sample</label>
                  <input
                    className="form-control1"
                    type="text"
                    name="samplename"
                    {...register("samplename")}
                  ></input>

                  <hr />

                  <div className="row d-flex">
                    <Row>
                      <Col md={6}>
                        <div
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
                            <div className="col">
                              {" "}
                              <span
                                style={{
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <input
                                  {...register("report", { required: true })}
                                  type="radio"
                                  value="yes"
                                  id="yes"
                                  name="report"
                                  // checked={selectedOption === "option1"}
                                  //onChange={handleChange}
                                  className="customRadio"
                                />
                                <label className="space">Yes</label>
                              </span>
                            </div>

                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("report", { required: true })}
                                  type="radio"
                                  value="no"
                                  id="no"
                                  name="report"
                                  // checked={selectedOption === "option2"}
                                  //onChange={handleChange}
                                  className="customRadio"
                                />
                                <label className="space">No</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("report", { required: true })}
                                  type="radio"
                                  value="local"
                                  id="local"
                                  name="report"
                                  // checked={selectedOption === "option3"}
                                  //onChange={handleChange}
                                  className="customRadio"
                                />
                                <label className="space">Local FDA(DCA)</label>
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
                                  {...register("storage", { required: true })}
                                  type="radio"
                                  name="storage"
                                  value="Ambient/RT"
                                  // checked={selectedOption3 === "option13"}
                                  //onChange={handleChange}
                                  className="customRadio"
                                  id="Ambient/RT"
                                />
                                <label className="space">Ambient/RT</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("storage", { required: true })}
                                  type="radio"
                                  name="storage"
                                  value="Freezer"
                                  id="Freezer"
                                  // checked={selectedOption3 === "option14"}
                                  //onChange={handleChange}
                                  className="customRadio"
                                />
                                <label className="space">Freezer (-20°C)</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("storage", { required: true })}
                                  type="radio"
                                  value="Refrigerator"
                                  id="Refrigerator"
                                  name="storage"
                                  // checked={selectedOption3 === "option15"}
                                  // onChange={handleChange}
                                  className="customRadio"
                                />
                                <label className="space">
                                  Refrigerator (2-8°C)
                                </label>
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
                            <div className="col">
                              {" "}
                              <span
                                style={{
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <input
                                  {...register("natureofsample", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="option7"
                                  checked={selectedOption === "option7"}
                                  onChange={() => setSelectedOption("option7")}
                                  className="customRadio"
                                />
                                <label className="space">RM</label>
                              </span>
                            </div>

                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("natureofsample", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="option6"
                                  checked={selectedOption === "option6"}
                                  onChange={() => setSelectedOption("option6")}
                                  className="customRadio"
                                />
                                <label className="space">In-Progress</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("natureofsample", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="option5"
                                  checked={selectedOption === "option5"}
                                  onChange={() => setSelectedOption("option5")}
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
                                  {...register("natureofsample", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="option4"
                                  checked={selectedOption === "option4"}
                                  onChange={() => setSelectedOption("option4")}
                                  className="customRadio"
                                />
                                <label className="space">API</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("natureofsample", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="option3"
                                  checked={selectedOption === "option3"}
                                  onChange={() => setSelectedOption("option3")}
                                  className="customRadio"
                                />
                                <label className="space">Excipient</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("natureofsample", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="option2"
                                  checked={selectedOption === "option2"}
                                  onChange={() => setSelectedOption("option2")}
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
                                  {...register("natureofsample", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="option1"
                                  checked={selectedOption === "option1"}
                                  onChange={() => setSelectedOption("option1")}
                                  className="customRadio"
                                />
                                <label className="space">Others</label>
                              </span>
                            </div>

                            <div className="col">
                              <span>
                                {selectedOption === "option1" && (
                                  <input
                                    type="text"
                                    className="NatureOfSample"
                                  />
                                )}
                              </span>
                            </div>
                          </div>
                        </Form.Label>
                        <div className="text-danger mt-1 mb-4">
                          {errors.storage?.type === "required" &&
                            "This field is required."}
                        </div>
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
                                style={{
                                  alignItems: "center",
                                  display: "flex",
                                }}
                              >
                                <input
                                  {...register("sampletype", {
                                    required: true,
                                  })}
                                  type="checkbox"
                                  value="option6"
                                  checked={selectedOptioncheck === "option6"}
                                  onChange={() =>
                                    setSelectedOptioncheck("option6")
                                  }
                                  className="customRadio"
                                />
                                <label className="space">Hygroscopic</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("sampletype", {
                                    required: true,
                                  })}
                                  type="checkbox"
                                  value="option5"
                                  checked={selectedOptioncheck === "option5"}
                                  onChange={() =>
                                    setSelectedOptioncheck("option5")
                                  }
                                  className="customRadio"
                                />
                                <label className="space">Light Sensitive</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("sampletype", {
                                    required: true,
                                  })}
                                  type="checkbox"
                                  value="option4"
                                  checked={selectedOptioncheck === "option4"}
                                  onChange={() =>
                                    setSelectedOptioncheck("option4")
                                  }
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
                                  {...register("sampletype", {
                                    required: true,
                                  })}
                                  type="checkbox"
                                  value="option3"
                                  checked={selectedOptioncheck === "option3"}
                                  onChange={() =>
                                    setSelectedOptioncheck("option3")
                                  }
                                  className="customRadio"
                                />
                                <label className="space">Hazardous</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("sampletype", {
                                    required: true,
                                  })}
                                  type="checkbox"
                                  value="option2"
                                  checked={selectedOptioncheck === "option2"}
                                  onChange={() =>
                                    setSelectedOptioncheck("option2")
                                  }
                                  className="customRadio"
                                />
                                <label className="space">MSDS Attached</label>
                              </span>
                            </div>

                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  type="file"
                                  style={{ width: 170 }}
                                  className="customInput"
                                />
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
                                  {...register("sampletype", {
                                    required: true,
                                  })}
                                  type="checkbox"
                                  value="option1"
                                  checked={selectedOptioncheck === "option1"}
                                  onChange={() =>
                                    setSelectedOptioncheck("option1")
                                  }
                                  className="customRadio"
                                />
                                <label className="space">Others</label>
                              </span>
                            </div>
                            <div className="col">
                              <span>
                                {selectedOptioncheck === "option1" && (
                                  <input type="text" className="SampleType" />
                                )}
                              </span>
                            </div>
                          </div>
                        </Form.Label>
                        <div className="text-danger mt-3">
                          {errors.sampletype?.type === "required" &&
                            "This field is required."}
                        </div>
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
                                  {...register("sampleretension", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="yes"
                                  //checked={selectedOption2 === "option11"}
                                  // onChange={handleChange}
                                  className="customRadio"
                                />
                                <label className="space">Yes</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("sampleretension", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="no"
                                  //checked={selectedOption2 === "option12"}
                                  //onChange={handleChange}
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
                          <div className="text-danger mt-3">
                            {errors.sampleretension?.type === "required" &&
                              "This field is required."}
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
                                  {...register("submissiontype", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="person"
                                  //checked={selectedOption5 === "option22"}
                                  //onChange={handleChange}
                                  className="customRadio"
                                />
                                <label className="space">Person</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("submissiontype", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="courier"
                                  // checked={selectedOption5 === "option23"}
                                  // onChange={handleChange}
                                  className="customRadio"
                                />
                                <label className="space">Courier</label>
                              </span>
                            </div>
                            <div className="col">
                              <span style={{ display: "flex" }}>
                                <input
                                  {...register("submissiontype", {
                                    required: true,
                                  })}
                                  type="radio"
                                  value="Bypost"
                                  //checked={selectedOption5 === "option24"}
                                  // onChange={handleChange}
                                  className="customRadio"
                                />
                                <label className="space">By Post</label>
                              </span>
                            </div>
                          </div>
                          <div className="text-danger mt-3">
                            {errors.submissiontype?.type === "required" &&
                              "This field is required."}
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
                        <button
                          type="button"
                          className="previous"
                          onClick={() => onButtonClick("CustomerDetailes")}
                        >
                          <BiLeftArrowAlt size={24} color="#9AC037" />
                          Previous
                        </button>

                        <button
                          type="submit"
                          //onClick={() => onButtonClick("BatchDetail")}
                          className="next"
                          name="Next"
                        >
                          Next <BiRightArrowAlt size={24} color="#fff" />
                        </button>
                      </div>
                    </Row>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
