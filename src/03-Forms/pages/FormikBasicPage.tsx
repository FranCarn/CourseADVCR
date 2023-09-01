import React from "react";
import "../styles/styles.css";
export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic</h1>

      <form noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />
        <span>First name is required</span>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />
        <span>Last name is required</span>

        <label htmlFor="email">Email address</label>
        <input type="email" name="email" />
        <span>Email is required</span>
        <span>Invalid Email</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
