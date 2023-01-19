import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import Header from './component/Header';

const Home = () => {
  return (
    <>

    <Header />
    <section>
        <h1>Home Page</h1>
    </section>
    <Outlet/>
    
    </>
  )
}

export default Home
