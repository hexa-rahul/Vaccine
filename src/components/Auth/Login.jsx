
import "../../assets/admin/css/sb-admin-2.min.css";
import "../../assets/admin/css/style.css";
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // Call authentication logic here
      if (username === 'admin' && password === 'password') {
        onLogin(username);
        localStorage.setItem('user',username)
      } else {
        alert('Invalid credentials');
      }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-9 col-md-6">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                
                                <div className="col-lg-10 m-auto">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Vaccination Administration</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                            <input
                                              type="text"
                                              className="form-control form-control-user"
                                              placeholder="Username"
                                              value={username}
                                              onChange={(e) => setUsername(e.target.value)}
                                            />
                                               
                                            </div>
                                            <div className="form-group">
                                                <input
                                                  type="password"
                                                  className="form-control form-control-user"
                                                  placeholder="Password"
                                                  value={password}
                                                  onChange={(e) => setPassword(e.target.value)}
                                                />    
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
                                            {/* <hr /> */}
                                            {/* <button className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </button> */}
                                            {/* <button className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </button> */}
                                        </form>
                                        {/* <hr />
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="register.html">Create an Account!</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;


