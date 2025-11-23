import React from 'react'
import { background } from '../../../assets/assets'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
    return (
        <div className='absolute top-0 h-screen w-full'>
            <figure className='relative h-full w-full flex justify-center items-center'>
                <img src={background.outfit_collection} alt="outfit-collection" className='h-full w-full object-cover object-center' />

                <div className='absolute z-2 w-[95%] md:w-[40%] xl:w-[25%]'>
                    <form className="bg-white text-gray-500 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
                        <h2 className="text-2xl font-medium mb-6 text-center text-gray-800">Sign Up</h2>

                        <input className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3" type="text" placeholder="Username" required />
                        <input className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3" type="email" placeholder="Email" required />
                        <input className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3" type="text" placeholder="Password" required />

                        <button className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">Create Account</button>
                        <Link to='/' className='text-blue-500 w-full flex justify-center' >Go Back</Link>

                        <p className="text-center mt-4">Don't have an account! <Link to='/auth/signin' className="text-blue-500 underline">Signin</Link></p>
                    </form>
                </div>
            </figure>
        </div>
    )
}

export default SignUpForm