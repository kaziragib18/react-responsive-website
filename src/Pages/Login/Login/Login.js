import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
      const { signInUsingGoogle, signInUsingGithub, signInUsingFacebook } = useAuth();
      return (
            <div>
                  {/* <h2>user</h2> */}
                  <div className="login-box d-flex align-items-center justify-content-center">
                        <div className="login">
                              <div className="login-box">
                                    <h2 className="text-info mt-5 p-3">Please Login</h2>
                                    {/* <p className="text-danger">error</p> */}
                                    <form>
                                          <input
                                                className="input-felid p-5 py-2 m-1"
                                                type="email"
                                                name="email"
                                                placeholder="Enter your Email"
                                          />
                                          <br />
                                          <input
                                                //     onChange={handlePasswordChange}
                                                className="input-felid p-5 py-2 m-3"
                                                type="password"
                                                name="password"
                                                placeholder="Enter your Password"
                                          />
                                          <br />
                                          <input
                                                className="mt-3 mb-5 p-2 rounded-pill w-25 btn btn-primary m-auto"
                                                type="submit"
                                                value="Login"
                                          />
                                    </form>
                              </div>
                              <p className="text-info">You can also Sign in with:</p>
                              <button className="me-2" onClick={signInUsingGoogle}>
                                    Google
                              </button>
                              <button className="me-2" onClick={signInUsingGithub}>
                                    Github
                              </button>

                              <button className="me-2" onClick={signInUsingFacebook}>
                                    Facebook
                              </button>
                              <br />
                              <button className="mt-2">
                                    Reset Password
                              </button>
                        </div>
                  </div>




            </div>
      );
};

export default Login;