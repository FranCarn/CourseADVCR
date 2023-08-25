import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPageOne, LazyPageThree, LazyPageTwo } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout</h1>
      <ul>
        <li>
          <NavLink to="lazyOne">Lazy 1</NavLink>
          <NavLink to="lazyTwo">Lazy 2</NavLink>
          <NavLink to="lazyThree">Lazy 3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazyOne" element={<LazyPageOne />} />
        <Route path="lazyTwo" element={<LazyPageTwo />} />
        <Route path="lazyThree" element={<LazyPageThree />} />
        {/* <Route path="*" element={<div>Not Found</div>} /> */}
        <Route path="*" element={<Navigate replace to="lazyOne" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
