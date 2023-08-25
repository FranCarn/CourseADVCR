import React, { FC, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

interface Props {
  children?: JSX.Element;
}

export const Navigation: FC<Props> = ({ children }) => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route path={path} key={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
