import Categories from '../components/Categories';
import routes from '../api/navigations';
import Link from 'next/link';

export default function MobileNavigation() {
    return (
        <div className="fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 z-10 opacity-0 invisible transition-all duration-500 xl:hidden" id="sidebar_wrapper">
            <div className="fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col transition-all duration-500 -left-80" id="sidebar">
                {/* search and menu */}
                <div className="lg:hidden">
                    {/* searchbar */}
                    <div className="relative mx-3 mt-3 shadow-sm">
                        <span className="absolute left-3 top-2 text-sm text-gray-500">
                            <i className="fas fa-search" />
                        </span>
                        <input type="text" className="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500" placeholder="Search" />
                    </div>
                    {/* navlink */}
                    <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-3 pt-3">Menu</h3>
                    <div className>
                        {
                            routes?.map((route) => {
                                return (
                                    <Link href={route?.path}>
                                        <a
                                            href={route?.path}
                                            className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500"
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
                </div>
                <Categories />
            </div>
        </div>
    )
}
