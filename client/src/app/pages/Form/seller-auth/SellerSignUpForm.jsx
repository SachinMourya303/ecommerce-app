import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { customerSignupRequest } from '../../../utils/customerForm';
import { useDispatch, useSelector } from 'react-redux';
import { Building2, Globe, Hash, Lock, Mail, MapPin, MapPinHouse, Phone, Store, User } from 'lucide-react';

const CustomerSignUpForm = () => {
    const darkmode = useSelector(state => state.userData.darkmode);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const [customerData, setCustomerData] = useState({
        companyname: "",
        sellername: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        password: "",
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerData(prev => ({ ...prev, [name]: value }));
    }

    const name = customerData.name;
    const email = customerData.email;
    const password = customerData.password;
    const onCustomerDataSubmit = async (e) => {
        e.preventDefault();
        await customerSignupRequest(dispatch, setMessage, name, email, password);
    }

    const inputData = [
        { InputName: 'companyname', InputValue: customerData.companyname, icon: Store, placeholder: "Company Name" , type: "text" },
        { InputName: 'sellername', InputValue: customerData.sellername, icon: User, placeholder: "Seller Name" , type: "text" },
        { InputName: 'email', InputValue: customerData.email, icon: Mail, placeholder: "Company Email", type: "email" },
        { InputName: 'phone', InputValue: customerData.phone, icon: Phone, placeholder: "Company Number" , type: "text" },
        { InputName: 'address', InputValue: customerData.address, icon: MapPin, placeholder: "Company Address" , type: "text" },
        { InputName: 'city', InputValue: customerData.city, icon: Building2, placeholder: "City Name" , type: "text" },
        { InputName: 'state', InputValue: customerData.state, icon: MapPinHouse, placeholder: "State Name" , type: "text" },
        { InputName: 'country', InputValue: customerData.country, icon: Globe, placeholder: "Country Name" , type: "text" },
        { InputName: 'pincode', InputValue: customerData.pincode, icon: Hash, placeholder: "Pinode" , type: "text" },
        { InputName: 'password', InputValue: customerData.password, icon: Lock, placeholder: "Password" , type: "text" },
    ]

    return (
        <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'} absolute flex items-center justify-center flex items-center top-0 md:h-screen w-full`}>
                <form onSubmit={onCustomerDataSubmit} className="w-full flex flex-col items-center md:p-6 p-4 py-8 text-left text-sm">
                    <h2 className="text-2xl font-medium mb-6 text-center text-amber-500">Sign Up</h2>

                    {message
                        ? <div className='w-full flex justify-center border mt-1 bg-red-500/5 mb-2 border-red-500/10 outline-none rounded py-2.5 px-3 text-red-500'>{message}</div>
                        : ""}

                    <div className='w-[90%] md:w-[80%] flex max-md:flex-col md:flex-wrap justify-between'>
                        {
                        inputData.map((data , index) => (
                            <div key={index} className={`w-full md:w-[45%] flex items-center gap-2 my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 py-2.5 rounded-lg font-medium cursor-pointer px-2`}>
                                <data.icon className='size-4' />
                                <input onChange={onInputChange} name={data.InputName} value={data.InputValue} type={data.type} placeholder={data.placeholder} required className=' outline-none' />
                            </div>
                        ))
                    }
                    </div>


                    <button type='submit' className={`w-[50%] md:w-[30%] flex items-center justify-center my-3 bg-amber-500 mt-10 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 py-2.5 rounded-lg font-medium cursor-pointer`}>Create Account</button>
                    <Link to='/account/type' className='text-rose-900 w-full flex justify-center' >Go Back</Link>

                    <p className="text-center mt-4">Already have an account? <Link to='/account/type/seller/signin' className="text-rose-900 underline">Signin</Link></p>
                </form>
            </div>
    )
}

export default CustomerSignUpForm