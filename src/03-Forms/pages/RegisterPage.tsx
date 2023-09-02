import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    email,
    formData,
    name,
    password1,
    password2,
    handleChange,
    isValidEmail,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required
          value={name}
          onChange={handleChange}
          className={`${!name.trim() && "has-error"}`}
        />
        {!name.trim() && <span>Required Field</span>}
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={email}
          onChange={handleChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Invalid Email</span>}
        <input
          type="password"
          name="password1"
          placeholder="Password*"
          required
          value={password1}
          onChange={handleChange}
          className={`${!password1.trim() && "has-error"}`}
        />
        {!password1.trim() && <span>Required Field</span>}
        {password1.trim().length < 6 && password1.trim() && (
          <span>Password must be more than 6 characters</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repeat password*"
          required
          value={password2}
          onChange={handleChange}
          className={`${!password2.trim() && "has-error"}`}
        />
        {!password2.trim() && <span>Required Field</span>}
        {password2.trim() !== password1.trim() && password2.trim() && (
          <span>Password doesn't match</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
