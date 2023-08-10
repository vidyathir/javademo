import React from "react";
import "./Styles.css";
import Sidenavbar from "../components/Sidenavbar";
// import Navbartitle from "../components/Navbartitle";
import {
  //  Col, Row,
  Table,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { AiOutlineLeft } from "react-icons/ai";
// import { RiFileWord2Fill } from "react-icons/ri";
import { BsArrowDownCircle } from "react-icons/bs";
import { PiFileArrowUp } from "react-icons/pi";
// import { PiUpload } from "react-icons/pi";
// import { CgCloseR } from "react-icons/cg";
import { BiRightArrowAlt } from "react-icons/bi";
import NavbartitleAddco from "../components/NavbartitleAddco";

export default function AnalystBatchandRLPLdetails() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <NavbartitleAddco />

      <div className="d-flex">
        <Sidenavbar />

        <div className="main">
          <div className="mainitem">
            <div
              className="analystbackbutton mt-3"
              onClick={() => navigate("/AnalystDashboaed/AwaitingSamples")}
            >
              <AiOutlineLeft
                onClick={() => navigate("/AnalystDashboaed/AwaitingSamples")}
              />{" "}
              <text>back</text>
            </div>

            <div className="mt-3">
              <div className="titlemainreference ">
                <text className="mainheadtitlesub">Batch & RLPL details</text>
                <text className="titlesubreference">
                  TDS Number: TDS/XRD/23/19923
                </text>
              </div>
              <hr />
            </div>

            <Table responsive border={1}>
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
                  <th>Required DOcuments</th>
                </tr>
              </thead>
              <tbody className="tablebody-custom">
                <tr>
                  <td>01</td>
                  <td>0101</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>11/02/2023</td>
                  <td>31/04/2023</td>
                  <td>01/02/2023</td>
                  <td>xxxxxx</td>
                  <td>xxxxxx</td>
                </tr>

                <tr>
                  <td>01</td>
                  <td>0101</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>11/02/2023</td>
                  <td>31/04/2023</td>
                  <td>01/02/2023</td>
                  <td>xxxxxx</td>
                  <td>xxxxxx</td>
                </tr>

                <tr>
                  <td>01</td>
                  <td>0101</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>xxxxx</td>
                  <td>11/02/2023</td>
                  <td>31/04/2023</td>
                  <td>01/02/2023</td>
                  <td>xxxxxx</td>
                  <td>xxxxxx</td>
                </tr>
              </tbody>
            </Table>

            {/* <Card className="cardtablesize"> */}

            {/* <tbody className="tablebody-custom "> */}

            {/* 
              <tr >
    <td align='center'>01</td>
    <td align='center'>RLPLR2317026</td>
    <td> xxxxxx </td>
    <td rowspan='3' align='center'>xxxxxxx</td>
    <td rowspan='3' align='center'>xxxxx</td>
    <td rowspan='3' align='center'>02/03/2023</td>
    <td rowspan='3' align='center'>02/03/2023</td>
    <td rowspan='3' align='center'>02/03/2023</td>
    <td rowspan='3' align='center'>SOR.doc</td>
  </tr>
  <tr>
    <td>02</td>
     <td>RLPLR2317027</td>
      <td>xxxxxxx</td>
  </tr>
  <tr>
    <td>03</td>
     <td>RLPLR2317028</td>
      <td>xxxxxx</td>
  </tr> */}

            {/* </Card> */}

            <div className="mt-3">
              <text className="mainheadtitlesub">TDS details</text>
              <hr />
            </div>

            {/* <Card className="cardtablesize"> */}
            <Table responsive border={1}>
              <thead className="table-custom">
                <tr>
                  <th>S.No</th>
                  <th>TDS Number</th>
                  <th>Test Parameter</th>
                  <th>Download</th>
                  <th>TDS Upload</th>
                  <th>Analytical Data Upload</th>
                </tr>
              </thead>
              <tbody className="tablebody-custom">
                <tr>
                  <td>1</td>
                  <td>TDS/SOR/23/1234</td>
                  <td>SOR</td>
                  <td>
                    {" "}
                    <BsArrowDownCircle size={23} color="#9AC037" />
                  </td>
                  <td>
                    <PiFileArrowUp size={23} color="#818181" />
                  </td>
                  <td>
                    <PiFileArrowUp size={23} color="#818181" />
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>TDS/SOR/23/1234</td>
                  <td>XRD</td>
                  <td>
                    <BsArrowDownCircle size={23} color="#9AC037" />
                  </td>
                  <td>
                    <PiFileArrowUp size={23} color="#818181" />
                  </td>
                  <td>
                    <PiFileArrowUp size={23} color="#818181" />
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>TDS/SOR/23/1234</td>
                  <td>SOR</td>
                  <td>
                    <BsArrowDownCircle size={23} color="#9AC037" />
                  </td>
                  <td>
                    <PiFileArrowUp size={23} color="#818181" />
                  </td>
                  <td>
                    <PiFileArrowUp size={23} color="#818181" />
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>TDS/SOR/23/1234</td>
                  <td>DSC</td>
                  <td>
                    <BsArrowDownCircle size={23} color="#9AC037" />
                  </td>
                  <td>
                    <PiFileArrowUp size={23} color="#818181" />
                  </td>
                  <td>
                    <PiFileArrowUp size={23} color="#818181" />
                  </td>
                </tr>
              </tbody>
            </Table>
            {/* </Card> */}

            {/* <div className="mt-3">
              <text className="mainheadtitlesub">
                Test Data Sheet & Special Instructions
              </text>
              <hr />
            </div>

            <Row className="rowtabview">
              <Col>
                <div className="analysttestdata">
                  <div>
                    <RiFileWord2Fill size={24} color="#2368C4" />
                    <text className="analysttestdata-text ms-2">
                      SPECIFIC OPTICAL ROTATION TDS.docs
                    </text>
                  </div>
                  <BsArrowDownCircle size={24} color="#9AC037" />
                </div>
              </Col>
              <Col>
                <div className="row mt-2">
                  <text className="cardcolhed">
                    Special Instructions If any other
                  </text>
                  <text className="analyscardcolhed mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore{" "}
                  </text>
                </div>
              </Col>
            </Row>

            <div className="mt-4">
              <text className="mainheadtitlesub">Upload Files</text>
              <hr />
            </div>

            <Row className="rowtabview">
              <Col>
                <div className="analysupload">
                  <div>
                    <PiUpload size={60} color="#818181" />
                  </div>
                  <div>
                    <button className="analysuploadbutton mt-3">
                      <text>Browse Files</text>
                    </button>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="analysttestdata mt-2">
                  <div>
                    <RiFileWord2Fill size={24} color="#2368C4" />
                    <text className="analysttestdata-text ms-2">
                      SPECIFIC OPTICAL ROTATION TDS.docs
                    </text>
                  </div>
                  <CgCloseR size={24} color="#FF5D49" />
                </div>
                <div className="analysttestdata mt-3">
                  <div>
                    <RiFileWord2Fill size={24} color="#2368C4" />
                    <text className="analysttestdata-text ms-2">
                      SPECIFIC OPTICAL ROTATION TDS.docs
                    </text>
                  </div>
                  <CgCloseR size={24} color="#FF5D49" />
                </div>
              </Col>
            </Row>

            <div className="cardbuttonboubleend mb-3">
              <button
                className="cardbutton"
                type="submit"
                onClick={() => navigate("/")}
              >
                Submit <BiRightArrowAlt size={24} />
              </button>
            </div>
          </div> */}

            <div className="cardbuttonboubleend mb-3">
              {/* <button
              className="cardbuttonoutline"
              onClick={() => onButtonClick("TypeOfAnalysis")}
            >
              <BiLeftArrowAlt size={24} /> Previous
            </button> */}
              <button
                className="cardbutton"
                type="submit"
                onClick={() => navigate("AnalystDashboaed")}
              >
                Submit <BiRightArrowAlt size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
