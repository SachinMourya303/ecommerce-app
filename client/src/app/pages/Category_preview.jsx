import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../sections/Footer';
import { Link } from 'react-router-dom';

const Category_preview = () => {
    const products = useSelector(state => state.userData.products);
    const darkmode = useSelector(state => state.userData.darkmode);
    const navigate = useNavigate();
    const { name } = useParams();
    return (
        <div>
            <div className='px-6 md:px-16 2xl:px-96 mt-5'>
                <nav className={`text-xs ${darkmode ? 'text-rose-700' : 'text-rose-900'}`}>
                    <Link to='/'>Home</Link> /  <Link className={`${darkmode ? 'text-gray-300' : 'text-gray-500'}`}>{name}</Link>
                </nav>
                <div className='mt-5 flex flex-wrap gap-3'>
                    {
                        products.filter((item) => item.productDetails.category.includes(name)).slice(0, 15).map((item, index) => (
                            <figure onClick={() => navigate(`/product/${item._id}`)} key={index} className='w-32 xl:w-60 border border-gray-200 rounded-lg overflow-hidden cursor-pointer'>
                                <img src={item.productImage.image1} alt="product-img" className='w-full h-32 xl:h-60' />
                                <figcaption className='flex flex-col gap-2 p-1 md:p-5'>
                                    <span className='text-gray-500'>{item.productDetails.name}</span>
                                    <span className='font-bold flex item-center gap-2'> ₹ {item.productDetails.price}</span>
                                    <div className='w-12 px-2 rounded-full flex items-center justify-between bg-green-500 text-white'>
                                        {item.productDetails.rating}
                                        <span className='text-lg'>★</span>
                                    </div>
                                    <span className='text-xs text-gray-500'>Free Delivery</span>
                                </figcaption>
                            </figure>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Category_preview