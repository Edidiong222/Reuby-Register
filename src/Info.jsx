import React from 'react'

const Info = ({name, email, phone, users}) => {
  return (
    <div>
      <div className="cover">
        <div className="items">
        <div className="registerContainer">
        <div className="registeredUsers">
        <h3>Reuby's Information Hub</h3>
            <table border = '1'>
              <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
              </thead>
    {users.map((user, id)=>(
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
              ))}
            </table>


      
        </div>
   </div>
        </div>
      </div>
    </div>
  )
}

export default Info
