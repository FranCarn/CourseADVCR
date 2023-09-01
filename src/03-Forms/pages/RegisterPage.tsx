import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const { email, formData, name, password1, password2, handleChange } = useForm(
    {
      name: "",
      email: "",
      password1: "",
      password2: "",
    }
  );
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
          placeholder="Name"
          required
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password1"
          placeholder="Password"
          required
          value={password1}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Repeat password"
          required
          value={password2}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
