import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
import styled from 'styled-components'

     

  const Navbar=()=>{
      return(
        <div className='navbar'>
             
        <div class="content">
          <h2 id="class1">Ebrahim Gad</h2>
            <h2 id ="class2" >Ebrahim Gad</h2> 
            </div>
            <ul className="ul-list">
                <li className="list-item"><Link to="/">Home</Link></li>
                <li className="list-item"><a href="#">Work</a></li>
                <li className="list-item"><a href="#">Portfolio</a></li>
                <li className="list-item"><a href="#">Resume</a></li>
                <li className="list-item"><a href="#">About</a></li>
                <li className="list-item"><Link to="./contact">Contact</Link></li>
            </ul>
            
        
     </div>     
      
          
        
      )
    }
   
  


export default Navbar;