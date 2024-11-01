import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout";
import Calculate from "../components/Calculate";
// import Home from "../components/Home";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Layout />}>
        {/* <Route index element={<Home />}></Route> */}
        {/* <Route path="about" element={<h1>About Us</h1>} /> */}
      </Route>
      <Route path="/cal" element={<Calculate/>}>

      </Route>
    </Route>
  )
);

export default router;
