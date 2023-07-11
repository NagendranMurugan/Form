import React from 'react';
import FormImg  from './assets/Form.jpg';

function Form() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
           <img className='w-full h-full object-cover'src={FormImg} alt=" " />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
           <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>  
            <h2 className='text-4xl text-white fond-bold text-center'>SIGN IN</h2>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>User Name</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
            </div>

            <div className='flex flex-col text-gray-400 py-2'>
                <label>Password</label>
                <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="Password" />
            </div>
            <div className='flex justify-between text-gray-400 py-2'>
              <p><input type="checkbox"/>Remember</p>
              <p>Forgot Password</p>
            </div>
               <button>Sign in</button>
           </form>
        </div>

    </div>
  )
}

export default Form;