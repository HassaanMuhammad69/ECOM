import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../../store/Context";
import "./home.css";
import { Button, Card, Carousel } from 'antd';
import {
  GetAllProducts,
  DeleteProduct,
  EditProducts,
} from "../../../services/admin/home";
import { GetAllOrders } from "../../../services/customer/order";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

function Home() {
  let { state } = useContext(GlobalContext);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const editMode = (product) => {
    setIsEditMode(!isEditMode);
    setEditingProduct(product);

    editFormik.setFieldValue("productName", product.name);
    editFormik.setFieldValue("productPrice", product.price);
    editFormik.setFieldValue("productQuantity", product.quantity);
    editFormik.setFieldValue("productDescription", product.description);
  };

  useEffect(() => {
    GetAllProducts()
      .then((value) => {
        setProducts(value);
      })
      .catch((err) => {
        console.log(err, "error");
      });

    GetAllOrders()
      .then((value) => {
        setOrders(value);
      })
      .catch((err) => {
        console.log(err, "error");
      });


  }, [loadProduct]);

  const editFormik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productQuantity: "",
      productDescription: "",
    },
    validationSchema: yup.object({
      productName: yup
        .string("Enter your product name")
        .required("product name is required")
        .min(3, "please enter more then 3 characters ")
        .max(20, "please enter within 20 characters "),

      productPrice: yup
        .number("Enter your product price")
        .positive("enter positive product price")
        .required("product name is required"),

      productQuantity: yup
        .number("Enter your product quantity")
        .positive("enter positive product quantity")
        .required("product quantity is required"),

      productDescription: yup
        .string("Enter your product Description")
        .required("product name is required")
        .min(3, "please enter more then 3 characters ")
        .max(500, "please enter within 20 characters "),
    }),
    onSubmit: (values) => {
      EditProducts(values, editingProduct)
        .then(() => {
          setLoadProduct(!loadProduct);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  // console.log(orders, "orders")

  return (
    <div className="all-products">

      {/* <h2>All Products</h2>

      {products.map((eachProduct, i) => {
        const { Meta } = Card
        return (
          <Card hoverable className="admin-cards" key={i} cover={<img className="admin-card-img" alt="products" src={eachProduct?.pictureUrl} />}>
            <Meta title={eachProduct?.name} description={eachProduct?.description} />

            <h5>{eachProduct?.quantity}</h5>
            <p className="price">  {eachProduct?.price}</p>
           
            <button onClick={() => { DeleteProduct(eachProduct?._id).then(setProducts((prev, next) => products.filter((eachProd) => eachProd?._id != eachProduct?._id))) }}>delete</button>
            <button onClick={() => { editMode(eachProduct); }}> edit</button>

            {isEditMode && editingProduct._id === eachProduct._id ? (
              <div>
                <form onSubmit={editFormik.handleSubmit}>
                  <input
                    id="productName"
                    placeholder="Product Name"
                    value={editFormik.values.productName}
                    onChange={editFormik.handleChange}
                  />
                  {editFormik.touched.productName &&
                    Boolean(editFormik.errors.productName) ? (
                    <span style={{ color: "red" }}>
                      {editFormik.errors.productName}
                    </span>
                  ) : null}
                  <br />
                  <input
                    id="productPrice"
                    placeholder="Product Price"
                    value={editFormik.values.productPrice}
                    onChange={editFormik.handleChange}
                  />
                  {editFormik.touched.productPrice &&
                    Boolean(editFormik.errors.productPrice) ? (
                    <span style={{ color: "red" }}>
                      {editFormik.errors.productPrice}
                    </span>
                  ) : null}
                  <br />
                  <input
                    id="productQuantity"
                    placeholder="Product quantity"
                    value={editFormik.values.productQuantity}
                    onChange={editFormik.handleChange}
                  />
                  {editFormik.touched.productQuantity &&
                    Boolean(editFormik.errors.productQuantity) ? (
                    <span style={{ color: "red" }}>
                      {editFormik.errors.productQuantity}
                    </span>
                  ) : null}

                  <br />
                  <input
                    id="productDescription"
                    placeholder="Product Description"
                    value={editFormik.values.productDescription}
                    onChange={editFormik.handleChange}
                  />
                  {editFormik.touched.productDescription &&
                    Boolean(editFormik.errors.productDescription) ? (
                    <span style={{ color: "red" }}>
                      {editFormik.errors.productDescription}
                    </span>
                  ) : null}
                  <br />
                  <button type="submit"> Submit </button>
                </form>
              </div>
            ) : null}
          </Card>

        )
      })} */}


      {/* ADMIN CARD */}

      <div className='w-full py-[5rem] px-4 bg-white'>
        <p className='md:text-4xl sm:text-3xl text-xl  mb-8 flex justify-center font-bold text-gray-500 py-4'>
          ALL PRODUCTS:
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
                  <button className='bg-[#00df9a] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' onClick={() => { DeleteProduct(eachProduct?._id).then(setProducts((prev, next) => products.filter((eachProd) => eachProd?._id != eachProduct?._id))) }}>DELETE</button>
                  <button className='bg-[#00df9a] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' onClick={() => { editMode(eachProduct); }}> EDIT</button>

                  {isEditMode && editingProduct._id === eachProduct._id ? (
                    <div>
                      <form onSubmit={editFormik.handleSubmit}>
                        <input
                          id="productName"
                          placeholder="Product Name"
                          value={editFormik.values.productName}
                          onChange={editFormik.handleChange}
                        />
                        {editFormik.touched.productName &&
                          Boolean(editFormik.errors.productName) ? (
                          <span style={{ color: "red" }}>
                            {editFormik.errors.productName}
                          </span>
                        ) : null}
                        <br />
                        <input
                          id="productPrice"
                          placeholder="Product Price"
                          value={editFormik.values.productPrice}
                          onChange={editFormik.handleChange}
                        />
                        {editFormik.touched.productPrice &&
                          Boolean(editFormik.errors.productPrice) ? (
                          <span style={{ color: "red" }}>
                            {editFormik.errors.productPrice}
                          </span>
                        ) : null}
                        <br />
                        <input
                          id="productQuantity"
                          placeholder="Product quantity"
                          value={editFormik.values.productQuantity}
                          onChange={editFormik.handleChange}
                        />
                        {editFormik.touched.productQuantity &&
                          Boolean(editFormik.errors.productQuantity) ? (
                          <span style={{ color: "red" }}>
                            {editFormik.errors.productQuantity}
                          </span>
                        ) : null}

                        <br />
                        <input
                          id="productDescription"
                          placeholder="Product Description"
                          value={editFormik.values.productDescription}
                          onChange={editFormik.handleChange}
                        />
                        {editFormik.touched.productDescription &&
                          Boolean(editFormik.errors.productDescription) ? (
                          <span style={{ color: "red" }}>
                            {editFormik.errors.productDescription}
                          </span>
                        ) : null}
                        <br />
                        <button type="submit"> Submit </button>
                      </form>
                    </div>
                  ) : null}
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
  );
}
export default Home;
