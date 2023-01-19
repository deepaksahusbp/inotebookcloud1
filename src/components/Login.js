import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "",password: ""});
    
    let history = useNavigate()
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("https://deepaksahusbp.github.io/inotebookcloud1/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            //Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged In Successfully", "success");
            history("/");        
          }else{
            props.showAlert("Invalid Detials", "danger");
          }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

  return (
    <div className="container stickyFooterLogin">
      <h2>Login to Continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="email"><strong>Email address</strong></label>
          <input
            type="email"
            name="email"
            className="form-control my-2"
            value={credentials.email}
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1"><strong>Password</strong></label>
          <input
            type="password"
            className="form-control my-2"
            value={credentials.password}
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default Login;
