import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return(
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    return (
        <div className="profile-page">
            <img src={user.picture} alt="Profile" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.id}</p>
        </div>
    );
};

export default Profile;