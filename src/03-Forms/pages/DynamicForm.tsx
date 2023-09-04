import { Formik, Form, FormikValues } from "formik";
import formJSON from "../data/customForm.json";
import { MySelect, MyTextInput } from "../components";

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
            {formJSON.map(({ type, name, placeholder, label, options }) => {
              if (type === "text" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error(`Type: ${type} isn't supported`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
