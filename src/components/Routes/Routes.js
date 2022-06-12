import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../../utils/routes/PrivateRoute";
import PublicRoute from "../../utils/routes/PublicRoute";
import Loader from "../Loader/Loader";

const Login = lazy(() => import("../../Page/Login"));
const Registration = lazy(() => import("../../Page/Registration"));
const Start = lazy(() => import("../../Page/Start"));
const Menu = lazy(() => import("../../Page/Menu"));
const Game = lazy(() => import("../../Page/Game"));
const Market = lazy(() => import("../../Page/Market"));
const Achievement = lazy(() => import("../../Page/Achievement"));
const Settings = lazy(() => import("../../Page/Settings"));

const RoutesComponent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <PublicRoute restricted>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <Start />
            </PublicRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          }
        />
        <Route
          path="/game"
          element={
            <PrivateRoute>
              <Game />
            </PrivateRoute>
          }
        />
        <Route
          path="/market"
          element={
            <PrivateRoute>
              <Market />
            </PrivateRoute>
          }
        />
        <Route
          path="/achievement"
          element={
            <PrivateRoute>
              <Achievement />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
