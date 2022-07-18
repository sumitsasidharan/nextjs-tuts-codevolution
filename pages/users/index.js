import React from 'react'

const UserList = ({users}) => {
    
  return (
    <div>
       <h1>List of Users</h1>
       {users.map(user => (
          <div key={user.id}>
             <p>{user.name}</p>
             <p>{user.email}</p>
             <p>{user.address.city}</p>
          </div>
       ))}
    </div>
  )
}

export default UserList

export async function getStaticProps() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await response.json();
   

   return {
      props: {
         users: data,
      }
   }
}

// tutorial 18 - beginning