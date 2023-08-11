import React from "react";
// import Sidenavbar from "../components/Sidenavbar";
import { Table, Row, Col, Card } from "react-bootstrap";
import { BsBoxSeam, BsClipboardCheck } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import NavbartitleAddco from "../components/NavbartitleAddco";
import SidenavbarApprover from "../components/SidenavbarApprover";

export default function ApproverDashboard() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <NavbartitleAddco />

      <div className="d-flex">
        <SidenavbarApprover />

        <div className="main">
          <div className="mainitem">
            {/* -----------------------------------------Top Card Start---------------------------------- */}

            <div className="mt-4 row wholeCardDiv">
              <Row>
                <Col md={3}>
                  <Card className="mainCard1 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p>Total TDS</p>
                        <p className="cardNum">25</p>
                      </div>
                      <div>
                        <BsBoxSeam size={50} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="mainCard2 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p>Approved TDS</p>
                        <p className="cardNum">19</p>
                      </div>
                      <div>
                        <BsClipboardCheck size={50} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card
                    className="mainCard2 p-2"
                    onClick={() => navigate("AwaitingsamplesApprover")}
                  >
                    <div className="cardArrangement">
                      <div>
                        <p>Awaiting Approve</p>
                        <p className="cardNum">06</p>
                      </div>
                      <div>
                        <LuClipboardEdit size={50} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
              {/* -----------------------------------------Top Card Ended---------------------------------- */}

              <div className="topforsamplewaitingandviewall">
                <p
                  onClick={() => navigate("AwaitingSamplesApprover")}
                  className="tableTop mt-3"
                >
                  Awaiting Approve
                </p>
                <a
                  href="./AwaitingSamplesApprover"
                  className="viewAll"
                  onClick={() => navigate("AwaitingSamplesApprover")}
                >
                  View all
                </a>
              </div>
              <div>
                <Table className="table" border={1}>
                  <thead className="tbhed">
                    <tr>
                      <th>S.No</th>
                      <th>TDS Number</th>
                      <th>Test Parameter</th>
                      <th>Analyst By</th>
                      <th>Reviewd By</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody className="trAlign">
                    <tr>
                      <td>1</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>

                      <td>Robert Fox</td>
                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>
                      <td>Robert Fox</td>
                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>
                      <td>Robert Fox</td>
                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>
                      <td>Robert Fox</td>
                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>
                      <td>Robert Fox</td>
                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>
                      <td>Robert Fox</td>
                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>7</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>
                      <td>Robert Fox</td>
                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>
                      <td>Robert Fox</td>
                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>9</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>
                      <td>Robert Fox</td>
                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>10</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>
                      <td>Robert Fox</td>
                      <td>
                        <button className="tbbutton ">View</button>
                      </td>
                    </tr>

                    <tr>
                      <td>11</td>
                      <td>TDS/XRD/23/19923</td>
                      <td>PXRD,DSC</td>
                      <td>Ashok</td>
                      <td>Robert Fox</td>
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
