import React from 'react'
import { setDarkmode, setSellersToken } from '../state-management/slices/userData'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Sun } from 'lucide-react'

const Navbar = ({ user, logout }) => {
    const darkmode = useSelector(state => state.userData.darkmode);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutAccount = () => {
        if (logout === "Seller") {
            dispatch(setSellersToken());
            navigate('/account/type');
        }
        else if (logout === "Admin") {
            dispatch(setSellersToken());
            navigate('/account/type');
        }
    }
    return (
        <div className={`h-16 flex items-center justify-end px-4 md:px-8 border-b border-amber-500 py-2 ${darkmode ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300`}>
            <div className={`flex items-center gap-5 ${darkmode ? 'text-white/70' : 'text-gray-500'}`}>
                <p className='bg-blue-50 border border-blue-100 rounded-full p-1 truncate text-blue-500 text-xs'>{user}</p>
                <Sun onClick={() => dispatch(setDarkmode(true))} />
                <button onClick={logoutAccount} className='btn'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar