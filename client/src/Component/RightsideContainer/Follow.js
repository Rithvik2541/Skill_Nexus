import React, { useState } from 'react';
import addFriends from "../Images/add-user.png";
import UserToFollow from "../Images/afterFollowImg.png";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Follow({ userdetails }) {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  let id = user?.other?._id;
  const accessToken = user?.accessToken;

  const [Follow, setFollow] = useState(addFriends);

  const handleFollow = async () => {
    await fetch(`http://localhost:3000/api/user/following/${userdetails._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': "application/JSON",
        token: accessToken
      },
      body: JSON.stringify({ user: `${id}` })
    });
    setFollow(UserToFollow);
  };

  return (
    <div style={{ marginTop: "-10px" }} key={userdetails._id}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: "center" }}>
          {/* Profile image as a clickable link */}
          <Link to={`/Profile/${userdetails._id}`}>
            <img src={userdetails.profile} className="Profileimage" alt="Profile" />
          </Link>
          {/* Username as normal text */}
          <div>
            <p style={{ marginLeft: "10px", textAlign: 'start' }}>{userdetails.username}</p>
            <p style={{ marginLeft: "10px", textAlign: 'start', marginTop: "-16px", fontSize: "11px", color: "#aaa" }}>Suggested for you</p>
          </div>
        </div>
        <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%", cursor: 'pointer' }} onClick={handleFollow}>
          <img src={Follow} className="addfriend" alt="Follow Button" />
        </div>
      </div>
    </div>
  );
}
