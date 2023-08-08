import React from 'react';
import Sidenavbar from '../components/Sidenavbar';
import Navbartitle from '../components/Navbartitle';
import{Table} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import {BsSearch} from 'react-icons/bs';

export default function SearchCustomer(){

    const navigate = useNavigate();

    return(
        <div className='app'>
<Navbartitle/>

<div className='d-flex'>

            <Sidenavbar />

            <div className='main'>
                <div className='mainitem'>
                  
                  <div className='SearchCustomerSearchbox'>
                <div>
                    <input type='text' placeholder='Search Company' className='SearchCustomerSearchbox-input' />
                </div>
                <div>
                    <button className='SearchCustomer-searchbox-button'>
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
                <tr >
                    <td>1</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>2</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>3</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>4</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>5</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>6</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>7</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>8</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>9</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>10</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                <tr >
                    <td>11</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                
                <tr >
                    <td>12</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                
                <tr >
                    <td>13</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                
                <tr >
                    <td>14</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td>XXXXX</td>
                    <td><button className="tbbutton ">View</button></td>
                </tr>

                </tbody>
            </Table>
                </div>
            </div>
            </div>
        </div>
    )
}