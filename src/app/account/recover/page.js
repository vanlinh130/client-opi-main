/* eslint-disable @next/next/no-img-element */
'use client';
import Container from '@/component/container';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <Container title="account log in" />
            <div className="flex py-[24px] px-[50px]">
                <div className="w-full flex justify-between">
                    <div className="w-[40%] px-[60px]">
                        <h1 className="text-[32px] font-medium">Trouble Logging In?</h1>
                        <p className="py-3">
                            It happens. Enter your email and we’ll send you instructions to reset your password.
                        </p>
                        <form>
                            <div className="">
                                <div className="w-full mb-4">
                                    <input
                                        className="p-2 w-full border-[1px] border-[#ccc] outline-none"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-items-center gap-2">
                                <button className="px-[24px] py-[10px] bg-[#000000] rounded-[80px] border-[1px] border-[#000000]">
                                    <span className="uppercase text-[#ffffff]">RESET MY PASSWORD</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-[50%] pr-[60px]">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/4k5B70Cxh1NxTPGn5lCylg/9a3d1cbcfda4ae713f765b7a0ff7d7af/module_global-1044x1044.jpg?fm=webp&w=640&q=75"
                            alt="images"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
