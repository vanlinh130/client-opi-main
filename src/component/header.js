import Link from 'next/link';
import React from 'react';
import { BiMap, BiUser } from 'react-icons/bi';
import { GiSmartphone } from 'react-icons/gi';
import { PiShoppingCartThin } from 'react-icons/pi';
import { AiOutlineKey, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';

const Header = () => {
    const navItems = [
        {
            id: 1,
            title: 'Products',
            link: 'shop-products',
        },
        {
            id: 2,
            title: 'News',
            link: 'whats-new',
        },
        {
            id: 3,
            title: 'BESTSELLERS',
            link: 'bestsellers',
        },
        {
            id: 4,
            title: 'PROFESSIONALS',
            link: 'account',
        },
        {
            id: 5,
            title: 'NAIL ART',
            link: 'nail-art',
        },
        {
            id: 6,
            title: 'GIFTS',
            link: 'gifts',
        },
        {
            id: 7,
            title: 'Blogs',
            link: 'blog',
        },
    ];

    return (
        <div className="">
            <div className="w-full bg-[#000000] text-[#fff] py-[6px]">
                <div className="flex w-full ">
                    <div className="w-[33.3%]"></div>
                    <div className="w-[33.3%]">
                        <h3>NEW Big Zodiac Energy Collection</h3>
                    </div>
                    <div className="flex w-[33.3%] gap-6">
                        <Link href="/" className="flex items-center">
                            <BiMap />
                            <span className="ml-2">SALON FINDER</span>
                        </Link>
                        <Link href="/" className="flex items-center">
                            <GiSmartphone />
                            <span className="ml-2">1-800-935-5273</span>
                        </Link>
                        <Link href="/" className="flex items-center">
                            <AiOutlineKey />
                            <span className="ml-2">PROFESSIONALS</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white flex">
                <div className="mx-[230px] px-[50px] w-full">
                    <div className="py-5 flex items-center justify-between">
                        <Link href="/">
                            <div className="w-[130px] h-[40px]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 130 40">
                                    <path
                                        d="M99.444 23.237a3.232 3.232 0 0 0 3.23-3.233 3.232 3.232 0 0 0-3.23-3.234 3.232 3.232 0 0 0-3.23 3.233 3.232 3.232 0 0 0 3.23 3.234Zm-52.964 0a3.232 3.232 0 0 0 3.23-3.233 3.232 3.232 0 0 0-3.23-3.234 3.232 3.232 0 0 0-3.23 3.233 3.232 3.232 0 0 0 3.23 3.234ZM17.81 0c9.41 0 17.036 8.951 17.036 20.004C34.846 31.056 27.219 40 17.81 40 8.4 40 .773 31.042.773 20.004.773 8.966 8.4 0 17.81 0Zm0 1.793c-5.11 0-9.256 4.145-9.256 9.267v17.887c0 5.115 4.14 9.267 9.255 9.267 5.116 0 9.256-4.145 9.256-9.267V11.06c0-5.115-4.14-9.267-9.256-9.267Zm93.892-.926v1.455h5.402V37.26h-5.402v1.455h18.071V37.26h-5.402V2.322h5.402V.867h-18.071ZM65.586 19.893h7.48c4.844 0 6.282-3.931 6.282-8.789 0-4.857-1.438-8.789-6.283-8.789h-7.48v17.579Zm0 17.366h5.402v1.455H52.917v-1.455h5.402V2.322h-5.402V.867L75.664.853c5.659 0 11.494 4.593 11.494 10.259S81.323 21.37 75.664 21.37H65.586v15.895-.007Z"
                                        fill="#000"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </Link>
                        <nav className="flex">
                            {navItems.map((item, index) => {
                                return (
                                    <>
                                        <ul key={index} className="flex items-center ml-[40px]">
                                            <li className="uppercase cursor-pointer">
                                                <Link href={`/collections/${item.link}`}>{item.title}</Link>
                                            </li>
                                        </ul>
                                    </>
                                );
                            })}
                        </nav>
                        <nav className="flex">
                            <button className="p-2">
                                <AiOutlineSearch className="text-[25px]" />
                            </button>
                            <Link href="/account/wishlist">
                                <div className="p-2">
                                    <AiOutlineHeart className="text-[25px]" />
                                </div>
                            </Link>
                            <Link href="/account/login">
                                <div className="p-2">
                                    <BiUser className="text-[25px]" />
                                </div>
                            </Link>
                            <Link href="">
                                <div className="relative">
                                    <div className="p-2">
                                        <PiShoppingCartThin className="text-[25px]" />
                                    </div>
                                    <div className=" bg-[#000000] absolute bottom-0 right-0 rounded-full">
                                        <span className="text-[#ffffff]">3</span>
                                    </div>
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
