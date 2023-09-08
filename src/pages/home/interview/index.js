/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const InterView = () => {
    return (
        <div className="mx-[40px] my-[64px] px-[50px]">
            <div className="flex w-full">
                <div className="w-[25%]">
                    <div className="">
                        <div className="w-[115px] h-[115px]">
                            <img
                                src="https://images.ctfassets.net/uyr7q3lwti8o/3atxK4l6XzN4VlGVbaw7vF/65b04d25d0648a52564ff8f354a863dc/CreatorOfTheMonth-Icon-210x210.png?fm=webp&w=128&q=75"
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                        <h2 className="text-[48px] font-normal mt-[40px]">Tahra</h2>
                    </div>
                    <div className="">
                        <p className="text-[16px] font-light mt-[2px] mb-[24px]">@tahrasnailsatl</p>
                        <div className="w-[105px] h-[105px]">
                            <img
                                src="https://images.ctfassets.net/uyr7q3lwti8o/2fDh9wQBwjAJQwX0jDPOTG/7e72cee23551dc4b103fe32802d20cc3/com_creator-1.png?fm=webp&w=128&q=75"
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                        <p className="text-[18px] font-light mt-6">
                            {
                                'In my opinion nail art, like any art, is freeing. It should be challenging but fun. I encourage all of my fellow pros to tap into their strengths when it comes to nail art.'
                            }
                        </p>
                    </div>
                    <div className="mb-8">
                        <button className="mt-8 px-[24px] py-[10px] rounded-[80px] border-[1px] border-[#000000] bg-[#000000] text-[#ffffff]">
                            <h3 className="uppercase">Read the Interview</h3>
                        </button>
                    </div>
                    <div>
                        <span>Wanna be featured? Show off your nails! </span>
                        <Link href="https://www.instagram.com/opi/" className="underline">
                            Tag us @opi and use #OPIObsessed., opens a new tab
                        </Link>
                    </div>
                </div>
                <div className="w-[75%]">
                    <img
                        src="https://images.ctfassets.net/uyr7q3lwti8o/5HBO1DqlefMGHEUrEaHZa/e386024c3093f44d3c1d69f5d9b3f0ce/com_images-2-d.jpg?fm=webp&w=1200&q=75"
                        alt=""
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default InterView;
