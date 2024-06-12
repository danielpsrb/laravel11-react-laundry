import React, { useEffect, useState } from 'react';
import '../../pages/Profile/profile.css';
import { useAuth } from '../../hooks/useAuth';
import { fetchUsers } from '../../api/usersApi';
import Navbar from '../../components/Navbar';
import ProfileSection from '../../components/ProfileSection';

function ProfileUsers() {
 
    const [usersData, setUsersData] = useState(null);
    const { token } = useAuth();

    useEffect(() => {
        const getUsers = async () => {
            if (token) {
                try {
                    const usersData = await fetchUsers(token);
                    console.log("Fetched Users:", usersData);
                    setUsersData(usersData);
                } catch (error) {
                    console.error("Error fetching users:", error);
                }
            }
        };

        getUsers();
    }, [token])
    

    return (
        <div>
            <Navbar />
            <ProfileSection users={usersData} />
        </div>
    )
}

export default ProfileUsers