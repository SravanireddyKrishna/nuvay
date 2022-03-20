import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/SidebarL.css';
import Sidebar from '../Pages/Sidebar';


export default function SidebarL() {
  return (
    <div className="row">
      <div className="col-md-3">            
        <div className="sidebarLeft">
          <Sidebar/>
        </div>
        </div>
    </div>
  )
}
