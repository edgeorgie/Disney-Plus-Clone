import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Detail } from './components/Detail/Detail'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
