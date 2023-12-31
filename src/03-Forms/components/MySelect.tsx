import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
  children?: any;
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {/* {meta.touched && meta.error && (
        <span className="error-message">{meta.error}</span>
      )} */}
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
