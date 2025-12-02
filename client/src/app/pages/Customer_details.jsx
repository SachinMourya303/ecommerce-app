import { Building2, Globe, Hash, Landmark, Loader, Mail, MapPin, MapPinHouse, Phone, User } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { placeOrderRequest } from '../utils/ordersForm';
import { handlePayment } from '../utils/paymentForm';

const Customer_details = () => {

    const carts = useSelector(state => state.userData.carts);
    const loader = useSelector(state => state.userData.loader);
    const darkmode = useSelector(state => state.userData.darkmode);
    const customerToken = useSelector(state => state.userData.customerToken);
    const totalAmount = useSelector(state => state.userData.totalAmount);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [customerProductsDetails, setCustomerProductsDetails] = useState(null);

    const fetchCustomerProductsDetails = () => {
        const filterCustomer = carts.filter((item) => item?.customer_email === customerToken?.email);
        setCustomerProductsDetails(filterCustomer);
    }

    useEffect(() => {
        fetchCustomerProductsDetails();
    }, [carts]);



    const [customerInput, setCustomerInput] = useState({
        customer_name: customerToken?.name,
        customer_email: customerToken?.email,
        customer_phone: "",
        size: "",
        quantity: "",
        address: "",
        landmark: "",
        payment: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setCustomerInput(prev => ({ ...prev, [name]: value }));
    }

    const customerData = [
        { InputName: 'customer_name', InputValue: customerToken?.name, icon: User, placeholder: "Enter Name", type: "text", hide: true },
        { InputName: 'customer_email', InputValue: customerToken?.email, icon: Mail, placeholder: "Enter Email", type: "email", hide: true },
        { InputName: 'customer_phone', InputValue: customerInput.customer_phone, icon: Phone, placeholder: "Phone Number", type: "number", hide: false },
        { InputName: 'address', InputValue: customerInput.address, icon: MapPin, placeholder: "Enter Address", type: "text", hide: false },
        { InputName: 'landmark', InputValue: customerInput.landmark, icon: Landmark, placeholder: "Enter Landmark", type: "text", hide: false },
        { InputName: 'city', InputValue: customerInput.city, icon: Building2, placeholder: "City Name", type: "text", hide: false },
        { InputName: 'state', InputValue: customerInput.state, icon: MapPinHouse, placeholder: "State Name", type: "text", hide: false },
        { InputName: 'country', InputValue: customerInput.country, icon: Globe, placeholder: "Country Name", type: "text", hide: false },
        { InputName: 'pincode', InputValue: customerInput.pincode, icon: Hash, placeholder: "Pinode", type: "text", hide: false },
    ]

    const customer_name = customerToken?.name;
    const customer_email = customerToken?.email;
    const customer_phone = customerInput?.customer_phone;
    const address = customerInput?.address;
    const landmark = customerInput?.landmark;
    const city = customerInput?.city;
    const state = customerInput?.state;
    const country = customerInput?.country;
    const pincode = customerInput?.pincode;
    const payment = customerInput?.payment;
    const status = "Order Placed"
    const products = customerProductsDetails?.map((item) => ({
        ...item,
        size: customerInput?.size,
        quantity: customerInput?.quantity || 1
    }))

    const placeOrderForm = async (e) => {
        e.preventDefault();
        if (payment === "Cash On Delivery") {
            await placeOrderRequest(dispatch, navigate, customer_name, customer_email, customer_phone, address, landmark, payment, status, country, state, city, pincode, products)
        } else {
            await handlePayment(totalAmount, dispatch, navigate, customer_name, customer_email, customer_phone, address, landmark, payment, status, country, state, city, pincode, products);
        }
    }

    return (
        <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'} flex items-center justify-center flex items-center top-0 w-full`}>
            <form onSubmit={placeOrderForm} className="w-full flex flex-col items-center md:p-6 p-4 py-8 text-left text-sm">
                <h2 className="text-2xl font-medium mb-6 text-center text-amber-500">Enter Details</h2>

                <div className='w-[90%] md:w-[80%] flex max-md:flex-col md:flex-wrap justify-between'>
                    {
                        customerData.map((data, index) => (
                            <div key={index} className={`w-full md:w-[45%] flex items-center gap-2 my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 rounded-lg font-medium cursor-pointer px-2`}>
                                <data.icon className='size-4' />
                                <input onChange={onChangeHandler} value={customerInput[data.InputName]} name={data.InputName} placeholder={data?.placeholder} required className={`outline-none w-full py-2.5 ${data.hide ? 'cursor-not-allowed' : ''}`} disabled={data.hide} />
                            </div>
                        ))
                    }

                    <div className={`w-full md:w-[45%] flex items-center gap-2 my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 rounded-lg font-medium cursor-pointer px-2`}>
                        <select onChange={onChangeHandler} value={customerInput?.quantity} name='quantity' className='outline-none w-full py-2.5'>
                            <option value="">Select Qty</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className={`w-full md:w-[45%] flex items-center gap-2 my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 rounded-lg font-medium cursor-pointer px-2`}>
                        <select onChange={onChangeHandler} value={customerInput?.size} name='size' className='outline-none w-full py-2.5'>
                            <option value="">Select Size</option>
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">Extra Large</option>
                        </select>
                    </div>

                    <div className={`w-full md:w-[45%] flex items-center gap-2 my-3 border border-amber-700 border-b-5 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 rounded-lg font-medium cursor-pointer px-2`}>
                        <select onChange={onChangeHandler} value={customerInput?.payment} name='payment' className='outline-none w-full py-2.5'>
                            <option value="">Payment Method</option>
                            <option value="Cash On Delivery">Cash On Delivery</option>
                            <option value="Online Payment">Online Payment</option>
                        </select>
                    </div>
                </div>

                <button type='submit' className={`w-[50%] md:w-[30%] flex items-center justify-center my-3 bg-amber-500 mt-10 ${darkmode ? 'hover:bg-rose-900 text-rose-600 ' : 'hover:bg-rose-100 text-rose-900 '} transition-all active:scale-95 py-2.5 rounded-lg font-medium cursor-pointer`}>
                    {loader ? <Loader className='animate-spin' /> : 'Place Order'}
                </button>
                <Link to='/cart' className='text-rose-900 w-full flex justify-center' >Go Back</Link>

            </form>
        </div>
    )
}

export default Customer_details