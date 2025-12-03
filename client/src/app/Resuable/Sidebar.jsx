import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logos } from '../../assets/assets';

const Sidebar = ({ sidebarLinks, menu, setMenu }) => {
    const darkmode = useSelector(state => state.userData.darkmode);
    const navigate = useNavigate();

    return (
        <div className={`${darkmode ? 'bg-black' : 'bg-rose-900 text-white'} lg:w-64 w-13 border-r-2 border-b border-amber-500 h-screen text-base flex flex-col transition-all duration-300`}>
            <div className='h-16 border-b border-amber-500 flex items-center p-1 md:px-4'>
                <div onClick={() => navigate('/')} className='text-xl'>
                    <img src={logos.logo2} alt="logo" className='max-lg:hidden'/>
                    <img src={logos.logo} alt="logo" className='lg:hidden'/>
                </div>
            </div>
            {sidebarLinks.map((item, index) => (
                <Link onClick={() => setMenu(item.name)} to={item.path} key={index}
                    className={`flex items-center py-3 px-4 gap-3 border-b border-amber-500 ${menu === item.name ? "border-r-4 md:border-r-[6px] bg-rose-500/10"
                        : "hover:bg-amber-500"
                        }`
                    }
                >
                    <item.icon className="w-5 h-5" />
                    <p className="hidden lg:block text-center truncate">{item.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default Sidebar