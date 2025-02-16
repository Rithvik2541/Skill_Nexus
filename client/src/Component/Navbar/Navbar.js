import React from 'react';
import "./navbar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimage from "../Images/Profile.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../ReduxContainer/userReducer';

export default function Navbar() {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  let id = user?.other?._id;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='mainNavbar'>
      <div className='LogoContainer'>
        <p>Social</p>
      </div>
      <div>
        <div className='searchInputContainer'>
          <img src={searchIcon} className="searchIcon" alt="Search" />
          <input type="text" className='searchInput' placeholder='Search your friends' />
        </div>
      </div>
      <div className='IconsContainer'>
        <img src={Notifications} className="Icons" alt="Notifications" />
        <a href="http://localhost:5000" target="_blank" rel="noopener noreferrer">
  <img src={Message} className="Icons" alt="Messages" />
</a>


        <div className="profileSection">
          <Link to={`/Profile/${id}`}>
            <img src={user?.other?.profile || Profileimage} className="ProfileImage" alt="Profile" />
          </Link>
          <span className="username">{user?.other?.username}</span>
        </div>

        <button className="logoutButton" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
