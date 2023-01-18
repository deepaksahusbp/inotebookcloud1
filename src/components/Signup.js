import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword:""});
    let history = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify({name, email, password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            //Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history("/");
            props.showAlert("Account Created Successfully", "success");
          }else{
            props.showAlert("Invalid Credentials", "danger");
          }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
  return (
    <div className="container stickyFooterSignup">
        <h2>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="name"><strong>Name</strong></label>
          <input
            type="text"
            className="form-control  my-2"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1"><strong>Email address</strong></label>
          <input
            type="email"
            className="form-control  my-2"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
            placeholder="Enter email"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="password"><strong>Password</strong></label>
          <input
            type="password"
            className="form-control  my-2"
            id="password"
            name="password"
            onChange={onChange}
            minLength={5}
            required
            placeholder="Password"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="cpassword"><strong>Confirm Password</strong></label>
          <input
            type="password"
            className="form-control  my-2"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            minLength={5}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
