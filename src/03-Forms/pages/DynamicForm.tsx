import { Formik, Form, FormikValues } from "formik";
import formJSON from "../data/customForm.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Required field");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Must be more than ${(rule as any).value || 2} characters`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Invalid Email");
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormikValues) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
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
