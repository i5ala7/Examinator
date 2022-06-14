import React from 'react'
import SideBar from './SideBar'
import '../../css/userPage.css'
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import Profile from './pages/Profile'
import AddUser from './pages/AddUser'
import Teachers from './pages/Teachers'
import Students from './pages/Students';
import PlanExam from './pages/PlanExam'
import Exams from './pages/Exams';



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
    <>
      

      <SideBar />

        <Pages>
          <AnimatePresence exitBeforeEnter>

          <Routes>
            <Route path='' exact  element={<Home/>} />
            <Route path='add-user'   element={<AddUser/>} />
            {/* <Route path='projects'   element={<Projects/>} /> */}
            <Route path='profile'   element={<Profile/>} />
            <Route path='teachers'   element={<Teachers/>} />
            <Route path='students'   element={<Students/>} />
            <Route path='plan-exam'   element={<PlanExam/>} />
            <Route path='planned-exam'   element={<Exams/>} />



  
          </Routes>
  

          </AnimatePresence>

        </Pages>


      
      

      
     
    </>
  )
}

export default Admin