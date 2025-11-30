import { Loader } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Analytics = ({ analytics }) => {
  const loader = useSelector(state => state.userData.loader);
  const navigate = useNavigate();

  return (
    <div className='text-white flex flex-wrap gap-5'>
      {
        analytics.map((item, index) => (
          <div onClick={() => navigate(item.href)} key={index} className='w-full md:w-60 flex flex-col bg-rose-700 p-5 rounded-lg border-t-5 border-b-5 border-amber-500 hover:rotate-5 transition duration-500'>
            <div className='w-full flex items-center justify-between gap-5'>
              <span>{item.title}</span>
              <item.icon />
            </div>
            <span className='bg-amber-500 mt-5 rounded-lg p-2 border-b-5 border-rose-900'>
              {loader ? <Loader className='animate-spin' /> : item.total}
            </span>
          </div>
        ))
      }
    </div>
  )
}

export default Analytics