// import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import "./App.css";
// import Footer from "./Components/Footer/Footer";
// import Register from "./Pages/Auth/Register";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  // Router,
  // Routes,
  // BrowserRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Pages/Auth/Register";
import Account from "./Pages/Account/Account";
import Layout from "./Layouts/RootLayout";
import Login from "./Pages/Auth/Login";
import Reset from "./Pages/Auth/Reset";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

// import Layout from "./Layouts/RootLayout";

function App() {

  
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  const itemLists = useSelector((state) => state.cart.itemsList);
  const [items, setItems] = useState([cartItems]);


  let total = 0;
  itemLists.forEach((item) => {
    total += item.totalPrice;
  });
  console.log(total);
  useEffect(() => {
    // Save cart data to local storage whenever the 'items' state changes
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(savedCart);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="reset" element={<Reset />} />
        <Route path="account" element={<Account />} />
      </Route>
    )
  );
  return (
    <>
      <ToastContainer />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
