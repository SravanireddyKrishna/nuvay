import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {MenuItems} from './MenuItems';
import '../Styles/SidebarL.css';
import DropDown from './DropDown';
import SignOut from '../SidebarPages/SignOut';


 function Sidebar() {

    const [sidebar]=useState(" ");
    // const [dropdown,setDropdown] =useState(false);
  return (
    <div>
      <div className="sidebarL">
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className="Menu">              
                  <ul>

                    {MenuItems.map((value,key)=>{

                      // if(value.title === "Assignment")
                      // {
                      //   return(
                      //     <li key={key}
                      //     onMouseEnter={()=>setDropdown(true)}
                      //     onMouseLeave={()=>setDropdown(false)}>
                      //       <Link to={value.path}>
                      //         {value.title}
                      //       </Link>
                      //       {dropdown && <DropDown/> }
                      //     </li>
                      //   );
                      // }

                        return(         
                            <li  key={key} >
                                <div className="Menu-Data">
                                    <Link to={value.path}>
                                        <div className="icon-title pt-4">
                                              {value.icon}&nbsp;&nbsp;&nbsp; 
                                            {value.title}
                                        </div>
                                     </Link>
                                    </div>
                                   
                            </li>
                        )
                    })}
                      <DropDown/>
                </ul>
                </div>
              <SignOut/>
            </nav>
            </div>
    </div>
  )
}
export default Sidebar;