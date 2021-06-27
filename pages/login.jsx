import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ShowError from "../components/ShowError";
import { useLazyQuery } from "@apollo/client";
import { initializeApollo } from '../lib/apollo';
import QUERY_LOGIN from '../lib/queries/login.graphql';
import Loading from '../components/Loading';
import ErrorComponent from '../components/ErrorComponent';
import { useRouter } from 'next/router';
import { useAuth } from "../context/AuthReducer";

export function getStaticProps() {
    return {
        props: { title: "Login" },
    };
}
export default function Login() {
    const router = useRouter();
    const [login, { data, loading, error }] = useLazyQuery(QUERY_LOGIN)
    // const auth = useSelector(state => state.auth);
    const { state, dispatch } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async variables => {
        login({ variables });
        console.log(`variables `, variables)
        console.log(`error `, error?.message)
        console.log(`data`, data);
        if (data) {
            dispatch({
                type: "AUTH_USER",
                payload: data?.login?.user,
                access_token: data?.login?.access_token
            })
            router.push('/');
            localStorage.setItem(`authData`, JSON.stringify(data.login))

        }

        // // dispatch(signInAction(credentials));
        // reset();
    };
    if (loading) return <Loading />
    return (
        <div className="w-screen bg-white flex flex-col space-y-10 justify-center items-center">
            <div className="bg-white w-96 shadow-xl rounded p-5">

                {/* <h1 className="text-3xl font-medium">Welcome to Developer's Planet</h1> */}
                <p className="flex justify-center items-center border-radius-5 bg-blue px-3">
                    <Image src="/logo.png" height="100px" width="100px" />
                </p>
                {error?.message && <ShowError semiTitle="Login Failed " title={error?.message} />}

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
