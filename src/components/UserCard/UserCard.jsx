import React from 'react';
import { styled } from '@mui/material/styles';
import './UserCard.scss';
import avatar from '/avatar.svg';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const DarkTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    color: '#fff',
    fontSize: 16,
    padding: '0 16px',
    fontFamily: '"Nunito", sans-serif;',
  },
}));

const UserCard = ({ name, email, photo, position, phone }) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={photo || avatar}
        alt="user photo"
        width="70"
        height="70"
      />
      <DarkTooltip title={name}>
        <p className="card-name">{name}</p>
      </DarkTooltip>
      <div className="card-info">
        <p>{position}</p>
        <DarkTooltip title={email}>
          <p className="card-email">{email}</p>
        </DarkTooltip>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
