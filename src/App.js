import React from 'react';
import Header from './Components/Header';
import ComponentsTotal from './Components/ComponentsTotal';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MyProfile from './SidebarPages/MyProfile';
import StudentProfile from './SidebarPages/StudentProfile';
import MySubscription from './SidebarPages/MySubscription';
import Growth from './SidebarPages/Growth';
import {Assignment,Maths,Science} from './SidebarPages/Assignment';
import Assigned from './NavbarPages/Assigned';
import Completed from './NavbarPages/Completed';
import PractiseTest from './NavbarPages/PractiseTest';




function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <Header/>
      <ComponentsTotal/>
      <Routes>
        <Route path="/"element={<MyProfile/>}/>
        <Route path="/student-profile"element={<StudentProfile/>}/>
        <Route path="/my-subscription"element={<MySubscription/>}/>
        <Route path="/growth"element={<Growth/>}/>
        <Route path="/assignmet"element={<Assignment/>}/>
        <Route path="/assignmet/maths"element={<Maths/>}/>
        <Route path="/assignmet/science"element={<Science/>}/>
        <Route path="/assigned"element={<Assigned/>}/>
        <Route path="/completed"element={<Completed/>}/>
        <Route path="/practiseTest"element={<PractiseTest/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
