import React from "react";
import './MStyles.css'
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
// import { MdOutlineUploadFile } from "react-icons/md";
import { AiOutlineMail, AiOutlineCheck, AiFillPrinter } from "react-icons/ai";

// import { TbFileLike } from "react-icons/tb";
import { LuFolderCheck } from "react-icons/lu";
// import {BsFileEarmarkCheck} from 'react-icons/bs';

export default function RlplGenerated() {
  const navigate = useNavigate();
  return (
    <div className="">
    

      <div className="">
        <div className="">
          

          <div
            className="tablet"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "50%",
                border: "none",
                marginTop: 50,
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="mt-1 mb-3">
                  <LuFolderCheck size={80} color="#9AC037" />
                </div>
                <div>
                  <text className="topWord">
                    The Samples has been Approved, The RLPL has been generated
                    for below batches
                  </text>
                </div>
              </div>

              <div>
                <div className="mt-4">
                  <h4 className="headd">Sample Details</h4>
                  <Table md={6} borderless>
                    <thead>
                      <tr>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          Name of the Sample
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          Sample Type
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          Nature of Sample
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          Storage Condition
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#3A4175" }}>xxxx xxxx</td>
                        <td style={{ color: "#3A4175" }}>xxxx xxxx</td>
                        <td style={{ color: "#3A4175" }}>xxxx xxxx</td>
                        <td style={{ color: "#3A4175" }}>xxxx xxxx</td>
                      </tr>
                    </thead>
                  </Table>

                  <Table md={6} border={1}>
                    <thead>
                      <tr className="table">
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          S.No
                        </th>
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Registration No
                        </th>
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Batch No./Lot No(s)
                        </th>
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Batch Size
                        </th>
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Batch Quantity
                        </th>
                        <th
                          style={{
                            color: "#d1d1d1",
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          Test Parameter
                        </th>
                      </tr>

                      <tr>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          1
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          RLPLR2317026
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          xxxxxx
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          xxxxxx
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          xxxxxx
                        </td>
                        <td
                          style={{
                            borderLeft: "1px solid #d1d1d1",
                            borderBottom: "none",
                          }}
                        ></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          2
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          RLPLR2317026
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          xxxxxx
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          xxxxxx
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          xxxxxx
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                            justifySelf: "center",
                            outline: "none",
                            border: "none",
                            borderLeft: "1px solid #d1d1d1",
                            textAlign:'center'
                          }}
                        >
                          SOR
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          3
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          RLPLR2317026
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          xxxxxx
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          xxxxxx
                        </td>
                        <td
                          style={{
                            color: "#8F8F8F",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
                        >
                          xxxxxx
                        </td>
                        <td style={{ borderLeft: "1px solid #d1d1d1" }}></td>
                      </tr>
                    </thead>
                  </Table>
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <div>
                      <Button
                        className="Rlplbutton"
                        style={{
                          height: "40px",
                          width: "166px",
                          borderRadius: "6px",
                          backgroundColor: "#3A4175",
                          fontWeight: 600,
                          fontSize: 12,
                          border: "none",
                        }}
                        name="Next"
                      >
                        <AiOutlineMail size={20} color="#fff" />
                        &nbsp; Send an email
                      </Button>
                      <Button
                        className="Rlplbutton"
                        style={{
                          height: "40px",
                          width: "122px",
                          borderRadius: "6px",
                          backgroundColor: "#9AC037",
                          fontWeight: 600,
                          fontSize: 12,
                          marginLeft: 20,
                          border: "none",
                        }}
                        name="Next"
                      >
                        <AiFillPrinter size={20} color="#fff" />
                        &nbsp; Print
                      </Button>
                    </div>

                    <Button
                      className="Rlplbutton"
                      onClick={() => navigate("/")}
                      style={{
                        height: "40px",
                        width: "122px",
                        borderRadius: "6px",
                        backgroundColor: "#3A4175",
                        fontWeight: 600,
                        fontSize: 12,
                        border: "none",
                      }}
                      name="Next"
                    >
                      <AiOutlineCheck size={20} color="#fff" />
                      &nbsp; Done
                    </Button>
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