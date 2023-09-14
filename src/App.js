import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import Error from "./components/Error";
import NewProducts from "./components/NewProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import Products from "./components/Products";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
          <Route path="/users/admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
