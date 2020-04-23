
export const login = ({ code }) => ({
    type: 'login/LOGIN',
    payload: {
        code
    }
});