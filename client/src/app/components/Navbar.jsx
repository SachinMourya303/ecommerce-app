import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Heart, Search, ShoppingCart, TextAlignEnd } from 'lucide-react'
import Search_model from './Search_model'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchDropdown } from '../state-management/slices/popup'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchDropdown = useSelector(state => state.popup.searchDropdown);

    const links = [
        { title: "Home", href: "/" },
        { title: "New-Collection", href: "#products" },
        { title: "Category", href: "/" },
        { title: "Contact", href: "/" },
    ]

    return (
        <div>
            <nav className="flex text-app-text-medium-color items-center justify-between px-6 2xl:px-64 py-3 border-b border-gray-300 bg-white relative transition-all">

                <span className='website logo text-3xl'>Logo</span>

                {/* Desktop Menu */}

                <div onClick={() => dispatch(setSearchDropdown(true))} className="hidden xl:w-[40%] lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <Search className='text-app-text-light-color' />
                </div>

                <div className="hidden sm:flex items-center gap-8">
                    {
                        links.map((link, index) => (
                            <HashLink smooth key={index} to={link.href} className='truncate'>{link.title}</HashLink>
                        ))
                    }
                </div>
                <div className='flex gap-5 items-center'>
                    <div className="relative cursor-pointer">
                        <Heart className='text-app-icon-light-color' />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full">3</button>
                    </div>
                    <div className="relative cursor-pointer">
                        <ShoppingCart className='text-app-icon-light-color' />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full">3</button>
                    </div>

                    <button onClick={() => navigate('/auth/signin')} className="btn hidden sm:flex">
                        Login
                    </button>

                    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                        <TextAlignEnd />
                    </button>
                </div>
            </nav>

            <div className='relative'>
                {/* Mobile Menu */}
                <div className={`${open ? 'flex' : 'hidden'} absolute z-10 top-0 left-0 bg-white h-screen w-full flex-col items-center`}>
                    <div className='flex flex-col items-center'>
                        {
                            links.map((link, index) => (
                                <HashLink smooth key={index} to={link.href} className='truncate py-3'>{link.title}</HashLink>
                            ))
                        }
                    </div>
                    <button onClick={() => navigate('/auth/signin')} className="btn w-[90%] mt-10">
                        Login
                    </button>
                </div>
            </div>

            <Search_model />
        </div>
    )
}

export default Navbar