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
tabledata:[],
newarray:{},
usertoken:{
  usertype:"",
  token:"",
}
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
state.newarray =action.payload;
},changeUserToken:(state,action)=>{
  
  state.usertoken=action.payload;
}

  },

});

export const { changeCustomerDetails,changeSampleDetails,changeTypeofAnalysis,changeBatchDetails,changeSubmitData,changeUserToken} = FormSlice.actions;

export default FormSlice.reducer;