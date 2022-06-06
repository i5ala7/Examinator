import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';


function App() {
  const user = localStorage.getItem("token");
  return (

    <Router>
      <div className="app"> 

      <Routes>
        <Route path='/' exact  element={<Home/>} />
        <Route path='/login' element={<Login/>}  />
        <Route path='/about' element={<About/>}  />
        {user && <Route path='/admin-dashboard' element={<Admin/>}  /> }
        <Route path="/admin-dashboard" element={<Navigate replace to="/login" />} />

      </Routes>

       </div>


    </Router>

     
  );
}

export default App;
