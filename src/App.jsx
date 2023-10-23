import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./pages/Login";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";
import { requireAuth } from "./requireAuth";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        action={loginAction}
        element={<Login />}
        loader={loginLoader}
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        loader={vanDetailLoader}
        element={<VanDetail />}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={({ request }) => requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={({ request }) => requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={({ request }) => requireAuth(request)}
        />
        <Route
          path="vans"
          loader={hostVansLoader}
          element={<HostVans />}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          loader={hostVanDetailLoader}
          element={<HostVanDetail />}
          errorElement={<Error />}
        >
          <Route index element={<HostVanInfo />} />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={({ request }) => requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={({ request }) => requireAuth(request)}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
