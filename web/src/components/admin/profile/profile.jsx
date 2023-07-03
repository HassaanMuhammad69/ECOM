import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from '../../../store/Context';
import './profile.css'
import moment from "moment/moment";
import { GetAllOrders } from "../../../services/customer/order";



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
      <h1>This is profile</h1>
      <button className="logoutButton" onClick={logoutHandler}>Logout</button>

      <h2>Orders</h2>
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
      })}

    </div>
  )
}
export default Profile;
