import { verifyToken } from "../lib/jwt";

function getToken(type) {
    return typeof window === 'undefined' ? global?.sessionStorage?.getItem(type) : window?.sessionStorage?.getItem(type)
}
function isAuth(type = 'access_token') {
    const token = getToken(type);
    return verifyToken(token);
}

const routes = [
    {
        name: "Home",
        path: '/',
        icon: "fas fa-home",
        authorization: true
    },
    {
        name: "Blogs",
        path: '/blogs',
        icon: "fas fa-book",
        authorization: isAuth()
    },
    {
        name: "Profile",
        path: '/profile',
        icon: "fas fa-user",
        authorization: isAuth()
    },
    {
        name: "About",
        path: '/about',
        icon: 'far fa-file-alt',
        authorization: true
    },
    {
        name: "Contact",
        path: '/contact',
        icon: "fas fa-phone",
        authorization: true
    }
]
export default routes;