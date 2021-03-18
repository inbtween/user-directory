
import React from 'react'


function Table({ users }) {
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

      {users[0] !== undefined && users[0].name !== undefined ? (
        console.log(users),
        users.map(user => {
          // console.log(user)
          return (<tr>
            <th scope="row">
              <img alt={user.name.first} src={user.picture.medium} />
            </th>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.email}</td>
            </tr>)
          })
      ):(
        <></>
      )}
      
    <tr>
      
      <th scope="row">
        <img alt={users.firstName} src={users.picture} />
      </th>
      <td>{users.firstName}</td>
      <td>{users.lastName}</td>
      <td>{users.email}</td>
    </tr>
  </tbody>
</table>
 
      </div>
    )
  }

export default Table


