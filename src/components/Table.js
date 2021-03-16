
import React from 'react'


function Table(props) {
    return (
      <div>
    
  {/* <TableBody/> */}
  <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Profile</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <img alt={props.firstName} src={props.picture} />
      </th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
    </tr>
  </tbody>
</table>
 
      </div>
    )
  }

export default Table


