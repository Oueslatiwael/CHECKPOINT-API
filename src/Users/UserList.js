import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";
const UsersList = () => {
  const [usersList, setUsersList] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsersList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {usersList.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default UsersList;
