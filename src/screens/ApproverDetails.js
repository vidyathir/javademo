import React,{useState,useEffect} from "react";
import "./Styles.css";
import { Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { AiOutlineLeft, AiOutlineEye } from "react-icons/ai";
import { RiFileWord2Fill } from "react-icons/ri";
import { BsArrowDownCircle } from "react-icons/bs";
import NavbartitleAddco from "../components/NavbartitleAddco";
import SidenavbarApprover from "../components/SidenavbarApprover";
import { useSelector } from "react-redux";
import axios from "axios";
export default function ApproverDetails() {
  const navigate = useNavigate();
  const [analystView, setAnalystView] = useState({});
 
  const id = useSelector((state) => state.form.AbatchId.AbatchId);
  const token = useSelector((state) => state.form.usertoken.token);
  console.log(id);
  const item = {tdsId:id};
  console.log(item)
  useEffect(() => {
    axios
      .get(
        "http://3.80.98.199:3000/api/batchDetails/getBatchById?batchId=" + id,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )

      .then((response) => setAnalystView(response.data))
      .catch((error) => console.error("Error fetching batch data:", error));
  }, [id, token]);
  console.log("analystview", analystView);

const handleSubmit=()=>{
 
fetch("http://3.80.98.199:3000/api/tdsDetails/approve", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    'Authorization': token
  },


  body: JSON.stringify({"tdsId":id, "approve":"success"}),
})
  .then((response) => response.json())

  .then((data) => {
  
    console.log("Success:", data);
    
     // handle the response data here
  })

  .catch((error) => {
    // handle any errors here
  });
  navigate("/ApproverDashboard")
}
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
                navigate("/ApproverDashboard")
              }
            >
              <AiOutlineLeft
                onClick={() =>
                  navigate("/ApproverDashboard")
                }
              />{" "}
              <text>back</text>
            </div>

            <div className="mt-3">
              <text className="mainheadtitlesub">Sample details</text>
              <hr />
            </div>
            {analystView.sampleDetails?(
            <Row className="rowtabview">
              <Col className="">
                <div className="d-flex row">
                  <text className="cardcolhed">Name of the Sample</text>
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.sampleName}</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Storage Condition</text>
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.storageCondition}</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Type of Submission</text>
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.typeOfSubmission}</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Sample Type</text>{analystView.sampleDetails.sampleType?
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.sampleType.join(",")}</text>:<text className="cardcolhedtext mt-1">NA</text>}
                </div>
              </Col>
            </Row>):(  <div>N/A</div>)}
            {analystView.sampleDetails?(
            <Row className="mt-3 rowtabview">
              <Col className="columnMb col-3">
                <div className="d-flex row">
                  <text className="cardcolhed">Nature of Sample</text>
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.natureOfSample}</text>
                </div>
              </Col>
              <Col className="columnMb col-3">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Report required as per Form-39*
                  </text>
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.reportRequiredaAsPerForm39}</text>
                </div>
              </Col>
              <Col className="columnMb col-6">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Sample Retention required(Drug Product/Substance){" "}
                  </text>
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.sampleRetentionRequired}</text>
                </div>
              </Col>
            </Row>):( <div>N/A</div>)}

            <div className="mt-3">
            <div className="titlemainreference">
                <text className="mainheadtitlesub">Batch & RLPL details</text>
          
              </div>
              
              <hr />
            </div>
            {analystView?
            
            <Table responsive border={1} className="table-custom">
              <thead className="table-custom">
                <tr>
                  <th>S.No</th>
                  <th>RLPL No</th>
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
              <tbody className="tablebody-custom">
                <tr>
                <td>01</td>
                  <td>{analystView.rlplNumber}</td>
                  <td>{analystView.batchNo}</td>
                  <td>{analystView.natureOfPacking}</td>
                  <td>{analystView.sampleQuantity}</td>
                  <td>{analystView.mfgDate}</td>
                  <td>{analystView.expDate}</td>
                  <td>{analystView.retestDate}</td>
                  
                  <td>{analystView.testParameter && Array.isArray(analystView.testParameter) ? (
    analystView.testParameter.map((item, index) => (
      <li  style={{listStyleType:"none"}}key={index}>{item.testDataCode}</li>
    ))
  ) : (
    <span>No test parameters available</span>
  )}</td>
                </tr>

                
              </tbody>
            </Table>
            :"N/A"}

            <div className="mt-3">
              <text className="mainheadtitlesub">Type of Analysis</text>
              <hr />
            </div>
            {analystView.sampleDetails ? (
            <Row className="rowtabview">
              <Col className="">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Regulatory(Form-39/DMF Filing/ANDA Filing/Any Query)
                  </text>{analystView.sampleDetails.regulatory?
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.regulatory||"NA"}</text>:<text className="cardcolhedtext mt-1">NA</text>}
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Other than Regulatory </text>
                  {analystView.sampleDetails.otherThanRegulatory?
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.otherThanRegulatory.join(",")||"NA"}</text>:<text className="cardcolhedtext mt-1">NA</text>}
                </div>
              </Col>
            </Row>):(<div>N/A</div>)}
            {analystView.sampleDetails ? (
            <Row className="mt-3 rowtabview">
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Test to be carried out as per{" "}
                  </text>{analystView.sampleDetails.testToBeCarriedOut?
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.testToBeCarriedOut.join(' ,')||"NA"}</text>:<text className="cardcolhedtext mt-1">NA</text>}
                  
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Special Instructions If any other{" "}
                  </text>{analystView.sampleDetails.specialInstruction?
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.specialInstruction}</text>:<text className="cardcolhedtext mt-1">NA</text>}
                 
                </div>
              </Col>
            </Row>):(<div>N/A</div>)}
            {analystView.sampleDetails ? (
            <Row className="mt-3 rowtabview">
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    If Method Validation/Verification/Transfer/Development are
                    performed atRevin Labs please specify the Report Ref. No.{" "}
                  </text>
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.vvtddRefNo}</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Analytical Test Parameter; If require attach Annexure along
                    with this filled TRF{" "}
                  </text>
                  <div className="analyticalbutton-div">
                    <text className="analyticalbutton mt-1"></text>
                  </div>
                  {/* <text className="cardcolhedtext mt-1">xxxxxx xxxxx</text> */}
                </div>
              </Col>
            </Row>):(<div>N/A</div>)}
            {analystView.sampleDetails ? (
            <Row className="mt-3 rowtabview">
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Methodology </text>
                  <text className="cardcolhedtext mt-1">{analystView.sampleDetails.methodology}</text>
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
            </Row>):(<div>N/A</div>)}

          
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
                  <p className="approverreviewcomment"></p>
                </div>
              </Col>

              <Col></Col>
            </Row>
          </div>
          <div className="reviewerdetailsbutton mb-3">
            <button
              className="cardbuttonoutline"
               onClick={() => navigate("/ApproverDashboard")}
            >
              {/* <BiLeftArrowAlt size={24} />  */}
              Reject
            </button>
            <button
              className="cardbutton"
              type="submit"
              onClick={handleSubmit}
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
