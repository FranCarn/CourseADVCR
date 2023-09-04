import { Formik, Form, FormikValues } from "formik";
import formJSON from "../data/customForm.json";
import { MyTextInput } from "../components";

const initialValues: { [x: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;
}

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormikValues) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJSON.map(({ type, name, placeholder, label }) => {
              return (
                <MyTextInput
                  key={name}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  label={label}
                />
              );
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
