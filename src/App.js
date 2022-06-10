import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin/Admin';
import Student from './components/Student/Student';
import Teacher from './components/Teacher/Teacher';
import LoginAdmin from './components/Admin/LoginAdmin';
import LoginStudent from './components/Student/LoginStudent';
import LoginTeacher from './components/Teacher/LoginTeacher';
import LoginObserver from './components/Observer/LoginObserver';
import Observer from './components/Observer/Observer'



function App() {
  const user = localStorage.getItem("token");
  return (

    <Router>
      <div className="app"> 
      

      <Routes>
        <Route path='/' exact  element={<Home/>} />
        <Route path='/login-admin' element={<LoginAdmin/>}  />
        <Route path='/login-teacher' element={<LoginTeacher/>}  />
        <Route path='/login-student' element={<LoginStudent/>}  />
        <Route path='/login-observer' element={<LoginObserver/>}  />
        <Route path='/about' element={<About/>}/>

        {user && <Route path='/admin-dashboard/*' element={<Admin/>}  /> }
        <Route path="/admin-dashboard/*" element={<Navigate replace to="/login-admin" />} />

        {user && <Route path='/student-dashboard/*' element={<Student/>}  /> }
        <Route path="/student-dashboard/*" element={<Navigate replace to="/login-student" />} />

        {user && <Route path='/teacher-dashboard/*' element={<Teacher/>}  /> }
        <Route path="/teacher-dashboard/*" element={<Navigate replace to="/login-teacher" />} />

        {user && <Route path='/observer-dashboard/*' element={<Observer/>}  /> }
        <Route path="/observer-dashboard/*" element={<Navigate replace to="/login-observer" />} />


        



      </Routes>

       </div>


    </Router>

     
  );
}

export default App;
