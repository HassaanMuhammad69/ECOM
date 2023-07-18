import { useState, useContext, useEffect } from "react";
import 'animate.css';
import { GlobalContext } from '../../store/Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from 'axios';
import './login.css'

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

import { GetAllProducts } from "../../services/admin/home";
import {useNavigate} from 'react-router-dom'


function Login() {
    let { state, dispatch } = useContext(GlobalContext);
    const [result, setResult] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nav, setNav] = useState(false)
    const navigation = useNavigate()

    useEffect(()=>{
        GetAllProducts()
      .then((value) => {
        // setProducts(value)
      }).catch((err) => {
        console.log(err, "error")
      })
    },[])

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`${state.baseUrl}/login`, {
                email: email,
                password: password
            }, {
                withCredentials: true
            })
            if (response.data.profile.role === 'admin') {
                dispatch({
                    type: 'USER_ADMIN',
                    payload: response.data.profile
                })
            } else {
                dispatch({
                    type: 'USER_LOGIN',
                    payload: response.data.profile
                })
                    navigation('/user-home')
                
            }

            console.log("Login successful");
            setResult("Login successful")

        } catch (e) {
            console.log("e: ", e);
        }

        // e.reset();
    }

    const handleNav = () => {
        setNav(!nav)
    }



    return (
        <>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MIDVATION</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'><Link to={`/login`}>LOGIN</Link></li>
                    <li className='p-4'><Link to={`/signup`}>SIGNUP</Link></li>

                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>MIDVATION</h1>
                    <li className='p-4 border-b border-gray-600'><Link to={`/login`}>LOGIN</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to={`/signup`}>SIGNUP</Link></li>

                </ul>
            </div>

            



            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#090E19] dark:text-gray-100">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#00df9a]">
                        Login to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={loginHandler} className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#00df9a]">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    id="email"
                                    label="Email"
                                    type="email"
                                    name="username"
                                    placeholder="  Email"
                                    autoComplete="username"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            {/* <div className="flex items-center justify-between"> */}
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#00df9a]">
                                    Password
                                </label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div> */}
                            {/* </div> */}
                            <div className="mt-2">
                                <input
                                      required
                                      id="password"
                                      label="Password"
                                      type="password"
                                      name="current-password"
                                      autoComplete="current-password"
                                      placeholder="  Password"
                                      onChange={(e) => { setPassword(e.target.value) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#00df9a]  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
                            >
                                LOGIN
                            </button>
                        </div>
                    </form>

                    {(state.isLogin === false) ?
                            <p className="mt-10 text-center text-sm text-gray-500">dont have an account?   
                            <Link className="font-semibold leading-6 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500" to={`/signup`}>Signup</Link>
                            {/* <Link className="forget" to={`/forget-password`}>Forget Password?</Link> */}
                            </p> : null}

                </div>
            </div>








        </>
    )
}

export default Login;