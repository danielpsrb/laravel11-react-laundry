// ProfileSection.jsx

import React from 'react';

function ProfileSection({ users }) {

    return (
        <div className='container'>
            <div className="text-center mt-5">
                {users && users.data ? (
                    <div className='text-center mt-5'>
                        <h2 className="fs-1 fw-semibold">Hello, {users.data.name}</h2>
                        <div className='card'>
                            <img src={users.data.images_profile_url || '/images/icon-person.png' } className='card-img-top' alt='profiles_image' />
                            <h2 className="card-title">Profile</h2>
                            <p>Username: {users.data.name}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            
        </div>
    );
}

export default ProfileSection;
