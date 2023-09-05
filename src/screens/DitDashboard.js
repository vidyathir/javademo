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
export default function DitDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[batchDetail,setBatchDetail]=useState({});
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentData = batchDetail.samples ? batchDetail.samples.slice(startIndex, endIndex) : [];
const [dataAvailable, setDataAvailable] = useState(false);
  useEffect(() => {
    
    axios
    .get(`http://3.80.98.199:3000/api/batchDetails/getBatchDetails?page=${currentPage}&perPage=${itemsPerPage}`)
    .then((response) => {
      const responseData = response.data;
      setBatchDetail(responseData);
      // Check if data is available and set dataAvailable accordingly
      setDataAvailable(!!responseData.samples && responseData.samples.length > 0);
    })
    .catch((error) => {
      console.error("Error fetching batch data:", error);
      // Handle the error (e.g., display an error message to the user)
    });
}, [currentPage]);
  console.log("batchdetail", batchDetail)
  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }
  
  function handleSubmit(item) {

    console.log("item", item.id);
    dispatch(changeBatchId(
      { batchId: item.id })
    );
    navigate("DITExpandedview");
  }
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
                  {!batchDetail.samples ? (
  <tr>
    <td colSpan="4">Loading...</td>
  </tr>
) : 
                  (currentData.map((item, i) => (

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
                  )))}
                   
                  </tbody>
                </Table>
                {/* Pagination controls */}
                {dataAvailable && (
<div className="pagination">
  <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
  <span>{currentPage}</span>
  <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
