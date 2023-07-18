import "./app.css"
import React from 'react';
import { useEffect, useState } from 'react';
import { GetAllProducts } from "../../services/admin/home";
import { AddToCart } from '../../services/customer/home';
import { Button, Card, Carousel } from 'antd';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

import { Link } from "react-router-dom";


function Userhome() {
  const [products, setProducts] = useState([])
  const [loadProduct, setLoadProduct] = useState(false)


  useEffect(() => {
    GetAllProducts()
      .then((value) => {
        setProducts(value)
      }).catch((err) => {
        console.log(err, "error")
      })
  }, [loadProduct])


  const contentStyle = {
    height: '408px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
  };
  // console.log(count)

  return (
    <div>

      {/* mainPage */}

      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2'>
            GROWING WITH MIDVATION
          </p>
          <h3 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>
            Grow with right knowledge.
          </h3>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
              Fast, flexible ,Learning for All
            </p>
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
          {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> */}
        </div>
      </div>


      {/* Card */}


      <div className='w-full py-[5rem] px-4 bg-white'>
        <p className='md:text-4xl sm:text-3xl text-xl  mb-8 flex justify-center font-bold text-gray-500 py-4'>
          Courses you might be intrested in:
        </p>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          {products.map((eachProduct, i) => {
            return (
              <>
                <div className='w-full shadow-xl bg-gray-800 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                  <img className='w-40 mx-auto mt-[-3rem] bg-transparent' alt="products" src={eachProduct.pictureUrl} />
                  <h2 className='text-2xl font-bold text-center py-8 text-white'>{eachProduct.name}</h2>
                  <p className='text-center text-4xl border-b font-bold text-white'>{eachProduct.price}</p>
                  <div className='text-center font-medium'>
                    <p className='text-[#00df9a] font-bold p-2 pr-3'> COURSE DESCRIPTION: </p>
                    <p className='py-2 border-b mx-8 mt-3 text-white'>{eachProduct.description}</p>

                  </div>
                  <button className='bg-[#00df9a] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
                    onClick={() => { AddToCart(eachProduct) }} >
                    <Link to={`/gallery`}>ADD TO CART</Link>
                    </button>
                </div>
              </>
            )
          }
          )
          }

        </div>
      </div>


      {/* Footer */}
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MIDVATION</h1>
          <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />

          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-gray-400 '>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400 pl-8'>Support</h6>
            <ul>
              <li className='py-2 pl-8 text-sm'>Pricing</li>
              <li className='py-2 pl-8 text-sm'>Documentation</li>
              <li className='py-2 pl-8 text-sm'>Guides</li>
              <li className='py-2 pl-8 text-sm'>API Status</li>
            </ul>
          </div>
          {/* <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
              <li className='py-2 text-sm'>Careers</li>
            </ul>
          </div> */}
          {/* <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
            </ul>
          </div> */}
        </div>

      </div>



    </div>
  )

}


export default Userhome;