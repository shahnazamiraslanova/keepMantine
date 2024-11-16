import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../containers/footer';
import Header from '../containers/header';

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
        <Header/>
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
