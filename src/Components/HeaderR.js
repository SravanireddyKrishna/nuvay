import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/HeaderR.css';
import * as AiIcons from "react-icons/ai";

export default function HeaderR() {
  return (
    <div>
        <div>
            <div className="Icon-bell">
                <h2><span><AiIcons.AiOutlineBell /></span></h2>
            </div>
            <div>
              <div className = "vertical"></div>
            </div>
            <div className = "login-btn">
               <button type="button">Login</button>
            </div>
        </div>

    </div>
  )
}

