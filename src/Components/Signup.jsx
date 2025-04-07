import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase.init";

const Signup = () => {
  const [err, setErr] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;
    console.log(email);
    console.log(password);
    setErr('')

    if(password.length >6){
      setErr('Password should be 6 character..')
      return;
    }
    // creat new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setErr(error.message);
      });
  };
  return (
    <div>
      <div className="card-body ">
        <h1 className="text-3xl font-bold">Sign Up now!</h1>
        <form onSubmit={submitHandler}>
          <fieldset className="fieldset w-3/5 mx-auto  bg-base-200 p-4">
            <label className="fieldset-label text-2xl font-bold">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="fieldset-label text-2xl font-bold">
              Password
            </label>
            <input
              name="pass"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        {err && <p className=" text-red-600">{err}</p>}
      </div>
    </div>
  );
};

export default Signup;
