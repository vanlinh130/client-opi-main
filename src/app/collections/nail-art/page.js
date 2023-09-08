/* eslint-disable @next/next/no-img-element */
import Container from '@/component/container';
import { nailArt } from '@/pages/home/data';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import { nail_OPI, nail_Summer } from './data';

export default function Page() {
    return (
        <div className="">
            <Container title="nail art" />
            <div className="w-full flex ">
                <div className="w-[33.3%]">
                    <img
                        src="https://images.ctfassets.net/uyr7q3lwti8o/oOMayivfb4shdSTIWORaF/36d009a22652fddb9f2378ac39c3ff72/nail-art_module-1-960x-980.jpg?fm=webp&w=828&q=75"
                        alt=""
                    />
                </div>
                <div className="w-[33.3%] relative">
                    <img
                        src="https://images.ctfassets.net/uyr7q3lwti8o/5txUnlR4HUCdadJRabwjWt/2981e22907c65c92fbf36f400c7fe023/image_346.svg?fm=webp&w=828&q=75"
                        alt=""
                        className="w-full h-full"
                    />
                    <div className="flex flex-col items-center absolute top-[40%] px-[22px]">
                        <h1 className="text-[60px]">Nail Art, Nailed</h1>
                        <p className="text-[16px] text-center">
                            Get inspired for your next lewk and flex your skills with our professional and
                            easy-to-follow DIY nail art tutorials.
                        </p>
                    </div>
                </div>
                <div className="w-[33.3%]">
                    <img
                        src="https://images.ctfassets.net/uyr7q3lwti8o/3PVRH5Ei1WiUgxHliK1uFE/ca4ce4637ee49a0e0f2c71bc7bc35600/nail-art_module-3-960x980.jpg?fm=webp&w=828&q=75"
                        alt=""
                    />
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

            {/* Big Zodiac Energy Nail Art */}
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

            <div className="">
                <div className="py-[64px]">
                    <div className="px-[50px] flex justify-center w-full">
                        <div className="w-[40%]">
                            <img
                                src="https://images.ctfassets.net/uyr7q3lwti8o/EKMHHFmRiI9QAvfkqmtBY/f82a1903151cc2fb3aca2a02cd786792/Virgoals_Feat_Nail_Art_Look_1336x1304.jpg?fm=webp&w=640&q=75"
                                alt=""
                            />
                        </div>
                        <div className="w-[40%] flex flex-col justify-center">
                            <p className="text-[16px]">BIG ZODIAC ENERGY</p>
                            <h2 className="text-[32px] font-normal">Virgolden Standard</h2>
                            <p className="text-[16px]">A gold-on-gold layered look that s #Virgoals.</p>
                            <div>
                                <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] bg-[#000000] border-[#000000] text-[#fff]">
                                    <span className="uppercase">Get the Look</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OPI ❤️ BARBIE Nail Art */}
            <div className="bg-[#f6f6f6] py-[64px]">
                <div className="mx-[40px] px-[50px]">
                    <div className="w-[40%]">
                        <h2 className="text-[32px] font-normal">OPI ❤️ BARBIE Nail Art</h2>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex gap-2">
                        {nail_OPI.map((item, index) => {
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

            {/* Summer Make the Rules Nail Art */}
            <div className="bg-[#f6f6f6] py-[64px]">
                <div className="mx-[40px] px-[50px]">
                    <div className="w-[40%]">
                        <h2 className="text-[32px] font-normal">Summer Make the Rules Nail Art</h2>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex gap-2">
                        {nail_Summer.map((item, index) => {
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
        </div>
    );
}
