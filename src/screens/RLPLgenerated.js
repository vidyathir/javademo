import React from "react";
import './MStyles.css';

import Sidenavbar from "../components/Sidenavbar";
import Titlebar from "../components/Titlebar";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
// import { MdOutlineUploadFile } from "react-icons/md";
import { AiOutlineMail, AiOutlineCheck, AiFillPrinter } from "react-icons/ai";
import './MStyles.css';
// import { TbFileLike } from "react-icons/tb";
import {LuFolderCheck} from 'react-icons/lu'
// import {BsFileEarmarkCheck} from 'react-icons/bs';

export default function RLPLgenerated() {
    const navigate = useNavigate();
  return (
    <div className="app">
      <Sidenavbar />

      <div className="main">
        <div className="mainitem">
          <Titlebar />
          <div className="progressbar"></div>
            <div style={{justifyContent:'center',display:'flex'}} >
            <div style={{display:'flex',alignContent:'center',justifyContent:'center',flexDirection:'column',width:'50%',border:'none',marginTop:50}}>

                <div style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
                <div className="mt-1 mb-3"><LuFolderCheck size={80} color="#9AC037" /></div>
                <div><text className="topWord">The Samples has been Approved, The RLPL has been generated for below batches</text></div>
                </div>
              

                <div>

                    <div className="mt-4">
                        <h4 className="headd">Sample Details</h4>
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
                        <Table responsive border={1}>
                            <thead>
                                <tr className="table" >
                                    <th style={{color:'#d1d1d1',fontSize:12,fontWeight:600}} >S.No</th>
                                    <th style={{color:'#d1d1d1',fontSize:12,fontWeight:600}}>Registration No</th>
                                    <th style={{color:'#d1d1d1',fontSize:12,fontWeight:600}}>Batch No./Lot No(s)</th>
                                    <th style={{color:'#d1d1d1',fontSize:12,fontWeight:600}}>Batch Size</th>
                                    <th style={{color:'#d1d1d1',fontSize:12,fontWeight:600}}>Batch Quantity</th>
                                    <th  style={{color:'#d1d1d1',fontSize:12,fontWeight:600,}}>Test Parameter</th>

                                    </tr>
                                    
                                    <tr>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}} >1</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>RLPLR2317026</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{borderLeft:'1px solid #d1d1d1',borderBottom:'none'}}></td>

                                    </tr>
                                    <tr>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>2</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>RLPLR2317026</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td   style={{color:'#8F8F8F',fontSize:12,fontWeight:500,justifySelf:'center',outline:'none',border:'none',borderLeft:'1px solid #d1d1d1'}}>SOR</td>

                                    </tr>
                                    <tr>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>3</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>RLPLR2317026</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500}}>xxxxxx</td>
                                        <td style={{color:'#8F8F8F',fontSize:12,fontWeight:500,}}>xxxxxx</td>
                                        <td style={{borderLeft:'1px solid #d1d1d1'}}></td>
                                    </tr>
                                    </thead>
                        </Table>
                        <div style={{justifyContent:'space-between',display:'flex'}}>

                            <div >
                        <Button className="Rlplbutton"
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
                  <Button className="Rlplbutton"
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

                    
                        <Button className="Rlplbutton"
                        // onClick={()=>navigate('RlplNotGenerated')}
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





          {/* <div style={{ justifyContent: "center", display: "flex", flex: 1 }}>
            <div
              className="d-flex mt-5"
              style={{
                height: 645,
                width: "76%",
                border: "none",
                justifyContent:'center',
                alignItems:'center',
                display:'flex'
                
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  flex:1,
                  justifyContent: "center",
                  
                }}
              >
                <TbFileLike
                  size={80}
                  color="#9AC037"
                  style={{
                    alignItems: "center",
                    display: "block",
                    marginLeft: "40%",
                  }}
                />

                <text
                  style={{
                    alignItems: "center",
                    display: "flex",
                    color: "#8F8F8F",
                    marginLeft: "15%",
                  }}
                >
                  The Samples has been Approved, The RLPL has been generated for
                  below batches
                </text>
                <div className="mt-3 mb-3" style={{ width: "80%" }}>
                  <label
                    className="mb-3"
                    style={{ fontSize: 18, fontWeight: 600, color: "#3A4175" }}
                  >
                    Sample Details
                  </label>
                  <Table>
                    <tr
                      style={{
                        color: "#8F8F8F",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      <td>Name of the Sample</td>
                      <td>Sample Type</td>
                      <td>Nature of Sample</td>
                      <td>Storage Condition</td>
                    </tr>
                    <tr
                      style={{
                        color: "#3A4175",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      <td>XXXX XXXXXX</td>
                      <td>XXXX XXXXXX</td>
                      <td>XXXX XXXXXX</td>
                      <td>XXXX XXXXXX</td>
                    </tr>
                  </Table>

                  <Table
                    className="mt-5 mb-5"
                    style={{ fontSize: 12, width: "80%" }}
                  >
                    <tr
                      style={{
                        backgroundColor: "#3A4175",
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: 600,
                        height: 40,
                        padding: 10,
                      }}
                    >
                      <th>S.No</th>
                      <th>Registration No</th>
                      <th>Batch No./Lot No(s)</th>
                      <th>Batch Size</th>
                      <th>Batch Quantity</th>
                    </tr>

                    <tbody>
                      <tr>
                        <td style={{ color: "#8F8F8F" }}>1</td>
                        <td style={{ color: "#8F8F8F" }}>RLPLR2317026</td>
                        <td style={{ color: "#8F8F8F" }}>XXXXX</td>
                        <td style={{ color: "#8F8F8F" }}>XXXXX</td>
                        <td style={{ color: "#8F8F8F" }}>XXXXX</td>
                      </tr>
                      <tr>
                        <td style={{ color: "#8F8F8F" }}>2</td>
                        <td style={{ color: "#8F8F8F" }}>RLPLR2317026</td>
                        <td style={{ color: "#8F8F8F" }}>XXXXX</td>
                        <td style={{ color: "#8F8F8F" }}>XXXXX</td>
                        <td style={{ color: "#8F8F8F" }}>XXXXX</td>
                      </tr>

                      <tr>
                        <td style={{ color: "#8F8F8F" }}>3</td>
                        <td style={{ color: "#8F8F8F" }}>RLPLR2317026</td>
                        <td style={{ color: "#8F8F8F" }}>XXXXX</td>
                        <td style={{ color: "#8F8F8F" }}>XXXXX</td>
                        <td style={{ color: "#8F8F8F" }}> XXXXX</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button
                    style={{
                      height: "40px",
                      width: "166px",
                      borderRadius: "6px",
                      backgroundColor: "#3A4175",
                      fontWeight: 600,
                      fontSize: 12,
                    }}
                    name="Next"
                  >
                    <AiOutlineMail size={24} color="#fff" />
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
                    }}
                    name="Next"
                  >
                    <AiFillPrinter size={24} color="#fff" />
                    Print
                  </Button>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      margin: 10,
                      marginTop: 50,
                    }}
                  >
                    <Button
                      style={{
                        height: "40px",
                        width: "122px",
                        borderRadius: "6px",
                        backgroundColor: "#3A4175",
                        fontWeight: 600,
                        fontSize: 12,
                      }}
                      name="Next"
                    >
                      <AiOutlineCheck size={24} color="#fff" />
                      Done
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}