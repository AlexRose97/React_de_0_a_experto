import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { autReducer } from './authReducer';


import { types } from '../types/types';

// const initialState = {
//     logged: false,
// }
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(autReducer, {}, init);

    const login = (name = '') => {
        const user = { id: "ABC", name }
        const action = { type: types.login, payload: user }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch(action);
    }
    const logout = (name = '') => {
        localStorage.removeItem("user")
        const action = { type: types.logout }
        dispatch(action);
    }
    return (
        <AuthContext.Provider value={{ login, logout, ...authState }}>
            {children}
        </AuthContext.Provider>
    )
}
