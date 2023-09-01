import "../styles/styles.css";

export const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <input type="text" name="" id="" placeholder="Name" required />
        <input type="email" name="" id="" placeholder="Email" required />
        <input type="password" name="" id="" placeholder="Password" required />
        <input
          type="password"
          name=""
          id=""
          placeholder="Repeat password"
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
