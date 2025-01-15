import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/../public/logo.png";
import { icons } from "@/components/Icons";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";

function Layout({ children }) {
    const [openMenu, setOpenMenu] = useState(false);

    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <>
            <header className='px-4 p-3  flex justify-between items-center border-b-[0.5px] border-gray-300 '>
                <div
                    className='text-gray-700 md:hidden cursor-pointer'
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {icons.menu}
                </div>

                <Link href='/'>
                    <Image
                        priority
                        src={logo}
                        className='h-12 w-auto'
                        alt='logo'
                    />
                </Link>

                <div className='w-9 h-9 bg-paint-0 text-white flex justify-center items-center rounded-full font-medium cursor-pointer '>
                    A
                </div>
            </header>

            <div className='flex relative '>
                {/* left */}
                <div
                    className={cn(
                        "h-full bg-gradient-to-tl pt-4 px-2 from-[#f6ffff] to-white  border-r-[0.5px] border-gray-300 w-72 md:w-auto lg:w-72 absolute md:static flex flex-col justify-between md:left-0 left-0 z-10",
                        { "-left-72": !openMenu }
                    )}
                    style={{
                        height: "calc(100vh - 72.5px)",
                        transition: "left .5s ease-in-out",
                    }}
                >
                    <nav className='flex flex-col gap-1'>
                        <Link
                            href='/dashboard'
                            className={cn(
                                "text-sm text-gray-700 hover:text-gray-900 flex hover:bg-[#ebf3f5] rounded-md p-2 items-center gap-2 transition ",
                                {
                                    "text-gray-900 bg-[#ebf3f5]":
                                        currentPath == "/dashboard",
                                }
                            )}
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                        >
                            <div className=''>{icons.dashboardIcon}</div>
                            <div className='font-medium md:hidden lg:block'>
                                Dashboard
                            </div>
                        </Link>

                        <Link
                            href='/transactions'
                            className={cn(
                                "text-sm text-gray-700 hover:text-gray-900 flex hover:bg-[#ebf3f5] rounded-md p-2 items-center gap-2 transition ",
                                {
                                    "text-gray-900 bg-[#ebf3f5]":
                                        currentPath == "/transactions",
                                }
                            )}
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                        >
                            <div className=''>{icons.transaction}</div>
                            <div className='font-medium md:hidden lg:block'>
                                Transactions
                            </div>
                        </Link>
                        
                        <Link
                            href='/settings'
                            className={cn(
                                "text-sm text-gray-700 hover:text-gray-900 flex hover:bg-[#ebf3f5] rounded-md p-2 items-center gap-2 transition ",
                                {
                                    "text-gray-900 bg-[#ebf3f5]":
                                        currentPath == "/settings",
                                }
                            )}
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                        >
                            <div className=''>{icons.settings}</div>
                            <div className='font-medium md:hidden lg:block'>
                            Settings
                            </div>
                        </Link>
                    </nav>

                    <div className='mb-2'>
                    <Link
                            href='/'
                            className={cn(
                                "text-sm text-gray-700 hover:text-gray-900 flex hover:bg-[#ebf3f5] rounded-md p-2 items-center gap-2 transition ",
                                {
                                    "text-gray-900 bg-[#ebf3f5]":
                                        currentPath == "/logout",
                                }
                            )}
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                        >
                            <div className=''>{icons.logout}</div>
                            <div className='font-medium md:hidden lg:block'>
                                Logout
                            </div>
                        </Link>
                    </div>
                </div>

                {/* right */}
                <main
                    style={{
                        height: "calc(100vh - 72.5px)",
                    }}
                    className='overflow-auto flex-1 pb-4'
                >
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout;
