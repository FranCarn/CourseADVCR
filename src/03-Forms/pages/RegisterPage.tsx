import { useState, ChangeEvent, FormEvent } from "react";
import "../styles/styles.css";

interface RegisterData {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(registerData);
  };

  const { name, email, password1, password2 } = registerData;
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
