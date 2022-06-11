import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainMenu } from "./pages/MainMenu/MainMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import Librarie from "./pages/Librarie/Librarie";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen">
        <div className="flex">
          <Sidebar />
          <div className="content column w-[85%]">
            <Header />
            {/* <MainMenu /> */}
            <Routes>
              <Route path="/" element={<MainMenu />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/libraries" element={<Librarie />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
