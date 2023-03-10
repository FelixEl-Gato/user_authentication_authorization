import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";

export const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<Login />} />
        </Routes>
      </main>
    </>
  );
};
