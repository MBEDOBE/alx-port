import React from "react";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Log from "./components/Log";

const App = () => {
  return (
    <>
      <header className="sticky inset-0 z-10">
        {/* <Navbar /> */}
        <NavBar/>
      </header>

      <main >
        <Landing />

        
        <Footer/>
      </main>
    </>
  );
};

export default App;
