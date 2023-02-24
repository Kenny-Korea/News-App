import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const onClickHamburger = () => {
    setModal(true);
  };

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <div className="Header">
        <header>
          <div className="flex justify-between align-middle m-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={onClickHamburger}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <div className="flex gap-2 justify-center items-center">
              <div className="w-6 h-6 rounded-lg bg-cyan-700 shadow-3xl shadow-slate-200 rotate-45 flex justify-center items-center">
                <div className="-rotate-45 font-bold text-white flex justify-center items-center text-lg font-logo">
                  b
                </div>
              </div>
              <span className="text-xl font-bold" onClick={onClickLogo}>
                비트일보
              </span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
