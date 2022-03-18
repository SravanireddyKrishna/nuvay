import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/SidebarL.css';
import Menu from '../Pages/Menu';
import SidebarR from './SidebarR';

export default function SidebarL() {
  return (
    <div>
        <div className="container-fluid ">
            <div className="row sidebarL">
                <div className="col-md-4">
                    <div className="sidebarLeft">
                       <Menu/>
                    </div>
                </div>
                <div className="col-md-8">
                    <SidebarR/>
                </div>
            </div>
        </div>
       
    </div>
  )
}
