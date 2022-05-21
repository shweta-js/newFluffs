import React from 'react'
// import { Routes,Route, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './container/Login';
import Home from './container/Home';
import Explore from './container/Explore';
import Stories from './container/Stories';
import Upload from './container/Upload';
import Profile from './container/Profile';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import Settings from "./container/Settings";
const App=()=>{
    return(
      <div>
      <Navbar/>
      <Sidebar/>
           <Routes>
           <Route path="login" element={<Login />}/>
           <Route path="/*" element={<Home />}/>
           <Route path="/explore" element={<Explore />} />
           <Route path="/upload" element={<Upload />}/>
           <Route path="/stories" element={<Stories />}/>
           <Route path="/profile" element={<Profile />}/>
           <Route path="/settings" element={<Settings/>}/>
           </Routes>
      </div>
    
    )
}
export default App