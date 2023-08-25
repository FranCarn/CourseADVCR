import { LazyExoticComponent, lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  path: string;
  to: string;
}

const LazyOne = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ "../LazyLoad/pages/LazyPageOne")
);
const LazyTwo = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../LazyLoad/pages/LazyPageTwo")
);
const LazyThree = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage3" */ "../LazyLoad/pages/LazyPageThree"
    )
);

export const routes: Route[] = [
  {
    Component: LazyOne,
    name: "Lazy Page One",
    path: "lazyOne",
    to: "/lazyOne",
  },
  {
    Component: LazyTwo,
    name: "Lazy Page Two",
    path: "lazyTwo",
    to: "/lazyTwo",
  },
  {
    Component: LazyThree,
    name: "Lazy Page Three",
    path: "lazyThree",
    to: "/lazyThree",
  },
];
