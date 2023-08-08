import { createSlice } from '@reduxjs/toolkit';


const FormSlice = createSlice({
  name: 'form',
  initialState: {
 customer:{
    companyName: '',
    contactPersonName: '',
    licenceNo: '',
    phoneNo: '',
    emailId: '',
    address1: '',
    city: '',
    state: '',
    pincode: '',
    phoneNo1:'',
    address2:'',
    },
sampleDetails:{
  natureofsample: "",
  report: "",
  samplename: "",
  sampleretension: "",
  sampletype: [''],
  storage: "",
  submissiontype: ""    
},
typeofanalysis:{
  analyticalfeasibile:[""],
choosefile:{},
formfilling:"",
methodologyfollowed:"",
methodvalidation:"",
specialinstruction:"",

},
tabledata:[]
  },
  reducers: { 
      changeCustomerDetails: (state,action)=> {
        
          state.customer = action.payload   
        },
        changeSampleDetails: (state,action)=> {
              state.sampleDetails = action.payload   
            },
changeTypeofAnalysis: (state,action)=>{
state.typeofanalysis = action.payload 
},

changeBatchDetails: (state,action)=>{
  console.log(action.payload)
state.tabledata =action.payload;
},


  },

});

export const { changeCustomerDetails,changeSampleDetails,changeTypeofAnalysis,changeBatchDetails} = FormSlice.actions;

export default FormSlice.reducer;