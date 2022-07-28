import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import CareerHome from "./CareerHome";
import OurValues from "./OurValues";
import ValueDetail from "./ValueDetail";
import AboutHome from "./AboutHome";
import AboutUs from "./AboutUs";
import JoinWaitList from "./JoinWaitList";
export default function Home() {
  let object = useLocation();
  console.log(object);
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Routes>
        <Route path="/career">
          <Route path="home" element={<CareerHome />} />
          <Route path="values" element={<OurValues />} />
          <Route path="values/detail/*" element={<ValueDetail />} />
          <Route path="" element={<Navigate replace to="home" />}></Route>
        </Route>
        <Route path="/aboutUs">
          <Route path="home" element={<AboutHome />} />
          <Route path="main" element={<AboutUs />} />
          <Route path="" element={<Navigate replace to="home" />}></Route>
        </Route>
        <Route path="/joinWaitList">
          <Route path="home" element={<JoinWaitList />} />
          <Route path="" element={<Navigate replace to="home" />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
