import React from 'react';
import { MenuItems } from './MenuItems';
import '../Styles/SidebarL.css';

export default function Menu() {
  return (
    <div>
      <div className="Menu">

            <ul>
              {MenuItems.map((val,key)=>{ 
                if(MenuItems.subMenu){
                  return(
                    <li key={key} onClick={()=>{window.location.pathname = val.path}}>
                    {" "}
                    <div>{val.icon}</div>
                    <div>{val.title}</div>
                    </li>
                  )
                }
             return(
                  <li key={key} onClick={()=>{window.location.pathname = val.path}}>
                  {" "}
                  <div>{val.icon}</div>
                  <div>{val.title}</div>
                  </li>
                  );
              })}
            </ul>

      </div>

       
    </div>
  );
}
