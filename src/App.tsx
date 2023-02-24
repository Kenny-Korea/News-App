import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Register from "./pages/Register";

const App = (): JSX.Element => {
  return (
    <>
      <div className="font-main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Main />} />
          <Route path="/detail:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
