/* eslint-disable @next/next/no-img-element */
'use client';
import Container from '@/component/container';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import { cart_Add, cart_Big, cart_Envy, cart_OPI, cart_Repair } from './data';
import ReactStars from 'react-rating-stars-component';

export default function Page() {
    return (
        <div className="">
            <Container title="what new" />
            <div className="flex w-full">
                <div className="bg-[#64E197] w-1/2">
                    <div className="flex flex-col justify-center h-full px-[48px]">
                        <h1 className="text-[64px] font-normal">What s New</h1>
                        <p className="text-[22px] font-light mt-3">
                            Get the deets on our latest drops like what s new in our shade collection, gel, dip, and
                            more.
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/7qtolyeKSVVeBHq7pmVZ0O/4f30b9674d793a4e3bf4fbf65f82fa4a/plp_bze-new-in-banner-1440x720.jpg?fm=webp&w=1080&q=75"
                            alt="images"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-[230px] px-[50px]">
                <div className="flex justify-between my-[32px]">
                    <div className="flex gap-5">
                        <details className="dropdown">
                            <summary className="m-1">COLLECTION</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <a>Classics(145)</a>
                                </li>
                                <li>
                                    <a>Powder Perfection(132)</a>
                                </li>
                                <li>
                                    <a>Classics GelColor(98)</a>
                                </li>
                                <li>
                                    <a>Infinite Shine Iconic Shades(77)</a>
                                </li>
                                <li>
                                    <a>Infinite Shine(61)</a>
                                </li>
                                <li>
                                    <a>ProSpa(46)</a>
                                </li>
                                <li>
                                    <a>Celebration(45)</a>
                                </li>
                                <li>
                                    <a>Big Zodiac Energy(42)</a>
                                </li>
                                <li>
                                    <a>Fall Wonders(42)</a>
                                </li>
                                <li>
                                    <a>Hollywood(42)</a>
                                </li>
                                <li>
                                    <a>Me, Myself, and OPI(42)</a>
                                </li>
                                <li>
                                    <a>Summer Make the Rules(42)</a>
                                </li>
                                <li>
                                    <a>Xbox(42)</a>
                                </li>
                                <li>
                                    <a>Muse of Milan(42)</a>
                                </li>
                                <li>
                                    <a>Nature Strong(42)</a>
                                </li>
                                <li>
                                    <a>Mexico City(42)</a>
                                </li>
                            </ul>
                        </details>
                        <details className="dropdown">
                            <summary className="m-1">COLOR</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <a>
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/5f2AJ2b3um5OO5HVRuiPOr/0a48524255ecacfe7e27dfe4aa8ab61d/dot_pinks-20x20.png?fm=webp&w=32&q=75"
                                            alt="images"
                                        />
                                        <span> Pink (285)</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/1Ur8d9pOCNAC9JGjH8ORWS/aa79bc7058ed5e1114e8c23271d4d33d/dot_purples-20x20.png?fm=webp&w=32&q=75"
                                            alt="images"
                                        />
                                        <span> Purple (202)</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/2JKL0BCe45QP4PPv0JsZMc/90096502a3ad76c62f4e5e035b1ac681/dot_blues-20x20.png?fm=webp&w=32&q=75"
                                            alt="images"
                                        />
                                        <span> Blue (176)</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/bn6zbQvsvP3xePho4TUy1/afbe65d470d950dc3fe40784a0fbd0f1/dot_reds-20x20.png?fm=webp&w=32&q=75"
                                            alt="images"
                                        />
                                        <span> Red (174)</span>
                                    </a>
                                </li>
                            </ul>
                        </details>
                        <details className="dropdown">
                            <summary className="m-1">FINISH</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <a>Classics(145)</a>
                                </li>
                                <li>
                                    <a>Powder Perfection(132)</a>
                                </li>
                            </ul>
                        </details>
                        <details className="dropdown">
                            <summary className="m-1">PRODUCT TYPE</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <a>Classics(145)</a>
                                </li>
                                <li>
                                    <a>Powder Perfection(132)</a>
                                </li>
                            </ul>
                        </details>
                    </div>
                    <div className="">
                        <details className="dropdown">
                            <summary className="m-1">SORT BY:FEATURED</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <a>Featured</a>
                                </li>
                                <li>
                                    <a>Price: Low to High</a>
                                </li>
                                <li>
                                    <a>Price: High to Low</a>
                                </li>
                                <li>
                                    <a>Newest first</a>
                                </li>
                                <li>
                                    <a>Oldest first</a>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>

            {/* Big Zodiac Energy Collection */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full ">
                            <div className="">
                                <h2 className="text-[28px] font-semibold">Big Zodiac Energy Collection</h2>
                                <p className="text-[28px]">
                                    Express your sign s unique energy with our Fall 2023 Big Zodiac Energy collection.
                                </p>
                            </div>
                        </div>
                    </div>
                    {cart_Big.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="w-[24%]">
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
                <div className="flex justify-center">
                    <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] bg-[#000000] text-[#ffffff] border-[#000000]">
                        <span className="uppercase">show more</span>
                    </button>
                </div>
            </div>

            {/* OPI */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full ">
                            <div className="">
                                <h2 className="text-[28px] font-semibold">OPI ❤️ BARBIE Collection</h2>
                                <p className="text-[28px]">
                                    Meet the OPI ❤️ BARBIE Collection, literally the most glam collab featuring
                                    exclusive shimmers, glitters, and crème nail polish shades inspired by the new movie
                                    BARBIE!
                                </p>
                            </div>
                        </div>
                    </div>
                    {cart_OPI.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="w-[24%]">
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
                <div className="flex justify-center">
                    <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] bg-[#000000] text-[#ffffff] border-[#000000]">
                        <span className="uppercase">show more</span>
                    </button>
                </div>
            </div>

            {/* Repair Mode */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[28px] font-semibold">Repair Mode™</h2>
                                <p className="text-[28px]">
                                    The first ever bond-building nail serum with Patented Ulti-Plex Technology™. *When
                                    used as directed.
                                </p>
                            </div>
                            <div className="">
                                <p className="16px font-normal mb-4">KEY FEATURES</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/7bizj6Dxunvv8LEd9mHibe/2cf7525115b9dbf8c360c7f96db1c879/99-_Repair.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">99% Nail Keratin Repair*</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/5hlxUKMp1o0Oojt8DYfAZk/119ebb24ab36ba397415b9b920575a0e/UV_Protected.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">
                                            94% Protection of Keratin Protein from Damage*
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/7z9u8qjSBqIANWAPRE5JDx/cf753e292584e140bb32de6172c2c929/Easy_Application.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">
                                            Nails Look Improved After First Application
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart_Repair.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="w-[24%]">
                                    <div className="w-full relative">
                                        <div className="">
                                            <img src={item.image} alt="" className="" />
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
                <div className="flex justify-center">
                    <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] bg-[#000000] text-[#ffffff] border-[#000000]">
                        <span className="uppercase">show more</span>
                    </button>
                </div>
            </div>

            {/* Nail Envy® Colors */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[28px] font-semibold">Nail Envy® Colors</h2>
                                <p className="text-[28px]">
                                    Strengthens and protects nails with Tri-Flex Technology™. *In 1 week when used as
                                    directed. **Consumer tested with 108 people after using product for 7 days.
                                </p>
                            </div>
                            <div className="">
                                <p className="16px font-normal mb-4">KEY FEATURES</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/6QC5y4W6gbT00bFXuz0YsB/65d36838dbe2d5e07d3508ff6f01d544/Strength.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">95% Stronger Nails*</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/3XK4aeyy0lXXdDiUqvtiYB/14b31a923da7611053f831ea12dabe01/Instant_Salon_Mani.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">
                                            94% of Consumers said Nails Looked Improved.**
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/jha8PGLLhrLqq2BM2hTwL/69b6095fb5cdf353c6b08e6d56c65493/Nourish_and_Protect_Skin.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">
                                            98% Of Consumers Agree Nails Feel Nourished After 1 Week**
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart_Envy.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="w-[24%]">
                                    <div className="w-full relative">
                                        <div className="">
                                            <img src={item.image} alt="" className="" />
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
                                            <div className="flex items-center gap-3">
                                                {item.review && (
                                                    <>
                                                        <ReactStars
                                                            count={5}
                                                            size={20}
                                                            edit={false}
                                                            activeColor="#ffd700"
                                                        />
                                                        <div className="flex items-center gap-1">
                                                            <span className="underline">{item.review}</span>
                                                            <span>Reviews</span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
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
                <div className="flex justify-center">
                    <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] bg-[#000000] text-[#ffffff] border-[#000000]">
                        <span className="uppercase">show more</span>
                    </button>
                </div>
            </div>

            {/* cart add */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    {cart_Add.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="w-[24%]">
                                    <div className="w-full relative">
                                        <div className="">
                                            <img src={item.image} alt="" className="" />
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
                                            <div className="flex">
                                                <ReactStars count={5} size={20} edit={false} activeColor="#ffd700" />
                                                <div className="flex items-center gap-1">
                                                    <span className="underline">{item.review}</span>
                                                    <span>Reviews</span>
                                                </div>
                                            </div>
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
                <div className="flex justify-center">
                    <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] bg-[#000000] text-[#ffffff] border-[#000000]">
                        <span className="uppercase">show more</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
