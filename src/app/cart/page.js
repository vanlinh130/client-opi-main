/* eslint-disable @next/next/no-img-element */
'use client';
import Container from '@/component/container';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <Container title="account log in" />
            <div className="flex w-full py-[24px] px-[50px] justify-between">
                <div className="w-[65%]">
                    <div className="flex items-center justify-items-center mb-[32px]">
                        <h1 className="text-[32px] font-medium">
                            Shopping Bag <span className="text-[16px]">(0 items)</span>
                        </h1>
                    </div>
                    <div className="py-[24px] my-[1px] border-y-[1px] border-y-[#ccc]">
                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                <div className="w-[90px] h-[118px]">
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0649/4879/7673/files/the_leo-nly_one_islh023_long_lasting_nail_polish_99399000122_2000x2477_7e32c3aa-6bf6-4cd0-8c13-ef53325706b9.jpg?v=1689032079&width=96"
                                        alt=""
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="">
                                        <p className="uppercase text-[14px]">INFINITE SHINE</p>
                                        <p className="text-[18px]">The Leo-nly One</p>
                                        <p className="text-[14px]">15 mL - 0.5 Fl. Oz.</p>
                                    </div>
                                    <div className="px-2">
                                        <div className="flex border-[1px] border-[#ccc] rounded-full justify-around p-1">
                                            <button className="text-[18px]">-</button>
                                            <button className="text-[18px]">1</button>
                                            <button className="text-[18px]">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="text-[18px]">$13.99</p>
                                <button className="uppercase underline">REMOVE</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-items-center gap-2 mt-[24px]">
                        <button className="px-[24px] py-[10px] rounded-[80px] border-[1px] border-[#000000]">
                            <span className="uppercase">CONTINUE SHOPPING</span>
                        </button>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="bg-[#f6f6f6] px-[40px] py-[24px]">
                        <div className="">
                            <div className="mb-[24px]">
                                <p className="text-[20px]">Order Summary</p>
                            </div>
                            <div className="mb-[24px] flex justify-between">
                                <p className="text-[14px]">Subtotal:</p>
                                <span className="text-[14px]">$0.00</span>
                            </div>
                            <div className="border-b-[1px] border-b-[#ccc]">
                                <p className="text-[14px] mb-[24px] ">Shipping & taxes calculated at checkout</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-[24px] flex justify-between">
                                <p className="text-[14px]">Total:</p>
                                <span className="text-[14px]">$0.00</span>
                            </div>
                            <div className="w-full flex items-center justify-items-center gap-2">
                                <button className="w-full px-[24px] py-[10px] rounded-[80px] bg-[#cacaca]">
                                    <span className="uppercase">checkout on AMAZON.COM</span>
                                </button>
                            </div>
                            <p className="text-[14px] mt-[24px]">
                                OPI ships within the United Kingdom and the European Union. Shipping is not available to
                                Luxembourg, Switzerland, or Russia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </>
    );
}
