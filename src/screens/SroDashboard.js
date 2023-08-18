import React from "react";
import Sidenavbar from "../components/Sidenavbar";

import {
  Table,
  Row,
  Col,
  // Button,
  Card,
} from "react-bootstrap";

import { TbClockEdit,TbFileStar } from "react-icons/tb";

import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {LuClipboardEdit} from 'react-icons/lu';
import {FaRegWindowClose} from 'react-icons/fa';
import NavbartitleAddco from "../components/NavbartitleAddco";
import {AiOutlineFileText,AiOutlineFileProtect} from 'react-icons/ai';

export default function ReviewDashboard() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <NavbartitleAddco />

      <div className="d-flex">
        <Sidenavbar />
        <div className="main">
          <div className="mainitem">
            {/* -----------------------------------------Top Card Start---------------------------------- */}

            <div className="mt-4 row wholeCardDiv">
              <div>
                {/* <p className="overview">Overview</p> */}
               
              
              <Row>

              <Col md={3}>
                  <Card className="mainCard1 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p className="CardName">Total Test Requisition  </p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <AiOutlineFileText size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>
                
                <Col md={3}>
                  <Card className="mainCard2 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p className="CardName">Document Issuance</p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <FiEdit size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card
                    className="mainCard2 p-2"
                    onClick={() => navigate("AwaitingSamplesReview")}
                  >
                    <div className="cardArrangement">
                      <div>
                        <p className="CardName">Samples Analyst</p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <TbClockEdit size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card
                    className="mainCard2 p-2"
                    onClick={() => navigate("AwaitingSamplesReview")}
                  >
                    <div className="cardArrangement">
                      <div>
                        <p className="CardName"> Samples Reviewed</p>
                        <p className="cardNum">15</p>
                      </div>
                      <div>
                        <TbFileStar size={30} color="#fff" />
                      </div>
                      
                    </div>
                    
                  </Card>
                  
                </Col>
              </Row>

              <Row className="mt-5">
              <Col md={3}>
                  <Card className="mainCard2 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p className="CardName">Samples Approved</p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <AiOutlineFileProtect size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="mainCard2 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p className="CardName">Awaiting Samples for Test</p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <LuClipboardEdit size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="mainCard2 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p className="CardName">QMS</p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <FaRegWindowClose size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
              </div>
             
              {/* -----------------------------------------Top Card Ended---------------------------------- */}

              <div className="topforsamplewaitingandviewall">
                <p className="tableTop mt-3">Samples awaiting Review</p>

                <p className="viewAll">View all</p>
              </div>
              <div>
                <Table className="table" border={1}>
                  <thead className="tbhed">
                    <tr style={{ backgroundColor: "#3a4175" }}>
                      <th>S.No</th>
                      <th>Company Name</th>
                      <th>Manufacturing Lic No.</th>
                      <th>State</th>

                      <th>View & Edit</th>
                    </tr>
                  </thead>
                  <tbody className="trAlign">
                    <tr>
                      <td>1</td>
                      <td>ABC Private Limited</td>
                      <td>02023</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>XYZ Private Limited</td>
                      <td>54321</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>ABC Private Limited</td>
                      <td>12345</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>XYZ Private Limited</td>
                      <td>54321</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>ABC Private Limited</td>
                      <td>12345</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>XYZ Private Limited</td>
                      <td>54321</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>7</td>
                      <td>ABC Private Limited</td>
                      <td>12345</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td>XYZ Private Limited</td>
                      <td>54321</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>9</td>
                      <td>ABC Private Limited</td>
                      <td>12345</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>10</td>
                      <td>XYZ Private Limited</td>
                      <td>54321</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>11</td>
                      <td>ABC Private Limited</td>
                      <td>12345</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
