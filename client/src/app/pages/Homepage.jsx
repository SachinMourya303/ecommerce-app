import React from 'react'
import HeroSection from '../sections/HeroSection'
import Layout from '../sections/Layout'
import CategorySection from '../sections/CategorySection'
import Footer from '../sections/Footer'
import { useSelector } from 'react-redux'
import { Skeleton } from 'primereact/skeleton';

const Homepage = () => {
  const loader = useSelector(state => state.userData.loader);

  if (loader)
    return (
      <div className='flex flex-col items-center px-2 md:px-16 2xl:px-96 py-3 justify-between'>
        <Skeleton width='100%' height='30rem' className='rounded-lg!' />
        <div className='w-full md:w-[90%] 2xl:w-[95%] flex flex-wrap items-center px-6 md:px-16 2xl:px-150 py-3 justify-between'>
          <Skeleton className='w-30! h-30! rounded-full!' />
          <Skeleton className='w-30! h-30! rounded-full!' />
          <Skeleton className='w-30! h-30! rounded-full!' />
          <Skeleton className='w-30! h-30! rounded-full!' />
          <Skeleton className='w-30! h-30! rounded-full!' />
          <Skeleton className='w-30! h-30! rounded-full!' />
        </div>
      </div>
    );

  return (
    <div>
      <HeroSection />
      <CategorySection />
      <Layout />
      <Footer />
    </div>
  )
}

export default Homepage