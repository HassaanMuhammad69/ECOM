import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from '../../../store/Context';
import './profile.css'
import moment from "moment/moment";
import { GetAllOrders } from "../../../services/customer/order";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'; 



function Profile() {
  let { state, dispatch } = useContext(GlobalContext);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    GetAllOrders()
      .then((value) => {
        setOrders(value);
      })
      .catch((err) => {
        console.log(err, "error");
      });

  }, []);


  const logoutHandler = async () => {
    try {
      let response = await axios.post(`${state.baseUrl}/logout`,
        {},
        {
          withCredentials: true
        })
      dispatch({
        type: 'USER_LOGOUT'
      })
    } catch (error) {
      console.log("axios error", error)
    }
  }




  return (
    <div>

      {/* <h2>Orders</h2>
      {orders.map((eachOrder) => {
        console.log(eachOrder, ">>>>")
        return (<p>
          <div className="orders">
            <h2 className="order-name">{eachOrder.owner.firstName}</h2>
            <p>{moment(eachOrder.createdOn).fromNow()}</p>
            <p>{eachOrder.name}</p>

            <p>Total no of items: {eachOrder.order}</p>
            <p>Total: <span className="order-price">Rs.{eachOrder.price * eachOrder.order}</span></p>
            <button  >APPROVE</button>
          </div>

        </p>
        )
      })} */}

      <div className='w-full py-[5rem] px-4 bg-white'>
        <p className='md:text-4xl sm:text-3xl text-xl  mb-8 flex justify-center font-bold text-gray-500 py-4'>
          ORDERS:
        </p>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          {orders.map((eachOrder) => {
            console.log(eachOrder, ">>>>")
            return (
              <>
                <div className='w-full shadow-xl bg-gray-800 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                  <h2 className='text-2xl font-bold text-center py-8 text-white'>{eachOrder.owner.firstName}</h2>
                  <p className='text-center text-1xl border-b font-bold text-white'>{moment(eachOrder.createdOn).fromNow()}</p>
                  <p className='text-center text-1xl border-b font-bold text-white'>{eachOrder.name}</p>
                  <p className='text-center text-1xl border-b font-bold text-white'>Total: {eachOrder.price}</p>

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
export default Profile;
