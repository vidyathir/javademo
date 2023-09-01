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
  submissiontype: ""    
},
data:{
  analyticalfeasibile:[''],
  choosefile:[''],
  formfilling:'',
  methodologyfollowed:'',
  methodvalidation:'',
  specialinstruction:'',
  test:['']
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
usertoken:{
  usertype:"",
  token:"",
},
batchId:'',
  },
  reducers: { 
      changeCustomerDetails: (state,action)=> {
        console.log(action.payload)
          state.customer = action.payload   
        },
        changeSampleDetails: (state,action)=> {
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
}

  },

});

export const { changeCustomerDetails,changeSampleDetails,changeTypeofAnalysis,changeBatchDetails,changeSubmitData,changeUserToken,
changeBatchId} = FormSlice.actions;

export default FormSlice.reducer;