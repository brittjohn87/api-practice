

const userInitialState = {};

export default (state = userInitialState, action = {}) => {
    switch (action.type) {
        case 'user/SET_USER_DATA':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}