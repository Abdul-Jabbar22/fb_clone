import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
// import SidebarRow from './SidebarRow';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from "./StateProvider";





function App() {
  const [{ user }, dispatch] = useStateValue();
  // const user ="app";
  return (

     
      <div className='app'>
        {!user ?(
        
     <Login/>
        
          ):(
             <>
            <Header/>
            <div className='app_body'>
            <Sidebar/> 
            <Feed/>
            <Widgets/>
            
            </div>
            </>
          
          )}
  </div>
  
    
  );
}

export default App;
