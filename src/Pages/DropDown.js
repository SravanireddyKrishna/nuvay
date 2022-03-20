import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { assignmentDropdown } from './MenuItems';
import 'bootstrap/dist/css/bootstrap.min.css';

function DropDown(){

    const [dropdown,setDropdown] =useState(false);
    return (
        <>
        <div className='submenu'>
        <ul className={dropdown ? "assignment-submenu clicked" : "assignment-submenu"}
             onClick={()=>setDropdown(!dropdown)}>
                 <div className='submenubackground'>
                 {assignmentDropdown.map((item,key)=>{
                     return (
                         <li key={key}>
                             <Link to={item.path}
                             onClick={()=>setDropdown(false)}>
                                 {item.title}
                             </Link>
                         </li>
                     );
                 })}
                 </div>
        </ul>
        </div>
        </>
    );
}
export default DropDown;


