/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./pahin.css";
import {
  Table,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import "./Styles.css";
import { BsBoxSeam, BsClipboardCheck } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import NavbartitleAddco from "../components/NavbartitleAddco";
import SidenavbarAnalyst from "../components/SidenavbarAnalyst";
import { changeBatchId } from "../redux/FormSlice";
import { useDispatch,useSelector } from "react-redux";
export default function AnalystDashboaed() {
  const token  = useSelector((state) => state.form.usertoken.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]); 
  const [filterData, setFilterData] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
   
    fetch(`http://3.80.98.199:3000/api/batchDetails/getDitApprovedBatchDetails?page=${page}&perPage=${itemsPerPage}`,{
      headers: {
        "Content-Type": "application/json",
        'Authorization': token
      },
    })
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData.samples); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilterData(data.slice(startIndex, endIndex));
  }, [data, page]);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected);
  };
  function handleSubmit(item) {
    console.log("item", item.id);
    dispatch(
      changeBatchId({
        batchId: item.id,
      })
     );
    navigate("AnalystBatchandRLPLdetails");
  }
  return (
    <div className="app">
      <NavbartitleAddco />

      <div className="d-flex">
        <SidenavbarAnalyst />
        <div className="main">
          <div className="mainitem">
            {/* -----------------------------------------Top Card Start---------------------------------- */}

            <div className="mt-4 row wholeCardDiv">
              <Row>
                <Col md={3}>
                  <Card className="mainCard1 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p>Sample Details</p>
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
                        <p>Samples Completed</p>
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
                    onClick={() => navigate("AwaitingSamples")}
                  >
                    <div className="cardArrangement">
                      <div>
                        <p>Samples Awaiting</p>
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
               
              </div>
              <div>
                <Table className="table" border={1}>
                  <thead className="tbhed">
                    <tr>
                      <th>S.No</th>
                      <th>RLPL ID</th>
                       <th>Test Parameters</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody className="trAlign">
                    {filterData.map((item, index) => (
     <tr key={item.id}>
     <td>{index + 1}</td>
     <td>{item.rlplNumber}</td>
     <td>
       {item.testParameter
         ? item.testParameter
             .map((option) => option.testDataCode)
             .join(" , ")
         : "N/A"}
     </td>
     <td>
       <button
         className="tbbutton"
         onClick={() => handleSubmit(item)}
       >
         View
       </button>
     </td>
   </tr>))} 
                  
                  </tbody>
                </Table>
              </div>
               <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page-item"}
        onPageChange={handlePageChange}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        previousLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillLeftCircle />
            <text>previous</text>
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
            <AiFillRightCircle />
            <text>Next</text>
          </IconContext.Provider>
        }
      />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
