import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './Users.scss';
import UserCard from '../UserCard/UserCard';
import Button from '../Button/Button';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
        );
        const data = response.data;
        setTotalPages(data.total_pages);
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [page]);

  const nextPage = () => setPage((prevPage) => ++prevPage);

  return (
    <div className="users">
      <h2 className="users-title">Working with GET request</h2>
      <div className="users-cards">
        {users &&
          users
            .sort((a, b) => b.registration_timestamp - a.registration_timestamp)
            .map((user) => {
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
      {page <= totalPages - 1 && (
        <Button title="Show more" onClick={() => nextPage()} />
      )}
    </div>
  );
};

export default Users;
