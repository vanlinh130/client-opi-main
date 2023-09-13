'use client';
import Image from 'next/image';
import './globals.css';
import React from 'react';
import { HomeCart, HomeColor, HomeInterView, HomeNailArt, HomeProduct, HomeSlider } from '@/pages/home';

export default function Home() {
    return (
        <div className="m-auto">
            <div className="">
                <HomeSlider />
                <HomeColor />
                <HomeProduct />
                <HomeCart />
                <HomeNailArt />
                <HomeInterView />
            </div>
        </div>
    );
}
