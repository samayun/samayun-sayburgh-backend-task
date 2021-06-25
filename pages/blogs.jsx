import RightSidebar from '../layout/sections/RightSidebar';
const author = {
    image: "https://miro.medium.com/fit/c/56/56/1*SSYUQ8TIIDqoE4sKrcTCXw.jpeg",
    name: "Samayun Miah Chowdhury",
}
const data = {
    id: 2,
    title: "React js:All you need to Know 💪",
    body: `<p>In this blog I gave guideline all topics to know about react.js .</p>`,
    image: "https://miro.medium.com/max/700/1*YePVzjkjsadOqzQ03wl5kA.png",
    tags: ["React.js", "React-guideline"],
    slug: "https://samayunmc.medium.com/%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%9F-%E0%A6%9C%E0%A7%87%E0%A6%8F%E0%A6%B8-%E0%A6%95%E0%A7%8B%E0%A6%A1-%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A6%B2%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%82-%E0%A6%93-%E0%A6%B2%E0%A7%87%E0%A6%9C%E0%A6%BF-%E0%A6%B2%E0%A7%8B%E0%A6%A1%E0%A6%BF%E0%A6%82-%E0%A6%95%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A7%8B%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%9F-60bb9ec13c21",
    author,
    tags: ["GraphQL", "React", "frontend"],
    createdAt: "May 7 2021",
}
const categoryPosts = [{
    id: 3,
    title: "JavaScript The Tricky Parts🙄: Part-2",
    body: `Hey , I am Samayun Chowdhury speaking here to make your coding life easier, smarter & comfortable. I will talk about most critical parts of javascript in this series . So don’t waste time . Take a glass of coffee & read my blog . Here I am covering 10 tricky topics of javascript `,
    image: "https://miro.medium.com/max/678/1*1MRoBnT388OcTWy--FDEKQ.jpeg",
    tags: ["JavaScript", "JS Tricky Parts"],
    slug: "https://samayunmc.medium.com/javascript-the-tricky-parts-part-2-1cf32a8dd825",
    author,
    createdAt: "May 8 2021",
},
{
    id: 4,
    image: "https://miro.medium.com/max/700/1*g61eB6xahuaTbfjWCFbX9g.png",
    title: "রিয়েক্ট জেএস কোড স্পলিটিং ও লেজি লোডিং কম্পোন্যান্ট",
    body: `কোরিয়ার থ্রিলার মুভি দেখেন,মানি হেইস্ট,গট দেখছেন?
                    যদি দেখে থাকেন,
                    সাসপেন্সের টেলায় ঘুম আসে না তাই-না?
                    আজকে আমি রিয়েক্টের সাসপেন্স নিয়ে কথা বলবো ৷
                    কিন্তু আমরা তোহ প্রোগ্রামার। অলস মস্তিষ্ক তাই কোড বার বার লিখতে ভাল্লাগে না 🙄
                    রিফেক্টর,ফাংশন, রিইউজেবল কম্পোনেন্ট বানাতে অভ্যস্ত হয়ে পড়েছি আর দিন দিন অলস(লেজি) হচ্ছি ।
                    আমি কথা বলছি লেজি লোডিং নিয়ে৷ `,
    slug:
        "https://samayunmc.medium.com/%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%9F-%E0%A6%9C%E0%A7%87%E0%A6%8F%E0%A6%B8-%E0%A6%95%E0%A7%8B%E0%A6%A1-%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A6%B2%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%82-%E0%A6%93-%E0%A6%B2%E0%A7%87%E0%A6%9C%E0%A6%BF-%E0%A6%B2%E0%A7%8B%E0%A6%A1%E0%A6%BF%E0%A6%82-%E0%A6%95%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A7%8B%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%9F-60bb9ec13c21",
    author,
    createdAt: "08 May 2021"
}]
const RelatedPosts = ({ posts }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4" >
            {posts && posts?.map(post => <div className="rounded-sm bg-white p-3 pb-5 shadow-sm">
                <a href={`/blog/${post?.slug}`} className="block rounded-md overflow-hidden">
                    <img src={post?.image} className="w-full h-40 object-cover transform hover:scale-110 transition duration-500" />
                </a>
                <div className="mt-3">
                    <a href={`/blog/${post?.slug}`}>
                        <h2 className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">{post?.title} </h2>
                    </a>
                    <div className="mt-2 flex space-x-3">
                        <div className="flex text-gray-400 text-xs items-center">
                            <span className="mr-1 text-xs">
                                <i className="far fa-user" />
                            </span>
                            {post?.author?.name || post?.author}
                        </div>
                        <div className="flex text-gray-400 text-xs items-center">
                            <span className="mr-1 text-xs">
                                <i className="far fa-clock" />
                            </span>
                            {post?.createdAt}
                        </div>
                    </div>
                </div>
            </div>)}
        </div >
    )
}
const Comments = ({ comments }) => {
    return (
        <div className="p-4 bg-white rounded-sm shadow-sm mt-8">
            <h4 className="text-base uppercase  font-semibold mb-4 font-roboto">Post a comment</h4>
            <p className="text-sm text-gray-500 mb-4"> {comments?.length || 0} comments</p>
            <div className="space-y-5">
                {comments && comments?.map(cmt => <div className="flex items-start border-b  pb-5 border-gray-200">
                    {cmt && <>
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
                    </>}
                </div>)}
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
    )
}
const FetchBlog = function ({ blog }) {
    const { title, body, image, author, tags, websites, createdAt } = blog;
    return (
        <div>
            {/* Main content */}
            <div className="xl:w-12/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">
                {/* post view */}
                <div className="rounded-sm overflow-hidden bg-white shadow-sm">
                    {image && <div className>
                        <img src={image} className="w-full h-96 object-cover" />
                    </div>}
                    <div className="p-4 pb-5">
                        <h2 className="block text-2xl font-semibold text-gray-700 font-roboto">
                            {title}
                        </h2>
                        <div className="mt-2 flex space-x-4">
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-2 text-xs">
                                    <i className="far fa-user" />
                                </span>
                                {JSON.stringify(author?.name || author)}
                            </div>
                            <div className="flex text-gray-400 text-sm items-center">
                                <span className="mr-2 text-xs">
                                    <i className="far fa-clock" />
                                </span>
                                {createdAt}
                            </div>
                        </div>
                        <div>
                            {body}
                        </div>
                        {tags && <div className="flex items-center flex-wrap gap-2 mt-5">
                            {tags?.map(tag => <a
                                href={`/tag/${tag}`}
                                className="px-3 py-1 text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white"
                            >{tag}</a>)}
                        </div>
                        }

                        {websites && <div className="mt-5 pt-5 border-t border-gray-200 flex gap-2">
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
                        </div>}
                    </div>
                </div>

                <RelatedPosts posts={categoryPosts} />
                {/* comment */}
                <Comments postId={data?.id} />
            </div>

        </div>
    );
}

function Blog() {
    return (
        <main className="pt-12 bg-gray-100 pb-12">
            <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
                <div className="xl:w-8/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">
                    <FetchBlog blog={data} />
                </div>
                <RightSidebar />
            </div>
        </main>
    )
}

export default Blog;