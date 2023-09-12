import { createSlice } from '@reduxjs/toolkit';


const FormSlice = createSlice({
  name: 'form',
  initialState: {
 customer:{
    companyName: {},
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
  submissiontype: "", 
  othercheck:''  ,
  msdsattached:''
},
data:{
  analyticalfeasibile:[''],
  choosefile:[''],
  formfilling:'',
  methodologyfollowed:'',
  methodvalidation:'',
  specialinstruction:'',
  test:[''],
},
tabledata:[
  {
    batchNo:"",
    batchSize:"",
    natureOfPacking:'',
    mfgDate:'',
    expDate:'',
    retestDate:'',
    sampleQuantity:'',
    testParameter:[
      {
        testDataCode:"",
        testDataName:""
      }
    ]

  }
],
newArray:[
  {
    sampleId:0,
    batchNo: "",
batchSize: "",
expDate: "",
mfgDate: "",
natureOfPacking: "",
retestDate: "",
rlplNumber:"",
sampleQuantity:"",
testParameter:['']
  }
],
ditresponse:[
  
    {
      sampleId: 0,
      batchId: "",
      tdsNumber:"",
       id: "",
      testDataName: "",
      testDataCode:""
  }
  
],
usertoken:{
  usertype:"",
  token:"",
  userid:""
},
batchId:'',
companyId:'',
TdsId:'',
  },
  reducers: { 
      changeCustomerDetails: (state,action)=> {
        console.log(action.payload)
          state.customer = action.payload   
        },
        changeSampleDetails: (state,action)=> {
          console.log(action.payload)
              state.sampleDetails = action.payload   
            },
changeTypeofAnalysis: (state,action)=>{
  console.log(action.payload)
state.data = action.payload;
},

changeBatchDetails: (state,action)=>{
  console.log(action.payload)
state.tabledata =action.payload;
},
changeSubmitData:(state,action)=>{
  console.log(action.payload)
state.newArray =action.payload;
},changeUserToken:(state,action)=>{
  
  state.usertoken=action.payload;
},
changeBatchId:(state,action)=>{
  state.batchId=action.payload;
},changeSubmitDit:(state,action)=>{
  console.log(action.payload)
state.ditresponse =action.payload;
},
changeCompanyId:(state,action)=>{
  state.companyId=action.payload;
},
changeTDSId:(state,action)=>{
  state.TdsId=action.payload;
},
  },

});

export const { changeCustomerDetails,changeSampleDetails,changeTypeofAnalysis,changeBatchDetails,changeSubmitData,changeUserToken,
changeBatchId,changeSubmitDit,changeCompanyId,changeTDSId} = FormSlice.actions;

export default FormSlice.reducer;