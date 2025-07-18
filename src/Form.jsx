import { useState } from "react"
export default function Form(){
    let [formData,setFormData]=useState({
        fullName:"",
        username:"",
        password:"",
    });
    // let handleNameChange=(event)=>{
    //     setFullName(event.target.value)
    // };
    //  let handleUsername=(event)=>{
    //     setUsername(event.target.value)
    //  };
    let handleInputChange=(event)=>{
        // let fieldName=event.target.name;
        // let newValue=event.target.value;
        
    setFormData((currData)=>{
        return{...currData,[event.target.name]:event.target.value};
        });
    };
   let handleSubmit=(event)=>{
    event.preventDefault();
     console.log(formData);
    setFormData({
        fullName:"",
        username:"",
        password:"",
    });
   };   
    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">FullName</label>
        <input 
        placeholder="enter your full name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullname"
        name="fullName"/>
        <br></br>
        <br></br>
        <label htmlFor="username">UserName</label>
        <input 
        placeholder="enter username"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"/>
        <br></br>
        <br></br>
        <label htmlFor="password">Password</label>
        <input 
        placeholder="enter password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"/>
        <button>Submit</button>
        </form>
    )
}