import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './Users.scss';
import UserCard from '../UserCard/UserCard';
import Button from '../Button/Button';

const Users = () => {
  const [users, setUsers] = useState([]);
  // let api =
  //   'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';

  // useEffect(() => {
  //   axios.get(api).then((res) => {
  //     setUsers(res.data.users);
  //   });
  // }, [api]);

  // console.log(users);

  // useEffect(() => {
  //   fetch(
  //     'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //       if (data.success) {
  //         console.log('succ');
  //       } else {
  //         ('proccess server errors');
  //       }
  //     });
  // }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=26`
        );
        setUsers(response.data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className="users">
      <h2 className="users-title">Working with GET request</h2>
      <div className="users-cards">
        {users &&
          users.map((user) => {
            return (
              <UserCard
                name={user.name}
                email={user.email}
                photo={user.photo}
                position={user.position}
                phone={user.phone}
                key={user.id}
              />
            );
          })}
      </div>
      <Button title="Show more" />
    </div>
  );
};

export default Users;
