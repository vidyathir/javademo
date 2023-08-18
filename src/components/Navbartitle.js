
import React from "react";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from "../assets/logo 2.png"
import profilepic from "../assets/avater2.jpg";
import {useNavigate} from 'react-router-dom';


import {IoIosAddCircleOutline} from 'react-icons/io'

function Navbartitle() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body navbartop" bg="light">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="" className="logocolorimg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <text className="title">Welcome Back <span className="titlecolor"></span></text>
         
          </Nav>
          <Form className="d-flex titleaddprofile">

          
        <div className="me-2">
          <button className="titlebuttonsize" onClick={()=>navigate("/AddNewCustomer")}>

            <IoIosAddCircleOutline size={24} color={"#ffffff"} />
            <text className="titlebuttontext">Add Company</text>
          </button>
        </div>


<div className="titleprofile">
          <img className="profilepic" src={profilepic} alt="profile" />
          <select className="titleselect titleselectsize">
            <option className="titleselect">Jeyaprakash</option>
            <option className="titleselect">Mahendra varma</option>
          </select>
        </div>
           
          </Form>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Navbartitle;