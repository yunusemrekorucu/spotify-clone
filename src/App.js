import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainMenu } from "./pages/MainMenu/MainMenu";

function App() {
  return (
    <div className="w-screen">
      <div className="flex">
        <Sidebar />
        <div className="column w-[85%]">
          <Header />
          <MainMenu />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
