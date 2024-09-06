import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppSettengProvider from "./Context/AppSettingContext";
import Login from "./Pages/Login";
import Header from "./components/Header";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />

        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "Landing",
    element: (
      <>
        <Header />
        <Landing />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <AppSettengProvider>
        <RouterProvider router={router} />
      </AppSettengProvider>
    </>
  );
}

export default App;
