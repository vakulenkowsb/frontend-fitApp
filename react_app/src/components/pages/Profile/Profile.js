import React, { useState, useEffect } from 'react';
import './Profile.css';
// import Container from '../../Container'; // Assuming you have this reusable Container component
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
    <main className='profile__main'>
        <div className='profile-page'>
            <div className='profile-container'>
                <div className='profile-container__photo-section'>
                    <img 
                        src="https://via.placeholder.com/150" // Replace with actual image path
                        alt="Profile"
                        className="profile-container__photo"
                    />
                    <h2 className='profile-container__title'>
                        {/* leBrine Jakson */}
                        {profileData.username}
                    </h2>
                    <button className='profile-container__upload'>
                        Upload new photo
                    </button>
                </div>
                <div className='profile-container__description-section'>
                    <h3 className='profile-container__description-title'>
                        Profile
                    </h3>
                    <div className='profile-container__info'>
                        <div className='profile-container__info-row'>
                            <p className='profile-container__info-title'>
                                Gender
                            </p>
                            {isEditing ? 
                                (
                                <input
                                    type = "text"
                                    name = "gender"
                                    value = {profileData.gender}
                                    onChange={handleInputChange}
                                    className='profile-container__info-input'
                                />
                                ) 
                                : 
                                (
                                <span className='profile-container__info-value'>
                                    {profileData.gender}
                                </span>
                                )
                            }
                        </div>
                        <div className='profile-container__info-row'>
                            <p className='profile-container__info-title'>
                                Height
                            </p>
                            {isEditing ?
                                (
                                <input 
                                    type = "text"
                                    name = "height"
                                    value = {profileData.height}
                                    onChange = {handleInputChange}
                                    className = "profile-container__info-input"
                                />
                                )
                                :
                                (
                                <span className='profile-container__info-value'>
                                    {profileData.height}
                                </span>
                                )
                            }
                        </div>
                        <div className='profile-container__info-row'>
                            <p className='profile-container__info-title'>
                                Weight
                            </p>
                            {isEditing ?
                                (
                                <input 
                                    type = "text"
                                    name = "weight"
                                    value = {profileData.weight}
                                    onChange = {handleInputChange}
                                    className = "profile-container__info-input"
                                />
                                )
                                :
                                (
                                <span className='profile-container__info-value'>
                                    {profileData.weight}
                                </span>
                                )
                            }
                        </div>
                        <div className='profile-container__info-row'>
                            <p className='profile-container__info-title'>
                                Years
                            </p>
                            {isEditing ?
                                (
                                <input 
                                    type = "text"
                                    name = "years"
                                    value = {profileData.age}
                                    onChange = {handleInputChange}
                                    className = "profile-container__info-input"
                                />
                                )
                                :
                                (
                                <span className='profile-container__info-value'>
                                    {profileData.age}
                                </span>
                                )
                            }
                        </div>
                        <div className='profile-container__info-row'>
                            <p className='profile-container__info-title'>
                                Email
                            </p>
                            {isEditing ?
                                (
                                <input 
                                    type = "text"
                                    name = "email"
                                    value = {profileData.email}
                                    onChange = {handleInputChange}
                                    className = "profile-container__info-input"
                                />
                                )
                                :
                                (
                                <span className='profile-container__info-value'>
                                    {profileData.email}
                                </span>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='edit-container'>
                {isEditing ?
                (
                    <button className='edit-container__save-mode btn' onClick={handleSaveClick}>
                    Save
                    </button>
                ) 
                : 
                (
                    <button className='edit-container__edit-mode btn' onClick={handleEditClick}>
                    Edit profile
                    </button>
                )
                }
            </div>
        </div>
    </main>
  );
};

export default Profile;
