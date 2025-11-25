import React from 'react'
import { background } from '../../assets/assets'
import { Banknote, ShoppingBasket, Truck } from 'lucide-react';
import { useSelector } from 'react-redux';

const HeroSection = () => {
    const darkmode = useSelector(state => state.userData.darkmode);
    const year = new Date(Date.now()).getFullYear();
    return (
        <div className='w-full 2xl:px-90 transition-all'>
            <div className='w-full border-5 lg:border-10 border-amber-500 overflow-hidden'>
                <div className={`relative w-full ${darkmode ? 'bg-black' : 'bg-rose-900'} flex items-center justify-center text-white flex-wrap`}>
                    <figure className='w-[100%] md:w-[50%] border-b-5 border-amber-500 h-[300px] lg:h-[500px] h-full md:border-b-0'>
                        <img src={background.model} alt="model" className='h-full w-full object-cover object-center' />
                    </figure>

                    <div className='hidden md:flex absolute rotate-135'>
                        <hr className='border-r-5 lg:border-r-10 h-[718px] border-amber-500' />
                    </div>

                    <figcaption className='w-[100%] md:w-[50%] h-[300px] lg:h-[500px] flex flex-col justify-center lg:p-10'>
                        <span className='text-5xl lg:text-7xl w-full'>New</span>
                        <span className='colletion-title text-7xl lg:text-9xl w-full text-center text-amber-500'>Collection</span>
                        <span className='text-5xl lg:text-7xl w-full text-end'>{year}</span>
                    </figcaption>
                </div>
            </div>

            <div className={`hidden md:flex ${darkmode ? 'bg-black' : 'bg-rose-100'} border-t-0 border border-rose-200 justify-center py-2`}>
                <div className='w-[80%] border border-rose-300 flex justify-center rounded-full'>
                    <div className={`w-[80%] lg:w-[50%] flex justify-between p-2 ${darkmode ? 'text-white' : 'text-app-text-medium-color'}`}>
                        <span className='flex gap-2 items-center truncate'> <Truck className='text-rose-400' /> Fast Delivery</span>
                        <span className='flex gap-2 items-center truncate'> <Banknote className='text-rose-400' /> Cash on Delivery</span>
                        <span className='flex gap-2 items-center truncate'> <ShoppingBasket className='text-rose-400' /> Lowest Prices</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection