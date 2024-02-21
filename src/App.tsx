import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioView from "./Presentation/View/PortfolioView";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<PortfolioView />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
