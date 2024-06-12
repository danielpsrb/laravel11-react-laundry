// ProfileSection.jsx

import React from 'react';

function ProfileSection({ users }) {

    return (
        <div className='container'>
            <div className="text-center mt-5">
                {users && users.data ? (
                    <div className='text-center mt-5'>
                        <h2 className="fs-1 fw-semibold">Hello, {users.data.name}</h2>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default ProfileSection;
