const initialState = {
    items: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'playlists/SET_PLAYLISTS':
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}