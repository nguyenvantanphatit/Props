import React, { useEffect, useState } from 'react'

function Render({ users, sortUsers }) {
  const sortedUsers = sortUsers(users);
  return (
    <div>
    <h2>Render</h2>
    <div>
      {sortedUsers?.map((item) => (
        <p>{item.name} {item.age}</p>
      ))}
    </div>
  </div>
  )
}

export default Render
