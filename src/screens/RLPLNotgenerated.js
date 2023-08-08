import React from "react";
import Sidenavbar from "../components/Sidenavbar";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
// import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
// import { MdOutlineUploadFile } from "react-icons/md";
import { AiOutlineMail, AiOutlineCheck, AiFillPrinter ,AiOutlineFileExcel} from "react-icons/ai";
import'./Styles.css';
// import { TbFileLike } from "react-icons/tb";
// import {BsFileEarmarkCheck} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import Navbartitle from "../components/Navbartitle";

export default function RLPLNotgenerated() {
  const navigate = useNavigate();
  return (
    <div className="app">

<Navbartitle/>

<div className="d-flex">

      <Sidenavbar />

      <div className="main">
        <div className="mainitem">

          <div className="progressbar"></div>
            <div style={{justifyContent:'center',display:'flex'}} >
            <div style={{display:'flex',alignContent:'center',justifyContent:'center',flexDirection:'column',width:'50%',border:'none',marginTop:50}}>

                <div style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
                <div className="mt-1 mb-3"><AiOutlineFileExcel size={80} color="#9AC037" /></div>
                <div><text style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>The Samples has been Rejected, The RLPL has been not generated for below batches</text></div>
                </div>
              

                <div>

                    <div className="mt-4">
                        <h4 style={{color:'#3a4175',fontSize:18,fontWeight:600}}>Sample Details</h4>
                        <Table responsive borderless >
                        <thead  >
                            <tr >
                                <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>
                                Name of the Sample
                                </td>
                                <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>
                                Sample Type
                                </td>
                                <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>Nature of Sample</td>
                                <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>Storage Condition</td>
                            </tr>
                            <tr >
                                <td style={{color:'#3A4175',}}>xxxx xxxx</td>
                                <td style={{color:'#3A4175',}}>xxxx xxxx</td>
                                <td style={{color:'#3A4175',}}>xxxx xxxx</td>
                                <td style={{color:'#3A4175',}}>xxxx xxxx</td>

                            </tr>
                        </thead>

                        </Table>
                        <Table border={1}>
                            <thead className="table" >
                                <tr   style={{backgroundColor:'#3A4175'}} >
                                    <th style={{color:'#d1d1d1',fontSize:12,fontWeight:600}} >S.No</th>
                                    <th style={{color:'#d1d1d1',fontSize:12,fontWeight:600}}>Registration No</th>
                                    <th style={{color:'#d1d1d1',fontSize:12,fontWeight:600}}>Batch No./Lot No(s)</th>
                                    <th style={{color:'#d1d1d1',fontSize:12,fontWeight:600}}>Batch Size</th>
                                    <th style={{color:'#d1d1d1',fontSize:12,fontWeight:600}}>Batch Quantity</th>
                                    <th  style={{color:'#d1d1d1',fontSize:12,fontWeight:600,}}>Test Parameter</th>

                                    </tr>
                                    
                                    <tr>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}} >1</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>NA</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{borderLeft:'1px solid #d1d1d1',borderBottom:'none'}}></td>

                                        

                                    </tr>
                                    <tr>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>2</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>NA</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td  style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td   style={{color:'#8F8F8F',fontSize:12,fontWeight:500,justifySelf:'center',outline:'none',border:'none',borderLeft:'1px solid #d1d1d1'}}>SOR</td>

                                    </tr>
                                    <tr>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>3</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>NA</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td  style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{borderLeft:'1px solid #d1d1d1'}}></td>


                                    </tr>
                                    
                                       
                                    
                                    </thead>
                        </Table>
                        <div style={{flexDirection:'column',display:'flex'}}>
                        <label style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>
                            Reason for Rejections
                        </label>
                        <text style={{color:'#3A4175',fontSize:12,fontWeight:500}}>xxxxxx xxxxx xxxxxxx xxxxxx</text>
                        </div> 
                        <div className="mt-5"  style={{justifyContent:'space-between',display:'flex'}}>

                            <div  >
                        <Button
                    style={{
                      height: "40px",
                      width: "166px",
                      borderRadius: "6px",
                      backgroundColor: "#3A4175",
                      fontWeight: 600,
                      fontSize: 12,
                      border:'none'
                    }}
                    name="Next"
                  >
                    <AiOutlineMail size={20} color="#fff" />
                    Send an email
                  </Button>
                  <Button
                    style={{
                      height: "40px",
                      width: "122px",
                      borderRadius: "6px",
                      backgroundColor: "#9AC037",
                      fontWeight: 600,
                      fontSize: 12,
                      marginLeft: 20,
                      border:'none'
                    }}
                    name="Next"
                  >
                    <AiFillPrinter size={20} color="#fff" />
                    Print
                  </Button>
                  </div>

                    
                        <Button
                        onClick={()=>navigate("/")}
                      style={{
                        height: "40px",
                        width: "122px",
                        borderRadius: "6px",
                        backgroundColor: "#3A4175",
                        fontWeight: 600,
                        fontSize: 12,
                        border:'none'
                        
                        
                      }}
                      name="Next"
                    >
                      <AiOutlineCheck size={20} color="#fff" />
                      Done
                    </Button>
                    </div>
                    </div>

                </div>
               
            </div>
            </div>





        
        </div>
      </div>
      </div>
    </div>
  );
}