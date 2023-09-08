/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { cart } from '../data';

const HomeCart = () => {
    return (
        <div className="mx-[40px] mb-[24px] py-[50px]">
            <div className="flex w-full justify-between">
                <div className="relative w-[35%]">
                    <div className="w-full h-full">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/7LIExig4CQuXOLSlacUNRg/93255eb19547f8d94dafc7d94cb2929d/cc_module-1-d.jpg?fm=webp&w=640&q=75"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="absolute top-10 left-10 w-[40%]">
                        <h2 className="text-3xl font-medium">Big Zodiac Energy</h2>
                        <p className="text-xl font-light mt-3">
                            Give off Big Zodiac Energy with shimmers, glitters, pearls, and holographics for allll the
                            signs.
                        </p>
                        <div className="mb-8">
                            <button className="mt-8">
                                <span className="px-[24px] py-[10px] bg-[#000000] text-[#ffffff] rounded-[80px] uppercase">
                                    Shop the Signs
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[64%] flex gap-3">
                    {cart.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="w-[40%]">
                                    <div className="w-full relative">
                                        <div className="">
                                            <img src={item.image} alt="" className="" />
                                        </div>
                                        <div className="absolute top-5 left-5">
                                            <button className="rounded-[70px] bg-[#ffffff]">
                                                <p className="py-[2px] px-2">NEW</p>
                                            </button>
                                        </div>
                                        <div className="absolute top-5 right-5">
                                            <button className="rounded-full p-1 bg-[#ffffff]">
                                                <AiOutlineHeart className="text-[25px]" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="my-6 px-6">
                                        <h3 className="pb-2">
                                            <Link
                                                href="https://www.opi.com/products/infinite-shine-virgoals"
                                                className="flex flex-col"
                                            >
                                                <span className="uppercase text-xl font-normal">{item.name}</span>
                                                <span className="uppercase text-xl font-normal">{item.title}</span>
                                            </Link>
                                        </h3>
                                        <div className="w-full">
                                            <span className="text-2xl font-light">${item.price}</span>
                                            <div className="mb-8 w-full">
                                                <button className="mt-8 w-full px-[24px] py-[10px] rounded-[80px] border-[1px] border-[#000000]">
                                                    <span className="uppercase">add to bag</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomeCart;
