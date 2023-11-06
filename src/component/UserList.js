import React, { useEffect, useContext } from "react";
import UserContext from "../context/User/UserContext";

const UserList = () => {
  const { users, getUsers, getProfile, selectedUser } = useContext(UserContext);
  const active = selectedUser ? selectedUser.id : null
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="list-group">
      {users.map(user=>(
        <a href="#!" key={user.id} onClick={()=> getProfile(user.id)} className={`list-group-item list-group-item-action ${active === user.id ? 'active' : ''}`}>
          <img src={user.avatar} className='img-fluid mr-4 rounded-circle' alt="avatar" width="70" />
          <span>
            {user.first_name} {user.last_name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default UserList;
