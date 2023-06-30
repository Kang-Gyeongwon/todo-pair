import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<div>컴포넌트 입력하시면 됩니다!!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
