/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { nailArt } from '../data';

const NailArt = () => {
    return (
        <div className="bg-[#f6f6f6] py-[64px]">
            <div className="mx-[40px] px-[50px] flex justify-between">
                <div className="w-[40%]">
                    <h2 className="text-[32px] font-normal">Nail Art, Nailed</h2>
                    <h2 className="text-[32px] font-light">Jaw-Dropping Techniques & Tutorials</h2>
                </div>
                <div className="w-[60%] flex items-center gap-3">
                    <div className="mb-8">
                        <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] border-[#000000] hover:bg-[#000000] hover:text-[#ffffff]">
                            <h3 className="uppercase">Big Zodiac Energy</h3>
                        </button>
                    </div>
                    <div className="mb-8">
                        <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] border-[#000000] hover:bg-[#000000] hover:text-[#ffffff]">
                            <h3 className="uppercase">Trending</h3>
                        </button>
                    </div>
                    <div className="mb-8">
                        <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] border-[#000000] hover:bg-[#000000] hover:text-[#ffffff]">
                            <h3 className="uppercase">Most Popular</h3>
                        </button>
                    </div>
                    <div className="mb-8">
                        <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] border-[#000000] hover:bg-[#000000] hover:text-[#ffffff]">
                            <h3 className="uppercase">All Tutorials</h3>
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="flex gap-2">
                    {nailArt.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="w-[19.5%] bg-[#ffffff] rounded-[10px]">
                                    <div className="relative">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="rounded-tl-[10px] rounded-tr-[10px] w-full h-full"
                                        />
                                        <div className="absolute top-5 right-5">
                                            <button className="rounded-full p-1 bg-[#ffffff]">
                                                <AiOutlineHeart className="text-[25px]" />
                                            </button>
                                        </div>
                                    </div>
                                    <Link href="">
                                        <div className="m-4">
                                            <h3 className="text-[23px] font-light">{item.title}</h3>
                                            <p className="text-[18px] font-normal mb-4">{item.name}</p>
                                            <p className="text-[18px] font-light">{item.text}</p>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NailArt;
