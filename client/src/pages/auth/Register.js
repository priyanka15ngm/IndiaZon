import React from "react";

const Register = () => {
  const registerForm = () => <p>form</p>;
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-3">
          <h3>Register</h3>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
