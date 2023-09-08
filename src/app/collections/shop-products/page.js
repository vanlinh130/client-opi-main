/* eslint-disable @next/next/no-img-element */
'use client';
import Container from '@/component/container';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import { cart_Lacquer, cart_Infinite, cart_Nature, cart_OPI, cart_ProSpa, cart_Polish, cart_Dipping, cart_Chrome, cart_Absolute } from './data';
import ReactStars from 'react-rating-stars-component';

export default function Page() {
    return (
        <div className="">
            <Container title="shop product" />
            <div className="flex w-full">
                <div className="bg-[#e9eef6] w-1/2">
                    <div className="flex flex-col justify-center h-full px-[48px]">
                        <h1 className="text-[64px] font-normal">Shop Products</h1>
                        <p className="text-[22px] font-light mt-3">
                            Nail Lacquer, dip powder, treatments, and tools. Whatever you need,we gotchu with our mani
                            OPI products.
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/3vuhkB3NGLXA2ZWapgtFPw/de0d8886c1111b4c7f1c2d8ff12789df/plp_products-1440x720.jpg?fm=webp&w=1080&q=75"
                            alt=""
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

            {/* OPI xPRESS/ON */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[20px] font-normal">OPI xPRESS/ON</h2>
                                <p className="text-[20px]">
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

            {/* Nature Strong */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[20px] font-normal">Nature Strong</h2>
                                <p className="text-[20px]">
                                    Our natural origin, vegan nail lacquer that s So. Damn. Flowerful.
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
                                        <p className="16px font-light ml-3">Up to 7 Days of Wear</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/1YIclF6Y8HaqhmihfomVYT/39b024dea45c3fd5d57878cfa2f61799/Vegan.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Vegan</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/1w8I6viBvA73LNgBUozIyt/19cbb08c9f6cfa8442ff2cb6b13e8cbb/PCR.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Post Consumer Recycled Materials</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart_Nature.map((item, index) => {
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
                                <h2 className="text-[20px] font-normal">Infinite Shine</h2>
                                <p className="text-[20px]">Legendary gel-like long-wear that goes on and on and...</p>
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

            {/* Nail Lacquer */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[20px] font-normal">Nail Lacquer</h2>
                                <p className="text-[20px]">
                                    Our award winning, vibrant formula that nails the salon look. *When used with a
                                    professional service.
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
                                        <p className="16px font-light ml-3">Up to 11 Days of Wear</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/10YRGUMrl4PaCpuZmoQgvA/6cd89c1d6e6131792b64158fc8838308/Color.png?fm=webp&w=96&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Rich, Vibrant Color</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/3HJahz7qC0QfFd1dfj042j/c65c1def87f7feb32763f7f8938ff49b/Shades.png?fm=webp&w=96&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">300+ Shades</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart_Lacquer.map((item, index) => {
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

            {/* ProSpa */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[20px] font-normal">ProSpa</h2>
                                <p className="text-[20px]">Soften, nourish, and smooooth hands and feet.</p>
                            </div>
                            <div className="">
                                <p className="16px font-normal mb-4">KEY FEATURES</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/7uiRK1fh9cqsnZ17DFJCv/9751a5b2195d31bb8304f9893bd6dd54/Nourish_and_Protect_Skin.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Nourish and Protect Skin</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/1RRchxymLceXT2mCgY9ifn/de717bf39d93696432b913e6498f847d/Fast_Acting_Formulas.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Fast Acting Formulas</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/1C4wUxUMjNP2LqozBU8qXt/94396b77bd5354342c3a181ee1bb3506/Condition_Cuticles.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Condition Cuticles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart_ProSpa.map((item, index) => {
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

            {/* Gel Nail Polish */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[20px] font-normal">Gel Nail Polish</h2>
                                <p className="text-[20px]">
                                    Legit shine. Iconic color. A seriously long-lasting gel nail polish that brings the
                                    glossss.
                                </p>
                            </div>
                            <div className="">
                                <p className="16px font-normal mb-4">KEY FEATURES</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/5eVcV8EcCVWsHfYJOlORt2/639b95a9faa71934f04900ca1e388d80/Days_Of_Wear.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Up to 3 Weeks of Wear</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/5ZZ08z3rD5D1XvNdgY4jEH/17aae1930f3fe5e8658db10aab55a472/Shine.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">High-shine Finish</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/3tvVVVv0QV8ETcNwT3UGm7/49861001fd3c96f7d380813035d28ad5/LED_Cure.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">LED Cure</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart_Polish.map((item, index) => {
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

            {/* Dipping Powder */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[20px] font-normal">Dipping Powder</h2>
                                <p className="text-[20px]">
                                    Our dipping powder formula with gel-like shine and weeks of wear.
                                </p>
                            </div>
                            <div className="">
                                <p className="16px font-normal mb-4">KEY FEATURES</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/azp8sNvn9dVGkfUCs6ETD/0183d26cab71ade17f078c44b5e6e14f/Dries_Fast.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Dries Fast</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/3sQ0BtfGHtVt3HRtJQBfk1/144a6f26b65aec8be0ab983d7979b974/Strength.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Durable Manicure</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/5aN8wxSIu4w2lcbWrxJZ29/e82d30eb902b8c64cecf75e159ddc092/Color.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Stay-true Color</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart_Dipping.map((item, index) => {
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

            {/* Chrome Powders */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[20px] font-normal">Chrome Powders</h2>
                                <p className="text-[20px]">
                                    Go full-on metallic or glaze nails with our professional Chrome Powders.
                                </p>
                            </div>
                            <div className="">
                                <p className="16px font-normal mb-4">KEY FEATURES</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/6TXnTO0Q993I9QXVlbAgc0/3ac47d815f91bf2ad706e1da8024113d/Works_with.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Works with GelColor & Nail Lacquer</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/4ynR5266g1YdmpNxlGsdQa/015f4cd662cb9851122ae26ed20b9ffa/Color.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Stay-true Color</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/WfH1C3S7Y3VCEkv9FJa6f/cfbf0811cfbe88660da06f51e15f3a75/Easy_Application.png?fm=webp&w=96&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Easy Removal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart_Chrome.map((item, index) => {
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

            {/* Absolute Acrylic Powder */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-[20px] font-normal">Absolute Acrylic Powder</h2>
                                <p className="text-[20px]">
                                A sculptable, moldable, self-leveling system that delivers beautiful results.
                                </p>
                            </div>
                            <div className="">
                                <p className="16px font-normal mb-4">KEY FEATURES</p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/5ByJke9XaR4qf0VM7AerNT/628276174f7bd9c61ab711fd02342edb/Sculpt_Control.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Ultimate Sculpting Control</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/5EZ8zNi1xj6oeoyrOcfohD/3b947e637578f0e2cf44f200e3ece9bd/UV_Protected.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">UV-protected, Color Lock™ Technology</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.ctfassets.net/uyr7q3lwti8o/6yGLGFiEzK6csYlvK9cljp/71b7305fee99a47bac2322d24a2db771/Easy_Application.png?fm=webp&w=48&q=75"
                                            alt=""
                                        />
                                        <p className="16px font-light ml-3">Effortless application</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {cart_Absolute.map((item, index) => {
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
