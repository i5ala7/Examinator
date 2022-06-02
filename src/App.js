import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (

    <Router>
      <div className="app"> 

      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/login' element={<Login/>}  />
      </Routes>





       </div>


    </Router>


    
       

     
  );
}

export default App;
