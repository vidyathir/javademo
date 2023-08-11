import React from "react";
import "./Styles.css";
import Sidenavbar from "../components/Sidenavbar";
import Navbartitle from "../components/Navbartitle";
// import profilepic from "../assets/avater2.jpg";
// import {IoIosAddCircleOutline} from 'react-icons/io';
import {BsCheck2} from 'react-icons/bs';
import {AiOutlineLeft} from 'react-icons/ai';
// import Titlebar from "../components/Titlebar";
import { Card, Col, Row, 
  Form 
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CustomerDetailes() {
  const navigate = useNavigate();

  return (
    <div className="app">
      
      <Navbartitle />

<div className="d-flex">
         
      <Sidenavbar />

      <div className="main">
        <div className="mainitem">

        <div className="backbutton" onClick={()=>navigate('/Progress')}>
            <AiOutlineLeft  /> <text>back</text>
          </div>

          <div className="titlesm">
            <text>Add New Customer</text>
          </div>
      

          <div>
            <Card className="maincards">
              <div className="cardtitle">
                <text className="cardtitlehed">Company Details</text>
              </div>
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
                      <div>
                      <Form.Select defaultValue="Choose..."  className="cardcolumninputtype">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
                      </div>
                    </Col>


                    
                 


                 
                </Row>

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Row className="mb-3 rowtabview">


                <Col>
                      <div>
                        <label className="cardcolhed">
                        Manufacturing Lic No
                          <text className="cardcolhedstar">*</text>
                        </label>
                      </div>
                      <div>
                        <input type="text" className="cardcolumninputtype" />
                      </div>
                    </Col>


                    <Col>
                      <div>
                        <label className="cardcolhed">
                        Address Line1
                          {/* <text className="cardcolhedstar">*</text> */}
                        </label>
                      </div>
                      <div>
                        <input type="text" className="cardcolumninputtype" />
                      </div>
                    </Col>

                   

                </Row>

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Row className="mb-3 rowtabview">


                <Col>
                      <div>
                        <label className="cardcolhed">
                        Address Line2(optional)
                          {/* <text className="cardcolhedstar">*</text> */}
                        </label>
                      </div>
                      <div>
                        <input type="text" className="cardcolumninputtype" />
                      </div>
                    </Col>


                    <Col>
                      <div>
                        <label className="cardcolhed">
                        City
                          <text className="cardcolhedstar">*</text>
                        </label>
                      </div>
                      <div>
                        <input type="text" className="cardcolumninputtype" />
                      </div>
                    </Col>

                  


                 
                </Row>

                {/* ---------------------------------   card column start  -------------------------------------------- */}

                <Row className="mb-3 rowtabview">

                <Col>
                      <div>
                        <label className="cardcolhed">
                        State
                          <text className="cardcolhedstar">*</text>
                        </label>
                      </div>
                      <div>
                        <input type="text" className="cardcolumninputtype" />
                      </div>
                    </Col>


                    <Col>
                      <div>
                        <label className="cardcolhed">
                        Pincode
                          <text className="cardcolhedstar">*</text>
                        </label>
                      </div>
                      <div>
                        <input type="text" className="cardcolumninputtype" />
                      </div>
                    </Col>

                    
                      <div>
                        <label className="cardcolhed">
                       
                          {/* <text className="cardcolhedstar">*</text> */}
                        </label>
                      </div>
                      <div className="cardbuttonwid">
                      <button
                      className="cardbutton"
                      onClick={() => navigate("sampledetails")}
                    >
                      <BsCheck2 size={24}  /> Save
                    </button>
                      </div>
                    



                 
                </Row>

                {/* ---------------------------------   card column end  -------------------------------------------- */}
              </div>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}