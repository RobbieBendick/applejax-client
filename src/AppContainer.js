import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

//import routes
import routeList from "./routes";

//import layout
import Layout from "./components/Layout";

function AppContainer() {
  const dispatch = useDispatch();

  const routes = routeList
    .filter((route) => route.enabled)
    .map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        element={route.component()}
      ></Route>
    ));

  useEffect(() => {
    const loadData = async () => {
      try {
        //await dispatch(loadUser());
      } catch (error) {}
    };
    loadData();
  }, [dispatch]);

  return (
    <Layout>
      <Routes>{[...routes]}</Routes>
    </Layout>
  );
}

export default AppContainer;
