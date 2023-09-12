/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from 'react';
import Sidenavbar from '../components/Sidenavbar';
import Navbartitle from '../components/Navbartitle';
import{Table} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {BsSearch} from 'react-icons/bs';
import { changeCompanyId } from "../redux/FormSlice";
import { useDispatch,useSelector } from "react-redux";
export default function SearchCustomer(){
  const token  = useSelector((state) => state.form.usertoken.token);
const[companyDetail,setCompanyDetail]=useState([]);
const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch company options from API
        axios
          .get("http://3.80.98.199:3000/api/companyDetails",{
            headers: {
              "Content-Type": "application/json",
              'Authorization': token
            },
          
          })
          .then((response) => setCompanyDetail(response.data))
          .catch((error) => console.error("Error fetching company data:", error));
      }, []);
      function handleSubmit(item) {
        console.log("item", item.id);
        dispatch(
          changeCompanyId({
            companyId: item.id,
          })
         );
        navigate("ViewCustomer");
      }
      const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };
    
      // Function to make an API request with the search query
      const searchCompanies = () => {
        axios
          .get(`http://3.80.98.199:3000/api/companyDetails/searchCompany?companyName=${searchQuery}`,{
            headers: {
              "Content-Type": "application/json",
              'Authorization': token
            },
          
          })
          .then((response) => {
            setCompanyDetail(response.data);
          })
          .catch((error) => console.error('Error searching companies:', error));
      };
    
    return(
        <div className='app'>
<Navbartitle/>

<div className='d-flex'>

            <Sidenavbar />

            <div className='main'>
                <div className='mainitem'>
                  
                  <div className='SearchCustomerSearchbox'>
                <div>
                    <input type='text' placeholder='Search Company' className='SearchCustomerSearchbox-input'
                     value={searchQuery}
                     onChange={handleSearchInputChange} />
                </div>
                <div>
                    <button className='SearchCustomer-searchbox-button' onClick={searchCompanies} >
                        <BsSearch className='SearchCustomer-searchbox-button-icon' /> <text className='SearchCustomer-searchbox-button-text'>Search</text>
                    </button>
                </div>
                  </div>

                    {/* --------------------Table Starts here---------------- */}
                    <div className='topforsamplewaitingandviewall'>
                <p className="tableTop mt-3" onClick={()=>navigate("analystbatchandrlbldetails")}>Company Details</p>
                <a href='/' className='viewAll'> View all</a>

            </div>
                    <Table className="table mt-3" border={1}>
                <thead className="tbhed">
                    <tr>
                    <th>S.No</th>
                    <th>Company Name</th>
                    <th>Manufacturing Lic No.</th>
                    <th>State</th>
                    <th>View & Edit</th>
                    </tr>
                </thead>

                <tbody className="trAlign">
                {companyDetail.map((item, index) => (
                <tr key={item.id} >
                    <td>{index+1}</td>
                    <td>{item.companyName}</td>
                    <td>{item.manufacturingLicenseNumber}</td>
                    <td>{item.state}</td>
                    <td><button className="tbbutton " onClick={() => handleSubmit(item)}>View</button></td>
                </tr>))}

               

                </tbody>
            </Table>
                </div>
            </div>
            </div>
        </div>
    )
}