import MotionHoc from "./MotionHoc";
import '../../../css/questions-list.css'
import axios from 'axios'
import {useEffect, useState} from 'react'

const HandleComplainComponent = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    const url = 'http://localhost:5000/api/justify/'
    axios.get(url)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err => console.log(err))

  },[])

  const com = data.map ((data, index) => {
    return (
      
                      
      <tr key={index}>
      <td>{index +1}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.justification}</td>
      
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
            <h2 >Justification</h2>

            </div>
            
                <table className="table">
                    <thead className="thead-dark">

                      
                          
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Justification</th>
                        
                        <th>Action</th>

          
        
                    </thead>

                    <tbody>

                      {com}
                    </tbody>
        
                   
                    
                </table>
                
        
            </form>
        

        </div>

    </main>


    );
  };
  
  const HandleJustification = MotionHoc(HandleComplainComponent);
  
  export default HandleJustification;
  