import React,{useState,useEffect} from "react";
import Sidenavbar from "../components/Sidenavbar";

import {
  Table,
  Row,
  Col,
  // Button,
  Card,
} from "react-bootstrap";

import { TbClockEdit,TbFileStar } from "react-icons/tb";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {LuClipboardEdit} from 'react-icons/lu';
import {FaRegWindowClose} from 'react-icons/fa';
import NavbartitleAddco from "../components/NavbartitleAddco";
import {AiOutlineFileText,AiOutlineFileProtect} from 'react-icons/ai';
import { useSelector,useDispatch } from "react-redux";
import { changeAnalystBatchId } from "../redux/FormSlice";
export default function ReviewDashboard() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.form.usertoken.token);

  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
const[dashboard,setDashboard]=useState({});
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [filterData, setFilterData] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`http://54.167.30.227:3000/api/sampleDetails/getSamples?page=${page}&perPage=${itemsPerPage}`,{
      headers: {
        "Content-Type": "application/json",
        'Authorization': token
      },
    })
      .then((response) => response.json())
      .then((apiData) => {
        
        setData(apiData); // Set the fetched data in the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page, token]);
  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch('http://54.167.30.227:3000/api/batchDetails/dashBoard',{
      headers: {
        "Content-Type": "application/json",
        'Authorization': token
      },
    })
      .then((response) => response.json())
      .then((apiData) => {
        
        setDashboard(apiData); // Set the fetched data in the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page, token]);
console.log("data", data)
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
    changeAnalystBatchId({
      AbatchId: item.id,
    })
   );
  navigate("SroDetails");
}
  return (
    <div className="app">
      <NavbartitleAddco />

      <div className="d-flex">
        <Sidenavbar />
        <div className="main">
          <div className="mainitem">
            {/* -----------------------------------------Top Card Start---------------------------------- */}

            <div className="mt-4 row wholeCardDiv">
              <div>
                {/* <p className="overview">Overview</p> */}
               
              
              <Row>

              <Col md={3}>
                  <Card className="mainCard1 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p className="CardName">Total Test Requisition  </p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <AiOutlineFileText size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>
                
                <Col md={3}>
                  <Card className="mainCard2 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p className="CardName">Document Issuance</p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <FiEdit size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card
                    className="mainCard2 p-2"
                    onClick={() => navigate("AwaitingSamplesReview")}
                  >
                    <div className="cardArrangement">
                      <div>
                        <p className="CardName">Samples Analyst</p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <TbClockEdit size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card
                    className="mainCard2 p-2"
                    onClick={() => navigate("AwaitingSamplesReview")}
                  >
                    <div className="cardArrangement">
                      <div>
                        <p className="CardName"> Samples Reviewed</p>
                        <p className="cardNum">15</p>
                      </div>
                      <div>
                        <TbFileStar size={30} color="#fff" />
                      </div>
                      
                    </div>
                    
                  </Card>
                  
                </Col>
              </Row>

              <Row className="mt-5">
              <Col md={3}>
                  <Card className="mainCard2 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p className="CardName">Samples Approved</p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <AiOutlineFileProtect size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="mainCard2 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p className="CardName">Awaiting Samples for Test</p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <LuClipboardEdit size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col md={3}>
                  <Card className="mainCard2 p-2">
                    <div className="cardArrangement">
                      <div style={{ justifyContent: "space-evenly" }}>
                        <p className="CardName">QMS</p>
                        <p className="cardNum">30</p>
                      </div>
                      <div>
                        <FaRegWindowClose size={30} color="#fff" />
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
              </div>
             
              {/* -----------------------------------------Top Card Ended---------------------------------- */}

              <div className="topforsamplewaitingandviewall">
                <p className="tableTop mt-3">Samples awaiting Review</p>

                <p className="viewAll">View all</p>
              </div>
              <div>
                <Table className="table" border={1}>
                  <thead className="tbhed">
                    <tr style={{ backgroundColor: "#3a4175" }}>
                      <th>S.No</th>
                      <th>Company Name</th>
                      <th>Manufacturing Lic No.</th>
                      <th>State</th>

                      <th>View & Edit</th>
                    </tr>
                  </thead>
                  <tbody className="trAlign">
                  {filterData.map((item, index) => (
     <tr key={item.id}>
                    
                      <td>{index+1}</td>
                      <td>ABC Private Limited</td>
                      <td>02023</td>
                      <td>Jane Cooper(Reviewer)</td>

                      <td>
                        <button className="tbbutton " onClick={()=>handleSubmit(item)}>View</button>
                      </td>
                    </tr>))}

                
                  </tbody>
                </Table>
              </div>
              {data.length>0 ?
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
      />:null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
