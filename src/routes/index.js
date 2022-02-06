import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

const WrapperRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
export default WrapperRoutes;
