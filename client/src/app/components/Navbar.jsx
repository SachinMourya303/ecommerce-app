import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Heart, Search, ShoppingCart, TextAlignEnd, X } from 'lucide-react'
import Search_model from './Search_model'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchDropdown } from '../state-management/slices/popup'
import { useNavigate } from 'react-router-dom';
import { setDarkmode } from '../state-management/slices/userData';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchDropdown = useSelector(state => state.popup.searchDropdown);
    const darkmode = useSelector(state => state.userData.darkmode);    

    const links = [
        { title: "Home", href: "/" },
        { title: "New-Collection", href: "#products" },
        { title: "Category", href: "#category" },
        { title: "Contact", href: "/" },
    ]

    return (
        <div>
            <nav className={`flex items-center justify-between px-6 md:px-16 2xl:px-96 py-3 ${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'} relative transition-all`}>

                <span className='website logo text-3xl text-amber-500'>Amber</span>

                {/* Desktop Menu */}

                <div onClick={() => dispatch(setSearchDropdown(true))} className="hidden xl:w-[40%] lg:flex items-center text-sm gap-2 border-2 border-amber-500 px-3 rounded-full">
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
                    <div className="relative cursor-pointer">
                        <ShoppingCart className={`${darkmode ? 'text-white' : 'text-app-icon-light-color'}`} />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-amber-500 w-[18px] h-[18px] rounded-full">3</button>
                    </div>

                    <button onClick={() => navigate('/account/type')} className="btn hidden sm:flex">
                        Login
                    </button>

                    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                        { open ? <X /> : <TextAlignEnd /> }
                    </button>
                </div>
            </nav>

            <div className='relative'>
                {/* Mobile Menu */}
                <div onClick={() => setOpen(false)} className={`${open ? 'flex' : 'hidden'} absolute z-10 top-0 left-0 bg-white h-screen w-full flex-col items-center`}>
                    <div className='flex flex-col items-center'>
                        {
                            links.map((link, index) => (
                                <HashLink smooth key={index} to={link.href} className='truncate py-3'>{link.title}</HashLink>
                            ))
                        }
                    </div>
                    <button onClick={() => navigate('/account/type')} className="btn w-[90%] mt-10">
                        Login
                    </button>
                </div>
            </div>

            <Search_model />
        </div>
    )
}

export default Navbar