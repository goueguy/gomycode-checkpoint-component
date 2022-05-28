import React from 'react';
import ProfilePhoto from  './ProfilePhoto';
import Address from  './Address';
import style from '../Assets/style/style.css';
const Profile = ()=>{
    return(
        <div className='profileContainer mx-auto shadow'>
            <h3 className='pt-3'>Information du Profile</h3>
            <ProfilePhoto/>
            <hr/>
            <Address/>
            <hr/>
            <button type="button" class="btn btn-primary btn-lg btn-block mb-3 p-2 rounded-pill">UPDATE INFORMATION</button>
        </div>
    )
}

export default Profile;