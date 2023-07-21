
import React,{useState} from 'react';
import {ListItem }  from './ListItem';
import './BatchDetails.css';

import { Card,Col,Row,Form,Table } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';

import {BiRightArrowAlt} from 'react-icons/bi'
import {BiLeftArrowAlt} from 'react-icons/bi'

function ItemList({onButtonClick}) {
  

const navigate = useNavigate();

  return (
<div>
  <ListItem />
  <div className='cardbuttonboubleend'>
  <button className="cardbuttonoutline"
       onClick={() => onButtonClick("SampleDetails")}
        >
         <BiLeftArrowAlt size={24} /> Previous
      </button>
      <button className="cardbutton" type='submit'
       onClick={() => onButtonClick("TypeOfAnalysis")}
        >
        Next <BiRightArrowAlt size={24} /> 
      </button>
  </div>
  </div>

  
  );

}


export default ItemList;