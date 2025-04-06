import React from "react";

const Register = () => {
    const formHandler = (e) =>{
        e.preventDefault()
        console.log(e.target.email.value)
        console.log(e.target.pass.value)
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
