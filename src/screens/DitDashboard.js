import React ,{useState,useEffect}from "react";

import {
  Table,
  Row,
  Col,

  Card,
} from "react-bootstrap";
import axios from "axios";
import "./Styles.css";
import { BsBoxSeam, BsClipboardCheck } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import NavbartitleAddco from "../components/NavbartitleAddco";
import SidenavbarDIT from "../components/SidenavbarDIT";
import { changeBatchId } from "../redux/FormSlice";
import { useDispatch } from "react-redux";
export default function AnalystDashboaed() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[batchDetail,setBatchDetail]=useState([]);
  useEffect(() => {
    
    axios
      .get("http://3.80.98.199:3000/api/batchDetails/getBatchDetails?page=1")
      .then((response) => setBatchDetail(response.data))
      .catch((error) => console.error("Error fetching batch data:", error));
  }, []);

const handleSubmit=(item)=>{
  console.log("item",item.id)
  dispatch(changeBatchId(
    {batchId:item.id})
  ) 
  navigate("DITExpandedview")
};

console.log("batchdetail", batchDetail)
  return (
    <div className="app">
      <NavbartitleAddco />

      <div className="d-flex">
        <SidenavbarDIT />
        <div className="main">
          <div className="mainitem">
            {/* -----------------------------------------Top Card Start---------------------------------- */}

            <div className="mt-4 row wholeCardDiv">
              <Row>
                <Col md={3}>
                  <Card className="mainCard1 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p>Total Samples</p>
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
                        <p>Approved</p>
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
                    onClick={() => navigate("DITExpandedView")}
                  >
                    <div className="cardArrangement">
                      <div>
                        <p>Remain</p>
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
                <p className="tableTop mt-3">Samples awaiting testing</p>
                <a href="/" className="viewAll">
                  View all
                </a>
              </div>
              <div>
                <Table className="table" border={1}>
                  <thead className="tbhed">
                    <tr>
                      <th>S.No</th>
                      <th>Registration No</th>
                      <th>Test Parameters</th>
                      
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody className="trAlign">
                  {batchDetail.map((item, i) => (
                      <tr key={item.id}>
                
                      <td>{i+1}</td>
                      <td>{item.rlplNumber}</td>
                      <td>
  {item.testParameter
    ? item.testParameter.map(option => option.testDataCode).join(' , ')
    : 'N/A'}
</td>
                     
                      <td>
                        <button className="tbbutton " onClick={() => handleSubmit(item)}>View</button>
                      </td>
                    </tr>
                  ))}
                   
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
