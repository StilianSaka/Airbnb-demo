import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import HomeScreen from "./screens/HomeScreen";
import PlaceScreen from "./screens/PlaceScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PlaceListScreen from "./screens/admin/PlaceListScreen";
import PlaceEditScreen from "./screens/admin/PlaceEditScreen";
import UserListScreen from "./screens/admin/UserListScreen";
import UserEditScreen from "./screens/admin/UserEditScreen";
import store from "./store";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/search/:keyword" element={<HomeScreen />} />
      <Route path="/page/:pageNumber" element={<HomeScreen />} />
      <Route
        path="/search/:keyword/page/:pageNumber"
        element={<HomeScreen />}
      />
      <Route path="/place/:id" element={<PlaceScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
      {/* Admin users */}
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/placelist" element={<PlaceListScreen />} />
        <Route
          path="/admin/placelist/:pageNumber"
          element={<PlaceListScreen />}
        />
        <Route path="/admin/userlist" element={<UserListScreen />} />
        <Route path="/admin/place/:id/edit" element={<PlaceEditScreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();