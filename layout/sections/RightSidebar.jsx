import Link from 'next/link';
import Categories from '../../components/Categories';
import Tags from '../../components/Tags';
import poplarblogs from "../../api/blogData";

function PoplarBlog({ blog }) {
    const { title, slug, body, author, tags, createdAt, image } = blog;
    return (
        <Link href={`/blog/${slug}`}>
            <a className="flex group">
                <div className="flex-shrink-0">
                    <img src={image} className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover" />
                </div>
                <div className="flex-grow pl-3">
                    <h5 className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                        {title}
                    </h5>
                    <div className="flex text-gray-400 text-sm items-center">
                        <span className="mr-1 text-xs"><i className="far fa-clock" /></span>
                        {createdAt}
                    </div>
                </div>
            </a>
        </Link>
    )
}
export default function RightSidebar() {
    return (
        <div className="lg:w-3/12 w-full mt-8 lg:mt-0">
            {/* Social plugin */}
            <div className="w-full bg-white shadow-sm rounded-sm p-4 ">
                <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Social Plugin</h3>
                <div className="flex gap-2">
                    <a href="https://linkedin.com/samayun" target="_blank" className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
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
            <Categories />
            {/* Popular posts */}
            <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
                <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Popular Posts</h3>
                <div className="space-y-4">
                    {poplarblogs?.map((blog, index) => <PoplarBlog key={index} blog={blog} />)}
                </div>
            </div>
            {/* tag */}
            {/* categories */}
            <Tags />
        </div>
    )
}
