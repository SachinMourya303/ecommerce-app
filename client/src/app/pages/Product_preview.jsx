import { ChevronRight, MapPin, ShoppingCart, Store } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../components/RelatedProducts';
import Footer from '../sections/Footer';

const Product_preview = () => {
    const { id } = useParams();
    const darkmode = useSelector(state => state.userData.darkmode);
    const products = useSelector(state => state.userData.products);

    const filterProduct = products.filter((item) => item._id === id);
    console.log(filterProduct);

    const images = filterProduct.map((item) => item?.productImage);
    const product = filterProduct[0];

    const size = [
        { title: "S", value: "S" },
        { title: "M", value: "M" },
        { title: "L", value: "L" },
        { title: "XL", value: "XL" },
    ]

    const [changeImage, setChangeImage] = useState(null);

    useEffect(() => {
        if (images[0]?.image1) {
            setChangeImage(images[0]?.image1);
        }
    }, [product]);

    return (
        <div>
            <div className={`${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'} px-6 md:px-16 2xl:px-96 py-3 transition-all`}>
            <nav className={`text-xs ${darkmode ? 'text-rose-700' : 'text-rose-900'}`}>
                <Link to='/'>Home</Link> / <Link>{filterProduct[0]?.productDetails?.category}</Link> / <Link className={`${darkmode ? 'text-gray-300' : 'text-gray-500'}`}>{filterProduct[0]?.productDetails?.name}</Link>
            </nav>

            <div className='flex flex-wrap md:justify-between mt-25 lg:mt-10'>
                <div className='h-80 lg:h-130 w-full md:w-[49%]'>
                    <div className='flex max-lg:flex-wrap-reverse lg:justify-end gap-5 h-full w-full'>
                        <figure className='flex lg:flex-col gap-2'>
                            <img onClick={() => setChangeImage(images[0]?.image1)} src={images[0]?.image1} alt="product-img" className='h-15 md:h-20 w-15 md:w-20 rounded-lg border border-rose-900' />
                            {
                                images[0]?.image2 &&
                                <img onClick={() => setChangeImage(images[0]?.image2)} src={images[0]?.image2} alt="product-img" className='h-15 md:h-20 w-15 md:w-20 rounded-lg border border-rose-900' />
                            }
                            {
                                images[0]?.image3 &&
                                <img onClick={() => setChangeImage(images[0]?.image3)} src={images[0]?.image3} alt="product-img" className='h-15 md:h-20 w-15 md:w-20 rounded-lg border border-rose-900' />
                            }
                            {
                                images[0]?.image4 &&
                                <img onClick={() => setChangeImage(images[0]?.image4)} src={images[0]?.image4} alt="product-img" className='h-15 md:h-20 w-15 md:w-20 rounded-lg border border-rose-900' />
                            }
                        </figure>

                        <figure className='h-full w-full md:w-[90%] border border-gray-200 flex justify-center rounded-lg'>
                            <img src={changeImage} alt="product-img" className='h-full md:w-[70%] rounded-lg' />
                        </figure>
                    </div>

                    <div className='w-full flex justify-between mt-5 md:p-5'>
                        <div className='flex w-full justify-between'>
                            <button className='flex gap-2 justify-center border border-rose-900 w-[49%] py-3 text-rose-900 hover:bg-rose-900 hover:text-white rounded-lg cursor-pointer truncate'>
                                <ShoppingCart />
                                Add to Cart
                            </button>
                            <button className='flex gap-2 justify-center bg-rose-900 w-[49%] py-3 text-white rounded-lg hover:opacity-90 cursor-pointer truncate'>
                                Buy Now
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[49%] flex flex-col gap-5 max-md:mt-25'>
                    <div className={`flex flex-col gap-2 border border-gray-200 w-full p-5 rounded-lg ${darkmode ? 'text-white' : 'text-gray-700'}`}>
                        <b className='text-lg'>{filterProduct[0]?.productDetails?.name}</b>
                        <span className='text-gray-400'>{filterProduct[0]?.productDetails?.description}</span>
                        <span className='text-3xl flex items-end'>₹ {filterProduct[0]?.productDetails?.price} <p className='text-gray-400 text-lg pl-2'>onwords</p> </span>
                        <div className='w-12 px-2 rounded-full flex items-center justify-between bg-green-500 text-white'>
                            {filterProduct[0]?.productDetails?.rating}
                            <span className='text-lg'>★</span>
                        </div>
                        <span className='text-xs text-gray-500'>Free Delivery</span>
                    </div>

                    <div className='mt-5 flex flex-col border border-gray-200 p-5 rounded-lg'>
                        <span>Available Size</span>
                        {
                            filterProduct[0]?.productDetails?.category.includes('Kids')
                                ? <span className='flex gap-5 mt-5'>
                                    {
                                        size.slice(0, 2).map((item, index) => (
                                            <span key={index} className={`${darkmode ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'} border border-gray-300 w-10 h-10 md:w-15 md:h-15 flex items-center justify-center rounded-full cursor-pointer`}>{item?.title}</span>
                                        ))
                                    }
                                </span>
                                : <span className='flex gap-5 mt-5'>
                                    {
                                        size.map((item, index) => (
                                            <span key={index} className={`${darkmode ? 'text-white hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'} border border-gray-300 w-10 h-10 md:w-15 md:h-15 flex items-center justify-center rounded-full cursor-pointer`}>{item?.title}</span>
                                        ))
                                    }
                                </span>
                        }
                    </div>

                    <div className='mt-5 flex flex-col border border-gray-200 p-5 rounded-lg'>
                        <span>Sold By</span>
                        <div className='flex items-center mt-5 gap-2'>
                            <span className='bg-blue-100 p-3 rounded-full'> <Store /></span>
                            <b>{filterProduct[0]?.productDetails?.sold_by}</b>
                        </div>
                        <div className='flex items-center mt-5 gap-2'>
                            <span className='bg-blue-100 p-3 rounded-full'> <MapPin /></span>
                            <span>{filterProduct[0]?.productDetails?.address}</span>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts />
        </div>
        <Footer />
        </div>
    )
}

export default Product_preview