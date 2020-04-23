import { createSelector } from 'reselect';

const getPlaylistsState = ({ playlist = {} }) => playlist;

export const getPlaylists = createSelector(
    getPlaylistsState,
    ({items}) => items
);