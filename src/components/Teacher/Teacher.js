import React from 'react'
import SideBar from './SideBar'
import '../../css/userPage.css'
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import {Routes,Route} from "react-router-dom";
import AddQuestion from './pages/AddQuestion';
import Profile from '../Teacher/pages/Profile';
import Home from '../Teacher/pages/Home'
import Questions from './pages/Questions';
import HandleComplain from './pages/HandleComplain';
import HandleJustification from './pages/HandleJustification';
import Exams from '../Admin/pages/Exams'




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

function Teacher() {
  return (
    <>
      <SideBar />

        <Pages>
          <AnimatePresence exitBeforeEnter>

          <Routes>
            <Route path='' exact  element={<Home/>} />
            <Route path='add-question'   element={<AddQuestion/>}/>
            
            <Route path='profile'   element={<Profile/>} /> 
            <Route path='question'   element={<Questions/>} /> 
            <Route path='justification'   element={<HandleJustification/>} /> 
            <Route path='complains'   element={<HandleComplain/>} /> 
            <Route path='planned'   element={<Exams/>} /> 




  
          </Routes>
  

          </AnimatePresence>

        </Pages>


      
       

      
     
    </>
  )
}

export default Teacher