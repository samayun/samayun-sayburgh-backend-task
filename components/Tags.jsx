import Link from "next/link";
import tags from '../api/tags';

function Tags() {
    return (

        <div className="w-full bg-white shadow-sm rounded-sm p-4  mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Tags</h3>
            <div className="flex items-center flex-wrap gap-2">
                {
                    tags?.map(tag => {
                        return (
                            <Link key={tag?.slug} href={`/tag/${tag?.slug}`} >
                                <a className="px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white">{tag?.name}</a>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tags;