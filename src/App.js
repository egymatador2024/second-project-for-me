import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Index from './components/index';

   function App(){ 
     return(
    <div> 
    
     
       <BrowserRouter> 
        <Navbar/>
        <Index/>
      <Routes>
          <Route exact path="/" element={<Index/>} />
          
          <Route  path="/contact" element={<Contact/>} /> 
      
      </Routes>
      
     </BrowserRouter>
    </div>
        
          
        
        
      ) 
    }

export default App;
