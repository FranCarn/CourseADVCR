import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
          email: Yup.string()
            .required("Required")
            .email("Invalid email address"),
          terms: Yup.boolean().oneOf([true], "Must accept the conditions"),
          jobType: Yup.string()
            .required("Required")
            .notOneOf(["it-junior"], "Invalid option"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              name="firstName"
              label="First Name"
              placeholder="First Name"
            />
            <MyTextInput
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
            />
            <MyTextInput
              name="email"
              label="Email Address"
              type="email"
              placeholder="example@example.com"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
