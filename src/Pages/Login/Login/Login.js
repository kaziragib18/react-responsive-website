import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
      const { signInUsingGoogle } = useAuth();
      return (
            <div>
                  <h3 className="text-primary fw-bold m-3 pt-5 pb-2">Login page</h3>
                  <hr className="w-100 bg-light" />
                  <Form>
                        <Form.Group className="mb-3 text-white" controlId="formGroupEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3 text-white" controlId="formGroupPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <button className="btn btn-primary text-center mb-2" value="submit">Submit</button>
                        <hr className="w-100 bg-light" />
                  </Form>
                  <p className="text-white">You can sign in with:</p>
                  <button onClick={signInUsingGoogle} className="btn btn-dark p-2 mb-5">Google Sign in</button>
            </div>
      );
};

export default Login;