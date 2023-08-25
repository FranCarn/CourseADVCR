import { LazyPageTwo, LazyPageOne, LazyPageThree } from "../LazyLoad/pages";

interface Route {
  Component: () => JSX.Element;
  name: string;
  path: string;
  to: string;
}

export const routes: Route[] = [
  {
    Component: LazyPageOne,
    name: "Lazy Page One",
    path: "lazyOne",
    to: "/lazyOne",
  },
  {
    Component: LazyPageTwo,
    name: "Lazy Page Two",
    path: "lazyTwo",
    to: "/lazyTwo",
  },
  {
    Component: LazyPageThree,
    name: "Lazy Page Three",
    path: "lazyThree",
    to: "/lazyThree",
  },
];
