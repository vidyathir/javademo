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
import { useNavigate } from "react-router-dom";
import { BsBoxSeam, BsClipboardCheck } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import NavbartitleAddco from "../components/NavbartitleAddco";
import SidenavbarDIT from "../components/SidenavbarDIT";
import { changeBatchId } from "../redux/FormSlice";
import { useDispatch } from "react-redux";
export default function DitDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [filterData, setFilterData] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`http://3.80.98.199:3000/api/batchDetails/getBatchDetails?page=${page}&perPage=${itemsPerPage}`)
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData.samples); // Set the fetched data in the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Update the filtered data when the page or data changes
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
