import { getType } from 'typesafe-actions';
import { login } from './actions';

const initialState = {};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        
        default:
            return state;
    }
}