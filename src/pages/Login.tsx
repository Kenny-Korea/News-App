import React, { TouchEvent } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent) => {
    // Type Error 때문에 target이 아닌 currentTarget 사용
    navigate("/" + e.currentTarget.id);
  };

  return (
    <>
      <Header />
      <div className="Login">
        {/* container */}
        <div className="bg-gray-100 px-0 pt-0.5 h-screen">
          <section className="bg-white rounded-lg mx-2 mt-4 object-fill">
            <div className="w-full h-24 flex justify-center items-center font-bold text-2xl">
              로그인
            </div>
            <hr />
            <div className="flex flex-col justify-center items-center">
              <ul className="my-10 space-y-5">
                <li className="flex flex-col gap-1">
                  <label htmlFor="id" className="text-xs">
                    아이디
                  </label>
                  <input
                    type="text"
                    id="id"
                    className="bg-slate-100 w-60 h-8 px-3 py-2 text-sm outline-none"
                  />
                </li>
                <li className="flex flex-col gap-1">
                  <label htmlFor="id" className="text-xs">
                    비밀번호
                  </label>
                  <input
                    type="text"
                    id="pw"
                    className="bg-slate-100 w-60 h-8 px-3 py-2 text-sm outline-none"
                  />
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-center gap-5">
                <button className="w-60 bg-teal-800 text-lg text-white font-bold px-4 py-2 border-none rounded-lg bg-gradient-to-br from-teal-600 ">
                  로그인
                </button>
              </div>
              <div className="flex justify-center gap-4 py-5">
                <span
                  className="text-gray-800 text-sm cursor-pointer"
                  id="findId"
                >
                  아이디 찾기
                </span>
                <span
                  className="text-gray-800 text-sm cursor-pointer"
                  id="findPw"
                >
                  비밀번호 찾기
                </span>
                <span
                  className="text-teal-800 text-sm font-bold cursor-pointer"
                  id="register"
                  onClick={handleClick}
                >
                  회원가입
                </span>
              </div>
            </div>
          </section>
          <span className="flex justify-center text-xs text-gray-500 my-5">
            Copyright ⓒ 비트일보 Corp. All rights Reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
