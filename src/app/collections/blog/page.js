/* eslint-disable @next/next/no-img-element */
import Container from '@/component/container';
import Link from 'next/link';
import {
    items_Care,
    items_Inspiration,
    items_Product_Spotlight,
    items_Spotlight,
    items_Trends,
    items_cart,
} from './data';
import { AiOutlineHeart } from 'react-icons/ai';

export default function Page() {
    return (
        <div className="">
            <Container title="Blog" />
            <div className="w-full flex ">
                <div className="w-[33.3%]">
                    <img
                        src="https://images.ctfassets.net/uyr7q3lwti8o/1LHfTQLzcfQ7rRFC6q3cwM/8ae8c650361c351416017f24773fba95/main-1.jpg?fm=webp&w=640&q=75"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
                <div className="w-[33.3%] relative">
                    <img
                        src="https://images.ctfassets.net/uyr7q3lwti8o/5IDg9JYXlRnNYl4IU0mQur/9a84692886287cac1546f2b8e1893f59/main-2.jpg?fm=webp&w=640&q=75"
                        alt=""
                        className="w-full h-full"
                    />
                    <div className="flex flex-col items-center absolute top-[40%] px-[22px]">
                        <h1 className="text-[60px]">The Drop Blog</h1>
                        <p className="text-[16px] text-center">
                            Your source for the latest nail trends, tips and tricks, and more from team OPI and our
                            community.
                        </p>
                    </div>
                </div>
                <div className="w-[33.3%]">
                    <img
                        src="https://images.ctfassets.net/uyr7q3lwti8o/6vkPJzGsHxpMDgsgDBDgbX/a98652d1f699508b4cd789a743b89c7c/main-3.jpg?fm=webp&w=640&q=75"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>

            <div className="my-[48px]">
                <div className="flex items-center justify-center gap-5">
                    {items_cart.map((item, index) => {
                        return (
                            <>
                                <Link key={index} href="" className="flex flex-col gap-3 items-center justify-center">
                                    <div className="w-[90px] h-[90px] rounded-full border-[1px] border-[#777676]">
                                        <img src={item.image} alt="" className="w-full h-full p-[2px]" />
                                    </div>
                                    <p className="text-[16px] uppercase">{item.title}</p>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>

            {/* Featured Article */}
            <div className="m-[48px]">
                <div className="px-[20px]">
                    <h2 className="text-[48px]">Featured Article</h2>
                </div>
                <div className="flex ">
                    <div className="relative w-[70%]">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/3nx2sTu2yxw4e7TpUR2Wlw/5c784c72485fb95303a1e8d86649b394/090722_OPI_FA23_lineup1_IS_001435-AS_1550x980.jpg?fm=webp&w=1200&q=75"
                            alt=""
                            className="w-full h-full"
                        />
                        <div className="absolute top-5 right-5">
                            <button className="rounded-full p-1 bg-[#ffffff]">
                                <AiOutlineHeart className="text-[25px]" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[30%] ml-[32px]">
                        <p className="text-[16px] uppercase">Product Spotlight</p>
                        <h3 className="text-[48px]">Meet The Big Zodiac Energy Collection</h3>
                        <p className="text-[32px] mt-[16px]">
                            Channel all the elements for zodiac nails that make you glisten from hand to toe with
                            glitters, holographics and more from OPI s Big Zodiac Energy collection.
                        </p>
                    </div>
                </div>
            </div>

            {/* Pro Spotlight  */}
            <div className="m-[48px]">
                <div className="px-[20px]">
                    <h2 className="text-[48px]">Pro Spotlight</h2>
                </div>
                <div className="flex ">
                    <div className="relative w-[70%]">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/7mJAnRt5Q6dGy5KhRmvlqI/7aee8fd3cd150211c3415bb772c706e0/_nailsbyzola-Header-1550x980.jpg?fm=webp&w=1200&q=75"
                            alt=""
                            className="w-full h-full"
                        />
                        <div className="absolute top-5 right-5">
                            <button className="rounded-full p-1 bg-[#ffffff]">
                                <AiOutlineHeart className="text-[25px]" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[30%] ml-[32px]">
                        <p className="text-[16px] uppercase">Pro Spotlight</p>
                        <h3 className="text-[48px]">Introducing OPI Global Brand Ambassador: @nailsbyzola</h3>
                        <p className="text-[32px] mt-[16px]">
                            @nailsbyzola Her careful eye and creative approach to nails have made her a favorite with
                            celebrities such as Hailey Bieber, Sydney Sweeney, Sabrina Carpenter, Vanessa Hudgens, and
                            more.
                        </p>
                    </div>
                </div>
                <div className="mb-[24px] py-[50px]">
                    <div className="flex flex-wrap w-full gap-2">
                        {items_Spotlight.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className="w-[33%]">
                                        <div className="w-full relative">
                                            <div className="">
                                                <img src={item.image} alt="" className="w-full h-full" />
                                            </div>
                                            <div className="absolute top-5 right-5">
                                                <button className="rounded-full p-1 bg-[#ffffff]">
                                                    <AiOutlineHeart className="text-[25px]" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="my-6 px-6">
                                            <h3 className="pb-2">
                                                <Link href="" className="flex flex-col">
                                                    <p className="text-[16px] uppercase">Pro Spotlight</p>
                                                    <h3 className="uppercase text-[32px] font-normal">{item.title}</h3>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Nail Care  */}
            <div className="m-[48px]">
                <div className="px-[20px]">
                    <h2 className="text-[48px]">Nail Care</h2>
                </div>
                <div className="flex ">
                    <div className="relative w-[70%]">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/4eEzXlp4jPJHfPhL3c95LI/4f204b08b7d733148b548430173a1d13/blog_opi-acdemy-nail-shapes-900x550_1550x980.jpg?fm=webp&w=1080&q=75"
                            alt=""
                            className="w-full h-full"
                        />
                        <div className="absolute top-5 right-5">
                            <button className="rounded-full p-1 bg-[#ffffff]">
                                <AiOutlineHeart className="text-[25px]" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[30%] ml-[32px]">
                        <p className="text-[16px] uppercase">NAIL CARE</p>
                        <h3 className="text-[48px]">How to Find the Best Nail Shape for Your Hands</h3>
                        <p className="text-[32px] mt-[16px]">
                            Looking for ways to give yourself a makeover? Instead of reaching for the scissors and
                            attempting a haircut, why not reach for a file and try new nail shapes?
                        </p>
                    </div>
                </div>
                <div className="mb-[24px] py-[50px]">
                    <div className="flex flex-wrap w-full gap-2">
                        {items_Care.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className="w-[33%]">
                                        <div className="w-full relative">
                                            <div className="">
                                                <img src={item.image} alt="" className="w-full h-full" />
                                            </div>
                                            <div className="absolute top-5 right-5">
                                                <button className="rounded-full p-1 bg-[#ffffff]">
                                                    <AiOutlineHeart className="text-[25px]" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="my-6 px-6">
                                            <h3 className="pb-2">
                                                <Link href="" className="flex flex-col">
                                                    <p className="text-[16px] uppercase">NAIL CARE</p>
                                                    <h3 className="uppercase text-[32px] font-normal">{item.title}</h3>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Inspiration  */}
            <div className="m-[48px]">
                <div className="px-[20px]">
                    <h2 className="text-[48px]">Inspiration</h2>
                </div>
                <div className="flex ">
                    <div className="relative w-[70%]">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/4h3D89bGVKsm2BY41HvuNl/210a30d5aac57916b5b87b4700ea72ef/fa23-blog-colorscope-nl-1550x980.jpg?fm=webp&w=1080&q=75"
                            alt=""
                            className="w-full h-full"
                        />
                        <div className="absolute top-5 right-5">
                            <button className="rounded-full p-1 bg-[#ffffff]">
                                <AiOutlineHeart className="text-[25px]" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[30%] ml-[32px]">
                        <p className="text-[16px] uppercase">NAIL CARE</p>
                        <h3 className="text-[48px]">Your Big Zodiac Energy Horoscope / Colorscope</h3>
                        <p className="text-[32px] mt-[16px]">
                            Celebrate your star quality with a personalized colorscope for your zodiac sign from OPI.
                            Take a cue from your birth chart and explore the universe of color.
                        </p>
                    </div>
                </div>
                <div className="mb-[24px] py-[50px]">
                    <div className="flex flex-wrap w-full gap-2">
                        {items_Inspiration.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className="w-[33%]">
                                        <div className="w-full relative">
                                            <div className="">
                                                <img src={item.image} alt="" className="w-full h-full" />
                                            </div>
                                            <div className="absolute top-5 right-5">
                                                <button className="rounded-full p-1 bg-[#ffffff]">
                                                    <AiOutlineHeart className="text-[25px]" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="my-6 px-6">
                                            <h3 className="pb-2">
                                                <Link href="" className="flex flex-col">
                                                    <p className="text-[16px] uppercase">INSPIRATION</p>
                                                    <h3 className="uppercase text-[32px] font-normal">{item.title}</h3>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Nail Trends  */}
            <div className="m-[48px]">
                <div className="px-[20px]">
                    <h2 className="text-[48px]">Nail Trends</h2>
                </div>
                <div className="flex ">
                    <div className="relative w-[70%]">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/4zbpirSJPukfLkH1Q20MRE/56996e598ed488f21776c461a67e193b/blg-asset_con-nail-art-7-1550x980.jpg?fm=webp&w=1080&q=75"
                            alt=""
                            className="w-full h-full"
                        />
                        <div className="absolute top-5 right-5">
                            <button className="rounded-full p-1 bg-[#ffffff]">
                                <AiOutlineHeart className="text-[25px]" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[30%] ml-[32px]">
                        <p className="text-[16px] uppercase">Nail Trends</p>
                        <h3 className="text-[48px]">Nail Art Tutorial: French Tips with Oh-So-Hot Shimmery Dots</h3>
                        <p className="text-[32px] mt-[16px]">
                            Learn how to elevate your nail art this summer with OPI’s French tip tutorial. French tips
                            become a lot more summery with the addition of shimmery dots.
                        </p>
                    </div>
                </div>
                <div className="mb-[24px] py-[50px]">
                    <div className="flex flex-wrap w-full gap-2">
                        {items_Trends.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className="w-[33%]">
                                        <div className="w-full relative">
                                            <div className="">
                                                <img src={item.image} alt="" className="w-full h-full" />
                                            </div>
                                            <div className="absolute top-5 right-5">
                                                <button className="rounded-full p-1 bg-[#ffffff]">
                                                    <AiOutlineHeart className="text-[25px]" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="my-6 px-6">
                                            <h3 className="pb-2">
                                                <Link href="" className="flex flex-col">
                                                    <p className="text-[16px] uppercase">NAIL TRENDS</p>
                                                    <h3 className="uppercase text-[32px] font-normal">{item.title}</h3>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Product Spotlight  */}
            <div className="m-[48px]">
                <div className="px-[20px]">
                    <h2 className="text-[48px]">Product Spotlight</h2>
                </div>
                <div className="flex ">
                    <div className="relative w-[70%]">
                        <img
                            src="https://images.ctfassets.net/uyr7q3lwti8o/45H86Z3RxjZF4N2HUXAVAM/b3081d3fe9c1867f4f401f83856830c6/Nature-Strong-LE_lineup_horizontal_001124_1550x980.jpg?fm=webp&w=1080&q=75"
                            alt=""
                            className="w-full h-full"
                        />
                        <div className="absolute top-5 right-5">
                            <button className="rounded-full p-1 bg-[#ffffff]">
                                <AiOutlineHeart className="text-[25px]" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[30%] ml-[32px]">
                        <p className="text-[16px] uppercase">Product Spotlight</p>
                        <h3 className="text-[48px]">New Nature Strong Botanical Base Coat & Shades</h3>
                        <p className="text-[32px] mt-[16px]">
                            Surpriiiise! Nature Strong just got more flowerful than ever thanks to a new Botanical Base
                            Coat, more vibrant shades, and for the first time ever, vegan glitter nail polish.
                        </p>
                    </div>
                </div>
                <div className="mb-[24px] py-[50px]">
                    <div className="flex flex-wrap w-full gap-2">
                        {items_Product_Spotlight.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className="w-[33%]">
                                        <div className="w-full relative">
                                            <div className="">
                                                <img src={item.image} alt="" className="w-full h-full" />
                                            </div>
                                            <div className="absolute top-5 right-5">
                                                <button className="rounded-full p-1 bg-[#ffffff]">
                                                    <AiOutlineHeart className="text-[25px]" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="my-6 px-6">
                                            <h3 className="pb-2">
                                                <Link href="" className="flex flex-col">
                                                    <p className="text-[16px] uppercase">NAIL TRENDS</p>
                                                    <h3 className="uppercase text-[32px] font-normal">{item.title}</h3>
                                                </Link>
                                            </h3>
                                        </div>
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
