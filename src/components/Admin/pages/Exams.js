import MotionHoc from "./MotionHoc";
import '../../../css/usersList.css'
import axios from 'axios'
import {useEffect, useState} from 'react'

const ExamsComponent = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    const url = 'http://localhost:5000/api/plan/'
    axios.get(url)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err => console.log(err))

  },[])

  const exm = data.map ((data, index) => {
    return (
      
                      
      <tr key={index}>
      <td>{index +1}</td>
      <td>{data.subject}</td>
      <td>{data.description}</td>
      <td>{data.duration}</td>
      <td>{data.date}</td>
      <td className="buttons">
          <a className="button" href="#/"><i className="fas fa-pencil-alt"></i></a>
          <a className="delete" href="#/" ><i className="fas fa-times"></i></a>
      </td>
      </tr>                     
      
  
      

    )
  })

 

  

    return (
      <main id="site-main">
        <div className="container">
            
            <form action=""> 
            <div className="title">
            <h2 >Planned Exams</h2>

            </div>
            
                <table className="table">
                    <thead className="thead-dark">

                      
                          
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Action</th>

          
        
                    </thead>

                    <tbody>

                      {exm}
                    </tbody>
        
                   
                    
                </table>
                
        
            </form>
        

        </div>

    </main>


    );
  };
  
  const Exams = MotionHoc(ExamsComponent);
  
  export default Exams;
  