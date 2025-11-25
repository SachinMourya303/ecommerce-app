import React from 'react'
import { category } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const CategorySection = () => {
    const darkmode = useSelector(state => state.userData.darkmode);
    
  return (
    <div id='category' className={`w-full flex justify-center transition-all ${darkmode ? 'bg-black text-white' : 'bg-white text-app-text-medium-color'}`}>
        <div className='w-full md:w-[90%] 2xl:w-[95%] flex justify-between md:justify-start md:gap-8 flex-wrap mt-5 px-6 md:px-16 2xl:px-150 max-md:flex-wrap mt-10'>
            {
                category.map((cat , index) => (
                    <Link key={index} className='hover:translate-y-[-5px] transition duration-300 max-md:mt-5'>
                        <figure className='relative flex justify-center h-25 w-30 md:h-35  md:w-40 bg-rose-100 rounded-b-xl' style={{borderTopLeftRadius: "50%", borderTopRightRadius: "50%"}}>
                        <img src={cat.pic} alt="model" className='absolute h-30 md:h-40 w-[80%] mt-[-20px]'/>
                    </figure>

                    <figcaption className='w-full text-center'>{cat.title}</figcaption>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default CategorySection