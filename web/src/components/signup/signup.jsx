import { useState, useContext } from "react";
import axios from 'axios';
import { GlobalContext } from '../../store/Context';
import './signup.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


function Signup() {
    let { state, dispatch } = useContext(GlobalContext);
    const [result, setResult] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nav, setNav] = useState(false)


    const signupHandler = async (e) => {
        e.preventDefault();

        try {
            let response = await axios.post(`${state.baseUrl}/signup`, {
                firstName: name,
                lastName: name,
                email: email,
                password: password,
                role: 'customer'
            })

            console.log("signup successful");
            setResult("signup successful")

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
            {/* NavBar */}
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

            {/* Tailwind */}
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
                    <form onSubmit={signupHandler} className="space-y-6" action="#" method="POST">

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#00df9a]">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    required  type="text" name="name" placeholder="  Enter your name" onChange={(e) => { setName(e.target.value) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#00df9a]">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                   required  type="email" name="username" autoComplete="username" placeholder="  Enter your email" onChange={(e) => { setEmail(e.target.value) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#00df9a]">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                   required  type="password" name="new-password" autoComplete="new-password" placeholder="  Enter your password" onChange={(e) => { setPassword(e.target.value) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#00df9a]  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:focus-visible:outline-indigo-400"
                            >
                                Signup
                            </button>
                        </div>


                    </form>
                    {(state.isLogin === false) ?
                        <p className="mt-10 text-center text-sm text-gray-500">already have an account?
                            <Link className="font-semibold leading-6 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500" to={`/login`}>Login</Link>
                        </p> : null}
                </div>
            </div>


            {/* <div className='main'>
                <form onSubmit={signupHandler} className="form">
                    <div className='animate__animated animate__fadeIn right-s'>
                        <h1 className="signup-heading"> SignUp to continue </h1>
                        <input required className="input-s" type="text" name="name" placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} />
                        <br />
                        <input required className="input-s" type="email" name="username" autoComplete="username" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />
                        <br />
                        <input required className="input-s" type="password" name="new-password" autoComplete="new-password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                        <br />
                        <input required className="input-s" type="password" name="new-password" autoComplete="new-password" placeholder="confirm password" />
                        <br />

                        <button className="button-s" type="submit">Signup</button>

                        {(state.isLogin === false) ?
                            <p className="text">already have an account? <Link className="a" to={`/login`}>Login</Link>
                            </p> : null}
                    </div>
                </form>

            </div> */}
        </>
    )
}

export default Signup;