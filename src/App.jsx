import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar></Navbar>
        <Hero></Hero>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar></Navbar>
        <Contact></Contact>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Navbar></Navbar>
        <Hero></Hero>
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
