import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);
  return (
    <>
      {selectedUser ? (
        <div class="card card-body text-center text-secondary">
          <img src={selectedUser.avatar} className='card-img-top rounded-circle m-auto img-fluid' style={{width: 180}} alt="avatar"/>
          <h1>{selectedUser.first_name} {selectedUser.last_name}</h1>
          <h4>email: {selectedUser.email}</h4>
        </div>
      ) : (
        <h1 className="text-secondary h3">No user selected yet</h1>
      )}
    </>
  );
};

export default Profile;
