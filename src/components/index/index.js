import React ,{Component} from'react'
import Home from '../Home'
import Footer  from '../Footer'
import SocialMedia from '../SocialMedia'
import About from '../About'
import Work from '../Work'
import Profile from '../profile'
import Portfolio from '../portfolio'
import Contact from '../Contact'
  class Index extends Component{
    render(){
      return(
         <div>
           <Home/>  
          <Work/>  
          <Portfolio/>  
          <Profile/>  
          <About/>  
          <SocialMedia/>  
          <Contact/>
          <Footer/> 
       
      </div>
    )}
      
     
 }

export default Index;