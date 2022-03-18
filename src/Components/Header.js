import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Header.css';
import HeaderR from './HeaderR';
//import * as AiIcons from "react-icons/ai";


export default function Header() {
  return (
    <div>
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div className="col-md-8"> 
                    
                        <div className="d-flex">     
                        <div className="logo"> 
                            <a className="navbar-brand" href="#">SqillUP</a>
                        </div>
                        <div>
                            <form className="search">
                                <input className="form-control me-2 " 
                                        type="search" 
                                        placeholder="Search " 
                                        aria-label="Search" 
                                />  
                            </form> 
                        </div>         
                        </div>        
                    
                    
                    </div>
                    <div className="col-md-4">
                        <HeaderR/>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}
