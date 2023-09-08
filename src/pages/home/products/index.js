/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { products } from '../data';

const HomeProduct = () => {
    return (
        <div className="px-0">
            <div className="mx-[40px] mb-[24px] px-[50px] flex justify-between">
                <h2 className="text-3xl font-normal">Shop the Products</h2>
                <div className="flex items-center gap-3">
                    <button>
                        <h3 className="text-base font-medium hover:border-b-[1px] hover:border-b-black uppercase">
                            NAIL POLISH
                        </h3>
                    </button>
                    <button>
                        <h3 className="text-base font-medium hover:border-b-[1px] hover:border-b-black uppercase">
                            PRESS-ON NAILS
                        </h3>
                    </button>
                    <button>
                        <h3 className="text-base font-medium hover:border-b-[1px] hover:border-b-black uppercase">
                            CARE & TREATMENTS
                        </h3>
                    </button>
                    <button>
                        <h3 className="text-base font-medium hover:border-b-[1px] hover:border-b-black uppercase">
                            PROFESSIONAL SYSTEMS
                        </h3>
                    </button>
                </div>
            </div>
            <div className="mx-[40px] mb-[24px] px-[50px]">
                <div className="flex w-full justify-between">
                    <div className="w-[24%] relative">
                        <div className="w-full h-full">
                            <img
                                src="https://images.ctfassets.net/uyr7q3lwti8o/1dfEzkAvqHZBoBE8ZVavX0/64924db59c41105b10ac62cf59635ee0/fys_module-1-d.jpg?fm=webp&w=384&q=75"
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                        <div className="absolute top-6 left-6 w-[52%]">
                            <h5 className="text-2xl font-medium text-start text-[#ffffff]">
                                Explore mani formulas, treatments, and looks to find your vibe.
                            </h5>
                        </div>
                    </div>
                    {products?.map((item, index) => {
                        return (
                            <div key={index} className={`] w-[24%] ${item.colorMain} ${item.colorText}`}>
                                <div className="flex p-4 mb-6 w-full">
                                    <div className="w-[30%] h-[134px]">
                                        <img src={item.image} alt="" className="w-[104px] h-full" />
                                    </div>
                                    <div className="w-[60%]">
                                        <h4 className="mt-3 mb-1 text-2xl font-medium">{item.heading}</h4>
                                        <p className="text-xl font-light">{item.title}</p>
                                    </div>
                                </div>
                                <div className="flex w-full justify-center">
                                    <div className="w-[30%]">
                                        <div className="h-[40px] flex justify-center">
                                            <img src={item.imageIcon1} alt="" className="w-[40px] h-full" />
                                        </div>
                                        <p className="text-base font-light text-center mt-2">{item.caption1}</p>
                                    </div>
                                    <div className="w-[30%]">
                                        <div className="h-[40px] flex justify-center">
                                            <img src={item.imageIcon2} alt="" className="w-[40px] h-full" />
                                        </div>
                                        <p className="text-base font-light text-center mt-2">{item.caption2}</p>
                                    </div>
                                    <div className="w-[30%]">
                                        <div className="h-[40px] flex justify-center">
                                            <img src={item.imageIcon3} alt="" className="w-[40px] h-full" />
                                        </div>
                                        <p className="text-base font-light text-center mt-2">{item.caption3}</p>
                                    </div>
                                </div>
                                <div className="mx-8 mb-8">
                                    <button className="mt-8">
                                        <span className="px-[24px] py-[10px] bg-[#ffffff] text-[#000000] rounded-[80px]">
                                            SHOP NOW
                                        </span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;
