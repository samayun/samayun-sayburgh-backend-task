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
                    <div class="text-green-500  font-bold rounded px-4 py-2 text-4xl">
                        404
                    </div>
                    <div class="border border-t-4.0rounded text-red-100 px-4 py-3 text-gray-700">
                        <p>Page Not Found</p>
                    </div>
                </div>
            </div>
        </div>
    )
}