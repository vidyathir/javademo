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
test:[""],
testparameters:[""]
},
batchdetails:[]
  },
  reducers: { 
      changeCustomerDetails: (state,action)=> {
        console.log(action.payload)
        const customer ={
        companyName:action.payload.companyName,
        contactPersonName:action.payload.contactPersonName,
        licenceNo:action.payload.licenceNo,
        phoneNo:action.payload.phoneNo,
        emailId:action.payload.emailId,
        address1:action.payload.address1,
        city:action.payload.city,
        state:action.payload.state,
        pincode:action.payload.pincode,
        phoneNo1:action.payload.phoneNo1,
        address2:action.payload.address2
  }
          state.customer = action.payload   
        },
        changeSampleDetails: (state,action)=> {

          const sampleDetails ={
            natureofsample:action.payload.natureofsample,
            report:action.payload.report,
            samplename:action.payload.samplename,
            sampletype:action.payload.sampletype,
            sampleretension:action.payload.sampleretension,
            storage:action.payload.storage,
            submissiontype:action.payload.submissiontype,
      }
              state.sampleDetails = action.payload   
            },
changeTypeofAnalysis: (state,action)=>{
  const typeofanalysis ={
    analyticalfeasibile:action.payload.analyticalfeasibile,
choosefile:action.payload.choosefile,
formfilling:action.payload.formfilling,
methodologyfollowed:action.payload.methodologyfollowed,
methodvalidation:action.payload.methodvalidation,
specialinstruction:action.payload.specialinstruction,
test: action.payload.test,
testparameters: action.payload.testparameters
  }
state.typeofanalysis = action.payload 
},

changeBatchDetails: (state,action)=>{

state.push(action.payload) ;
},


  },

});

export const { changeCustomerDetails,changeSampleDetails,changeTypeofAnalysis,changeBatchDetails} = FormSlice.actions;

export default FormSlice.reducer;