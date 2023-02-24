import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <nav>
          <ul className="flex p-2">
            <li className="navItem">홈</li>
            <li className="navItem">정치</li>
            <li className="navItem">경제</li>
            <li className="navItem">사회</li>
            <li className="navItem">문화</li>
            <li className="navItem">국제</li>
            <li className="navItem">IT</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
