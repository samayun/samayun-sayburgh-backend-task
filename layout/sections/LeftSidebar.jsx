
export default function LeftSidebar() {
    return (
        < div className="w-3/12 hidden xl:block" >
            < div className="w-full bg-white shadow-sm rounded-sm p-4 " >
                <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
                <div className="space-y-2">
                    <a href="#" className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <i className="far fa-folder-open" />
                        </span>
                        <span>Beauti</span>
                        <p className="ml-auto font-normal">(12)</p>
                    </a>
                    <a href="#" className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <i className="far fa-folder-open" />
                        </span>
                        <span>Business</span>
                        <p className="ml-auto font-normal">(15)</p>
                    </a>
                    <a href="#" className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <i className="far fa-folder-open" />
                        </span>
                        <span>Fashion</span>
                        <p className="ml-auto font-normal">(5)</p>
                    </a>
                    <a href="#" className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <i className="far fa-folder-open" />
                        </span>
                        <span>Food</span>
                        <p className="ml-auto font-normal">(10)</p>
                    </a>
                    <a href="#" className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <i className="far fa-folder-open" />
                        </span>
                        <span>Learn</span>
                        <p className="ml-auto font-normal">(3)</p>
                    </a>
                    <a href="#" className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <i className="far fa-folder-open" />
                        </span>
                        <span>Music</span>
                        <p className="ml-auto font-normal">(7)</p>
                    </a>
                    <a href="#" className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <i className="far fa-folder-open" />
                        </span>
                        <span>Nature</span>
                        <p className="ml-auto font-normal">(0)</p>
                    </a>
                    <a href="#" className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <i className="far fa-folder-open" />
                        </span>
                        <span>People</span>
                        <p className="ml-auto font-normal">(13)</p>
                    </a>
                    <a href="#" className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <i className="far fa-folder-open" />
                        </span>
                        <span>Sports</span>
                        <p className="ml-auto font-normal">(7)</p>
                    </a>
                    <a href="#" className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <i className="far fa-folder-open" />
                        </span>
                        <span>Technology</span>
                        <p className="ml-auto font-normal">(17)</p>
                    </a>
                </div>
            </div >
            {/* random posts */}
            < div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 " >
                <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Random Posts</h3>
                <div className="space-y-4">
                    <a href="#" className="flex group">
                        <div className="flex-shrink-0">
                            <img src="src/images/img-1.jpg" className="h-14 w-20 rounded object-cover" />
                        </div>
                        <div className="flex-grow pl-3">
                            <h5 className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                Team Bitbose geared up to attend Blockchain
                            </h5>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-1 text-xs"><i className="far fa-clock" /></span>
                                June 11, 2021
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex group">
                        <div className="flex-shrink-0">
                            <img src="src/images/img-2.jpg" className="h-14 w-20 rounded object-cover" />
                        </div>
                        <div className="flex-grow pl-3">
                            <h5 className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                After a Caribbean Hurricane, the Battle
                            </h5>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-1 text-xs"><i className="far fa-clock" /></span>
                                March 27, 2021
                            </div>
                        </div>
                    </a>
                    <a href="#" className="flex group">
                        <div className="flex-shrink-0">
                            <img src="src/images/img-3.jpg" className="h-14 w-20 rounded object-cover" />
                        </div>
                        <div className="flex-grow pl-3">
                            <h5 className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                                California sheriff’s deputy shot during ‘ambush’
                            </h5>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-1 text-xs"><i className="far fa-clock" /></span>
                                Aprile 17, 2021
                            </div>
                        </div>
                    </a>
                </div>
            </div >
        </div >
    )
}
