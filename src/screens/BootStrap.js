import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const BootStrap = () => {
const initialValues = {
   city: '',
   religion: '',
   occupation: []
}
const validationSchema = Yup.object({
     
      city: Yup.string().required('Required'),
      religion: Yup.string().required('Required'),
      occupation: Yup.array().required('Required')
})
const onSubmit = values => console.log('Form data', values)
return (
<Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
>
 {formik => {
<Form>
<Field component='select' name='city' placeholder='select    options'>
  <option value="Los Angeles">Los Angeles</option>
  <option value="Philadelphia">Philadelphia</option>
  <option value="Chicago">Chicago</option>
  <option value="Washington DC">Washington DC</option>
  <option value="New York">New York</option>
  <option value="San Diego">San Diego</option>
  <option value="Fort Worth">Fort Worth</option>
  <option value="Houston">Houston</option>
</Field>
<ErrorMessage name="city" />
<Field type='radio' name="religion" value="christianity" />
<Field type='radio' name="religion" value="muslim" />
<Field type='radio' name="religion" value="jew" />
<Field type='radio' name="religion" value="hindu" />
<ErrorMessage name="religion" />
<Field type="checkbox" value="lawyer" name="occupation" />
<Field type="checkbox" value="teacher" name="occupation" />
<Field type="checkbox" value="footballer" name="occupation" />
<Field type="checkbox" value="preacher" name="occupation" />
<Field type="checkbox" value="doctor" name="occupation" />
<Field type="checkbox" value="economist" name="occupation" />
<Field type="checkbox" value="businessman" name="occupation" /><ErrorMessage name="occupation" />
<button
  type="submit"
>
</button>
</Form>
}}
</Formik>)
}
export default BootStrap;