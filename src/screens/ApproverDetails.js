import React from "react";
import "./Styles.css";
import { Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { AiOutlineLeft, AiOutlineEye } from "react-icons/ai";
import { RiFileWord2Fill } from "react-icons/ri";
import { BsArrowDownCircle } from "react-icons/bs";
import NavbartitleAddco from "../components/NavbartitleAddco";
import SidenavbarApprover from "../components/SidenavbarApprover";

export default function ApproverDetails() {
  const navigate = useNavigate();

  return (
    <div className="app">

      <NavbartitleAddco />

      <div className="d-flex">
        <SidenavbarApprover />

        <div className="main">
          <div className="mainitem">
            <div
              className="analystbackbutton mt-3"
              onClick={() =>
                navigate("/Approverdashboard/AwaitingSamplesApprover")
              }
            >
              <AiOutlineLeft
                onClick={() =>
                  navigate("/Approverdashboard/AwaitingSamplesApprover")
                }
              />{" "}
              <text>back</text>
            </div>

            <div className="mt-3">
              <text className="mainheadtitlesub">Sample details</text>
              <hr />
            </div>

            <Row className="rowtabview">
              <Col className="">
                <div className="d-flex row">
                  <text className="cardcolhed">Name of the Sample</text>
                  <text className="cardcolhedtext mt-1">xxxxx</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Storage Condition</text>
                  <text className="cardcolhedtext mt-1">xxxxxxx</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Type of Submission</text>
                  <text className="cardcolhedtext mt-1">xxxxxx xxx</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Sample Type</text>
                  <text className="cardcolhedtext mt-1">xxxxx xxxxx </text>
                </div>
              </Col>
            </Row>

            <Row className="mt-3 rowtabview">
              <Col className="columnMb col-3">
                <div className="d-flex row">
                  <text className="cardcolhed">Nature of Sample</text>
                  <text className="cardcolhedtext mt-1">xxxxxx</text>
                </div>
              </Col>
              <Col className="columnMb col-3">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Report required as per Form-39*
                  </text>
                  <text className="cardcolhedtext mt-1">xxxxxx</text>
                </div>
              </Col>
              <Col className="columnMb col-6">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Sample Retention required(Drug Product/Substance){" "}
                  </text>
                  <text className="cardcolhedtext mt-1">xxxxxx</text>
                </div>
              </Col>
            </Row>

            <div className="mt-3">
              <text className="mainheadtitlesub">Batch details</text>
              <hr />
            </div>

            {/* <Card className="cardtablesize"> */}
            <Table responsive border={1}>
              <thead className="table-custom">
                <tr>
                  <th>S.No</th>
                  <th>Batch No./Lot No(s)</th>
                  <th>Batch Size</th>
                  <th>Nature Of Packaging</th>
                  <th>Mfg. Date</th>
                  <th>Exp. Date</th>
                  <th>Retest Date</th>
                  <th>Sample Quantity</th>
                  {/* <th>Edit & Delete</th> */}
                </tr>
              </thead>
              <tbody className="tablebody-custom">
                <tr>
                  <td>01</td>
                  <td>0101</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>11/02/2023</td>
                  <td>31/04/2023</td>
                  <td>01/02/2023</td>
                  <td>xxxxxx</td>
                  {/* <td >
                            <div>
                            <BiEdit  size={20} color={'#9AC037'}/>
                            <RiDeleteBinLine className='tablerowicon' size={20} color={'#9AC037'}/>
                            </div>
                            </td> */}
                </tr>

                <tr>
                  <td>01</td>
                  <td>0101</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>11/02/2023</td>
                  <td>31/04/2023</td>
                  <td>01/02/2023</td>
                  <td>xxxxxx</td>
                  {/* <td >
                            <div>
                            <BiEdit  size={20} color={'#9AC037'}/>
                            <RiDeleteBinLine className='tablerowicon' size={20} color={'#9AC037'}/>
                            </div>
                            </td> */}
                </tr>

                <tr>
                  <td>01</td>
                  <td>0101</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>11/02/2023</td>
                  <td>31/04/2023</td>
                  <td>01/02/2023</td>
                  <td>xxxxxx</td>
                  {/* <td >
                            <div>
                            <BiEdit  size={20} color={'#9AC037'}/>
                            <RiDeleteBinLine className='tablerowicon' size={20} color={'#9AC037'}/>
                            </div>
                            </td> */}
                </tr>
              </tbody>
            </Table>
            {/* </Card> */}

            <div className="mt-3">
              <text className="mainheadtitlesub">Type of Analysis</text>
              <hr />
            </div>

            <Row className="rowtabview">
              <Col className="">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Regulatory(Form-39/DMF Filing/ANDA Filing/Any Query)
                  </text>
                  <text className="cardcolhedtext mt-1">xxxxxx xxxxx</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Other than Regulatory </text>
                  <text className="cardcolhedtext mt-1">xxxxxx xxxxx</text>
                </div>
              </Col>
            </Row>

            <Row className="mt-3 rowtabview">
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Test to be carried out as per{" "}
                  </text>
                  <text className="cardcolhedtext mt-1">xxxxxx xxxxx</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Special Instructions If any other{" "}
                  </text>
                  <text className="cardcolhedtext mt-1">xxxxxx xxxxx</text>
                </div>
              </Col>
            </Row>

            <Row className="mt-3 rowtabview">
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    If Method Validation/Verification/Transfer/Development are
                    performed atRevin Labs please specify the Report Ref. No.{" "}
                  </text>
                  <text className="cardcolhedtext mt-1">xxxxxx xxxxx</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Analytical Test Parameter; If require attach Annexure along
                    with this filled TRF{" "}
                  </text>
                  <div className="analyticalbutton-div">
                    <text className="analyticalbutton mt-1">xxxxxxxx xxx</text>
                  </div>
                  {/* <text className="cardcolhedtext mt-1">xxxxxx xxxxx</text> */}
                </div>
              </Col>
            </Row>

            <Row className="mt-3 rowtabview">
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Methodology </text>
                  <text className="cardcolhedtext mt-1">xxxxxx xxxxx</text>
                </div>
              </Col>
              {/* <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">Attachments </text>
                <span>
                  <PiFilePdfFill />
                  <text className="cardcolhedtext mt-1">xyz.pdf</text>
                </span>
              </div>
            </Col> */}
            </Row>

            <div className="mt-3">
              <div className="titlemainreference">
                <text className="mainheadtitlesub">Batch & RLPL details</text>
                <text className="titlesubreference">
                  TDS Number: TDS/XRD/23/19923
                </text>
              </div>
              <hr />
            </div>

            {/* <Card className="cardtablesize"> */}
            <Table responsive border={1} className="table-custom">
              <thead className="table-custom">
                <tr>
                  <th>S.No</th>
                  <th>Registration No</th>
                  <th>Batch No./Lot No(s)</th>
                  <th>Nature Of Packaging</th>
                  <th>Sample Quantity</th>
                  <th>Mfg. Date</th>
                  <th>Exp. Date</th>
                  <th>Retest Date</th>
                  <th>Test Parameter</th>
                  {/* <th>Edit & Delete</th> */}
                </tr>
              </thead>
              {/* <tbody className="tablebody-custom "> */}

              <tbody className="tablebody-custom">
                <tr>
                  <td>01</td>
                  <td>RLPLR2317026</td>
                  <td> xxxxxx </td>
                  <td>xxxxxxx</td>
                  <td>xxxxx</td>
                  <td>02/03/2023</td>
                  <td>02/03/2023</td>
                  <td>02/03/2023</td>
                  <td>SOR.doc</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>RLPLR2317027</td>
                  <td>xxxxxxx</td>
                  <td>xxxxxxx</td>
                  <td>xxxxx</td>
                  <td>02/03/2023</td>
                  <td>02/03/2023</td>
                  <td>02/03/2023</td>
                  <td>SOR.doc</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>RLPLR2317028</td>
                  <td>xxxxxx</td>
                  <td>xxxxxxx</td>
                  <td>xxxxx</td>
                  <td>02/03/2023</td>
                  <td>02/03/2023</td>
                  <td>02/03/2023</td>
                  <td>SOR.doc</td>
                </tr>
              </tbody>
            </Table>
            {/* </Card> */}

            <div className="mt-3">
              <text className="mainheadtitlesub">
                Test Data Sheet & System Generated Copy
              </text>
              <hr />
            </div>

            <Row>
              <Col>
                <div className="analysttestdata mt-2">
                  <div>
                    <RiFileWord2Fill size={24} color="#2368C4" />
                    <text className="analysttestdata-text ms-2">
                      ANALYTICAL DATA.docs
                    </text>
                  </div>
                  <div>
                    <AiOutlineEye size={28} color="#9AC037" />
                    <BsArrowDownCircle
                      size={24}
                      color="#9AC037"
                      className="ms-4"
                    />
                  </div>
                </div>

                <div className="analysttestdata mt-2">
                  <div>
                    <RiFileWord2Fill size={24} color="#2368C4" />
                    <text className="analysttestdata-text ms-2">
                      SPECIFIC OPTICAL ROTATION TDS.docs
                    </text>
                  </div>
                  <div>
                    <AiOutlineEye size={28} color="#9AC037" />
                    <BsArrowDownCircle
                      size={24}
                      color="#9AC037"
                      className="ms-4"
                    />
                  </div>
                </div>
              </Col>
              <Col></Col>
              {/* <Col>
    <div className='row'>
        <text className='cardcolhed'>Special Instructions If any other</text>
        <text className='analyscardcolhed mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </text>
    </div>
    </Col> */}
            </Row>

            <Row>
              <Col className="mt-3">
                <text className="reviewercommenttitle">Reviewer Feedbacks</text>
                <div className="mt-1">
                  {/* <input className='reviewercomment'/> */}
                  <p className="approverreviewcomment">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </Col>

              <Col></Col>
            </Row>
          </div>
          <div className="reviewerdetailsbutton mb-3">
            <button
              className="cardbuttonoutline"
              //  onClick={() => navigate("batchdetails")}
            >
              {/* <BiLeftArrowAlt size={24} />  */}
              Reject
            </button>
            <button
              className="cardbutton"
              type="submit"
              onClick={() => navigate("/")}
            >
              Approve
              {/* <BiRightArrowAlt size={24} /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
