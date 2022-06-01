import React from "react";
import "./header-style.css";

export function Header() {
  return (
    <div className="header">
      <div className="flex">
        <button class="header-button">
          <svg
            role="img"
            height="24"
            width="24"
            class="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"
            ></path>
          </svg>
        </button>
        <button class="header-button">
          <svg
            role="img"
            height="24"
            width="24"
            class="Svg-sc-1bi12j5-0 jgfuCe IYDlXmBmmUKHveMzIPCF"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <button className="header-dropdown-menu">
          <img
            className="dropdown-img"
            src="https://i.scdn.co/image/ab6775700000ee855be80f2e3810102a23ee1daf"
            alt=""
          />
          <a href="/profile" className="text-sm">
            YunusEmr
          </a>
          <svg
            className="mr-1"
            role="img"
            height="16"
            width="16"
            class="Svg-sc-1bi12j5-0 jgfuCe eAXFT6yvz37fvS1lmt6k"
            viewBox="0 0 16 16"
          >
            <path fill="#fff" d="M14 6l-6 6-6-6h12z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
