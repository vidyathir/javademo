import React, { useState, useEffect } from "react";
import "./Styles.css";
import Sidenavbar from "../components/Sidenavbar";
import Navbartitle from "../components/Navbartitle";
import { BiRightArrowAlt } from "react-icons/bi";
import { Card, Col, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { changeCustomerDetails } from "../redux/FormSlice";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import axios from "axios";
export default function CustomerDetailes({ onButtonClick }) {
  const dispatch = useDispatch();
  const { control, handleSubmit, setValue, watch } = useForm();
  const [companyOptions, setCompanyOptions] = useState([]);
  const selectedCompany = watch("company");
  useEffect(() => {
    // Fetch company options from API
    axios
      .get("http://3.91.97.121:3000/api/companyDetails")
      .then((response) => setCompanyOptions(response.data))
      .catch((error) => console.error("Error fetching company data:", error));
  }, []);

  const fetchCompanyData = (selectedCompany) => {
    // Fetch other data based on selected company
    axios
      .get(
        `http://3.91.97.121:3000/api/companyDetails/${selectedCompany.companyId}`
      )
      .then((response) => {
        const data1 = response.data;
        setValue("data2", data1.contactPerson || "");
        setValue("data3", data1.manufacturingLicenceNumber || "");
        setValue("data4", data1.mobileNumber || "");
        setValue("data5", data1.email || "");
        setValue("data6", data1.address1 || "");
        setValue("data7", data1.address2 || "");
        setValue("data8", data1.city || "");
        setValue("data9", data1.state || "");
        setValue("data10", data1.pincode || "");
        setValue("data11", data1.mobileNumber2 || "");
      })
      .catch((error) => {
        console.error("Error fetching other data:", error); // Clear input fields if there's an error
        setValue("data2", "");
        setValue("data3", "");
        setValue("data4", "");
        setValue("data5", "");
        setValue("data6", "");
        setValue("data7", "");
        setValue("data8", "");
        setValue("data9", "");
        setValue("data10", "");
        setValue("data11", "");
      });
  };

  const schema = Yup.object().shape({
    //company: Yup.string().nullable().required("Please select language"),
    // contactPersonName: Yup.string()
    // .required('required'),
    // licenceNo: Yup.string()
    // .required('required'),
    // phoneNo: Yup.string()
    // .matches(/^[0-9]+$/,"must be only digits")
    // .min(10,"must be 10 digits")
    // .max(10,"must be 10 digits"),
    // emailId: Yup.string()
    // .email('Invalid email address')
    // .required('required'),
    //   address1: Yup.string()
    //   .required('required'),
    // city: Yup.string()
    //   .required('required'),
    //   state: Yup.string()
    //   .required('required'),
    //   pincode: Yup.string()
    //   .matches(/^[0-9]+$/,"must be only digits")
    //   .min(6,"must be 6 digits")
    //   .max(6,"must be 6 digits")
    //   .required('required')
  });

  //const { field: { value: companyValue, onChange: companyOnChange, ...restcompanyField } } = Controller({ name: 'company', control });
  const onSubmit = (data, selectedCompany) => {
    console.log("data", data);
    dispatch(
      changeCustomerDetails({
        company: data.company.companyName,
        contactPersonName: data.data2,
        licenceNo: data.data3,
        phoneNo: data.data4,
        emailId: data.data5,
        address1: data.data6,
        city: data.data8,
        state: data.data9,
        pincode: data.data10,
        phoneNo1: data.data11,
        address2: data.data7,
      })
    );
    onButtonClick("SampleDetails");
  };
  const choice = companyOptions.map((company) => {
    return {
      companyId: company.id,
      companyName: company.companyName,
    };
  });
  console.log(choice);
  return (
    <div>
      <div>
        <div className="main">
          <div className="mainitem">
            <div>
              <Card className="maincards">
                <div className="cardtitle">
                  <text className="cardtitlehed">Customer Details</text>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="cardcolumnpadding">
                    {/* ---------------------------------   card column start  -------------------------------------------- */}

                    <Row className="mb-3 rowtabview">
                      <Col>
                        <div>
                          <label className="cardcolhed">
                            Company Name
                            <text className="cardcolhedstar">*</text>
                          </label>
                        </div>
                        <Controller
                          name="company"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              options={choice}
                              isClearable
                              getOptionLabel={(option) => option.companyName}
                              getOptionValue={(option) => option.companyId}
                              onChange={(selectedCompany) => {
                                field.onChange(selectedCompany);
                                if (selectedCompany) {
                                  fetchCompanyData(selectedCompany);
                                } else {
                                  // Clear input fields when no company selected
                                  setValue("data2", "");
                                  setValue("data3", "");
                                  setValue("data4", "");
                                  setValue("data5", "");
                                  setValue("data6", "");
                                  setValue("data7", "");
                                  setValue("data8", "");
                                  setValue("data9", "");
                                  setValue("data10", "");
                                  setValue("data11", "");
                                }
                              }}
                            />
                          )}
                        />
                      </Col>

                      <Col>
                        <div>
                          <label className="cardcolhed">
                            Contact Person Name
                          </label>
                        </div>
                        <div>
                          <Controller
                            name="data2"
                            control={control}
                            render={({ field }) => (
                              <input
                                className="cardcolumninputtype"
                                {...field}
                                type="text"
                                readOnly
                              />
                            )}
                          />
                          {/* <input type="text" className="cardcolumninputtype" name="data2" readOnly/> */}
                        </div>
                      </Col>

                      <Col>
                        <div>
                          <label className="cardcolhed">
                            Manufacturing Lic No.
                          </label>
                        </div>

                        <div>
                          <Controller
                            name="data3"
                            control={control}
                            render={({ field }) => (
                              <input
                                className="cardcolumninputtype"
                                {...field}
                                type="text"
                                readOnly
                              />
                            )}
                          />
                        </div>
                      </Col>
                    </Row>

                    {/* ---------------------------------   card column start  -------------------------------------------- */}

                    <Row className="mb-3 rowtabview">
                      <Col>
                        <div>
                          <label className="cardcolhed">Phone Number</label>
                        </div>
                        <div>
                          <div>
                            <Controller
                              name="data4"
                              control={control}
                              render={({ field }) => (
                                <input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>

                      <Col>
                        <div>
                          <label className="cardcolhed">
                            Additional Phone Number
                            {/* <text className="cardcolhedstar">*</text> */}
                          </label>
                        </div>
                        <div>
                          <div>
                            <Controller
                              name="data11"
                              control={control}
                              render={({ field }) => (
                                <input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>

                      <Col>
                        <div>
                          <label className="cardcolhed">Email Id</label>
                        </div>
                        <div>
                          <div>
                            <Controller
                              name="data5"
                              control={control}
                              render={({ field }) => (
                                <input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>

                    {/* ---------------------------------   card column start  -------------------------------------------- */}

                    <Row className="mb-3 rowtabview">
                      <Col>
                        <div>
                          <label className="cardcolhed">Address Line1</label>
                        </div>
                        <div>
                          <div>
                            <Controller
                              name="data6"
                              control={control}
                              render={({ field }) => (
                                <input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>

                      <Col>
                        <div>
                          <label className="cardcolhed">
                            Address Line2
                            {/* <text className="cardcolhedstar">*</text> */}
                          </label>
                        </div>
                        <div>
                          <div>
                            <Controller
                              name="data7"
                              control={control}
                              render={({ field }) => (
                                <input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>

                      <Col>
                        <div>
                          <label className="cardcolhed">City</label>
                        </div>
                        <div>
                          <div>
                            <Controller
                              name="data8"
                              control={control}
                              render={({ field }) => (
                                <input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>

                    {/* ---------------------------------   card column start  -------------------------------------------- */}

                    <Row className="mb-3 rowtabview">
                      <Col>
                        <div>
                          <label className="cardcolhed">State</label>
                        </div>
                        <div>
                          <div>
                            <Controller
                              name="data9"
                              control={control}
                              render={({ field }) => (
                                <input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>

                      <Col>
                        <div>
                          <label className="cardcolhed">Pincode</label>
                        </div>
                        <div>
                          <div>
                            <Controller
                              name="data10"
                              control={control}
                              render={({ field }) => (
                                <input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                      </Col>

                      <Col>
                        <div>
                          <label className="cardcolhed">
                            {/* <text className="cardcolhedstar">*</text> */}
                          </label>
                        </div>
                        <div className="cardbuttonwid">
                          <button className="cardbutton" type="submit">
                            Next <BiRightArrowAlt />
                          </button>
                        </div>
                      </Col>
                    </Row>

                    {/* ---------------------------------   card column end  -------------------------------------------- */}
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
