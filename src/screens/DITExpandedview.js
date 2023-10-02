/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from "react";
import "./Styles.css";
import { Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  AiOutlineLeft,
  
} from "react-icons/ai";
import { useSelector ,useDispatch} from "react-redux";
import { PiFilePdfFill } from "react-icons/pi";
import { BiRightArrowAlt } from "react-icons/bi";
import NavbartitleAddco from "../components/NavbartitleAddco";
import SidenavbarDIT from "../components/SidenavbarDIT";
import axios from "axios";
import { changeSubmitDit } from "../redux/FormSlice";
export default function DITExpandedView() {
  const navigate = useNavigate();
  const id=useSelector(state =>state.form.batchId.batchId);
  const[detailedView,setDetailedView]=useState({});
  const[datasheet, setDatasheet]=useState([]);
  const analysis=useSelector(state =>state.form.data);
  const dispatch = useDispatch();
  const token  = useSelector((state) => state.form.usertoken.token);
  
  console.log(id)
 const item={"batchId" : id,"status" : "approved", "ditId" : token.userid}
 
  useEffect(() => {

    axios
      .get("http://3.80.98.199:3000/api/batchDetails/getBatchById?batchId="+id,{
        headers: {
    "Content-Type": "application/json",
    'Authorization': token
  },

      })
      
      .then((response) => setDetailedView(response.data))
      .catch((error) => console.error("Error fetching batch data:", error));
  }, [id]);
  useEffect(() => {

    axios
      .get("http://3.80.98.199:3000/api/batchDetails/getDataSheets?batchId="+id,{
        headers: {
    "Content-Type": "application/json",
    'Authorization': token
  },

      })
      .then((response) => setDatasheet(response.data))
      .catch((error) => console.error("Error fetching batch data:", error));
  }, [id]);
  const postapicall=()=>{
    const newLocal = "http://3.80.98.199:3000/api/batchDetails/ditApproval";
    fetch(newLocal, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    'Authorization': token

      },
    
    
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
    
      .then((data) => {
        dispatch(changeSubmitDit(data))
        console.log("Success:", data);
        
         // handle the response data here
      })
    
      .catch((error) => {
        // handle any errors here
      });
      navigate("DITSuccess")
    }

  console.log("details",detailedView)
  return (
    <div className="app">
      <NavbartitleAddco />

      <div className="d-flex">
        <SidenavbarDIT />

        <div className="main">
          <div className="mainitem">
            <div
              className="analystbackbutton mt-3"
              onClick={() => navigate("/DitDashboard")}
            >
              <AiOutlineLeft
                onClick={() =>
                  navigate("/DitDashboard")
                }
              />{" "}
              <text>back</text>
            </div>

            <div className="mt-3">
              <text className="mainheadtitlesub">Batch & RLPL details</text>
              <hr />
            </div>

          
            <Table responsive border={1}>
              <thead className="table-custom">
                <tr>
                  <th>S.No</th>
                  <th>RLPL ID</th>
                  <th>Batch No./Lot No(s)</th>
                  <th>Nature Of Packaging</th>
                  <th>Sample Quantity</th>
                  <th>Mfg. Date</th>
                  <th>Exp. Date</th>
                  <th>Retest Date</th>
                  <th>Test Parameter</th>
                  <th>Required Documents</th>
                </tr>
              </thead>
              <tbody className="tablebody-custom">
                <tr>
                  <td>01</td>
                  <td>{detailedView.rlplNumber}</td>
                  <td>{detailedView.batchNo}</td>
                  <td>{detailedView.natureOfPacking}</td>
                  <td>{detailedView.sampleQuantity}</td>
                  <td>{detailedView.mfgDate}</td>
                  <td>{detailedView.expDate}</td>
                  <td>{detailedView.retestDate}</td>
         <td>
  {detailedView.testParameter && Array.isArray(detailedView.testParameter) ? (
    detailedView.testParameter.map((item, index) => (
      <li  style={{listStyleType:"none"}}key={index}>{item.testDataCode}</li>
    ))
  ) : (
    <span>No test parameters available</span>
  )}
</td>
                
                  <td> {datasheet.map((item, i)=> (
   <ul style={{listStyleType:"none"}} key={i}><li style={{listStyleType:"none"}} ><PiFilePdfFill /> <a href={item.url} target="_blank" rel="noopener noreferrer">
   {item.testDataCode ? item.testDataCode : "No testdatacode available"}
 </a></li>
   </ul>))}
    </td>
        </tr>      
</tbody>
            </Table>
         

            <div className="mt-3">
              <text className="mainheadtitlesub">Sample details</text>
              <hr />
            </div>
{Object.keys(detailedView).length > 0 ? (
  <>
            <Row className="rowtabview">
              <Col className="">
                <div className="d-flex row">
                  <text className="cardcolhed">Name of the Sample</text>
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.sampleName}</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Storage Condition</text>
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.storageCondition}</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Type of Submission</text>
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.typeOfSubmission}</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Sample Type</text>
                  {detailedView.sampleDetails.sampleType?
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.sampleType.join(",")}</text>:'N/A'}
                </div>
              </Col>
            </Row>

            <Row className="mt-3 rowtabview">
              <Col className="columnMb col-3">
                <div className="d-flex row">
                  <text className="cardcolhed">Nature of Sample</text>
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.natureOfSample}</text>
                </div>
              </Col>
              <Col className="columnMb col-3">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Report required as per Form-39
                  </text>
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.reportRequiredaAsPerForm39}</text>
                </div>
              </Col>
              <Col className="columnMb col-6">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Sample Retention required(Drug Product/Substance){" "}
                  </text>
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.sampleRetentionRequired}</text>
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
                  {detailedView.sampleDetails.regulatory?
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.regulatory}</text>:'N/A'}
                </div>
              </Col>
               <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Other than Regulatory </text>
                  {detailedView.sampleDetails.otherThanRegulatory ?
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.otherThanRegulatory.join('   ,  ')}</text>: <text className="cardcolhedtext mt-1">N/A</text>}
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
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.vvtddRefNo}</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">
                    Test to be carried out as per{" "}
                  </text>
                  {detailedView.sampleDetails.testToBeCarriedOut ?
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.testToBeCarriedOut.join('  ,  ')}</text>:'N/A'}
                </div>
              </Col>
            


            </Row>


            <Row className="mt-3 rowtabview">
               <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Methodology </text>
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.methodology}</text>
                </div>
              </Col> 
              
              <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Attachments </text>
                  <span>
                    <PiFilePdfFill />
                   {detailedView.sampleDetails.attachment &&
                    Array.isArray(detailedView.sampleDetails.attachment) ? (
                      detailedView.sampleDetails.attachment.map((item, index) => (
                        <text >
                          <li style={{listStyleType:"none"}} key={index}>{item}</li>
                        </text>
                      ))
                    ) : (
                      <span>No attachments available</span>
                    )}
                   
                  </span>
                </div>
              </Col>

              

            </Row>
            <Row>
            <Col className="columnMb">
                <div className="d-flex row">
                  <text className="cardcolhed">Special Instructions If any other </text>
                  <text className="cardcolhedtext mt-1">{detailedView.sampleDetails.specialInstruction}</text>
                </div>
              </Col>
              <Col className="columnMb">
                <div className="d-flex row">
                  </div>
              </Col>
            </Row>
            </>
):(
            // Display a loading indicator if data is still loading
            <div>Loading...</div>
          )}
            <div className="cardbuttonboubleend mb-3">
             
              <button
                className="cardbutton"
                type="submit"
                onClick={postapicall}
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
