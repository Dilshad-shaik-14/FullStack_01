import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"
import undraw_login_wqkt from "../assets/undraw_login_wqkt.png"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.Login(data)
            if (session) {
                let userData = undefined
                while(!userData){
                userData = await authService.getCurrentUser()}
                if(userData){ dispatch(authLogin(userData));}
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <>
        <div className="mx-auto w-full max-w-7xl  border-t-2 border-t-black">
            <aside className="relative overflow-hidden text-black rounded-lg  mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10  mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center  sm:ml-auto">
                    <div className='flex items-center justify-center w-full'>
                    <div className={`mx-auto w-full  max-w-lg bg-gray-100 rounded-xl lg:p-10  sm:p-0`}>
                        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                        <p className="mt-2 text-center text-base text-black/60">
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to="/signup"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                        <form onSubmit={handleSubmit(login)} className='mt-8'>
                            <div className='space-y-5 text-center'>
                                <Input
                                label="Email: "
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                    }
                                })}
                                />
                                <Input label="Password: " type="password" placeholder="Enter your password"
                                {...register("password", {
                                    required: true,
                                })}
                                />
                                <Button
                                type="submit"
                                className="w-full"
                                >Sign in</Button>
                            </div>
                        </form>
                    </div>
                </div>
                    </div>
                </div>
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 py-10" src={undraw_login_wqkt} alt="image1" />
                </div>
            </aside>
        </div>
     </>
  )
}

export default Login