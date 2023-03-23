import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login, { action as loginAction } from "./pages/Login";
import Vans, {loader as vansLoader} from "./pages/Vans/Vans";
import VanDetail, {loader as vanDetailLoader} from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans";
import HostVanDetail, {loader as hostVanDetailLoader} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";
import AuthRequired from "./components/AuthRequired";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" action={loginAction} element={<Login />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
        <Route path="vans/:id" loader={vanDetailLoader} element={<VanDetail />} />

        <Route element={<AuthRequired />}>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" loader={hostVansLoader} element={<HostVans />} />
            <Route path="vans/:id" loader={hostVanDetailLoader} element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);