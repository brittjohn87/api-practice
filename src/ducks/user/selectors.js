import { createSelector } from 'reselect';

const getUserState = ({ user = {} }) => user;

export const getUserName = createSelector(
    getUserState,
    ({display_name}) => display_name
);

export const getUserId = createSelector(
    getUserState,
    ({id}) => id
);

export const getUserEmail = createSelector(
    getUserState,
    ({email}) => email
);

export const getUserProduct = createSelector(
    getUserState,
    ({product}) => product
);

export const getUserFollowerTotal = createSelector(
    getUserState,
    ({followers}) => followers
);

export const getUserProfilePic = createSelector(
    getUserState,
    ({images}) => images
)