import "./sidebar-style.css";
import Logo from "../../img/logo.svg";
import { GoSearch } from "react-icons/go";
import { VscLibrary, VscHome } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  let activeStyle = {
    display: "flex",
    color: "white",
    alignİtems: "center"
  };

  return (
    <div className="side-bar bg-black h-screen pl-6 pt-6">
      <div className="flex items-center">
        <a href="/">
          <img className="mb-[24px]" src={Logo} width={131} alt="" />
        </a>
      </div>
      <ul className="font-bold text-sm text-stone-400">
        <NavLink
          className="nav-link"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <VscHome className="home-icon icon mr-4" />
          Ana Sayfa
        </NavLink>

        <NavLink
          to="/search"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="nav-link"
        >
          <GoSearch className="icon mr-4" />
          Ara
        </NavLink>

        <NavLink
          to="/libraries"
          className="nav-link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <VscLibrary className="icon mr-4" jsx={{ color: "white" }} />
          Kitaplığın
        </NavLink>
      </ul>
      <div className="w-full mt-6">
        <ul className="font-bold text-[0.812rem] text-stone-300">
          <li className="flex items-center h-10">
            <span className=" bg-[#b3b3b3] w-6 h-6 mr-4 font-light text-lg flex items-center justify-center text-black">
              +
            </span>
            Çalma Listesi Oluştur
          </li>
          <li className="flex items-center h-10">
            <span className="flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-300 w-6 h-6 mr-4 text-lg">
              <FaHeart />
            </span>
            Beğenilen Şarkılar
          </li>
        </ul>
        <hr className="mt-3 w-52 border-gray-800" />
        <div className="min-h-[530px] max-h-[530px] overflow-auto list-none">
          {new Array(7).fill(
            <li className="py-1 text-sm list-item">12. Çalma listem</li>
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
