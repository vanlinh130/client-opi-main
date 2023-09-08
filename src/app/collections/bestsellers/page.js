/* eslint-disable @next/next/no-img-element */
'use client';
import Container from '@/component/container';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';
import { cart_Big, cart_Infinite, cart_OPI } from './data';

export default function Page() {
    return (
        <div className="">
            <Container title="bestsellers" />
            <div className="flex w-full">
                <div className="bg-[#d9c4c1] w-1/2">
                    <div className="flex flex-col justify-center h-full px-[48px]">
                        <h1 className="text-[64px] font-normal">Bestsellers</h1>
                        <p className="text-[22px] font-light mt-3">
                            Keep nails lookin fresh with our bestselling nail polish shades, must-have treatments, and
                            more.
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/6VBjs6fPULcbXOkGTSIlr6/cf74f0876882a14cced5009f3cd8fb56/plp_best-sellers-1440x720.jpg?fm=webp&w=1080&q=75"
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

            {/* OPI xPRESS/ON */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[28px] font-semibold">OPI xPRESS/ON</h2>
                                <p className="text-[28px]">
                                    Press up in professional quality shades, effects, and designs in an instant.
                                </p>
                            </div>
                            <div className="">
                                <p className="16px font-normal mb-4">KEY FEATURES</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/3FyLQPVc0u9x8Z8oIn2F9E/d7866c9dca7c539f904deaef5cd40222/Days_Of_Wear.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">14 Days of Wear</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/2MNyoP3D96iDKV3bi2mqaU/62f04a51f94f05f9afc0a354dad80fd2/Instant_Salon_Mani.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Instant Salon Mani</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/1YIclF6Y8HaqhmihfomVYT/39b024dea45c3fd5d57878cfa2f61799/Vegan.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Vegan</p>
                                    </div>
                                </div>
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

            {/* Infinite Shine */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[28px] font-semibold">Infinite Shine</h2>
                                <p className="text-[28px]">Legendary gel-like long-wear that goes on and on and...</p>
                            </div>
                            <div className="">
                                <p className="16px font-normal mb-4">KEY FEATURES</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/3FyLQPVc0u9x8Z8oIn2F9E/d7866c9dca7c539f904deaef5cd40222/Days_Of_Wear.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Up to 11 Days of Wear</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/4ZazTwCbDeJds4E5v2UOgY/3d51ca68b09a2ec3e4fa5e102a57675b/Gel-like_Shine.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Gel-like Shine</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/2XYpXqJ2RdtrmUodLMy0wm/d3e81c80cf28c563fd227f3cc110d527/Easy_Application.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Easy Application & Removal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart_Infinite.map((item, index) => {
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
