export default function Login() {
    return (
        <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
            <div className="bg-white w-96 shadow-xl rounded p-5">
                <h1 className="text-3xl font-medium">Welcome to Developer's Planet</h1>
                <p className="text-sm text-red-500">Minimal login page for day to day use</p>
                <form className="space-y-5 mt-5">
                    <input type="text" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" />
                    <div className="w-full flex items-center border border-gray-800 rounded px-3">
                        <input type="password" className="w-4/5 h-12" placeholder="Password" />
                        <span className="text-blue-700 hover:bg-blue-400 rounded-md px-3">Show</span>
                    </div>
                    <div className>
                        <a href="#!" className="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">Forgot Password ?</a>
                    </div>
                    <button className="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">Login</button>
                </form>
            </div>
        </div>
    );
}