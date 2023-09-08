import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="w-full">
            <div className="w-full h-[2px] bg-[#000000]"></div>
            <div className="flex justify-between mx-[50px] pt-[48px]">
                <div className="w-[60%] flex flex-col justify-between">
                    <ul className="flex gap-20 justify-between w-full">
                        <li>
                            <h2 className="font-medium text-lg">OPI Experience</h2>
                            <ul>
                                <li className="pt-4 text-[15px]">Salon Finder</li>
                                <li className="pt-4 text-[15px]">OPI Test Salon</li>
                            </ul>
                        </li>
                        <li>
                            <h2 className="font-medium text-lg">Shop OPI</h2>
                            <ul>
                                <li className="pt-4 text-[15px]">Shop Products</li>
                                <li className="pt-4 text-[15px]">Shop all Nail Colors</li>
                                <li className="pt-4 text-[15px]">Shop What Trending</li>
                                <li className="pt-4 text-[15px]">Shop Gifts</li>
                                <li className="pt-4 text-[15px]">Log in as a Pro</li>
                            </ul>
                        </li>
                        <li>
                            <h2 className="font-medium text-lg">Connect with OPI</h2>
                            <ul>
                                <li className="pt-4 text-[15px]">About OPI</li>
                                <li className="pt-4 text-[15px]">Giving Back</li>
                                <li className="pt-4 text-[15px]">Contact Us</li>
                                <li className="pt-4 text-[15px]">Careers</li>
                            </ul>
                        </li>
                        <li>
                            <h2 className="font-medium text-lg">Customer Information</h2>
                            <ul>
                                <li className="pt-4 text-[15px]">FAQ</li>
                                <li className="pt-4 text-[15px]">Safety Data</li>
                                <li className="pt-4 text-[15px]">Patents</li>
                                <li className="pt-4 text-[15px]">STAR LIGHT Warranty & Claims</li>
                                <li className="pt-4 text-[15px]">Supply Chain</li>
                                <li className="pt-4 text-[15px]">Diversion</li>
                                <li className="pt-4 text-[15px]">Privacy Policy</li>
                                <li className="pt-4 text-[15px]">Cookie Policy</li>
                                <li className="pt-4 text-[15px]">Terms & Conditions</li>
                                <li className="pt-4 text-[15px]">Mobile T&C</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="pt-[40px]">
                        <div className="w-[30px] h-[20px] mb-3">
                            <svg className="icon icon__enus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900">
                                <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                                <path
                                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                    stroke="#fff"
                                    strokeWidth="300"
                                ></path>
                                <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                                <g fill="#fff">
                                    <g id="d">
                                        <g id="c">
                                            <g id="e">
                                                <g id="b">
                                                    <path
                                                        id="a"
                                                        d="m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                                    ></path>
                                                    <use href="#a" y="420"></use>
                                                    <use href="#a" y="840"></use>
                                                    <use href="#a" y="1260"></use>
                                                </g>
                                                <use href="#a" y="1680"></use>
                                            </g>
                                            <use href="#b" x="247" y="210"></use>
                                        </g>
                                        <use href="#c" x="494"></use>
                                    </g>
                                    <use href="#d" x="988"></use>
                                    <use href="#c" x="1976"></use>
                                    <use href="#e" x="2470"></use>
                                </g>
                            </svg>
                        </div>
                        <div className="pb-3">
                            <button>Do not Share or Sell Personal Information</button>
                        </div>
                        <p className="">California Transparency in Supply Chains Act</p>
                        <p className="">© Copyright 2023, Wella Operations US LLC. All rights reserved.</p>
                    </div>
                </div>
                <div className="w-[20%] flex flex-col justify-between">
                    <div className="">
                        <h2 className="pb-3 text-3xl font-normal">You ve Got Nail</h2>
                        <p className="text-xl font-light pb-4">
                            Get the latest product drops, discounts, and more from Wella brands straight to your inbox.
                        </p>
                        <div className="mb-4">
                            <input
                                placeholder="Enter your email address *"
                                className="w-full border-[1px] border-[#ccc] p-2 outline-none "
                            />
                        </div>
                        <div className="flex items-center gap-3 w-full">
                            <div className="flex items-center gap-2 w-[50%]">
                                <input type="radio" className="w-[15%] h-[2rem]" />
                                <span>Nail Obsessed</span>
                            </div>
                            <div className="flex items-center gap-2 w-[50%]">
                                <input type="radio" className="w-[15%] h-[2rem]" />
                                <span>Nail Professional</span>
                            </div>
                        </div>
                    </div>
                    <div className="py-6">
                        <ul className="flex items-center justify-between gap-3">
                            <li className="w-[24px] h-[24px]">
                                <Link href="https://www.instagram.com/opi/">
                                    <svg
                                        className="icon__instagram SocialLinks_socialLinks__instagram__lXOjf"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <g clipPath="url(#instagram)">
                                            <path
                                                fill="#000"
                                                d="M10 0C7.283 0 6.944.013 5.878.06 4.812.11 4.088.278 3.45.525a4.897 4.897 0 0 0-1.772 1.153A4.88 4.88 0 0 0 .525 3.45C.278 4.088.109 4.812.06 5.878.01 6.944 0 7.283 0 10c0 2.717.013 3.056.06 4.123.05 1.064.218 1.79.465 2.427a4.905 4.905 0 0 0 1.153 1.772 4.89 4.89 0 0 0 1.772 1.153c.638.247 1.363.416 2.428.465 1.066.05 1.405.06 4.122.06 2.717 0 3.056-.012 4.123-.06 1.064-.05 1.79-.218 2.427-.465a4.915 4.915 0 0 0 1.772-1.153 4.884 4.884 0 0 0 1.153-1.772c.247-.638.416-1.363.465-2.428.05-1.066.06-1.405.06-4.122 0-2.717-.012-3.056-.06-4.122-.05-1.065-.218-1.791-.465-2.428a4.908 4.908 0 0 0-1.153-1.772A4.873 4.873 0 0 0 16.55.525C15.912.278 15.187.109 14.122.06 13.056.01 12.718 0 10 0Zm0 1.8c2.67 0 2.988.013 4.042.06.975.045 1.504.207 1.856.345.468.18.8.397 1.151.747.35.35.566.682.747 1.15.137.352.3.881.344 1.856.047 1.055.058 1.372.058 4.042s-.012 2.988-.061 4.042c-.051.975-.214 1.504-.351 1.856-.187.468-.4.8-.75 1.151a3.12 3.12 0 0 1-1.15.747c-.35.137-.887.3-1.862.344-1.061.047-1.374.058-4.049.058-2.676 0-2.988-.012-4.05-.061-.975-.051-1.513-.214-1.862-.351-.475-.187-.8-.4-1.15-.75a3.037 3.037 0 0 1-.75-1.15c-.137-.35-.299-.887-.35-1.862-.037-1.05-.05-1.374-.05-4.036 0-2.664.013-2.989.05-4.051.051-.975.213-1.512.35-1.862.175-.475.4-.8.75-1.15.35-.35.675-.575 1.15-.75.35-.137.875-.3 1.85-.35 1.063-.037 1.375-.05 4.05-.05L10 1.8Zm0 3.065a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468A3.332 3.332 0 1 1 13.333 10 3.332 3.332 0 0 1 10 13.333Zm6.538-8.67a1.2 1.2 0 0 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
                                            ></path>
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                            <li className="w-[24px] h-[24px]">
                                <Link href="https://www.pinterest.com/opiproducts/">
                                    <svg
                                        className="icon__pinterest SocialLinks_socialLinks__pinterest__kFEwR"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 21 20"
                                    >
                                        <g clipPath="url(#pinterest)">
                                            <path
                                                fill="currentColor"
                                                d="M10.556 0C5.04 0 .566 4.473.566 9.99a9.986 9.986 0 0 0 6.349 9.3c-.088-.79-.166-2.002.034-2.865.182-.78 1.172-4.964 1.172-4.964s-.3-.6-.3-1.484c0-1.386.806-2.426 1.807-2.426.853 0 1.265.64 1.265 1.406 0 .858-.544 2.14-.827 3.327-.237.994.5 1.804 1.48 1.804 1.773 0 3.14-1.87 3.14-4.572 0-2.384-1.72-4.058-4.174-4.058-2.841 0-4.507 2.135-4.507 4.333 0 .86.328 1.786.74 2.284.083.1.094.188.071.288-.075.312-.244.999-.278 1.135-.044.188-.143.226-.334.138-1.246-.575-2.028-2.398-2.028-3.872 0-3.146 2.29-6.043 6.6-6.043 3.465 0 6.16 2.472 6.16 5.769 0 3.446-2.172 6.218-5.194 6.218-1.011 0-1.961-.524-2.298-1.149l-.624 2.374c-.224.87-.837 1.96-1.249 2.621A10.01 10.01 0 0 0 10.53 20c5.506 0 9.987-4.47 9.987-9.99 0-5.518-4.481-9.988-9.987-9.988L10.556 0Z"
                                            ></path>
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                            <li className="w-[24px] h-[24px]">
                                <Link href="https://www.facebook.com/OPI/">
                                    <svg
                                        className="icon__facebook SocialLinks_socialLinks__facebook__kHAyN"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 19 18"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M7.383 9.79V18h3.34V9.8h2.785l.415-3.207h-3.2V4.551c0-.927.261-1.564 1.6-1.564h1.716V.125A23.339 23.339 0 0 0 11.543 0c-2.469 0-4.16 1.49-4.16 4.227V6.59H4.59v3.2h2.793Z"
                                        ></path>
                                    </svg>
                                </Link>
                            </li>
                            <li className="w-[31px] h-[22px]">
                                <Link href="https://www.youtube.com/OPIProducts">
                                    <svg
                                        className="icon__youtube SocialLinks_socialLinks__youtube__lQkX1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 21 14"
                                    >
                                        <path
                                            fill="#000"
                                            d="M20.215 2.186A2.505 2.505 0 0 0 18.446.418C16.887 0 10.633 0 10.633 0S4.378 0 2.819.418a2.505 2.505 0 0 0-1.768 1.768C.633 3.745.633 7 .633 7s0 3.255.418 4.814c.23.86.907 1.537 1.768 1.768C4.38 14 10.633 14 10.633 14s6.254 0 7.813-.418a2.504 2.504 0 0 0 1.769-1.768c.418-1.56.418-4.814.418-4.814s-.002-3.255-.418-4.814Z"
                                        ></path>
                                        <path fill="#fff" d="m8.629 10 5.196-3-5.196-3v6Z"></path>
                                    </svg>
                                </Link>
                            </li>
                            <li className="w-[26px] h-[21px]">
                                <Link href="https://twitter.com/OPI_PRODUCTS">
                                    <svg
                                        className="icon__twitter SocialLinks_socialLinks__twitter__aguL0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 17 14"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M14.538 3.736a6 6 0 0 1 .01.425c0 4.337-3.303 9.34-9.34 9.34v-.003a9.293 9.293 0 0 1-5.032-1.472 6.591 6.591 0 0 0 4.858-1.36 3.287 3.287 0 0 1-3.067-2.28c.492.095 1 .076 1.482-.056A3.283 3.283 0 0 1 .816 5.112v-.041c.456.254.967.395 1.49.41A3.287 3.287 0 0 1 1.29 1.098a9.317 9.317 0 0 0 6.765 3.43 3.285 3.285 0 0 1 5.594-2.994 6.587 6.587 0 0 0 2.085-.797 3.295 3.295 0 0 1-1.443 1.815 6.53 6.53 0 0 0 1.885-.516 6.669 6.669 0 0 1-1.638 1.7Z"
                                        ></path>
                                    </svg>
                                </Link>
                            </li>
                            <li className="w-[26px] h-[24px]">
                                <Link href="https://www.tiktok.com/@opi">
                                    <svg
                                        className="icon__tiktok SocialLinks_socialLinks__tiktok__lXp45"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 15 16"
                                    >
                                        <g clipPath="url(#a)">
                                            <path
                                                fill="#000"
                                                fillRule="evenodd"
                                                d="M10.71 0c.264 2.27 1.531 3.624 3.734 3.768v2.554c-1.277.125-2.395-.293-3.696-1.08v4.777c0 6.067-6.615 7.964-9.275 3.614-1.708-2.798-.662-7.71 4.82-7.906V8.42a7.933 7.933 0 0 0-1.272.312c-1.22.413-1.91 1.186-1.719 2.55.37 2.61 5.161 3.383 4.763-1.72V.006h2.645V0Z"
                                                clipRule="evenodd"
                                            ></path>
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-[40px]">
                <svg viewBox="0 0 1440 368" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2980_106063)">
                        <path d="M0 0h1440v368H0z"></path>
                        <g clipPath="url(#clip1_2980_106063)" fillRule="evenodd" clipRule="evenodd" fill="#fff">
                            <path d="M1074.96 279.086c18.52 0 33.54-15.02 33.54-33.548 0-18.527-15.02-33.547-33.54-33.547-18.53 0-33.55 15.02-33.55 33.547 0 18.528 15.02 33.548 33.55 33.548ZM524.775 279.086c18.528 0 33.548-15.021 33.548-33.548 0-18.528-15.02-33.548-33.548-33.548-18.527 0-33.547 15.02-33.547 33.548 0 18.527 15.02 33.548 33.547 33.548ZM226.964 38c97.746 0 176.964 92.866 176.964 207.538C403.928 360.21 324.71 453 226.964 453S50 360.058 50 245.538C50 131.019 129.218 38 226.964 38Zm0 18.604c-53.066 0-96.145 43.002-96.145 96.144v185.58c0 53.066 43.002 96.145 96.145 96.145 53.142 0 96.144-43.003 96.144-96.145v-185.58c0-53.066-43.002-96.144-96.144-96.144ZM1202.29 46.997v15.096h56.11v362.468h-56.11v15.096H1390v-15.096h-56.12V62.093H1390V46.997h-187.71ZM723.241 244.395h77.693c50.322 0 65.266-40.791 65.266-91.189 0-50.398-14.944-91.189-65.266-91.189h-77.693v182.378Zm0 180.166h56.116v15.096H591.643v-15.096h56.116V62.093h-56.116V46.997l236.282-.153c58.784 0 119.399 47.653 119.399 106.438 0 58.785-60.615 106.438-119.399 106.438H723.241v164.917-.076Z"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Footer;
