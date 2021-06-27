import { verifyToken } from "./jwt";

export function getToken(type = 'access_token') {
    return typeof window === 'undefined' ? global?.sessionStorage?.getItem(type) : window?.sessionStorage?.getItem(type)
}
const isAuth = (type = 'access_token') => {
    const token = getToken(type);
    return verifyToken(token);
}
export default isAuth;