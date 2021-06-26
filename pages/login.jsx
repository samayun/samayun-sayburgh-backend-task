import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ShowError from "../components/ShowError";

// import { useDispatch, useSelector } from 'react-redux';
// import { signInAction } from '../store/actions/auth.action';

export function getStaticProps() {
    return {
        props: { title: "Login" },
    };
}
export default function Login() {
    // const auth = useSelector(state => state.auth);
    // const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (credentials) => {
        console.log(credentials);
        // dispatch(signInAction(credentials));
        // reset();
    };
    return (
        <div className="w-screen bg-white flex flex-col space-y-10 justify-center items-center">
            <div className="bg-white w-96 shadow-xl rounded p-5">
                {/* <h1 className="text-3xl font-medium">Welcome to Developer's Planet</h1> */}
                <p className="flex justify-center items-center border-radius-5 bg-blue px-3">
                    <Image src="/logo.png" height="100px" width="100px" />
                </p>
                {errors?.email && (
                    <ShowError
                        semiTitle="Invalid "
                        title={"Please provide valid email address"}
                    />
                )}
                {errors.password && (
                    <ShowError
                        semiTitle="Invalid "
                        title={"Password is required & at least 6 character "}
                    />
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-5">
                    <input
                        id="email"
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Your Email"
                        className="w-full h-12 border border-gray-800 rounded px-3"
                        placeholder="Email"
                    />
                    <div className="w-full flex items-center border border-gray-800 rounded px-3">
                        <input
                            type="password"
                            {...register("password", { required: true, minLength: 6 })}
                            className="w-4/5 h-12"
                            placeholder="Password"
                        />
                        <span className="text-blue-700 hover:bg-blue-400 rounded-md px-3">
                            Show
                        </span>
                    </div>

                    <div className="">
                        <p className="text-blue-700 hover:text-green-400 rounded-md p-3">
                            <Link href="/register">
                                Don't have account please, register here
                            </Link>
                        </p>

                        <button
                            type="submit"
                            className="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
