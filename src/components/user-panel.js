import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName, getUserEmail, getUserProduct, getUserFollowerTotal, getUserId, getUserProfilePic } from '../ducks/user/selectors'
import { getPlaylists } from '../ducks/playlists/actions';

export const UserPanel = () => {
    const userName = useSelector(getUserName);
    const userId = useSelector(getUserId);
    const userEmail = useSelector(getUserEmail);
    const followers = useSelector(getUserFollowerTotal);
    const product = useSelector(getUserProduct);
    const profilePic = useSelector(getUserProfilePic);

    const dispatch = useDispatch();
    const fetchPlaylists = () => {
        dispatch(getPlaylists());
    }
    return (

        <div className="d-flex mt-3 align-items-center flex-column" style={{'color': 'white'}}>
            {profilePic ? 
                <img 
                    className="rounded-circle border border-white"
                    style={{'height': '150px'}}
                    src={profilePic[0].url} /> : 
                null
            } 
            <div className="d-flex flex-column align-items-center mt-5">
                {userId ? <p>User Name: {userId}</p> : null}   
                {userName ? <p>Name: {userName}</p> : null}
                {userEmail ? <p>Email: {userEmail}</p> : null}
                {followers ? <p>Followers: {followers.total}</p> : null}
                {product ? <p className="text-capitalize">User Account: {product}</p> : null}
                {userId && <button className="btn btn-success" onClick={fetchPlaylists}>Get Playlists</button>}
            </div>  
        </div>
    )
}