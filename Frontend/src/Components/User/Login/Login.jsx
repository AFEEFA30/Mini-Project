import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Login.css';

const initialValues = {
  email: '',
  password: '',
};

const validateForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';


  }

  return errors;
};

const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-details">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error-msg" />
            </div>
            <div className="form-details">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="error-msg" />
            </div>
            <button type="submit" disabled={isSubmitting} className="submit-btn">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;