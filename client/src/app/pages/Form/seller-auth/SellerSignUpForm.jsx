import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Building2, Globe, Hash, Loader, Lock, Mail, MapPin, MapPinHouse, Phone, Store, User } from 'lucide-react';
import { sellerSignupRequest } from '../../../utils/sellerForm';

const CustomerSignUpForm = () => {
    const darkmode = useSelector(state => state.userData.darkmode);
    const loader = useSelector(state => state.userData.loader);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [sellerData, setSellerData] = useState({
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
        setSellerData(prev => ({ ...prev, [name]: value }));
    }

    const companyname = sellerData.companyname;
    const sellername = sellerData.sellername;
    const email = sellerData.email;
    const phone = sellerData.phone;
    const address = sellerData.address;
    const city = sellerData.city;
    const state = sellerData.state;
    const country = sellerData.country;
    const pincode = sellerData.pincode;
    const password = sellerData.password;

    const onsellerDataSubmit = async (e) => {
        e.preventDefault();
        await sellerSignupRequest(setSellerData, navigate, dispatch, companyname, sellername, email, phone, address, city, state, country, pincode, password);
    }

    const inputData = [
        { InputName: 'companyname', InputValue: sellerData.companyname, icon: Store, placeholder: "Company Name", type: "text" },
        { InputName: 'sellername', InputValue: sellerData.sellername, icon: User, placeholder: "Seller Name", type: "text" },
        { InputName: 'email', InputValue: sellerData.email, icon: Mail, placeholder: "Company Email", type: "email" },
        { InputName: 'phone', InputValue: sellerData.phone, icon: Phone, placeholder: "Company Number", type: "text" },
        { InputName: 'address', InputValue: sellerData.address, icon: MapPin, placeholder: "Company Address (at least 10 characters)", type: "text" },
        { InputName: 'city', InputValue: sellerData.city, icon: Building2, placeholder: "City Name", type: "text" },
        { InputName: 'state', InputValue: sellerData.state, icon: MapPinHouse, placeholder: "State Name", type: "text" },
        { InputName: 'country', InputValue: sellerData.country, icon: Globe, placeholder: "Country Name", type: "text" },
        { InputName: 'pincode', InputValue: sellerData.pincode, icon: Hash, placeholder: "Pinode", type: "text" },
        { InputName: 'password', InputValue: sellerData.password, icon: Lock, placeholder: "Password", type: "text" },
    ]

    return (
        <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'} absolute flex items-center justify-center flex items-center top-0 md:h-screen w-full`}>
            <form onSubmit={onsellerDataSubmit} className="w-full flex flex-col items-center md:p-6 p-4 py-8 text-left text-sm">
                <h2 className="text-2xl font-medium mb-6 text-center text-amber-500">Sign Up</h2>

                <div className='w-[90%] md:w-[80%] flex max-md:flex-col md:flex-wrap justify-between'>
                    {
                        inputData.map((data, index) => (
                            <div key={index} className={`w-full md:w-[45%] flex items-center gap-2 my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 rounded-lg font-medium cursor-pointer px-2`}>
                                <data.icon className='size-4' />
                                <input onChange={onInputChange} name={data.InputName} value={data.InputValue} type={data.type} placeholder={data.placeholder} required className=' outline-none w-full py-2.5' />
                            </div>
                        ))
                    }
                </div>


                <button type='submit' className={`w-[50%] md:w-[30%] flex items-center justify-center my-3 bg-amber-500 mt-10 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 py-2.5 rounded-lg font-medium cursor-pointer`}>
                    {loader ? <Loader className='animate-spin' /> : 'Create Account'}
                </button>
                <Link to='/account/type/seller/signin' className='text-rose-900 w-full flex justify-center' >Go Back</Link>

                <p className="text-center mt-4">Already have an account? <Link to='/account/type/seller/signin' className="text-rose-900 underline">Signin</Link></p>
            </form>
        </div>
    )
}

export default CustomerSignUpForm