import { ArrowLeft, X } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const carts = useSelector(state => state.userData.carts);

    const totalAmount = carts.reduce(
        (acc, item) => acc + Number(item.price) * item.quantity,
        0
    );


    return (
        <div className="flex flex-col md:flex-row mt-10 w-full px-6 md:px-16 2xl:px-96">
            <div className='w-[70%]'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-indigo-500">3 Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {carts.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                                <img className="max-w-full h-full object-cover" src={product.product_image} alt={product.product_name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{product.product_name}</p>
                            </div>
                        </div>
                        <p className="text-center">${product.price * product.quantity}</p>
                        <button className="cursor-pointer mx-auto border border-rose-500 rounded-full p-1">
                            <X className='size-5 text-rose-700' />
                        </button>
                    </div>)
                )}

                <button className="group cursor-pointer flex items-center mt-8 gap-2 text-rose-700 font-medium">
                    <ArrowLeft />
                    Continue Shopping
                </button>

            </div>

            <div className="w-[30%] h-70 bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium py-2">Order Summary</h2>
                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{totalAmount}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>{totalAmount}</span>
                    </p>
                </div>

                <button className="w-full py-3 mt-6 cursor-pointer bg-rose-900 text-white font-medium hover:bg-indigo-600 transition">
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default Cart