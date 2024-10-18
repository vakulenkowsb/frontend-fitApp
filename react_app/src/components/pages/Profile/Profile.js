import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-photo">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <p className="upload-link">Upload new photo</p>
        </div>
        <div className="profile-info">
          <h1>LeBron James</h1>
          <div className="profile-details">
            <div className="detail-item">
              <span className="detail-label">Sex</span>
              <span>Male</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Height</span>
              <span>224 cm</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Weight</span>
              <span>115 Kg</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Years</span>
              <span>39</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <span>LeBronJames@gmail.com</span>
            </div>
          </div>
          <button className="edit-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
