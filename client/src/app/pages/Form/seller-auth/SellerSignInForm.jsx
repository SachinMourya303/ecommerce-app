import React, { useState } from 'react'
import { background } from '../../../../assets/assets'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Lock, Mail, User } from 'lucide-react';
import { sellerSigninRequest } from '../../../utils/sellerForm';

const CustomerSignUpForm = () => {
    const darkmode = useSelector(state => state.userData.darkmode);
    const [sellerData, setSellerData] = useState({
        email: "",
        password: ""
    });
    console.log(sellerData);
    

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setSellerData(prev => ({ ...prev, [name]: value }));
    }

    const email = sellerData.email;
    const password = sellerData.password;
    const onsellerDataSubmit = async (e) => {
        e.preventDefault();
        await sellerSigninRequest(email, password);
    }

    const inputData = [
        { InputName: 'email', InputValue: sellerData.email, icon: Mail, placeholder: "Email", type: "email" },
        { InputName: 'password', InputValue: sellerData.password, icon: Lock, placeholder: "Password", type: "text" },
    ]

    return (
        <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'} absolute flex items-center justify-center flex items-center top-0 h-screen w-full`}>
            <div className='absolute z-2 w-[95%] md:w-[40%] xl:w-[25%]'>
                <form onSubmit={onsellerDataSubmit} className="w-full flex flex-col md:p-6 p-4 py-8 text-left text-sm">
                    <h2 className="text-2xl font-medium mb-6 text-center text-amber-500">Sign In</h2>

                    {
                        inputData.map((data, index) => (
                            <div key={index} className={`w-full flex items-center gap-2 my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 py-2.5 rounded-lg font-medium cursor-pointer px-2`}>
                                <data.icon className='size-4' />
                                <input onChange={onInputChange} name={data.InputName} value={data.InputValue} type={data.type} placeholder={data.placeholder} className='outline-none w-full' required />
                            </div>
                        ))
                    }

                    <button type='submit' className={`w-full flex items-center justify-center my-3 bg-amber-500 mt-10 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 py-2.5 rounded-lg font-medium cursor-pointer`}>Create Account</button>
                    <Link to='/account/type/seller/signup' className='text-rose-900 w-full flex justify-center' >Go Back</Link>

                    <p className="text-center mt-4">Don't have an account! <Link to='/account/type/seller/signup' className="text-rose-900 underline">Signup</Link></p>
                </form>
            </div>
        </div>
    )
}

export default CustomerSignUpForm