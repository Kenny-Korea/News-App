import React from "react";
import Header from "../components/Header";
import yoon from "../images/yoon.jpg";
import legoland from "../images/legoland.jpeg";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <>
      <div className="Main">
        {/* header */}
        <Header />
        <Navbar />
        {/* main */}
        <main className="bg-gray-100 px-0 pt-0.5 h-screen">
          <section className="bg-white rounded-lg mx-2 mt-4 object-fill">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              <div className="topPick">
                <img
                  src={yoon}
                  alt="yoon"
                  className="overflow-hidden rounded-lg object-cover"
                />
                <span className="text-lg font-bold">
                  윤석열 "우리는 국민의 공복이고 머슴…유능한 정부 중요"
                </span>
              </div>
              <div className="topPick">
                <img
                  src={legoland}
                  alt="legoland"
                  className="overflow-hidden rounded-lg object-cover"
                />
                <span className="text-lg font-bold">
                  '레고랜드發 부실' 돈도, 신뢰도 잃었다
                </span>
              </div>
            </div>
          </section>
          <section>dd</section>
        </main>
      </div>
    </>
  );
};

export default Main;
