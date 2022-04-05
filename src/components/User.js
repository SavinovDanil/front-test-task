import React from 'react';

const User = ({ user, userActiveId, clickOnUser }) => {
  return (
    <div
      onClick={() => clickOnUser(user)}
      className={`swiper-my-slide ${userActiveId === user.id ? 'active-slide' : null}`}>
      <img className="user-img" src={`https://i.pravatar.cc/300?img=${user.id}`} alt="" />
      <p className="user-name">{user.name}</p>
      <p className="user-company-name">{user.company.name}</p>
    </div>
  );
};

export default User;
