import React from 'react';

//import {Link} from 'react-router-dom';

export default function Assignment(){
  return (
    <div className="pt-5 mt-5">
        <table class="table table-bordered table-condensed table-hover table-striped text-center">
                  <thead>
                     <tr>
                        <th >Subject</th>
                     </tr>
                  </thead>
                  <tbody class="text-left">
                     <tr>
                        <td><input type="checkbox" name="brand"/>Maths</td>
                     </tr>
                     <tr>
                        <td><input type="checkbox" name="brand"/>Science</td>
                     </tr>
                     <tr>
                        <td><input type="checkbox" name="brand"/>History</td>
                     </tr>
                     <tr>
                        <td><input type="checkbox" name="brand"/>Computers</td>
                     </tr>
                  </tbody>
               </table>
               <button type="button"className="btn btn-primary p-2 m-2" value="selectAll" class="main" onclick="checkAll() ">Select All</button>
               <button type="button" className="btn btn-warning p-2 m-2"value="deselectAll" class="main" onclick="uncheckAll()">Clear</button>
            
    </div>
  );
};
