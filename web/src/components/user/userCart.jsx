import { useState, useEffect } from 'react';
import { DeleteCart, GetAllCarts, AddingOrder, DeleteAllCarts } from "../../services/customer/cart";
// import { Card, Button } from 'antd';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAdd, faSubtract, faTrash } from "@fortawesome/free-solid-svg-icons";
import { AddOrder, GetAllOrders } from '../../services/customer/order';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';


function UserCart() {
    const [carts, setCarts] = useState([])
    const [loadCart, setLoadCart] = useState(false)

    useEffect(() => {
        GetAllCarts()
            .then((data) => {
                setCarts(data)
            })
            .catch((err) => { console.log(err, "error") })

    }, [loadCart])

    // const plus = (eachCart) => {
    //     let value;

    //     if (eachCart.quantity > eachCart.order) {
    //         value = eachCart.order + 1
    //     } else {
    //         value = eachCart.quantity
    //     }
    //     AddingOrder(value, eachCart).then(() => { setLoadCart(!loadCart) }).catch((err) => { console.log(err) })
    // }

    // const minus = (eachCart) => {
    //     let value;

    //     if (eachCart.order >= 2) {
    //         value = eachCart.order - 1
    //     } else {
    //         value = 1
    //     }
    //     AddingOrder(value, eachCart).then(() => { setLoadCart(!loadCart) }).catch((err) => { console.log(err) })
    // }


    return (
        <>
            {/* {carts.map((eachCart, i) => {
                return (
                    <div>
                        <Card hoverable className='cart-cards' cover={<img className="cart-image" alt="products" src={eachCart.pictureUrl} />}
                        >
                            <div className='cart-flex '>
                                <h1 className='cart-name'>{eachCart.name.toUpperCase()}</h1>
                                <Button className='buttons' onClick={() => { minus(eachCart) }}><FontAwesomeIcon icon={faSubtract} /></Button>
                                <div className='cart-order'>{eachCart.order}</div>
                                <Button className='buttons' onClick={() => { plus(eachCart) }}><FontAwesomeIcon icon={faAdd} /></Button>
                                <p className="cart-price">Rs.{eachCart.price * eachCart.order}</p>
                            </div>
                            <div className='cart-flex'>
                                <Button className='cart-trash' onClick={() => { DeleteCart(eachCart._id).then(() => { setLoadCart(!loadCart) }).catch((err) => { console.log(err) }) }}><FontAwesomeIcon icon={faTrash} /></Button>
                                <h5 className='cart-quantity'>{eachCart.quantity} in stock</h5>
                            </div>
                        </Card>
                        <h4>Total Amount </h4>
                    </div>
                )
            })} */}

            {/* CARD */}

            <div className='w-full py-[5rem] px-4 bg-white'>
                <p className='md:text-4xl sm:text-3xl text-xl  mb-8  font-bold text-gray-500 py-4'>
                    USER'S CART:
                </p>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                    {carts.map((eachCart, i) => {
                        return (
                            <>
                                <div className='w-full shadow-xl bg-gray-800 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                                    <img className='w-40 mx-auto mt-[-3rem] bg-transparent' alt="products" src={eachCart.pictureUrl} />
                                    <h2 className='text-2xl font-bold text-center py-8 text-white'>Course name: {eachCart.name.toUpperCase()}</h2>
                                    <p className='text-center text-2xl  font-bold text-white'>Price: {eachCart.price}</p>

                                    <button onClick={() => {
                                        carts.map((d) => {
                                            AddOrder(d)
                                            DeleteAllCarts(d.owner).then(() => { setLoadCart(!loadCart) }).catch((err) => { console.log(err) })
                                        })
                                    }}
                                        className='bg-[#00df9a] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
                                    >CONFIRM ORDER</button>
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




        </>
    )
}

export default UserCart;