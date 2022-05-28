import React from 'react';
import picture from "../Assets/photos/my-own-picture.jpg";
import FullName from  './FullName';
const ProfilePhoto = ()=>{
    return(
        <div>
            <img src={picture} alt="My picture" className='rounded-circle img-fluid profile-picture-size'/>
            <FullName/>
            <hr/>
            <p>Web & Mobile Developer</p>
        </div>
    )
}

export default ProfilePhoto;