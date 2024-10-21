import React, { useState, useEffect } from 'react';
import './Profile.css';
import Container from '../../Container'; // Assuming you have this reusable Container component
import Loader from '../../Loader';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    gender: '',
    height: '',
    weight: '',
    age: '',
    email: '',
  });

  const [isEditing, setIsEditing] = useState(false); // Edit mode toggle
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch profile data from the API when the component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://your-api-route/profile'); // Replace with actual API route
        const data = await response.json();
        setProfileData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setLoading(false); // Ensure loading is stopped even if there's an error
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://your-api-route/profile', {
        method: 'PUT', // Assuming you're using PUT for updating profile data
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
      if (response.ok) {
        console.log('Profile updated successfully');
        setIsEditing(false); // Exit edit mode after saving
      } else {
        console.error('Error updating profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  if (loading) {
    return <Loader/>; // Show a loading state while fetching profile data
  }

  return (
    <div className="profile-page">
      <Container>
        <div className="profile-page__inner">
          <div className="profile-page__photo-section">
            <img
              src="https://via.placeholder.com/150" // Replace with actual image path
              alt="Profile"
              className="profile-page__photo"
            />
            <h2 className="profile-page__name">{profileData.name}</h2>
            <button className="profile-page__upload">Upload new photo</button>
          </div>

          <div className="profile-page__details">
            <h3 className="profile-page__details-title">Profile</h3>
            <div className="profile-page__info">
              <div className="profile-page__info-row">
                <span className="profile-page__label">Gender</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="sex"
                    value={profileData.gender}
                    onChange={handleInputChange}
                    className="profile-page__input"
                  />
                ) : (
                  <span className="profile-page__value">{profileData.sex}</span>
                )}
              </div>
              <div className="profile-page__info-row">
                <span className="profile-page__label">Height</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="height"
                    value={profileData.height}
                    onChange={handleInputChange}
                    className="profile-page__input"
                  />
                ) : (
                  <span className="profile-page__value">{profileData.height}</span>
                )}
              </div>
              <div className="profile-page__info-row">
                <span className="profile-page__label">Weight</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="weight"
                    value={profileData.weight}
                    onChange={handleInputChange}
                    className="profile-page__input"
                  />
                ) : (
                  <span className="profile-page__value">{profileData.weight}</span>
                )}
              </div>
              <div className="profile-page__info-row">
                <span className="profile-page__label">Age</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="years"
                    value={profileData.age}
                    onChange={handleInputChange}
                    className="profile-page__input"
                  />
                ) : (
                  <span className="profile-page__value">{profileData.years}</span>
                )}
              </div>
              <div className="profile-page__info-row">
                <span className="profile-page__label">Email</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="profile-page__input"
                  />
                ) : (
                  <span className="profile-page__value">{profileData.email}</span>
                )}
              </div>
            </div>
          </div>

          {isEditing ? (
            <button className="profile-page__save-button" onClick={handleSaveClick}>
              Save
            </button>
          ) : (
            <button className="profile-page__edit-button" onClick={handleEditClick}>
              Edit Profile
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Profile;
