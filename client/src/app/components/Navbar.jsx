import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Heart, Mail, Search, ShoppingCart, Sun, TextAlignEnd, User, X } from 'lucide-react'
import Search_model from './Search_model'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchDropdown } from '../state-management/slices/popup'
import { useNavigate } from 'react-router-dom';
import { setCustomerToken, setDarkmode } from '../state-management/slices/userData';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchDropdown = useSelector(state => state.popup.searchDropdown);
    const darkmode = useSelector(state => state.userData.darkmode);
    const customerToken = useSelector(state => state.userData.customerToken);
    const carts = useSelector(state => state.userData.carts);

    const [dropdown, setDropdown] = useState(false);

    const links = [
        { title: "Home", href: "/" },
        { title: "Shop", href: "/shop/products" },
        { title: "New-Collection", href: "#products" },
        { title: "Category", href: "#category" },
        { title: "Contact", href: "#contact" },
    ]

    const mobileLinks = [
        { title: "Home", href: "/" },
        { title: "Shop", href: "/shop/products" },
        { title: "New-Collection", href: "#products" },
        { title: "Category", href: "#category" },
        { title: "Contact", href: "#contact" },
        { title: "Theme", value: "theme" },
    ]

// const filterCustomer = carts.filter((item) => item.)
    return (
        <div>
            <nav className={`flex border-b border-gray-200 items-center justify-between px-6 md:px-16 2xl:px-96 py-3 ${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'} relative transition-all`}>

                <span className='website logo text-3xl text-amber-500'>Amber</span>

                {/* Desktop Menu */}

                <div onClick={() => dispatch(setSearchDropdown(true))} className="hidden xl:w-[30%] lg:flex items-center text-sm gap-2 border-2 border-amber-500 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-amber-500" type="text" placeholder="Search products" />
                    <Search className='text-amber-500' />
                </div>

                <div className="hidden sm:flex items-center gap-8">
                    {
                        links.map((link, index) => (
                            <HashLink smooth key={index} to={link.href} className='truncate hover:text-amber-500'>{link.title}</HashLink>
                        ))
                    }
                </div>
                <div className='flex gap-5 items-center'>
                    <div className="relative cursor-pointer">
                        <Heart onClick={() => dispatch(setDarkmode())} className={`${darkmode ? 'text-white' : 'text-app-icon-light-color'}`} />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-amber-500 w-[18px] h-[18px] rounded-full">3</button>
                    </div>
                    <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                        <ShoppingCart className={`${darkmode ? 'text-white' : 'text-app-icon-light-color'}`} />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-amber-500 w-[18px] h-[18px] rounded-full">3</button>
                    </div>

                    {
                        !customerToken
                            ? <button onClick={() => navigate('/account/type')} className="btn hidden sm:flex">Login</button>
                            : <div>
                                <button onClick={() => setDropdown(!dropdown)} className="btn hidden sm:flex p-2"> <User /> </button>
                                <div>
                                    {
                                        dropdown &&
                                        <div className='absolute z-1 top-15 rounded-lg text-gry-500 bg-white border border-gray-200 py-2 px-5 right-10'>
                                            <div className='flex flex-col'>
                                                <span className='flex items-center gap-2 border-b border-gray-200 hover:bg-amber-100 py-2 hover:rounded-lg'> <User className='size-5' /> {customerToken.name}</span>
                                                <span className='flex items-center gap-2 border-b border-gray-200 hover:bg-amber-100 py-2 hover:rounded-lg'> <Mail className='size-5' /> {customerToken.email}</span>
                                                <button onClick={() => { dispatch(setDarkmode(true)); setDropdown(!dropdown) }} className='py-2 border-b border-gray-200 hover:bg-amber-100 hover:rounded-lg cursor-pointer flex justify-start items-center gap-2'> <Sun className='size-5' />Theme</button>
                                                <button onClick={() => dispatch(setCustomerToken(null))} className='p-2 cursor-pointer hover:bg-amber-100 hover:rounded-lg'>Logout</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                    }

                    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                        {open ? <X /> : <TextAlignEnd />}
                    </button>
                </div>
            </nav>

            <div className={`relative md:hidden`}>
                {/* Mobile Menu */}
                <div onClick={() => setOpen(false)} className={`${open ? 'flex' : 'hidden'} ${darkmode ? "bg-black text-white" : "bg-white black"} absolute z-10 top-0 left-0 h-screen w-full flex-col items-center`}>
                    <div className='flex flex-col items-center'>
                        {
                            mobileLinks.map((link, index) => (
                                <HashLink onClick={link.value === "theme" ? () => dispatch(setDarkmode()) : ""} smooth key={index} to={link.href} className='truncate py-3'>{link.title}</HashLink>
                            ))
                        }
                    </div>
                    {
                        !customerToken
                            ? <button onClick={() => navigate('/account/type')} className="btn w-[90%] mt-10">Login</button>
                            : <button onClick={() => dispatch(setCustomerToken(null))} className="btn w-[90%] mt-10">Logout</button>
                    }
                </div>
            </div>

            <Search_model />
        </div>
    )
}

export default Navbar