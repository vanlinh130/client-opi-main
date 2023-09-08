/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
// };

const HomeSlider = () => {
    return (
        <div className="">
            <div className="relative">
                <img
                    src="https://images.ctfassets.net/uyr7q3lwti8o/4WoaP4D19NtnXrjIEpkraQ/cc28efa07bf946e17310a2dac2efeef0/hp_hero-banner-1-d.jpg?fm=webp&w=1920&q=75"
                    className="h-full w-full"
                    alt="OPI Repair Mode™ and Nail Envy® Hero Banner"
                />
                <div className="absolute top-[50%] right-0 w-[50%]">
                    <div>
                        <p className="uppercase text-2xl">It Takes Two</p>
                        <h2 className="uppercase text-6xl mt-4">OPI Repair Mode™ + Nail Envy®</h2>
                    </div>
                    <p className="text-2xl mt-3">
                        Meet the dream rou-team*: our first ever bond building nail serum and our upgraded nail
                        strengthener, now in more shades to envy.
                    </p>
                    <Link href="">
                        <div className="mt-6">
                            <span className="px-[24px] py-[10px] bg-[#000000] text-[#ffffff] rounded-[80px]">
                                Shop Now
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;
