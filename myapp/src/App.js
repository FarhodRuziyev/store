import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/product";
// import Category from "./pages/category";
import Message from "./pages/message";
import { useContext } from "react";
import { ModeContext } from "./components/state";
import "./App.scss";

export default function App() {
  const { mode, setMode } = useContext(ModeContext);
  return (
    <div className={mode ? "light" : "dark"}>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/products/category/:id" element={<Products/>} />
            <Route path="/message" element={<Message />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
};