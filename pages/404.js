export function getStaticProps() {
    return {
        props: { title: "404 Not Found" }
    }
}
export default function NotFound() {
    return (
        <div className="container">
            <div className=" justify-center  text-center py-12">
                <div role="alert" className="p-3">
                    <div class="text-red-500 text-white font-bold rounded-t px-4 py-2 font-xl">
                        404
                    </div>
                    <div class="border border-t-0 border-red-400 rounded-b text-red-100 px-4 py-3 text-red-700">
                        <p>Page Not Found</p>
                    </div>
                </div>
            </div>
        </div>
    )
}