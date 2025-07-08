import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username Required';
   } 
   return errors;
 };
export default function CommentsForm({addNewComment}){
    // let [formData,setformData]=useState({
    //     username:"",
    //     remarks:"",
    //     rating:5
    // });
    const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: 5,
     },
     validate,
     onSubmit: (values) => {
       alert(JSON.stringify(values, null, 2));
     },
   });
// let handleInputChange=(event)=>{
// setformData((currData)=>{
//     return {...currData,[event.target.name]:event.target.value};
// })
// }
// let handleSubmit=(event)=>{
//     addNewComment(formData);
//     event.preventDefault();
//     //Help to refresh the page
//     setformData({
//        username:"",
//        remarks:"",
//        rating:5
// })
// }
    return(
        <div><h4>Give a Comment</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
            <input
                placeholder="username" 
                onChange={formik.handleChange}
                value={formik.values.username}
                id="username"
                type="text" 
                name="username"/>
                <br></br> <br></br>
                <label htmlFor="remarks">Remarks</label>
            <textarea 
                placeholder="Add remarks" 
                onChange={formik.handleChange}
                value={formik.values.remarks}
                id="remarks"
                name="remarks">
                Remakes
            </textarea>
                <br></br> <br></br>
                
       {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
                <label htmlFor="rating">Rating</label>
            <input 
                placeholder="rating"
                onChange={formik.handleChange}
                value={formik.values.rating} 
                type="number"
                min={1} max={5}
               
                id="rating" 
                name="rating"
            />
           <br></br> <br></br> 
            <button type="submit">Add</button>
          </form>
        </div>
    )
}