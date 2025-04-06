import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import auth from "../firebase.init";

const Register = () => {
    const formHandler = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.pass.value;
        console.log(e.target.email.value)
        console.log(e.target.pass.value)

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log('found error!', error)
        })
    }
  return (
    <div>
      
      <div>
        <form onSubmit={formHandler}>
          <fieldset className="fieldset w-3/5 mx-auto bg-base-200 border border-base-300 p-4 rounded-box">
            <legend className="fieldset-legend text-2xl">Register Now!</legend>

            <label className="fieldset-label font-bold">Email</label>
            <input type="email" name="email" className="input w-full" placeholder="Email" />

            <label className="fieldset-label font-bold">Password</label>
            <input type="password" name="pass" className="input w-full" placeholder="Password" />

            <button className="btn btn-neutral mt-4 font-bold">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
