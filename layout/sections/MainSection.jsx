import Link from 'next/link';
// import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import blogs from "../../api/blogData";

function SingleBlog({ blog }) {
    const { title, slug, body, author, tags, createdAt, image } = blog;
    return (
        <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
            <Link href={`/blog/${slug}`} key={slug}>
                <a className="block rounded-md overflow-hidden">
                    <img
                        src={image}
                        className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                        width="250px" height="250px"
                    />
                </a>
            </Link>
            <div className="mt-3">
                <Link href={`/blog/${slug}`} key={slug}>
                    <a >
                        <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                            {title}
                        </h2>
                    </a>
                </Link>
                <div className="mt-2 flex space-x-3">
                    <div className="flex text-gray-400 text-sm items-center">
                        <span className="mr-2 text-xs">
                            <i className="far fa-user" />
                        </span>
                        {author?.name}
                    </div>
                    <div className="flex text-gray-400 text-sm items-center">
                        <span className="mr-2 text-xs">
                            <i className="far fa-clock" />
                        </span>
                        {createdAt}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function MainSection() {
    return (
        <main className="pt-12 bg-gray-100 pb-12">
            <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">

                <div className="xl:w-8/12 lg:w-9/12 w-full xl:ml-6 lg:mr-6">
                    <div className="flex bg-white px-3 py-2 justify-between items-center rounded-sm mb-5">
                        <h5 className="text-base uppercase font-semibold font-roboto">POSTS</h5>
                        <a href="#" className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                            Create Post
                        </a>
                    </div>
                    {/* big post */}

                    {/* regular post */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {blogs?.map((blog, index) => <SingleBlog key={index} blog={blog} />)}
                    </div>
                </div>
                {/* right sidebar */}
                <RightSidebar />
            </div>
        </main>
    )
}
