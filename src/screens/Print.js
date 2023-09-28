import React, { useState , useEffect} from "react";

import printlogo from "../assets/logo 2.png";

import { Col, Row, Table } from "react-bootstrap";
import { PiFilePdfFill } from "react-icons/pi";
import { useSelector} from "react-redux";
export default function Print() {
  
  const form=useSelector(state =>state.form.customer);
  const sample=useSelector(state =>state.form.sampleDetails);
  const analysis=useSelector(state =>state.form.data);
  const batch=useSelector(state=>state.form.tabledata); 


  const [printing, setPrinting] = useState(true);
  
  useEffect(() => {
   
    if (printing) {
      window.print();
      setPrinting(false);
    }
},[printing]
  )


  function combineValues(...values) {
    const nonEmptyValues = values.filter(value => value !== "" && value !== undefined);
    return nonEmptyValues.length > 0 ? nonEmptyValues.join(", ") : "N/A";
  }
  return (
    <div>
      

      <div className="peintmainborder">
        <div className="printmain" >
       
        <div className="printlogo">
                <img src={printlogo} alt="logo" />
            </div>

          <div className="mt-3">
            <text className="mainheadtitle">Please Confirm the details</text>
          </div>

          {/* <div className="mt-2">
            <text className="mainheadtitlesubprint">Company details</text>
            <hr />
          </div>

          <Row >
            <Col className="">
              <div className="d-flex row " >
                <text className="cardcolhed" xs={8}>Contact Person Name</text>
                <text className="cardcolhedtext mt-1">{form.contactPersonName}</text>
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row ">
                <text className="cardcolhed">Manufacturing Lic No</text>
                <text className="cardcolhedtext mt-1">{form.licenceNo}</text>
              </div>
            </Col>
            <Col  className="columnMb">
              <div className="d-flex row ">
                <text className="cardcolhed ">Email Id</text>
                <text className="cardcolhedtext mt-1 ">{form.emailId}</text>
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row ">
                <text className="cardcolhed">Company Name & Address</text>
                <text className="cardcolhedtext mt-1">
                  {form.company},{form.address1}
                </text>
              </div>
            </Col>
          </Row>

          <Row className="mt-3 ">
            <Col className="columnMb col-3">
              <div className="d-flex row">
                <text className="cardcolhed">Phone Number</text>
                <text className="cardcolhedtext mt-1">{form.phoneNo}</text>
              </div>
            </Col>
            <Col className="columnMb col-4">
              <div className="d-flex row">
                <text className="cardcolhed">Additional Phone Number</text>
                <text className="cardcolhedtext mt-1">{form.phoneNo1}</text>
              </div>
            </Col>
          </Row> */}

          <div className="mt-3">
            <text className="mainheadtitlesubprint">Sample details</text>
            <hr />
          </div>

          <Row >
            <Col className="">
              <div className="d-flex row">
                <text className="cardcolhed">Name of the Sample</text>
                <text className="cardcolhedtext mt-1">{sample.samplename}</text>
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">Storage Condition</text>
                <text className="cardcolhedtext mt-1">{sample.storage}</text>
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">Type of Submission</text>
                <text className="cardcolhedtext mt-1">{sample.submissiontype}</text>
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">Sample Type</text>
                <text className="cardcolhedtext mt-1">{(sample.sampletype).join('    ,   ')}</text>
              </div>
            </Col>
          </Row>

          <Row className="mt-3 ">
            <Col className="columnMb col-3">
              <div className="d-flex row">
                <text className="cardcolhed">Nature of Sample</text>
                <text className="cardcolhedtext mt-1">{sample.natureofsample}</text>
              </div>
            </Col>
            <Col className="columnMb col-3">
              <div className="d-flex row">
                <text className="cardcolhed">
                  Report required as per Form-39*
                </text>
                <text className="cardcolhedtext mt-1">{sample.report}</text>
              </div>
            </Col>
            <Col className="columnMb col-6">
              <div className="d-flex row">
                <text className="cardcolhed">
                  Sample Retention required(Drug Product/Substance){" "}
                </text>
                <text className="cardcolhedtext mt-1">{sample.sampleretension}</text>
              </div>
            </Col>
          </Row>

          <div className="mt-3">
            <text className="mainheadtitlesubprint">Batch details</text>
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
                  <th>testparameters</th>
                  {/* <th>Edit & Delete</th> */}
                </tr>
              </thead>
              <tbody className="tablebody-custom">
                
              {batch.map((item, i)=> (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{item.batchNo}</td>
      <td>{combineValues(item.batchSize)}</td>
      <td>{combineValues(item.natureOfPacking)}</td>
      <td>{combineValues(item.mfgDate)}</td>
      <td>{combineValues(item.expDate)}</td>
      <td>{combineValues(item.retestDate)}</td>
      <td>{combineValues(item.sampleQuantity)}</td>
      <td>{combineValues(item.testParameter?.map(option => option.value))}</td>
                        </tr>
              )           
                          
)}
              
              </tbody>
            </Table>
          {/* </Card> */}

          <div className="mt-3">
            <text className="mainheadtitlesubprint">Type of Analysis</text>
            <hr />
          </div>

          <Row className="">
            <Col className="">
              <div className="d-flex row">
                <text className="cardcolhed">
                  Regulatory(Form-39/DMF Filing/ANDA Filing/Any Query)
                </text>{analysis.formfilling?
                <text className="cardcolhedtext mt-1">{analysis.formfilling}</text>:<text className="cardcolhedtext mt-1">NA</text>}
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">Other than Regulatory </text>
                <text className="cardcolhedtext mt-1"><ul>{(analysis.analyticalfeasibile)}</ul></text>
              </div>
            </Col>
          </Row>

          <Row className="mt-3 ">
            <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">
                  Test to be carried out as per{" "}
                </text>
                <text className="cardcolhedtext mt-1">{analysis.test}</text>
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">
                  Special Instructions If any other{" "}
                </text>
                {analysis.specialinstruction ?
                <text className="cardcolhedtext mt-1">{analysis.specialinstruction}</text>:<text className="cardcolhedtext mt-1">N/A</text>}
              </div>
            </Col>
          </Row>

          <Row className="mt-3 ">
            <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">
                  If Method Validation/Verification/Transfer/Development are
                  performed atRevin Labs please specify the Report Ref.num.{" "}
                </text>
                <text className="cardcolhedtext mt-1">{analysis.methodvalidation}</text>
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">
              
                </text>
                <text className="cardcolhedtext mt-1"></text>
              </div>
            </Col>
          </Row>

          <Row className="mt-3  ">
            <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">Methodology </text>
                <text className="cardcolhedtext mt-1">{analysis.methodologyfollowed}</text>
              </div>
            </Col>
            <Col className="columnMb">
              <div className="d-flex row">
                <text className="cardcolhed">Attachments </text>
                <span>
                  <PiFilePdfFill />
                  <div>{analysis.choosefile?
                  <div><text className="cardcolhedtext mt-1">{(analysis.choosefile).join(",")}</text>
  
    </div>:<text className="cardcolhedtext mt-1">N/A</text>}</div>
                  {/* <text className="cardcolhedtext mt-1">{}</text> */}
                </span>
              </div>
            </Col>
          </Row>

          
          </div>
        </div>
      </div>
    
  );
}