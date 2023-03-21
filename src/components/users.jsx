import React, {useState} from "react";

import User from "./user";


const Users = ({usersArray, onDelete, onBookmark}) => {
  

  return (
    <>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col">Избранное</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
        {usersArray.map(user => <User key={user._id} user={{ ...user }} onDelete={onDelete} onBookmark={onBookmark} />)}
      
    </tbody>
  </table>
    </>
    
  )

  }


export default Users


