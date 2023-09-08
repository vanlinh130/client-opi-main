/* eslint-disable @next/next/no-img-element */
'use client';
import Container from '@/component/container';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
    const [password, setPassword] = useState(true);

    return (
        <>
            <Container title="CREATE MY ACCOUNT" />
            <div className="flex w-full items-center justify-center py-[24px]">
                <div className="w-[60%] flex justify-between">
                    <div className="w-[40%]">
                        <h1 className="text-[32px] font-medium">Create my Account</h1>
                        <p className="py-3">Choose what applies to you:</p>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center mb-[24px] mt-[12px] gap-2">
                                <input type="radio" className="" />
                                <label>Consumer</label>
                            </div>
                            <div className="flex items-center mb-[24px] mt-[12px] gap-2">
                                <input type="radio" className="" />
                                <label>Professional</label>
                            </div>
                        </div>
                        <form>
                            <div className="">
                                <div className="w-full mb-4 flex gap-4">
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="First Name"
                                    />
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div className="w-full mb-4">
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="w-full mb-4">
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="Confirm Email Address"
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
                                <div className="w-full mb-4 relative">
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="Confirm Password"
                                        type={password ? 'password' : 'text'}
                                    />
                                    <div
                                        className="absolute right-4 top-[20%] cursor-pointer"
                                        onClick={() => setPassword(!password)}
                                    >
                                        {password ? <p className="">show</p> : <p className="">hide</p>}
                                    </div>
                                </div>
                                <div className="w-full mb-4">
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="Date of Birth"
                                    />
                                </div>
                                <div className="w-full mb-4">
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="Country"
                                    />
                                </div>
                                <div className="w-full mb-4">
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="Zip code / Post Code"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <p>
                                    We would like to keep you informed by email, text messages and other digital
                                    communications (including via targeted adverts online and via social media) about
                                    the latest offers, styling tips, trends and products from Wella Brands. If you would
                                    like to hear from us, please select the box below:
                                </p>
                                <div className="flex items-center mb-4 gap-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="p-3 border-[1px] border-[#ccc] outline-none"
                                        />
                                        <label>I want to receive marketing from</label>
                                    </div>
                                    <Link href="">
                                        <span className="underline">Wella Brands</span>
                                    </Link>
                                </div>
                                <div className="flex items-center mb-4 gap-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="p-3 border-[1px] border-[#ccc] outline-none"
                                        />
                                        <label>I have read and accept the </label>
                                    </div>
                                    <Link href="">
                                        <span className="underline">Terms & Conditions *</span>
                                    </Link>
                                </div>
                                <div className="flex items-center mb-4 gap-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="p-3 border-[1px] border-[#ccc] outline-none"
                                        />
                                        <label>Remember Me</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-items-center gap-2">
                                <button className="px-[24px] py-[10px] bg-[#000000] rounded-[80px] border-[1px] border-[#000000]">
                                    <span className="uppercase text-[#ffffff]">CREATE MY ACCOUNT</span>
                                </button>
                                <div className="flex gap-2">
                                    <p>Already a member?</p>
                                    <Link href="/account/login">
                                        <span className="uppercase underline">LOG IN</span>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-[40%]">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/4k5B70Cxh1NxTPGn5lCylg/9a3d1cbcfda4ae713f765b7a0ff7d7af/module_global-1044x1044.jpg?fm=webp&w=640&q=75"
                            alt="images"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
