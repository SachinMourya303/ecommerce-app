import React from 'react'
import { BadgeCheck, Box, IndianRupee } from 'lucide-react';
import Analytics from '../components/Analytics'
import { useSelector } from 'react-redux';
import Customer_pie_chart from '../components/Customer_pie_chart';

const SellerHomePage = () => {
  const products = useSelector(state => state.userData.products);
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

    const data = [
        { name: "Products", value: totalProcucts?.length },
        { name: "Approved", value: approvedProducts?.length },
        { name: "Revenue", value: revenue },
    ];
  return (
    <>
      <div className='flex flex-col'>
        <Analytics analytics={analytics} />
        <Customer_pie_chart data={data} />
      </div>
    </>
  )
}

export default SellerHomePage