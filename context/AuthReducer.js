import { createContext, useContext, useEffect, useReducer } from "react";
import { verifyToken } from "../lib/jwt";

export const STATE = {
    authError: null,
    user: null,
    error: null,
    access_token: null
}
const authReducer = (state = STATE, action) => {
    switch (action.type) {
        case "RESET":
            return {
                ...state, authError: null,
                user: null,
                error: null
            }
        case "AUTH_ERROR":
            return { ...state, error: action.error, authError: action.error }
        case "AUTH_USER":
            console.log('LOGIN SUCCESS', action);
            sessionStorage.setItem('access_token', action.access_token);
            return { ...state, user: action.payload, access_token: action.access_token }
        case "AUTH_LOGOUT":
            console.log('AUTH_LOGOUT SUCCESS');
            sessionStorage.removeItem('access_token');
            return { ...state, user: action.payload }

        default:
            return state;
    }
}
const AuthContext = createContext(STATE);

export const useAuth = () => (useContext(AuthContext));

export const authSuccess = (payload, access_token) => ({
    type: "AUTH_USER", payload, error: null, authError: null, access_token
})
export const authError = error => ({
    type: "AUTH_ERROR", error, authError: error
})

export default function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, STATE);

    const handleAfterSignInOutResponse = async user => {
        if (user) {
            // IF Found User Data means Authenticated 
            console.log(` IF Found User Data means Authenticated `)
            // authSuccess(user, sessionStorage.getItem('access_token'));
            dispatch({
                type: "AUTH_USER", payload: user, error: null, authError: null, access_token: sessionStorage.getItem('access_token')
            })

        }
        // else {
        //     // User is signed out
        //     console.log(` User is signed out`)
        //     sessionStorage.removeItem('access_token');
        //     dispatch({
        //         type: "AUTH_USER", payload: null, error: null, authError: null, access_token: null
        //     })
        // }
    }

    useEffect(() => {
        // onAuthStateChanged will executed in login and logout
        const token = sessionStorage.getItem('access_token');
        const tokenUser = verifyToken(token);
        console.log(`tokenUSer `, tokenUser)
        handleAfterSignInOutResponse(tokenUser);
        // unsubscribe when unmounting the component
        // return unsubscribe;
        // eslint-disable-next-line
    }, []);

    const value = {
        state, dispatch
    }
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

// export default authReducer;
