import Container from '@/component/container';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="">
            <Container title="account" />
            <div className="py-6 ">
                <div className="flex items-center justify-between px-[50px]">
                    <h1 className="text-[32px] font-medium">My Account</h1>
                    <button className="underline text-xl font-normal">LOG OUT</button>
                </div>
            </div>
            <div className="px-[50px] flex border-t-[1px] border-t-[#cacaca]">
                <div className="w-[25%] py-8 pr-[16px] mr-[64px] border-r-[1px] border-r-[#cacaca]">
                    <ul className="px-[20px]">
                        <li className="underline text-[16px] mb-[16px]">ACCOUNT OVERVIEW</li>
                        <li className="underline text-[16px] mb-[16px]">ORDERS</li>
                        <li className="underline text-[16px] mb-[16px]">ADDRESS BOOK</li>
                        <li className="underline text-[16px] mb-[16px]">WISHLIST</li>
                        <li className="underline text-[16px] mb-[16px]">LOG OUT</li>
                    </ul>
                </div>
                <div className="my-[32px] w-[70%] flex justify-between">
                    <div>
                        <h3 className="text-[20px] font-medium mb-[20px]">Your Wishlist</h3>
                        <div className="flex gap-4">
                            <h3 className="underline text-[16px] mb-[16px]">PRODUCTS</h3>
                            <h3 className="underline text-[16px] mb-[16px]">NAIL ART</h3>
                            <h3 className="underline text-[16px] mb-[16px]">ARTICLES</h3>
                        </div>
                        <p>No items</p>
                    </div>
                    <div>
                        <h3 className="underline text-[16px] mb-[16px]">CLEAR ALL</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
