import React from 'react'
import { background } from '../../assets/assets'

const HeroSection = () => {
    return (
        <div className='w-full 2xl:px-64'>
            <figure className='w-full overflow-hidden'>
                <img src={background.hero_section_background} alt="background" className='hidden md:flex w-full h-full object-cover object-center' />
                <img src={background.hero_section_background_mobile} alt="background" className='flex md:hidden w-full h-full object-cover object-center' />
            </figure>
            <figcaption className='relative w-full md:w-[65%] flex justify-center'>
                <button className="btn absolute bottom-10 w-[90%] md:w-[30%] bg-white/80 text-black">Shop Now</button>
            </figcaption>
        </div>
    )
}

export default HeroSection