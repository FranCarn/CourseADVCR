import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be more than 2 characters")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .required("Required")
            .email("Invalid email address"),
          password1: Yup.string()
            .required("Required")
            .min(6, "Must be more than 2 characters"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Password doesn't match")
            .required("Required")
            .min(6, "Must be more than 2 characters"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput name="name" label="Name" placeholder="Name" />

            <MyTextInput
              name="email"
              label="Email Address"
              type="email"
              placeholder="example@example.com"
            />
            <MyTextInput
              name="password1"
              label="Password"
              type="password"
              placeholder="**********"
            />
            <MyTextInput
              name="password2"
              label="Repeat Password"
              type="password"
              placeholder="**********"
            />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
