import React, { useRef } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const idRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    // Type Error 때문에 target이 아닌 currentTarget 사용
    navigate("/" + e.currentTarget.id);
  };

  const handleIdCheck = () => {
    console.log(idRef.current);
  };
  return (
    <>
      <Header />
      <div className="mainFrame">
        <section className="section">
          <div className="w-full h-24 flex justify-center items-center font-bold text-2xl">
            회원가입
          </div>
          <hr />
          <div className="flex flex-col justify-center items-center">
            <ul className="my-10 space-y-5">
              <li className="flex flex-col gap-1">
                <label htmlFor="id" className="label">
                  아이디
                </label>
                <div className="flex justify-between">
                  <input
                    type="text"
                    id="id"
                    className="bg-slate-100 w-40 h-8 px-3 py-2 text-sm outline-none"
                    placeholder="아이디를 입력하세요"
                    ref={idRef}
                  />
                  <button
                    className="text-white px-2 py-2 w-16 text-xs rounded-md bg-teal-700"
                    onClick={handleIdCheck}
                  >
                    중복확인
                  </button>
                </div>
                <span className="text-green-600 text-xs ml-2 hidden">
                  사용 가능한 아이디입니다.
                </span>
                <span className="text-red-600 text-xs ml-2 hidden">
                  이미 가입된 아이디입니다.
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <label htmlFor="id" className="label">
                  비밀번호
                </label>
                <input type="text" id="pw" className="input" />
              </li>
              <li className="flex flex-col gap-1 mb-8">
                <label htmlFor="id" className="label">
                  비밀번호 확인
                </label>
                <input type="text" id="pw" className="input" />
              </li>
              <li className="flex flex-col gap-1">
                <label htmlFor="id" className="label">
                  이름
                </label>
                <input type="text" id="pw" className="input" />
              </li>
              <li className="flex flex-col gap-1">
                <label htmlFor="id" className="label">
                  생년월일
                </label>
                <input type="text" id="pw" className="input" />
              </li>
              <li className="flex flex-col gap-1">
                <label htmlFor="id" className="label">
                  성별
                </label>
                <input type="text" id="pw" className="input" />
              </li>
              <li className="flex flex-col gap-1">
                <label htmlFor="id" className="label">
                  휴대전화
                </label>
                <input type="text" id="pw" className="input" />
              </li>
              <li className="flex flex-col gap-1">
                <label htmlFor="id" className="label">
                  이메일
                </label>
                <input type="text" id="pw" className="input" />
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-center gap-5">
              <button className="w-60 bg-teal-800 text-lg text-white font-bold px-4 py-2 border-none rounded-lg bg-gradient-to-br from-teal-600">
                회원가입
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
                id="login"
                onClick={handleClick}
              >
                로그인
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
