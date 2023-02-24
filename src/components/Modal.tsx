import React, { useRef } from "react";
import HeaderProp from "../components/Header";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ setModal }: ModalProps) => {
  const modalRef = useRef<any>();
  const navigate = useNavigate();
  const onClickExit = () => {
    setModal(false);
    console.log(modalRef.current.classList);
  };
  const onClickSidebarItem = (e: React.MouseEvent) => {
    navigate("/" + e.currentTarget.id);
  };
  return (
    <>
      <div
        className="Modal w-1/2 h-screen bg-slate-900 opacity-80 flex flex-col absolute top-0 md:w-1/3 lg:w-1/4 z-50"
        ref={modalRef}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="m-3 mb-4 w-6 h-6 text-white cursor-pointer"
          onClick={onClickExit}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <ul className="w-full">
          <li className="sidebarItem" id="login" onClick={onClickSidebarItem}>
            로그인
          </li>
          <li
            className="sidebarItem"
            id="favoriteReporter"
            onClick={onClickSidebarItem}
          >
            자주 찾는 기자
          </li>
          <li className="sidebarItem" id="mypage" onClick={onClickSidebarItem}>
            마이페이지
          </li>
          <li
            className="sidebarItem"
            id="settings"
            onClick={onClickSidebarItem}
          >
            설정
          </li>
        </ul>
      </div>
    </>
  );
};

export default Modal;
