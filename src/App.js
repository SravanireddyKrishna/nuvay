import React from 'react';
import Header from './Components/Header';
import SectionTop from './Components/SectionTop';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MyProfile from './SidebarPages/MyProfile';
import StudentProfile from './SidebarPages/StudentProfile';
import MySubscription from './SidebarPages/MySubscription';
import Growth from './SidebarPages/Growth';
import Assignment from './SidebarPages/Assignment';
import Maths from './SidebarPages/Maths';
import Science from './SidebarPages/Science';
import Assigned from './NavbarPages/Assigned';
import Completed from './NavbarPages/Completed';
import PractiseTest from './NavbarPages/PractiseTest';
import SidebarL from './Components/SidebarL';



function App() {
  return (
    <div className="App">
        <div>
          <BrowserRouter>
        <div>
          <Header/>
        </div>
        <div>
          <SectionTop/>
        </div>
      
      <div className="row">
          <div className="col-md-3">
            <SidebarL/>
          </div>
        <div className="col-md-8">

            <Routes>
              <Route path="/"element={<MyProfile/>}/>
              <Route path="/student-profile"element={<StudentProfile/>}/>
              <Route path="/my-subscription"element={<MySubscription/>}/>
              <Route path="/growth"element={<Growth/>}/>
              <Route path="/assignment"element={<Assignment/>}/>
              <Route path="maths"element={<Maths/>}/>
              <Route path="science"element={<Science/>}/>
              <Route path="/assigned"element={<Assigned/>}/>
              <Route path="/completed"element={<Completed/>}/>
              <Route path="/practiseTest"element={<PractiseTest/>}/>
            </Routes>

        </div>  
      </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
