import { BadgeCheck, Box, IndianRupee, Loader } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Analytics = () => {
  const products = useSelector(state => state.userData.products);
  const loader = useSelector(state => state.userData.loader);
  const sellersToken = useSelector(state => state.userData.sellersToken);
  const totalProcucts = products.filter((item) => item.productDetails.company_email === sellersToken.email);
  const approvedProducts = totalProcucts.filter((item) => item.productDetails.valid === true);
  const revenue = approvedProducts.reduce((acc, item) => {
    const price = Number(item.productDetails.price) || 0;
    return acc + price;
  }, 0);



  const analytics = [
    { href: "/account/seller/dashboard/products", title: "Products", total: totalProcucts?.length, icon: Box },
    { href: "/account/seller/dashboard/products", title: "Approved", total: approvedProducts?.length, icon: BadgeCheck },
    { href: "/account/seller/dashboard", title: "Revenue", total: revenue, icon: IndianRupee },
  ]
  return (
    <div className=''>
      <div className='flex max-md:flex-col items-center gap-5 text-white'>
        {
          analytics.map((item, index) => (
            <Link to={item.href} key={index} className='w-full md:w-60 flex flex-col bg-rose-700 p-5 rounded-lg border-t-5 border-b-5 border-amber-500 hover:rotate-5 transition duration-500'>
              <div className='w-full flex items-center justify-between gap-5'>
                <span>{item.title}</span>
                <item.icon />
              </div>
              <span className='bg-amber-500 mt-5 rounded-lg p-2 border-b-5 border-rose-900'>
                {loader ? <Loader className='animate-spin' /> : item.total}
              </span>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Analytics