import React from "react";
import Sidenavbar from "../components/Sidenavbar";
import Navbartitle from "../components/Navbartitle";
import { Table, Row,Col,
    // Button,
     Card } from "react-bootstrap";

import './Styles.css';
import {BsBoxSeam,BsClipboardCheck} from 'react-icons/bs'
import {LuClipboardEdit} from 'react-icons/lu';
import { useNavigate } from "react-router-dom";


export default function AnalystDashboaed() {

    const navigate = useNavigate();
  return (
    <div className="app">

<Navbartitle/>

<div className="d-flex">

      <Sidenavbar />
      <div className="main">
        <div className="mainitem">
       

        {/* -----------------------------------------Top Card Start---------------------------------- */}


          
          <div className="mt-4 row wholeCardDiv">
          <Row>
            <Col md={3}>
            <Card className="mainCard1 p-2">
               <div className="cardArrangement">
                <div style={{justifyContent:'space-evenly'}}>
                    <p>Sample Details</p>
                    <p className="cardNum">25</p>
                </div>
                <div>
                    <BsBoxSeam  size={50} color="#fff"  />
                </div>
               </div>
            </Card>
            </Col>
            <Col md={3}>
            <Card className="mainCard2 p-2">

            <div className="cardArrangement">
                <div style={{justifyContent:'space-evenly'}}>
                    <p>Samples Completed</p>
                    <p className="cardNum">19</p>
                </div>
                <div>
                    <BsClipboardCheck size={50} color="#fff"  />
                </div>
               </div>

            </Card>
            </Col>
            <Col md={6}>
            <Card className="mainCard2 p-2"  onClick={()=>navigate("AwaitingSamples")} >
            <div className="cardArrangement">
                <div >
                    <p>Samples Awaiting</p>
                    <p className="cardNum">06</p>
                </div>
                <div>
                    <LuClipboardEdit  size={50} color="#fff"  />
                </div>
               </div>
            </Card>
            </Col>
        </Row>
{/* -----------------------------------------Top Card Ended---------------------------------- */}

            <div className="topforsamplewaitingandviewall">
                <p className="tableTop mt-3">Samples awaiting testing</p>
                <a href="/" className="viewAll">View all</a>

            </div>
            <div>
            <Table className="table" border={1}>
                <thead className="tbhed">
                    <tr>
                    <th>S.No</th>
                    <th>Reference Number</th>
                    <th>SRO Submitted By</th>
                    <th>DIT Reviewed By</th>
                    <th>View</th>
                    </tr>
                </thead>
                <tbody className="trAlign">
                <tr >
                    <td>1</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>2</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>3</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>4</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>5</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>6</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>7</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>8</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>9</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>10</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>11</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
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