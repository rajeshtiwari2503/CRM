"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import InputIcon from '@mui/icons-material/Input';
import { useForm } from 'react-hook-form';
 import http_request from '../../../http-request'
import { ToastMessage } from '../components/common/Toastify';
import { Toaster } from 'react-hot-toast';

const SignUp=()=> {

const [loading,setLoading]=useState(false)

  const { register, handleSubmit, formState: { errors }, getValues } = useForm();  
   
const RegiterAdmin=async(reqdata)=>{
  try{
    setLoading(true)
    const postObj={...reqdata,role:"ADMIN"}
    console.log(postObj);
    let response=await http_request.post('/registration',postObj)
    const {data}=response
    ToastMessage(data)
    setLoading(false)

  }
  catch(err){
    setLoading(false)
    ToastMessage(err.response.data)

    console.log(err);
  }

}

  const onSubmit = (data) => {
    console.log(data); // Handle form data submission
    RegiterAdmin(data)
  };

  
  
  return (
    <>
      <div className="flex justify-center mt-4">
        <div style={{ minWidth: "30%" }}>
          <div className="shadow-lg flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex justify-center">
                <InputIcon fontSize="large" />
              </div>
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create a new account
              </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                   Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="email"
                      required
                      {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Name must be at least 3 characters long'}  })}
                      className={`block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.email ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                      className={`block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.email ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                    Contact No.
                  </label>
                  <div className="mt-2">
                    <input
                      id="contact"
                      name="contact"
                      type="number"
                      autoComplete="tel"
                      required
                       
                       {...register('contact', { required: 'Contact number is required', pattern: { value: /^\d{10}$/, message: 'Contact No. must be at least 10 characters long' } })}
                      className={`block p-3  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                        errors.contact   ? 'border-red-500' : ''
                      }`}
                      
                    />
                  </div>
                  {(errors.contact  ) && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contact ? errors.contact.message : 'Contact number is required'}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
                      className={`block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.password ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      {...register('confirmPassword', { required: 'Confirm Password is required', validate: value => value === getValues('password') || 'The passwords do not match' })}
                      className={`block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                </div>
                <div>
                  <button
                    type="button"
                    disabled={loading}
                    onClick={handleSubmit(onSubmit)}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Already registered?{' '}
                <Link href="/sign_in" className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export   default SignUp