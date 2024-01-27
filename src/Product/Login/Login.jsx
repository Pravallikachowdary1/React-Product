// EcommerceLogin.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import * as Yup from 'yup';

import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";

const EcommerceLogin = () => {
  const loction = useLocation();
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must be 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)'
      )
      .required('Password is required'),
    }),
    onSubmit: (values) => {
      loginApicall(values);
    },
  });

  const navigate = useNavigate();

  // Login API Details
  const loginApiUrl = "https://apiv2stg.promilo.com/user/oauth/token";

  // Function to hash the password using SHA-256
  const hashPassword = (password) => {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  };

  const loginApicall = (values) => {
    // Hash the password before including it in the payload
    const hashedPassword = hashPassword(values.password);

    const loginPayload = new FormData();
    loginPayload.append("username", values.name);
    loginPayload.append("password", hashedPassword);
    loginPayload.append("grant_type", "password");
    const authHeader = {
      headers: {
        Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
      },
    };

    axios
      .post(loginApiUrl, loginPayload, authHeader)
      .then((res) => {
        const msg = res.data.data;
        navigate("/products");
      })
      .catch((res) => {
        window.alert(res?.response.data.status.message)
      });
  };

  return (
    <div>
      {loction.pathname=='/' &&(
      <Container className="my-5">
        <Row className="">
          <Col md={6}>
            <Card className="shadow-lg">
              <Card.Img
                variant="top"
                src={`https://t3.ftcdn.net/jpg/03/60/19/70/240_F_360197061_gi83nQH8Fs2GtIAXDWT3HmswfIARlvxI.jpg`}
                alt="Login"
                className="card-img-top"
              />
              <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="name"
                      id="name"
                      name="names"
                      className="form-control"
                      {...formik.getFieldProps("name")}
                    />
                    <div className="text-danger">{formik.touched.name && formik.errors.name && formik.errors.name}</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      {...formik.getFieldProps("password")}
                      name="password"
                      className="form-control"
                    />
                    <div className="text-danger">{formik.touched.password && formik.errors.password && formik.errors.password}</div>

                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    onClick={formik.handleSubmit}
                    className="w-100"
                  >
                    Log in
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      )}
    </div>
  );
};

export default EcommerceLogin;
