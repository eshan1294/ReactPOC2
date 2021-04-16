import React,{useState,useEffect} from 'react'
import {  useHistory } from "react-router-dom";

const BasicLogin=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[allEntry,setAllEntry]=useState([]);
    const history=useHistory();
    // useEffect(() => {
    //    if(localStorage.getItem("user-info")){
    //        history.push("/admin");
    //    }
    // }, [])
    const submitForm=(e)=>{
        e.preventDefault(); 
        const newEntry={email:email,password:password};
        if((email=="Admin")&& (password=="123")){
            alert("Successfull login");
            localStorage.setItem("user-info",email);
            history.push("/admin")
          
        }
        else{
            alert("Login Failed");
        }
        // setAllEntry=([...allEntry,newEntry]);
        console.log(newEntry);
    };
    return (
     <div>
                 <form action="" onSubmit={submitForm}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" placeholder="Enter email" name="email"
                    value={email} id="email" onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" 
                    value={password} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} name="password" id="password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            <div>
                {
                    allEntry.map((curElem)=>{
                        return(
                            <div className="show">
<p>{curElem.email}
<p>{curElem.password}</p></p>

                            </div>
                        )
                    })
                }
            </div>
            </div>
   
    )
}
export default BasicLogin
