import React from "react";
import "./Styles.css";

import { Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  AiOutlineLeft,
  // AiOutlineEye
} from "react-icons/ai";

import { PiFilePdfFill } from "react-icons/pi";
import { BiRightArrowAlt } from "react-icons/bi";
import NavbartitleAddco from "../components/NavbartitleAddco";
import SidenavbarDIT from "../components/SidenavbarDIT";

export default function ReviewerDetails() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <NavbartitleAddco />

      <div className="d-flex">
        <SidenavbarDIT />

        <div className="main">
          <div className="mainitem">
            <div
              className="analystbackbutton mt-3"
              onClick={() => navigate("/ReviewDashboard/AwaitingSamplesReview")}
            >
              <AiOutlineLeft
                onClick={() =>
                  navigate("/ReviewDashboard/AwaitingSamplesReview")
                }
              />{" "}
              <text>back</text>
            </div>

            <div className="mt-3">
              <text className="mainheadtitlesub">Batch & RLPL details</text>
              <hr />
            </div>

            {/* <Card className="cardtablesize"> */}
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
            {/* </Card> */}

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
                    Report required as per Form-39
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
                  <div>
                    <text className="cardcolhed">
                      Analytical Test Parameter; If require attach Annexure
                      along with this filled TRF{" "}
                    </text>
                  </div>

                  <div className="analyticalbutton-div">
                    <text className="analyticalbutton mt-1 ">SRO</text>
                    <text className="analyticalbutton mt-1 ms-1">SOR</text>
                    <text className="analyticalbutton mt-1 ms-1">xxxxx</text>
                    <text className="analyticalbutton mt-1 ms-1">xxxxx</text>
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
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Attachments </text>
                  <span>
                    <PiFilePdfFill />
                    <text className="cardcolhedtext mt-1">xyz.pdf</text>
                  </span>
                </div>
              </Col>
            </Row>

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
                Review <BiRightArrowAlt size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
