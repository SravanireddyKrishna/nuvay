import React from 'react';

export default function Completed() {
  return (
    <div>
      <div className="pt-5 ">
        <table class="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>Defaultson</td>
            <td>def@somemail.com</td>
          </tr>      
          <tr class="table-primary">
            <td>Primary</td>
            <td>Joe</td>
            <td>joe@example.com</td>
          </tr>
          <tr class="table-success">
            <td>Success</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr class="table-danger">
            <td>Danger</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr class="table-info">
            <td>Info</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
          <tr class="table-warning">
            <td>Warning</td>
            <td>Refs</td>
            <td>bo@example.com</td>
          </tr>
          <tr class="table-active">
            <td>Active</td>
            <td>Activeson</td>
            <td>act@example.com</td>
          </tr>
          <tr class="table-secondary">
            <td>Secondary</td>
            <td>Secondson</td>
            <td>sec@example.com</td>
          </tr>
          <tr class="table-light">
            <td>Light</td>
            <td>Angie</td>
            <td>angie@example.com</td>
          </tr>
          <tr class="table-dark">
            <td>Dark</td>
            <td>Bo</td>
            <td>bo@example.com</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}
