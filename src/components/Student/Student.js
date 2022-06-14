import React from 'react'
import SideBar from './SideBar'
import '../../css/userPage.css'
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import {Routes,Route} from "react-router-dom";
import Profile from './pages/Profile';
import Home from './pages/Home'
import JustifyAbsence from './pages/JustifyAbsence'
import Complain from './pages/Complain';
import Exams from '../Admin/pages/Exams';






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

function Student() {
  return (
    <>
      <SideBar />

        <Pages>
          <AnimatePresence exitBeforeEnter>

          <Routes>
            <Route path='' exact  element={<Home/>} />
            
            
            <Route path='profile'   element={<Profile/>} /> 
            <Route path='justify-absence' element={<JustifyAbsence/>} /> 
            <Route path='complain'   element={<Complain/>} /> 
            <Route path='planned-exams'   element={<Exams/>} /> 
            


  
          </Routes>
  

          </AnimatePresence>

        </Pages>


      
       

      
     
    </>
  )
}

export default Student