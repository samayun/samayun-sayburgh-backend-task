var NewComponent = function () {
    return (
        <div>

            {/* Main content */}
            <div className="xl:w-12/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">
                {/* post view */}
                <div className="rounded-sm overflow-hidden bg-white shadow-sm">
                    <div className>
                        <img src="src/images/img-12.jpg" className="w-full h-96 object-cover" />
                    </div>
                    <div className="p-4 pb-5">
                        <h2 className="block text-2xl font-semibold text-gray-700 font-roboto">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iddo loremque, totam
                            architecto odit pariatur Lorem ips dolor.
                        </h2>
                        <div className="mt-2 flex space-x-4">
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-2 text-xs">
                                    <i className="far fa-user" />
                                </span>
                                Blogging Tips
                            </div>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-2 text-xs">
                                    <i className="far fa-clock" />
                                </span>
                                June 11, 2021
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe accusamus
                            eum ex sint est neque provident tempore, minus laborum repudiandae vitae temporibus
                            nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus explicabo itaque iure
                            recusandae
                        </p>
                        <p className="bg-green-50 border border-green-500 p-3 text-sm  mt-5">
                            <span className="text-xl mr-1 text-gray-400"><i className="fas fa-quote-left" /></span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus blanditiis earum nam,
                            quisquam magnam aut odio aliquam inventore quibusdam mollitia! Alias, mollitia eveniet iure
                            quidem natus quis assumenda consectetur beatae.
                            Lorem, ipsum dolor quibusdam.
                            <span className="text-xl ml-1 text-gray-400"><i className="fas fa-quote-right" /></span>
                        </p>
                        <p className="text-gray-500 text-sm mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe accusamus
                            eum ex sint est neque provident tempore, minus laborum repudiandae vitae temporibus
                            nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus explicabo itaque iure
                            recusandaess
                        </p>
                        <ul className="mt-6 pl-5  space-y-2">
                            <li className="text-sm">
                                <span className="mr-1"><i className="fas fa-angle-right" /></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
                            </li>
                            <li className="text-sm">
                                <span className="mr-1"><i className="fas fa-angle-right" /></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
                            </li>
                            <li className="text-sm">
                                <span className="mr-1"><i className="fas fa-angle-right" /></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
                            </li>
                            <li className="text-sm">
                                <span className="mr-1"><i className="fas fa-angle-right" /></span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
                            </li>
                        </ul>
                        <p className="text-gray-500 text-sm mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe accusamus
                            eum ex sint est neque provident tempore, minus laborum repudiandae vitae temporibus
                            nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus explicabo itaque iure
                            recusandae
                        </p>
                        <p className="text-gray-500 text-sm mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe accusamus
                            eum ex sint est neque provident tempore, minus laborum repudiandae vitae temporibus
                            nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus explicabo itaque iure
                            recusandae
                        </p>
                        <div className="flex items-center flex-wrap gap-2 mt-5">
                            <a href="#" className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Beauti</a>
                            <a href="#" className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Sports</a>
                            <a href="#" className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">Business</a>
                        </div>
                        <div className="mt-5 pt-5 border-t border-gray-200 flex gap-2">
                            <a href="#" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-pinterest-p" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* title */}
                <div className="flex bg-white px-3 py-2 justify-between items-center rounded-sm mt-8">
                    <h5 className="text-base uppercase font-semibold font-roboto">Related post</h5>
                    <a href="#" className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                        see more
                    </a>
                </div>
                {/* similer post */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                    <div className="rounded-sm bg-white p-3 pb-5 shadow-sm">
                        <a href="#" className="block rounded-md overflow-hidden">
                            <img src="src/images/img-7.jpg" className="w-full h-40 object-cover transform hover:scale-110 transition duration-500" />
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2 className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                    Lorem, ipsum dolor amet sit consec tetur elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-xs items-center">
                                    <span className="mr-1 text-xs">
                                        <i className="far fa-user" />
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-xs items-center">
                                    <span className="mr-1 text-xs">
                                        <i className="far fa-clock" />
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-sm bg-white p-3 pb-5 shadow-sm">
                        <a href="#" className="block rounded-md overflow-hidden">
                            <img src="src/images/img-5.jpg" className="w-full h-40 object-cover transform hover:scale-110 transition duration-500" />
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2 className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                    Lorem, ipsum dolor amet sit consec tetur elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-xs items-center">
                                    <span className="mr-1 text-xs">
                                        <i className="far fa-user" />
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-xs items-center">
                                    <span className="mr-1 text-xs">
                                        <i className="far fa-clock" />
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-sm bg-white p-3 pb-5 shadow-sm hidden md:block">
                        <a href="#" className="block rounded-md overflow-hidden">
                            <img src="src/images/img-6.jpg" className="w-full h-40 object-cover transform hover:scale-110 transition duration-500" />
                        </a>
                        <div className="mt-3">
                            <a href="#">
                                <h2 className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                                    Lorem, ipsum dolor amet sit consec tetur elit.
                                </h2>
                            </a>
                            <div className="mt-2 flex space-x-3">
                                <div className="flex text-gray-400 text-xs items-center">
                                    <span className="mr-1 text-xs">
                                        <i className="far fa-user" />
                                    </span>
                                    Blogging Tips
                                </div>
                                <div className="flex text-gray-400 text-xs items-center">
                                    <span className="mr-1 text-xs">
                                        <i className="far fa-clock" />
                                    </span>
                                    June 11, 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* comment */}
                <div className="p-4 bg-white rounded-sm shadow-sm mt-8">
                    <h4 className="text-base uppercase  font-semibold mb-4 font-roboto">Post a comment</h4>
                    <p className="text-sm text-gray-500 mb-4">12 comments</p>
                    <div className="space-y-5">
                        <div className="flex items-start border-b  pb-5 border-gray-200">
                            <div className="w-12 h-12 flex-shrink-0">
                                <img src="src/images/avatar.png" className="w-full" />
                            </div>
                            <div className="flex-grow pl-4">
                                <h4 className="text-base  font-roboto">Rasel Ahmed</h4>
                                <p className="text-xs text-gray-400">9 Aprile 2021 at 12:34 AM</p>
                                <p className="text-sm font-600 mt-2">Great article. Thanks</p>
                                <div className="flex gap-2 mt-2">
                                    <button className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                                    <button className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start border-b  pb-5 border-gray-200">
                            <div className="w-12 h-12 flex-shrink-0">
                                <img src="src/images/avatar-2.png" className="w-full" />
                            </div>
                            <div className="flex-grow pl-4">
                                <h4 className="text-base  font-roboto">John Doe</h4>
                                <p className="text-xs text-gray-400">9 Aprile 2021 at 12:34 AM</p>
                                <p className="text-sm font-600 mt-2">Great article. Thanks</p>
                                <div className="flex gap-2 mt-2">
                                    <button className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                                    <button className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 flex-shrink-0">
                                <img src="src/images/avatar.png" className="w-full" />
                            </div>
                            <div className="flex-grow pl-4">
                                <h4 className="text-base  font-roboto">Rasel Ahmed</h4>
                                <p className="text-xs text-gray-400">9 Aprile 2021 at 12:34 AM</p>
                                <p className="text-sm font-600 mt-2">Great article. Thanks</p>
                                <div className="flex gap-2 mt-2">
                                    <button className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Reply</button>
                                    <button className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="#" className="mt-8">
                        <h5 className="text-base  mb-1">Comment:</h5>
                        <textarea type="text" className="w-full border border-gray-200 py-3 px-5 text-sm  rounded-sm h-20 focus:outline-none focus:border-gray-400" placeholder="type your comment" defaultValue={""} />
                        <div className="mt-2">
                            <butotn type="submit" className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                                Submit
                            </butotn>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}


export default NewComponent;