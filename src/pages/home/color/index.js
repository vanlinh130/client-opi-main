/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { colors } from './../data';

const HomeColor = () => {

    return (
        <div className="py-10">
            <div className="mx-[40px] mb-[24px] px-[50px] flex justify-between">
                <h2 className="text-3xl font-normal">Shop By Color</h2>
                <div className="flex items-center gap-3">
                    <button>
                        <h3 className="text-base font-medium hover:border-b-[1px] hover:border-b-black uppercase">
                            Nudes & Neutrals
                        </h3>
                    </button>
                    <button>
                        <h3 className="text-base font-medium hover:border-b-[1px] hover:border-b-black uppercase">
                            BLUES
                        </h3>
                    </button>
                    <button>
                        <h3 className="text-base font-medium hover:border-b-[1px] hover:border-b-black uppercase">
                            PINKS
                        </h3>
                    </button>
                </div>
            </div>
            <div className="mx-[40px] relative">
                <div className="w-full flex flex-wrap">
                    {colors?.map((item, index) => {
                        return (
                            <>
                                <div key={index} className={`w-[10%] h-[144px] ${item.title}`}>
                                    <button className="w-full h-full hover:shadow-3xl"></button>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="absolute bottom-[32px] right-[32px]">
                    <Link href="">
                        <div className="mt-6">
                            <span className="px-[24px] py-[10px] bg-[#ffffff] rounded-[80px]">SURPRISE ME</span>
                        </div>
                    </Link>
                </div>
                {/* <div className="absolute left-[30%] top-0 w-full h-full">
                    <div>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0649/4879/7673/products/humidi-tea-brush-swatch_8b8b6c76-7bfe-4c19-af16-4e014975d163.jpg?v=1668642725&width=640"
                            alt=""
                        />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default HomeColor;
