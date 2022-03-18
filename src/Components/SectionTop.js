import React from 'react';
import '../Styles/SectionTop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from "react-icons/fa";
import {Link} from 'react-router-dom';

export default function Section() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row section-bar">
          <div className="col-md-8">
                <div className="List-Items">
                  <ul>
                    <li><Link to="practiseTest">Practise Test</Link></li>
                    <li><Link to ="assigned">Assigned</Link></li>
                    <li><Link to="completed">Completed</Link></li>
                  </ul>
                </div>
          </div>
          <div className="col-md-4">
            <div className="right-side">
              <div className="Guser">              
                <span><FaIcons.FaUserGraduate/></span>
              </div>
              <div className="student-class">
                <p>Ks 2-class2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
