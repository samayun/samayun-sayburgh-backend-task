import Link from "next/link"
import Image from "next/image";
const meta = {
    siteName: "Developer's Book"
}
import routes from '../api/navigations';
export default function Navbar() {
    return (
        < nav className="shadow-sm" >
            <div className="container px-4 mx-auto flex items-center py-3">
                {/* logo */}
                <div className="lg:w-44 w-40">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" className="w-3" width="50px" height="50px" />
                    </Link>
                </div>
                {/* logo end */}
                {/* navlinks */}
                <div className="ml-12 lg:flex space-x-5  hidden">
                    {
                        routes?.map((route) => {
                            return (
                                <Link href={route?.path}>
                                    <a
                                        href={route?.path}
                                        className="flex items-center font-semibold text-sm  transition hover:text-blue-500"
                                    > {route?.icon && <span className="mr-2">
                                        <i className={route?.icon} />
                                    </span>
                                        }
                                        {route?.name}
                                    </a>
                                </Link>
                            );
                        })
                    }
                </div>
                {/* navlinks end */}
                {/* searchbar */}
                <div className="relative lg:ml-auto hidden lg:block">
                    <span className="absolute left-3 top-2 text-sm text-gray-500">
                        <i className="fas fa-search" />
                    </span>
                    <input type="text" className="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500" placeholder="Search" />
                </div>
                <div className="lg:ml-5 ml-auto">
                    <span className="mr-2">
                        <i className="far fa-users" />
                    </span>
                    <Link
                        href="/login"
                        className=" text-sm  font-semibold hover:text-blue-500 transition flex items-center">
                        Login
                    </Link>
                    <span className="pl-2">
                        <i className="far fa-user" />
                    </span>
                    <Link
                        href="/register"
                        className="p-3 text-sm  font-semibold hover:text-blue-500 transition flex items-center">
                        Register
                    </Link>
                    <span className="pl-2">
                        <i className="far fa-user-circle" />
                    </span>
                    <Link
                        href="/profile"
                        className="p-3 text-sm  font-semibold hover:text-blue-500 transition flex items-center">
                        Profile
                    </Link>
                </div>
                <div className="text-xl text-gray-700 cursor-pointer ml-4 xl:hidden block hover:text-blue-500 transition" id="open_sidebar">
                    <i className="fas fa-bars" />
                </div>
                {/* searchbar end */}
            </div>
        </nav >
    )
}
