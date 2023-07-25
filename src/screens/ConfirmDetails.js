import React from "react";
import "./Styles.css";
import { Col, Row, Table } from "react-bootstrap";
import { PiFilePdfFill } from "react-icons/pi";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function ConfirmDetails({onButtonClick}) {

    const navigate = useNavigate();

  return (
    <div>
      

      <div>
        <div >
          

          <div className="mt-3">
            <text className="mainheadtitle">Please Confirm the details</text>
          </div>

          <div className="mt-2">
            <text className="mainheadtitlesub">Company details</text>
            <hr />
          </div>

          <Row className="rowtabview">
            <Col className="">
              <div className="d-flex row " >
                <text className="cardcolhed" xs={8}>Contact Person Name</text>
                <text className="cardcolhedtext mt-1">Jacktom</text>
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row ">
                <text className="cardcolhed">Manufacturing Lic No</text>
                <text className="cardcolhedtext mt-1">001</text>
              </div>
            </Col>
            <Col  className="columnMb">
              <div className="d-flex row ">
                <text className="cardcolhed ">Email Id</text>
                <text className="cardcolhedtext mt-1 ">Jacktom@gmail.com</text>
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row ">
                <text className="cardcolhed">Company Name & Address</text>
                <text className="cardcolhedtext mt-1">
                  XYZ Private Limited ABC mainroad 2/354A leftside{" "}
                </text>
              </div>
            </Col>
          </Row>

          <Row className="mt-3 rowtabview">
            <Col className="columnMb col-3">
              <div className="d-flex row">
                <text className="cardcolhed">Phone Number</text>
                <text className="cardcolhedtext mt-1">0987654321</text>
              </div>
            </Col>
            <Col className="columnMb col-4">
              <div className="d-flex row">
                <text className="cardcolhed">Additional Phone Number</text>
                <text className="cardcolhedtext mt-1">001</text>
              </div>
            </Col>
          </Row>

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
                <text className="cardcolhedtext mt-1">xxxxxx xxxxx</text>
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

          <hr />

          <div className="cardbuttonboubleend mb-3">
            <button
              className="cardbuttonoutline"
              //  onClick={() => navigate("batchdetails")}
            >
              <BiLeftArrowAlt size={24} /> Previous
            </button>
            <button
              className="cardbutton"
              type="submit"
                onClick={() =>onButtonClick("SampleVerification")}
            >
              Confirm <BiRightArrowAlt size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}