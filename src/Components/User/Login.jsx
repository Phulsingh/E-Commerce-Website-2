import React from 'react'

const Login = () => {
  return (
   <div className='flex  w-full justify-center'>
    <div className=' hidden md:flex w-[60%] h-[100%]  justify-center items-center'>
      <img className='h-[90%] mt-15'  src='https://kingkisanghar.com/assets/images/inner-page/log-in.png'/>
    </div>
    <div className='md:w-[40%] w-full h-screen flex '>
      <form className='bg-gray-200 h-50 mt-24 rounded-2xl  flex justify-center items-center flex-col'>
        <h1 className='text-2xl font-semibold text-green-800'>Welcome to KingfisherGhar</h1>
        <p className='text-xl font-semibold'>Login or Sign up</p>
        <input type='text ' placeholder='Enter Mobile Number'/>
        <button>Continue</button>
        <p>By continuing, you agree to KingKisanGhar Terms of Use and Privacy Policy</p>
      </form>
    </div>
   </div>
  )
}

export default Login
