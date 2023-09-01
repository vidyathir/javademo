
import { useAppState } from "../state";
import { Button,Form, Input } from "../Forms";
import React, { useState, useEffect } from "react";
import "./Styles.css";

import { BiRightArrowAlt } from "react-icons/bi";
import { Card, Col, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { changeCustomerDetails } from "../redux/FormSlice";
import Select from "react-select";
import { useDispatch } from "react-redux";
import axios from "axios"
export default function CustomerDetailes({onButtonClick}){
  const [state, setState] = useAppState();
const dispatch = useDispatch();
  const [companyOptions, setCompanyOptions] = useState([]);
  const {
    control,
    handleSubmit,
    setValue,
  
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  useEffect(() => {
    // Fetch company options from API
    axios
      .get("http://3.80.98.199:3000/api/companyDetails")
      .then((response) => setCompanyOptions(response.data))
      .catch((error) => console.error("Error fetching company data:", error));
  }, []);

  const fetchCompanyData = (selectedCompany) => {
    // Fetch other data based on selected company
    axios
      .get(
        `http://3.80.98.199:3000/api/companyDetails/${selectedCompany.companyId}`
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
  const saveData = (data) => {
    setState({ ...state, ...data });
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
  return (
    <div>
    <div>
      
       
        
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Customer Details</text>
              </div>
    <Form onSubmit={handleSubmit(saveData)}>
      
      <fieldset>
    
        <div className="cardcolumnpadding">
                    {/* ---------------------------------   card column start  -------------------------------------------- */}

                    <Row className="mb-3 rowtabview">
                      <Col>
                      <label className="cardcolhed mb-2">Company Name</label>
        
                      <Controller 
                     
                          name="company"
                          control={control}
                          rules={{ required: 'Please select a company' }}
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
                       
                        <div className="text-danger mt-3">
                            {errors.company && <p style={{ color: 'red', marginTop: '5px' }}>{errors.company.message}</p>}
                          </div>
                        </Col>
                        <Col>

                        <label className="cardcolhed mb-2" error={errors?.contactpersonname}>Contact Person Name</label>

        
                      <Controller
                            name="data2"
                            control={control}
                            render={({ field }) => (
                              <Input
                                className="cardcolumninputtype"
                                {...field}
                                type="text"
                                readOnly
                              />
                            )}
                          />
       
        </Col>
        <Col>
        <label className="cardcolhed mb-2">ManufacturingLicenceNumber</label>

        
        <Controller
                            name="data3"
                            control={control}
                            render={({ field }) => (
                              <Input
                                className="cardcolumninputtype"
                                {...field}
                                type="text"
                                readOnly
                              />
                            )}
                          />
     
        </Col>
        </Row>
         <Row className="mb-3 rowtabview">
                      <Col>
                        <div>
                        <label className="cardcolhed mb-2">Phone Number</label>  
                        
                        <div>
                          <div>
                            <Controller
                              name="data4"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                     
                        </div>
                        
                      </Col>

                      <Col>
                        <div>
                        <label className="cardcolhed mb-2">Additional Phone Number</label>  

                         
                            
                            {/* <text className="cardcolhedstar">*</text> */}
            
                        <div>
                          <div>
                            <Controller
                              name="data11"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                      
                        </div>
                      </Col>

                      <Col>
                        <div>
                        <label className="cardcolhed mb-2">Email Id</label>  

                          
                    
                        <div>
                          <div>
                            <Controller
                              name="data5"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                       
                        </div>
                      </Col>
                    </Row>

                    {/* ---------------------------------   card column start  -------------------------------------------- */}

                    <Row className="mb-3 rowtabview">
                      <Col>
                        <div>
                          <label className="cardcolhed mb-2">Address Line1 </label>
                        
                        <div>
                          <div>
                            <Controller
                              name="data6"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                        
                        </div>
                      </Col>

                      <Col>
                        <div>
                        <label className="cardcolhed mb-2"> Address Line2 </label>

                         
                           
                            {/* <text className="cardcolhedstar">*</text> */}
                        <div>
                          <div>
                            <Controller
                              name="data7"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                       
                        </div>
                      </Col>

                      <Col>
                        <div>
                        <label className="cardcolhed mb-2"> City </label>

                        
                        <div>
                          <div>
                            <Controller
                              name="data8"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                      
                        </div>
                      </Col>
                    </Row>

                    {/* ---------------------------------   card column start  -------------------------------------------- */}

                    <Row className="mb-3 rowtabview">
                      <Col>
                        <div>
                        <label className="cardcolhed mb-2"> State </label>
                      
                        <div>
                          <div>
                            <Controller
                              name="data9"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                       
                        </div>
                      </Col>

                      <Col>
                        <div>
                        <label className="cardcolhed mb-2"> Pincode </label>

                          
                        <div>
                          <div>
                            <Controller
                              name="data10"
                              control={control}
                              render={({ field }) => (
                                <Input
                                  className="cardcolumninputtype"
                                  {...field}
                                  type="text"
                                  readOnly
                                />
                              )}
                            />
                          </div>
                        </div>
                       
                        </div>
                      </Col>
                      <Col>
                        <div>
                        <label className="cardcolhed mb-2"> </label>

               
                          <div className="cardbuttonwid">
        <Button className="cardbutton">Next
        <BiRightArrowAlt size={24} color="#fff" />
        </Button>
        </div>
                      
                        </div>
                      </Col>
                     
        </Row>
        </div>
      
      </fieldset>
      
    </Form>
    
    </Card>
           
        
       
      </div>
    </div>
  );
};
