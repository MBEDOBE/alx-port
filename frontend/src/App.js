import React from "react";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactScreen from "./pages/ContactScreen";
import Register from "./pages/RegisterScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header className="sticky inset-0 z-10">
          <NavBar />
        </header>

        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
