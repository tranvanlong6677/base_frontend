/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import Home from "../components/Home";
import DefaultLayout from "../layouts/DefaultLayout";
import { routesObj } from "../utils/routes";


export const userRoutes: any = [
  {
    path: routesObj.home,
    component: Home,
    layout: DefaultLayout,
  },






];

// export const publicRoutes = [
//   {
//     path: routesObj.login,
//     component: Login,
//     layout: Fragment,
//   },
//   {
//     path: routesObj.register,
//     component: Register,
//     layout: Fragment,
//   },
// ];
