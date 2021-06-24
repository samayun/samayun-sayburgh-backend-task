import Link from 'next/link';
import categories from '../api/categories';

function Categories() {
    return (
        < div className="w-full bg-white shadow-sm rounded-sm p-4 " >
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
            <div className="space-y-2">
                {
                    categories?.map(category => {
                        return (
                            <Link key={category?.slug} href={`/category/${category?.slug}`} >
                                <a href={`/category/${category?.slug}`} className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                                    <span className="mr-2">
                                        <i className="far fa-folder-open" />
                                    </span>
                                    <span>{category?.name}</span>
                                    <p className="ml-auto font-normal">({category?.count})</p>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Categories;