import { createAction } from 'typesafe-actions';

export const login = createAction('login/LOGIN ', resolve => {
    return ({code, redirect_uri}) => resolve ({code, redirect_uri});
});
