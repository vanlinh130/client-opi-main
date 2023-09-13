import Link from 'next/link';
import React from 'react';

const Container = ({ title }) => {
    return (
        <div className="py-[18px]">
            <div className="px-[50px]">
                <Link href="" className="cursor-pointer">
                    Home
                </Link>
                <span className="uppercase"> / {title}</span>
            </div>
        </div>
    );
};

export default Container;
