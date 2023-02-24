import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

const Detail = () => {
  const [newsContent, setNewsContent] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/NewsArticles"
      )
      .then((res) => setNewsContent(res.data));
  }, []);

  return (
    <>
      <div className="Detail">
        {/* header */}
        <Header />
        {/* main */}
        <main className="bg-gray-100 px-0 pt-0.5 h-screen">
          <div className="bg-white rounded-lg mx-2 mt-4 object-fill">
            <p className="text-sm text-orange-400 font-bold px-3 pt-3">경제</p>
            <p className="text-xl font-bold p-3">
              50조 대책에도 채권시장 살얼음판... 초우량 가스 채권도 안팔려
            </p>
            <div className="flex items-center">
              <span className="text-sm px-3">김광민 기자</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div className="p-3 text-xs text-gray-400">
              <span className="date">입력 2022/10/24 17:50</span>
              <span className="date">|</span>
              <span className="date">수정 2022/10/25 00:06</span>
            </div>
            {/* 댓글 및 글자크기조절 */}
            <div>
              <div className="flex justify-center items-center border mx-3 my-2 w-12 h-6 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
                <span className="text-xs ml-1">8</span>
              </div>
            </div>
            <hr className="m-2" />
            <div className="p-3 text-sm">
              <span>
                국채 3년물 금리 19pb 하락 회사채도 폭등세 꺾였지만 신용
                스프레드는 되레 벌어져
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Detail;
