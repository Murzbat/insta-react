import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://pbs.twimg.com/profile_images/998476580073627649/8XN0oH_b_400x400.jpg"
                alt="Dilys"
                name="Dilys_carapuz_Shinoda"
            />
            <Palette/>
        </div>
    )
}
export default Profile;