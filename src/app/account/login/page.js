/* eslint-disable @next/next/no-img-element */
'use client';
import Container from '@/component/container';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
    const [password, setPassword] = useState(true);

    return (
        <>
            <Container title="account log in" />
            <div className="flex w-full py-[24px] px-[50px]">
                <div className="w-full flex justify-between">
                    <div className="w-[40%] px-[60px]">
                        <h1 className="text-[32px] font-medium">Welcome back! Log in.</h1>
                        <p className="py-3">Enter your email and password to log into your account.</p>
                        <form>
                            <div className="">
                                <div className="w-full mb-4">
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="w-full mb-4 relative">
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="Password"
                                        type={password ? 'password' : 'text'}
                                    />
                                    <div
                                        className="absolute right-4 top-[20%] cursor-pointer"
                                        onClick={() => setPassword(!password)}
                                    >
                                        {password ? <p className="">show</p> : <p className="">hide</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between  mb-4">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="p-3 border-[1px] border-[#ccc] outline-none" />
                                    <label>Remember Me</label>
                                </div>
                                <Link href="/account/recover">
                                    <span className="underline">FORGOT PASSWORD?</span>
                                </Link>
                            </div>
                            <div className="flex items-center justify-items-center gap-2">
                                <button className="px-[24px] py-[10px] bg-[#000000] rounded-[80px] border-[1px] border-[#000000]">
                                    <span className="uppercase text-[#ffffff]">log in</span>
                                </button>
                                <div className="flex gap-2">
                                    <p>Not a member?</p>
                                    <Link href="/account/create">
                                        <span className="uppercase underline">sign up</span>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-[50%] pr-[60px]">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/2UAZa14ns0xSzkxR3jP07X/6e94babb77554bd09277c7b671665498/login_image.webp?fm=webp&w=640&q=75"
                            alt="images"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
