import React from 'react'
import { setDarkmode, setSellerData } from '../state-management/slices/userData'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Sun } from 'lucide-react'

const Navbar = ({user , logout}) => {
    const darkmode = useSelector(state => state.userData.darkmode);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutAccount = () => {
          if(logout === "Seller"){
            dispatch(setSellerData());
            navigate('/account/type');
          }
    }
    return (
        <div className={`flex items-center justify-between px-4 md:px-8 border-b border-amber-700 py-3 ${darkmode ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300`}>
            <span className='text-xl'>{`${import.meta.env.VITE_WEBSITE_NAME}`}</span>
            <div className={`flex items-center gap-5 ${darkmode ? 'text-white/70' : 'text-gray-500'}`}>
                <p>{user}</p>
                <Sun onClick={() => dispatch(setDarkmode(true))}/>
                <button onClick={logoutAccount} className='btn'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar