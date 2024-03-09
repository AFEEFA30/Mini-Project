// import React from 'react';
// import { useFormik  } from 'formik';


import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './signup.css';

const initialValues = {
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
};

const validateForm = (values) => {
  const errors = {};

    
   if (!values.username) {
     errors.username = 'Required';
   }  else if (!/^\d{6}$/i.test(values.username)) {
    errors.username = 'Please enter a valid username.';
   } 

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

    if (!values.phone) {
    errors.phone = 'Required';
   } else if (!/^\d{10}$/i.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number';
   }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.confirmPassword !== values.Password) {
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
};

const Signup = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="signup">
      <h1>SignUp</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
              <div className="form-details">
              <label htmlFor="username">User Name</label>
              <Field type="username" name="username" className="form-control" />
              <ErrorMessage name="username" component="div" className="error-msg" />
            </div>

            <div className="form-details">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error-msg" />
            </div>

            <div className="form-details">
              <label htmlFor="phonenumber">Phone Number</label>
              <Field type="phonenumber" name="phonenumber" className="form-control" />
              <ErrorMessage name="phonenumber" component="div" className="error-msg" />
            </div>

            <div className="form-details">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="error-msg" />
            </div>

            <div className="form-details">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <Field type="confirmpassword" name="confirmpassword" className="form-control" />
              <ErrorMessage name="confirmpassword" component="div" className="error-msg" />
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





// const validate = values => {
//   const errors = {};
  

  
//   if (!values.username) {
//     errors.username = 'Required';
//  // }  else if (!/^\d{6}$/i.test(values.username)) {
//    errors.username = 'Please enter a valid username.';
    
// }
    
  
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9.com_%+-]+@[A-Z0-9.com-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  
//     errors.email = 'Please enter a valid email address.';

//   }

//   if (!values.phone) {
//     errors.phone = 'Require  d';
// } else if (!/^\d{10}$/i.test(values.phone)) {
//     errors.phone = 'Please enter a valid phone number';
//   }

  
//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (values.password.length < 8) {
//     errors.password = 'Password must be at least 8 characters long';
//   }

//   if (!values.confirmPassword) {
//     errors.confirmPassword = 'Required';
//   } else if (values.confirmPassword !== values.password) {
//     errors.confirmPassword = 'Passwords must match';
//   }

//   return errors;
// };

// const Signup = () => {
//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       email: '',
//       phone: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validate,
//     onSubmit: values => {
    
//       console.log(values);
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//         <h1>Signup</h1>
//       <div>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.username}
//         />
//         {formik.touched.username && formik.errors.username ? (
//           <div>{formik.errors.username}</div>
//         ) : null}
          
//       </div>

//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="text"
//           id="email"
//           name="email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//         />
//         {formik.touched.email && formik.errors.email ? (
//           <div>{formik.errors.email}</div>
//         ) : null}
                
//       </div>

//       <div>
//         <label htmlFor="phone">Phone Number</label>
//         <input
//           type="text"
//           id="phone"
//           name="phone"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.phone}
//         />
//         {formik.touched.phone && formik.errors.phone ? (
//           <div>{formik.errors.phone}</div>
//         ) : null}
                 
//       </div>

//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//         />
//         {formik.touched.password && formik.errors.password ? (
//           <div>{formik.errors.password}</div>
//          ) : null}
                
//       </div>

//       <div>
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.confirmPassword}
//         />
//         {formik.touched.confirmPassword && formik.errors.confirmPassword? (
//           <div>{formik.errors.confirmPassword}</div>
//         ) : null }
                
//       </div>

//       <button type="submit">Submit</button>
//         </form>
//   );
   
// };                                                       
export default Signup;