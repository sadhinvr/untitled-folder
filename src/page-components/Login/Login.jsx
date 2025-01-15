import Link from "next/link";
import React from "react";

function Login() {
    return (
        <div className='h-screen flex '>
            <div className='p-5 lg:p-10 lg:rounded-r-3xl overflow-hidden relative bg-white flex-1 lg:min-w-[400px] lg:max-w-[600px] 2xl:max-w-[800px]'>
                <Link className='xl:w-64 md:w-60 w-56 block absolute' href='/'>
                    <img src='/logo.png' alt='' />
                </Link>

                <div className='h-full flex flex-col justify-center items-center text-center'>
                    <div className=''>
                        <h1 className='text-3xl font-bold mt-10 '>
                        Login to Continue
                        </h1>
                        <div className='font-medium text-gray-500 mt-3 mb-10'>
                            Use your google account to Login/Register{" "}
                        </div>

                        <div className='cursor-pointer py-3 flex items-center gap-5 border border-gray-200 rounded-md w-max-[320px] relative justify-center '>
                                <img className="w-6 absolute left-8" src="/google-logo.svg" alt="" />
                                <div className="font-medium">Continue with Google</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' -ml-6  bg-gray-400 hidden lg:block lg:flex-1'>
                <img
                    className='object-cover object-center w-full h-full max-w-none'
                    src='/loginbanner.svg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default Login;
