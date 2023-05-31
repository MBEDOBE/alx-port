import React from "react";
import Navbar from "./components/NavBars/NavBar";
import Hero from "./components/Hero";
import Landing from "./pages/Landing";
import NavBar2 from "./components/NavBars/NavBar2";
import Footer from "./components/Footer";
import Glasslogin from "./components/Glasslogin";
import Login from "./components/Login";
import Login2 from "./components/Glasslogin";
import Log from "./components/Log";

const App = () => {
  return (
    <>
      <header className="sticky inset-0 z-10">
        {/* <Navbar /> */}
        <NavBar2/>
      </header>

      <main >
        <Landing />

        
        <Footer/>
      </main>
    </>
  );
};

export default App;
