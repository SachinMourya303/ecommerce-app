import React from 'react'
import { BadgeCheck, Box, IndianRupee, Store } from 'lucide-react';
import Analytics from '../components/Analytics'
import { useSelector } from 'react-redux';
import Customer_pie_chart from '../components/Customer_pie_chart';

const AdminHomePage = () => {
  const products = useSelector(state => state.userData.products);
  const sellersAccounts = useSelector(state => state.userData.sellersAccounts);
  const approvedProducts = products.filter((item) => item.productDetails.valid === true);
  const customerAccounts = useSelector(state => state.userData.customerAccounts);
  const revenue = approvedProducts.reduce((acc, item) => {
    const price = Number(item.productDetails.price) || 0;
    return acc + price;
  }, 0);



  const analytics = [
    { href: "/account/admin/dashboard/products", title: "Products", total: products?.length, icon: Box },
    { href: "/account/admin/dashboard/customers", title: "Customers", total: customerAccounts?.length, icon: Box },
    { href: "/account/admin/dashboard/sellers", title: "Sellers", total: sellersAccounts?.length, icon: Store },
    { href: "/account/admin/dashboard/products", title: "Approved", total: approvedProducts?.length, icon: BadgeCheck },
    { href: "/account/admin/dashboard", title: "Revenue", total: revenue, icon: IndianRupee },
  ]

  const data = [
    { name: "Products", value: products?.length },
    { name: "Customers", value: customerAccounts?.length },
    { name: "Sellers", value: sellersAccounts?.length },
    { name: "Approved", value: approvedProducts?.length },
    { name: "Revenue", value: revenue },
  ];


  return (
    <>
        <Analytics analytics={analytics} />
        <Customer_pie_chart data={data} />
    </>
  )
}

export default AdminHomePage