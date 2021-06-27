import { verifyToken } from "./jwt";

function getToken(type) {
    return typeof window === 'undefined' ? global?.sessionStorage?.getItem(type) : window?.sessionStorage?.getItem(type)
}
function isAuth(type = 'access_token') {
    const token = getToken(type);
    return verifyToken(token);
}
export default {
    isAuth, getToken
}