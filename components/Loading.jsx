export default function Loading() {
    return (
        <div class="min-h-screen flex justify-center items-center ">
            <div class="loader bg-white p-5 rounded-full flex space-x-3">
                <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
            </div>
        </div>
    )
}
