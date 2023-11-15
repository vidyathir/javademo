import React,{useState,useEffect} from "react";
import Sidenavbar from "../components/Sidenavbar";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle, AiOutlineFileText, AiOutlineFileProtect } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./pahin.css";
import {
  Table,
  Row,
  Col,
  // Button,
  Card,
} from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import {BsSearch} from 'react-icons/bs';
import { TbClockEdit,TbFileStar } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {LuClipboardEdit} from 'react-icons/lu';
import {FaRegWindowClose} from 'react-icons/fa';
import NavbartitleAddco from "../components/NavbartitleAddco";
import { useSelector,useDispatch } from "react-redux";
import { changeSroId,changeRlplsearch } from "../redux/FormSlice";
export default function SroDashboard() {
  const navigate = useNavigate();
  // const token = useSelector((state) => state.form.usertoken.token);
  const token = localStorage.getItem('accessToken');
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
const[dashboard,setDashboard]=useState({});
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [filterData, setFilterData] = useState([]);
  const itemsPerPage = 10; 
  const [selectedOption, setSelectedOption] = useState('');
  const[companyDetail,setCompanyDetail]=useState([]);
const [searchQuery, setSearchQuery] = useState('');
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

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
  }, []);
  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch('http://54.167.30.227:3000/api/batchDetails/dashBoard',{
      headers: {
        "Content-Type": "application/json",
        'Authorization': token,
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
    changeSroId({
      SroId: item.id,
    })
   );
  navigate("SroDetails");
}
const handleSearchInputChange = (event) => {
  setSearchQuery(event.target.value);
};

// Function to make an API request with the search query
const searchCompanies = () => {
  const item={
    "number":searchQuery,"type":selectedOption}
    console.log(item)

    fetch("http://54.167.30.227:3000/api/batchDetails/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          'Authorization': token
        
        
      },
    
    
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
    
      .then((data) => {
        console.log("result:", data);
        setCompanyDetail(data)
        dispatch(
          changeRlplsearch({
            companydetail:data ,
          })
         );
        if(selectedOption==="RLPL"){
        navigate('/SroDashboard/SearchRLPL')
         // handle the response data here
      }if(selectedOption==="TDS"){
        navigate('/SroDashboard/SearchTDS')
      }}
      )
    
      .catch((error) => {
        // handle any errors here
      });
    }

  return (
    <div className="app">
      <NavbartitleAddco />

      <div className="d-flex">
        <Sidenavbar />
        <div className="main">
          <div className="mainitem">
            {/* -----------------------------------------Top Card Start---------------------------------- */}

<div>

<Card className="admincard">

<div className="topforsamplewaitingandviewall">
                <p className="tableTop mt-3">Filter</p>
              </div>

              <Row className="mb-3 rowtabview">
                    <Col>

                      <div>
                        <label className="cardcolhed">
                          From Date
                          <text className="cardcolhedstar">*</text>
                        </label>
                      </div>
                      <div>
                        <input type="date" className="cardcolumninputtype"
                        name="mfgDate"
                        // value={naMfgDate? '' :inputs.mfgDate}
                        // onChange={handleChange}
                        // disabled={disabletext || naMfgDate} // Disable if "N/A" is checked
            />
                      </div>
                      <p style={{color:"red"}}>
                        {/* {formErrors.mfgDate} */}
                        </p>
                    </Col>

                    <Col>
 
                      <div>
                        <label className="cardcolhed">
                          To Date
                          <text className="cardcolhedstar">*</text>
                        </label>
                      </div>
                      <div>
                        <input type="date" className="cardcolumninputtype"
                        name="expDate"
            //             value={naExpDate? "" :inputs.expDate}
                      
            //             min={inputs.mfgDate}
            //             onChange={handleChange}
            //   disabled={disabletext || naExpDate} // Disable if "N/A" is checked
              />
                      </div>
                      <p style={{color:"red"}}>
                        {/* {formErrors.expDate} */}
                        </p>
                    </Col>

                    <Col>
                    <div>
                    <label className="cardcolhed" >
                   Company
                    </label>
                  
                       
                        </div>
                    <div>
                      
                    <Select name="testParameter" 
                    //  value={selectedOptions} 
                    //  options={testData} 
        onChange={handleSelectChange}style={{borderRadius:6}}
        
         isClearable isMulti={true} />
            
                      </div>
                      <p style={{color:"red"}}>
                        {/* {formErrors.selectedOptions} */}
                        </p>
                    </Col>
                  </Row>
                  
                  <Row className="mb-3 rowtabview">
                   

                    
                    <Col>
                    <div>
                    <label className="cardcolhed" >
                   Type
                    </label>
                  
                       
                        </div>
                    <div>
                      
                    <Select name="testParameter" 
                    //  value={selectedOptions} 
                    //  options={testData} 
        onChange={handleSelectChange}style={{borderRadius:6}}
        
         isClearable isMulti={true} />
            
                      </div>
                      <p style={{color:"red"}}>
                        {/* {formErrors.selectedOptions} */}
                        </p>
                    </Col>


                    <Col>
 
 <div>
   <label className="cardcolhed">
    Number
   </label>
 </div>
 <div>
   <input type="text" className="cardcolumninputtype"
   name="expDate"
//             value={naExpDate? "" :inputs.expDate}
 
//             min={inputs.mfgDate}
//             onChange={handleChange}
//   disabled={disabletext || naExpDate} // Disable if "N/A" is checked
/>
 </div>
 <p style={{color:"red"}}>
   {/* {formErrors.expDate} */}
   </p>
</Col>

<Col>
</Col>

                  </Row>

                  <Row>
                    <Col>
                    <button className="AdminButton">
                        Search
                    </button>
                    </Col>
                  </Row>

</Card>

</div>




           
             
             
              {/* -----------------------------------------Top Card Ended---------------------------------- */}

              <div className="topforsamplewaitingandviewall">
                <p className="tableTop mt-3">Company Details</p>

          
              </div>
              <div>
                <Table className="table" border={1}>
                  <thead className="table-custom">
                    <tr>
                      <th>S.No</th>
                      <th>Company Name</th>
<th>Sample Name</th>
                      <th>View & Edit</th>
                    </tr>
                  </thead>
                  <tbody className="tablebody-custom">
                  {filterData.map((item, index) => (
     <tr key={item.id}>
                    
                      <td>{index+1 + page * itemsPerPage}</td>
                      <td>{item.companyName}</td>
                
<td>{item.sampleName}</td>
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
          
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#B8C1CC", size: "36px"}}>
           
          
            <AiFillRightCircle />
          </IconContext.Provider>
        }
        pageLinkClassName="custom-page-link" // Add custom class to page links
        previousLinkClassName="custom-previous-link" // Add custom class to the previous link
        nextLinkClassName="custom-next-link" // Add custom class to the next link
        previousClassName="custom-previous-button" // Add custom class to the previous button
        nextClassName="custom-next-button" 
      />
      :null}
          
          </div>
        </div>
      </div>
    </div>
  );
}
