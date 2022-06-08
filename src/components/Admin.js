import React from 'react'
import SideBar from './SideBar'
import '../css/userPage.css'
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import Team from "./pages/Team";
import Calender from "./pages/Calender";
import Documents from "./pages/Documents";
import Projects from "./pages/Projects";
import Profile from './pages/Profile'

const Pages = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   h1 {
     font-size: calc(2rem + 2vw);
     background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
   }
 `;

function Admin() {
  return (
    <div>
      

      <SideBar />

        <Pages>
          <AnimatePresence exitBeforeEnter>

          <Routes>
            <Route exact path='/'  element={<Home/>} />
            <Route path='/team/'   element={<Team/>} />
            <Route path='/calender'   element={<Calender/>} />
            <Route path='/documents'   element={<Documents/>} />
            <Route path='/projects'   element={<Projects/>} />
            <Route path='/profile'   element={<Profile/>} />

  
          </Routes>
  

          </AnimatePresence>

        </Pages>


      
      

      
     
    </div>
  )
}

export default Admin