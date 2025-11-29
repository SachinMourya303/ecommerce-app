import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Loader, Lock, Mail, User } from 'lucide-react';
import { customerSignupRequest } from '../../../utils/customerForm';

const CustomerSignUpForm = () => {
    const darkmode = useSelector(state => state.userData.darkmode);
    const loader = useSelector(state => state.userData.loader);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [customerData, setCustomerData] = useState({
        fullname: "",
        email: "",
        password: ""
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerData(prev => ({ ...prev, [name]: value }));
    }

    const name = customerData.fullname;
    const email = customerData.email;
    const password = customerData.password;
    const onCustomerDataSubmit = async (e) => {
        e.preventDefault();
        await customerSignupRequest(dispatch, setCustomerData , navigate , name, email, password);
    }

    const inputData = [
        { InputName: 'fullname', InputValue: customerData.fullname, icon: User, placeholder: "Full Name", type: "text" },
        { InputName: 'email', InputValue: customerData.email, icon: Mail, placeholder: "Email", type: "email" },
        { InputName: 'password', InputValue: customerData.password, icon: Lock, placeholder: "Password", type: "text" },
    ]

    return (
        <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'} absolute flex items-center justify-center flex items-center top-0 h-screen w-full`}>
            <div className='absolute z-2 w-[95%] md:w-[40%] xl:w-[25%]'>
                <form onSubmit={onCustomerDataSubmit} className="w-full flex flex-col md:p-6 p-4 py-8 text-left text-sm">
                    <h2 className="text-2xl font-medium mb-6 text-center text-amber-500">Sign Up</h2>

                    {
                        inputData.map((data, index) => (
                            <div key={index} className={`w-full flex items-center gap-2 my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 py-2.5 rounded-lg font-medium cursor-pointer px-2`}>
                                <data.icon className='size-4' />
                                <input onChange={onInputChange} name={data.InputName} value={data.InputValue} type={data.type} placeholder={data.placeholder} className='outline-none w-full' required />
                            </div>
                        ))
                    }

                    <button type='submit' className={`w-full flex items-center justify-center my-3 bg-amber-500 mt-10 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 py-2.5 rounded-lg font-medium cursor-pointer`}>
                        {loader ? <Loader className='animate-spin' /> : 'Create Account'}
                    </button>
                    <Link to='/account/type/customer/signin' className='text-rose-900 w-full flex justify-center' >Go Back</Link>

                    <p className="text-center mt-4">Already have an account? <Link to='/account/type/customer/signin' className="text-rose-900 underline">Signin</Link></p>
                </form>
            </div>
        </div>
    )
}

export default CustomerSignUpForm