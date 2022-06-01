import React from "react";
import "./sidebar-style.css";
import Logo from "../../img/logo.svg";
import Home from "../../img/home.svg";
import Search from "../../img/libraries.svg";
import Libraries from "../../img/search.svg";
// import Hearth from "../../img/hearth.svg";

function Sidebar() {
  return (
    <div className="side-bar bg-black h-screen pl-6 pt-6">
      <div className="flex items-center">
        <img className="mb-[24px]" src={Logo} width={131} alt="" />
      </div>
      <ul className="font-bold text-sm text-stone-400">
        <li className="flex items-center h-10 hover:text-white">
          <img className="mr-4 hover:text-[#fff]" src={Home} alt="home" />
          Ana Sayfa
        </li>
        <li className="flex items-center h-10 hover:text-white">
          <img className="mr-4" src={Libraries} alt="search" />
          Ara
        </li>
        <li className="flex items-center h-10 hover:text-white">
          <img className="mr-4" src={Search} alt="libraries" />
          Kitaplığın
        </li>
      </ul>
      <div className="w-full mt-6">
        <ul className="font-bold text-[0.812rem] text-stone-300">
          <li className="flex items-center h-10">
            <span className=" bg-[#b3b3b3] w-6 h-6 mr-4 font-light text-lg flex items-center justify-center text-black">
              +
            </span>{" "}
            Çalma Listesi Oluştur
          </li>
          <li className="flex items-center h-10">
            <span className="bg-gradient-to-r from-purple-400 to-blue-300 w-6 h-6 mr-4"></span>
            Beğenilen Şarkılar
          </li>
        </ul>
        <hr className="mt-3 w-52 border-gray-800" />
        <div className="min-h-[530px] max-h-[530px] overflow-auto list-none">
          {new Array(12).fill(
            <li className="py-1 text-sm list-item">14. Çalma listem</li>
          )}
        </div>
        <div className="download">
          <svg
            role="img"
            height="24"
            width="24"
            viewBox="0 0 24 24"
            class="Svg-sc-1bi12j5-0 jgfuCe download-icon"
          >
            <path
              fill="#929292"
              d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
            ></path>
            <path
              fill="#929292"
              d="M12 6.05a1 1 0 011 1v7.486l1.793-1.793a1 1 0 111.414 1.414L12 18.364l-4.207-4.207a1 1 0 111.414-1.414L11 14.536V7.05a1 1 0 011-1z"
            ></path>
          </svg>
          Uygulamayı Yükle
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
