
export default function Contcat() {
    return (
        <main className="pt-12 bg-green-100 pb-12">
            <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
                <div className="xl:w-8/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">
                    <div className="container mx-auto flex h-full justify-center mt-8 relative">
                        <section className="flex flex-col md:flex-row gap-4      p-4 w-full justify-center">
                            <div className=" rounded-2xl flex flex-col px-8 justify-center items-center md:items-start order-2 md:order-1 md:rounded-tl-2xl md:rounded-bl-2xl">
                                <div className="md:w-1/2 order-1 justify-center">
                                    <h2 className="text-4xl  mb-4 tracking-wider text-green-600"> Samayun Miah Chowdhury </h2>
                                    <h2 className="text-3xl  mb-4 tracking-wider text-gray-600"> Web Aplication Developer </h2>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="lg:w-3/12 w-full mt-8 lg:mt-0">
                    {/* Social plugin */}
                    <div className="w-full bg-white shadow-sm rounded-sm p-4 ">
                        <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Social Plugin</h3>
                        <div className="flex gap-2">
                            <a href="https://linkedin.com/in/samayun" target="_blank" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a href="https://github.com/samayun" target="_blank" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-github" />
                            </a>
                            <a href="https://twitter.com/samayunmc" target="_blank" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="https://instagram.com/samayunmc" target="_blank" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="https://samayunmc.medium.com" target="_blank" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-medium" />
                            </a>
                            <a href="https://facebook.com/samayunmc" target="_blank" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* RightSidebar  */}
            </div>
        </main>

    )
}