import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import ShowError from "../components/ShowError";
import { useMutation } from "@apollo/client";
import MUTATE_REGISTER from '../lib/queries/register.graphql';
import Loading from '../components/Loading';
import { useRouter } from 'next/router';
import { useAuth } from "../context/AuthReducer";
import { useEffect } from "react";

export function getStaticProps() {
    return {
        props: { title: "Register" },
    };
}
export default function Register() {
    const router = useRouter();
    const [signup, { data, loading, error }] = useMutation(MUTATE_REGISTER);
    const { state, dispatch } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = variables => {
        signup({ variables });
        console.log(`variables `, variables)
        console.log(`error `, error?.message)
        console.log(`data`, data);
        if (data?.register) {
            dispatch({
                type: "AUTH_USER",
                payload: data?.register?.user,
                access_token: data?.register?.access_token
            })
            router.push('/');
            localStorage.setItem(`authData`, JSON.stringify(data.login))
        }
    };
    useEffect(() => {
        if (state?.user) {
            router.back();
        }
    }, []);

    if (loading) return <Loading />
    return (
        <div className="w-screen bg-white flex flex-col space-y-10 justify-center items-center">
            <div className="bg-white  shadow-xl rounded p-5">
                <p className="flex justify-center items-center border-radius-5 bg-blue px-3">
                    <Image src="/logo.png" height="100px" width="100px" />
                </p>
                {error?.message && <ShowError semiTitle="Register Failed " title={error?.message} />}
                {errors.name && <ShowError title="Name is required" />}
                {errors.username && <ShowError title={"Username is required"} />}
                {errors.email && (
                    <ShowError title={`Please provide valid email address `} />
                )}
                {errors.password && (
                    <ShowError title={"Password is required & at least 6 character"} />
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-5">
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        className="w-full h-12 border border-gray-800 rounded px-3"
                        placeholder="Name"
                    />

                    <input
                        {...register("email", { required: true })}
                        type="email"
                        className="w-full h-12 border border-gray-800 rounded px-3"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        {...register("username", { required: true })}
                        className="w-full h-12 border border-gray-800 rounded px-3"
                        placeholder="Username"
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
                    <input
                        type="hidden"
                        {...register("role", { required: true })}
                        value="USER"
                    />
                    <div className="">
                        <p className="text-blue-700 hover:text-green-400 rounded-md px-3">
                            <Link href="/login">
                                Already have account please, sign in here
                            </Link>
                        </p>

                        <button
                            type="submit"
                            className="text-center w-full bg-green-900 rounded-md text-white py-3 font-medium"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
