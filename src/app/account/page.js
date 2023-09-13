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
                <div className="my-[32px] w-[70%]">
                    <p className="text-[16px] mb-[40px]">Welcome back, van linh!</p>
                    <div className="">
                        <h3 className="text-[20px] font-medium mb-[20px]">Recent Orders</h3>
                        <p className="text-[16px] mb-[64px]">You haven t placed any orders yet</p>
                    </div>
                    <div className="">
                        <div className="border-b-[1px] border-b-[#cacaca] mb-[24px]">
                            <h3 className="text-[20px] font-medium pb-[16px]">Primary Address</h3>
                        </div>
                        <p className="mb-[12px]">
                            van linh le <br />
                            1303 <br />
                            Vietnam
                        </p>
                        <Link href="">
                            <h3 className="text-[20px] font-normal pb-[16px] underline">VIEW ALL ADDRESS(S)</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
