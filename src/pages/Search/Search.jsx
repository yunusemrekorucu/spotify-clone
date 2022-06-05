import React from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import "./search-style.css";

function Search() {
  return (
    <div className="search-box">
      <div>
        <h1 className="my-3 font-bold text-2xl">En çok dinlediğin türler</h1>
        <div className="big-cards">
          <div className="big-card">
            <h2>Hip Hop</h2>
            <img
              src="https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c"
              alt=""
            />
          </div>
          <div className="big-card">
            <h2>Hip Hop</h2>
            <img
              src="https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c"
              alt=""
            />
          </div>
          <div className="big-card">
            <h2>Hip Hop</h2>
            <img
              src="https://i.scdn.co/image/ab67706f000000029bb6af539d072de34548d15c"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="my-5 text-2xl font-bold">Hepsine göz at</h2>
        <div className="category-cards">
          {new Array(30).fill(<CategoryCard />)}
        </div>
      </div>
    </div>
  );
}

export default Search;
