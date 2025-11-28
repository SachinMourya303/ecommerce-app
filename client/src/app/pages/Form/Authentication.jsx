import React from 'react'
import { background } from '../../../assets/assets'
import { UserRound, Store, ShieldUser, ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Authentication = () => {
    const navigate = useNavigate();
    const darkmode = useSelector(state => state.userData.darkmode);
    const sellersToken = useSelector(state => state.userData.sellersToken);    

    const btn = [
        { title: "Customer", href: "/account/type/customer/signup", login: "/" , icon: UserRound },
        { title: "Seller", href: "/account/type/seller/signup", login: "/account/seller/dashboard" , icon: Store },
        { title: "Admin", href: "/account/type/admin/signup", login: "/" , icon: ShieldUser },
    ]

    return (
        <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'} absolute flex items-center justify-center flex items-center top-0 h-screen w-full`}>
            <form className="w-full md:w-[50%] xl:w-[30%] md:p-6 p-4 py-8 text-left text-sm">
                <h2 className="flex items-center text-xl font-medium mb-6 text-center">
                    <ChevronLeft onClick={() => navigate('/')} />
                    <span className='text-center w-[90%] truncate'>
                        Welcome to <b className='text-amber-500'>{`${import.meta.env.VITE_WEBSITE_NAME}`}</b>
                    </span>
                </h2>

                <div className='flex flex-col items-center'>
                    {
                        btn.map((auth, index) => (
                            <button onClick={(e) => { e.preventDefault(); {sellersToken ? navigate(auth.login) : navigate(auth.href);} }} key={index} className={`w-full flex items-center justify-center my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 py-2.5 rounded-lg font-medium cursor-pointer`}>
                                <div className='flex items-center justify-between w-full px-5'>
                                    <span>
                                        <auth.icon className='size-5' />
                                    </span>
                                    <span >
                                        {auth.title}
                                    </span>
                                    <span>
                                        <ChevronRight />
                                    </span>
                                </div>
                            </button>
                        ))
                    }
                </div>
            </form>
        </div>
    )
}

export default Authentication