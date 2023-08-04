import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "core/routes";

import DefaultLayout from "./DefaultLayout";

const RootLayout = () => {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const PageComponent = route.component;

          let Layout: any = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={`${index + route.path}`}
              path={route.path}
              element={
                <Layout>
                  <PageComponent />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};
export default RootLayout;
