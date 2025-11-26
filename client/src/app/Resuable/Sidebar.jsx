import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Sidebar = ({sidebarLinks , menu , setMenu}) => {
    const darkmode = useSelector(state => state.userData.darkmode);

    return (
        <div className={`${darkmode ? 'bg-black' : 'bg-white'} text-amber-700 lg:w-64 w-16 border-r md:h-screen text-base border-gray-300 pt-4 flex flex-col transition-all duration-300`}>
            {sidebarLinks.map((item, index) => (
                <Link onClick={() => setMenu(item.name)} to={item.path} key={index}
                    className={`flex items-center py-3 px-4 gap-3 
            ${menu === item.name ? "border-r-4 md:border-r-[6px] bg-rose-500/10 border-amber-700 text-amber-700"
                            : "hover:bg-rose-100/90"
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