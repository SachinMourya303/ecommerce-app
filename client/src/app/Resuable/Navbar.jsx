import React, { useState } from 'react'
import { setAdminToken, setDarkmode, setSellersToken } from '../state-management/slices/userData'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Sun, User } from 'lucide-react'

const Navbar = ({ user, logout }) => {
    const darkmode = useSelector(state => state.userData.darkmode);
    const [dropdown, setDropdown] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutAccount = () => {
        if (logout === "Seller") {
            dispatch(setSellersToken());
            navigate('/account/type');
        }
        else if (logout === "Admin") {
            dispatch(setAdminToken());
            navigate('/account/type');
        }
    }
    return (
        <div className={`relative w-full h-16 flex items-center justify-end px-4 md:px-8 border-b border-amber-500 py-2 ${darkmode ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300`}>
            <div className={`flex items-center gap-5 ${darkmode ? 'text-white/70' : 'text-gray-500'}`}>
                <p className='bg-blue-50 border border-blue-100 rounded-full p-1 truncate text-blue-500 text-xs'>{user}</p>
                <div onClick={() => setDropdown(!dropdown)} className='btn p-2!'>
                    <User />
                </div>
                {
                    dropdown &&
                    <div className='absolute top-15 rounded-lg btn py-2 px-5 right-10'>
                        <div className='flex flex-col'>
                            <button onClick={() => { dispatch(setDarkmode(true)); setDropdown(!dropdown) }} className='p-2 border-b hover:bg-amber-100 hover:rounded-lg cursor-pointer'>Theme</button>
                            <button onClick={logoutAccount} className='p-2 cursor-pointer hover:bg-amber-100 hover:rounded-lg'>Logout</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar