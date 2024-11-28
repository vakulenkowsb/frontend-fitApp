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

  // Load profile data from sessionStorage when the component mounts
  useEffect(() => {
    const storedUserData = sessionStorage.getItem("user");
    
    if (storedUserData) {
      setProfileData(JSON.parse(storedUserData)); // Set profile data from sessionStorage
    } else {
      // If no data in sessionStorage, set loading to false without fetching
      console.warn("No user data found in sessionStorage.");
    }
    setLoading(false); // Stop loading after retrieving data from sessionStorage
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

  const handleSaveClick = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(profileData)); // Save updated data to sessionStorage
    setIsEditing(false); // Exit edit mode after saving
    console.log("Profile updated successfully in sessionStorage");
  };

  if (loading) {
    return <Loader />; // Show a loading state while fetching profile data
  }

  return (
    <main>
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
                      name="gender"
                      value={profileData.gender}
                      onChange={handleInputChange}
                      className="profile-page__input"
                    />
                  ) : (
                    <span className="profile-page__value">{profileData.gender}</span>
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
                      name="age"
                      value={profileData.age}
                      onChange={handleInputChange}
                      className="profile-page__input"
                    />
                  ) : (
                    <span className="profile-page__value">{profileData.age}</span>
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
    </main>
  );
};

export default Profile;
