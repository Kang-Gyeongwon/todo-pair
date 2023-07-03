import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/home";
import DetailPage from "./pages/detailPage";
import { GlobalStyle } from "./Globalstyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/1" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
