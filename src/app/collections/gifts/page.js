/* eslint-disable @next/next/no-img-element */
import Container from '@/component/container';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import { gift_Big, gift_Me, gift_OPI, gift_Summer } from './data';

export default function Page() {
    return (
        <div className="">
            <Container title="nail art" />
            <div className="flex w-full">
                <div className="bg-[#fbdcc8] w-1/2">
                    <div className="flex flex-col justify-center h-full px-[48px]">
                        <h1 className="text-[64px] font-normal">Gifts</h1>
                        <p className="text-[22px] font-light mt-3">
                            SoOo Mani Gifts. Birthdays, anniversaries, just because gifts you can t go wrong with
                            bestsellers (lookin at you, ProSpa Nail & Cuticle Oil) or our nail polish gift sets. Gift to
                            someone you ❤️ or unwrap for yourself.
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/1Q0xMlAFU7GEx1N0dgwD81/353ba25d61953d463775ca13fe67d850/plp_gifts-1440x720.jpg?fm=webp&w=1080&q=75"
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
                                    <a>Summer Make the Ruls(42)</a>
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
                    {gift_Big.map((item, index) => {
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

            {/* OPI ❤️ BARBIE Collection */}
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
                    {gift_OPI.map((item, index) => {
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

            {/* Summer Make the Rules */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full ">
                            <div className="">
                                <h2 className="text-[28px] font-semibold">Summer Make the Rules</h2>
                                <p className="text-[28px]">
                                    Let your nails be as bright, bold, and carefree as you feel this summer with OPI s
                                    #SummerMakeTheRules Summer 2023 Collection.
                                </p>
                            </div>
                        </div>
                    </div>
                    {gift_Summer.map((item, index) => {
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

            {/* Me, Myself, and OPI Collection */}
            <div className="mx-[40px] mb-[24px] py-[50px]">
                <div className="flex flex-wrap w-full gap-3">
                    <div className="w-[24%]">
                        <div className="bg-[#f6f6f6] p-[32px] h-full ">
                            <div className="">
                                <h2 className="text-[28px] font-semibold">Me, Myself, and OPI Collection</h2>
                                <p className="text-[28px]">
                                    Share who u r in a colorverse of ♾️ expression. Our Spring 2023 collection features
                                    12 unfiltered brights and pastels that’ll give you mani lewks for ur mani selfies.
                                </p>
                            </div>
                        </div>
                    </div>
                    {gift_Me.map((item, index) => {
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
        </div>
    );
}
