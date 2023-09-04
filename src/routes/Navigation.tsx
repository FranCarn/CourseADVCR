import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";
import {
  FormikAbstractation,
  FormikBasicPage,
  FormikComponents,
  RegisterFormikPage,
  FormikYupPage,
  RegisterPage,
} from "../03-Forms/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikBasic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikYup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikComponents"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikAbstraction"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstractation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registerFormikPage"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Register
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="formikBasic" element={<FormikBasicPage />} />
          <Route path="formikYup" element={<FormikYupPage />} />
          <Route path="formikComponents" element={<FormikComponents />} />
          <Route path="formikAbstraction" element={<FormikAbstractation />} />
          <Route path="registerFormikPage" element={<RegisterFormikPage />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
