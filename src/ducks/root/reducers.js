import { combineReducers } from 'redux';
import loginReducer from '../login/reducers';
import userReducer from '../user/reducers';
import playlistsReducer from '../playlists/reducers';

export const rootReducer =  () => combineReducers({
    login: loginReducer,
    user: userReducer,
    playlist: playlistsReducer
});

export default rootReducer;