import MotionHoc from "./MotionHoc";
import '../../../css/questions-list.css'
import axios from 'axios'
import {useEffect, useState} from 'react'

const QuestionsComponent = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    const url = 'http://localhost:5000/api/questions/'
    axios.get(url)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err => console.log(err))

  },[])

  const ques = data.map ((data, index) => {
    return (
      
                      
      <tr key={index}>
      <td>{index +1}</td>
      <td>{data.id}</td>
      <td>{data.subject}</td>
      <td>{data.question}</td>
      
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
            <h2 >Questions</h2>

            </div>
            
                <table className="table">
                    <thead className="thead-dark">

                      
                          
                        <th>Num</th>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Question</th>
                        
                        <th>Action</th>

          
        
                    </thead>

                    <tbody>

                      {ques}
                    </tbody>
        
                   
                    
                </table>
                
        
            </form>
        

        </div>

    </main>


    );
  };
  
  const Questions = MotionHoc(QuestionsComponent);
  
  export default Questions;
  