import React from 'react';
import './UserCard.scss';

const UserCard = ({ name, email, photo, position, phone }) => {
  return (
    <div className="card">
      <img className="card-img" src={photo} />
      <p className="card-name">{name}</p>
      <div className="card-info">
        <p>{position}</p>
        <p className="card-email" title={email}>
          {email}
        </p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
