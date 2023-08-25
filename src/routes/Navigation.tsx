import React, { FC } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { LazyPageOne, LazyPageThree, LazyPageTwo } from "../LazyLoad/pages/";

interface Props {
  children?: JSX.Element;
}

export const Navigation: FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/lazyOne"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy One
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazyTwo"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy Two
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazyThree"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Lazy Three
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="lazyOne" element={<LazyPageOne />} />
          <Route path="lazyTwo" element={<LazyPageTwo />} />
          <Route path="lazyThree" element={<LazyPageThree />} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
