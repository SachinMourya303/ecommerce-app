import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { logos } from '../../assets/assets'
import { useSelector } from 'react-redux'

const Footer = () => {
    const darkmode = useSelector(state => state.userData.darkmode);

    const links = [
        { title: "Home", href: "/" },
        { title: "Shop", href: "/shop/products" },
        { title: "New-Collection", href: "/#products" },
        { title: "Category", href: "/#category" },
        { title: "MyOrders", href: "/myorders" },
        { title: "Contact", href: "/#contact" },
    ]

    return (
        <div className={`pt-20 ${darkmode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <footer id='contact' className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full bg-rose-900 text-white">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <figure className='h-8'>
                        <img src={logos.logo2} alt="logo" className='h-full' />
                    </figure>
                    <p className="mt-6 text-sm">
                        Trendora is a modern fashion e-commerce platform offering curated styles, premium quality, and effortless shopping for every occasion.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:gap-10 lg:gap-20 justify-between md:justify-end">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2 flex flex-col">
                            {
                                links.map((link, index) => (
                                    <HashLink smooth key={index} to={link.href} className='truncate hover:text-amber-500'>{link.title}</HashLink>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <a href="tel:+919359489354">+91 9359489354</a>
                            <p className='max-md:text-xs'>trendora@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 © Trendora. All Right Reserved.
            </p>
        </footer>
        </div>
    )
}

export default Footer