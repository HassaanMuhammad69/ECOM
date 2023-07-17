import { useFormik } from 'formik';
import * as yup from 'yup';
import './addItem.css'
import { AddProducts } from '../../../services/admin/add';
import { useState } from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';


function AddItem() {
  const [preview, setPreview] = useState()
  const [picture, setPicture] = useState()


  const myFormik = useFormik({
    initialValues: {
      productName: '',
      productPrice: '',
      productQuantity: '',
      productDescription: '',
      picture: '',
    },
    validationSchema:
      yup.object({
        productName: yup
          .string('Enter your product name')
          .required('product name is required')
          .min(3, "please enter more then 3 characters ")
          .max(20, "please enter within 20 characters "),

        productPrice: yup
          .number('Enter your product price')
          .positive("enter positive product price")
          .required('product name is required'),

        productQuantity: yup
          .number('Enter your product quantity')
          .positive("enter positive product quantity")
          .required('product quantity is required'),

        productDescription: yup
          .string('Enter your product Description')
          .required('product name is required')
          .min(3, "please enter more then 3 characters ")
          .max(500, "please enter within 20 characters "),
      }),
    onSubmit: (values) => {
      AddProducts(values, picture)
    },
  })


  return (
    <div>
      <div className='w-full py-[5rem] px-4 bg-white'>
        <p className='md:text-4xl sm:text-3xl text-xl  mb-8 flex justify-center font-bold text-gray-500 py-4'>
          ADD PRODUCTS:
        </p>
        {/* input */}
        <div>
          <form onSubmit={myFormik.handleSubmit}>

            {/* COURSE NAME */}

            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              COURSE NAME:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              </div>
              <input
                id="productName"
                placeholder="Course Name"
                value={myFormik.values.productName}
                onChange={myFormik.handleChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {
                (myFormik.touched.productName && Boolean(myFormik.errors.productName)) ?
                  <span style={{ color: "red" }}>{myFormik.errors.productName}</span>
                  :
                  null
              }
            </div>

            {/* <input
              className='pName'
              id="productName"
              placeholder="Product Name"
              value={myFormik.values.productName}
              onChange={myFormik.handleChange}
            />
            {
              (myFormik.touched.productName && Boolean(myFormik.errors.productName)) ?
                <span style={{ color: "red" }}>{myFormik.errors.productName}</span>
                :
                null
            } */}
            <br />

            {/* COURSE PRICE */}

            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              COURSE PRICE:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              </div>
              <input
                type='number'
                id="productPrice"
                placeholder="Course Price"
                value={myFormik.values.productPrice}
                onChange={myFormik.handleChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {
                (myFormik.touched.productPrice && Boolean(myFormik.errors.productPrice)) ?
                  <span style={{ color: "red" }}>{myFormik.errors.productPrice}</span>
                  :
                  null
              }
            </div>


            {/* <input
              className='pPrice'
              type='number'
              id="productPrice"
              placeholder="Product Price"
              value={myFormik.values.productPrice}
              onChange={myFormik.handleChange}
            />
            {
              (myFormik.touched.productPrice && Boolean(myFormik.errors.productPrice)) ?
                <span style={{ color: "red" }}>{myFormik.errors.productPrice}</span>
                :
                null
            } */}
            <br />

            {/* COURSE QUANTITY */}

            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              COURSE QUANTITY:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              </div>
              <input
                type='number'
                id="productQuantity"
                placeholder="Course quantity"
                value={myFormik.values.productQuantity}
                onChange={myFormik.handleChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {
                (myFormik.touched.productQuantity && Boolean(myFormik.errors.productQuantity)) ?
                  <span style={{ color: "red" }}>{myFormik.errors.productQuantity}</span>
                  :
                  null
              }
            </div>

            {/* <input
              className='pQuantity'
              type='number'
              id="productQuantity"
              placeholder="Product quantity"
              value={myFormik.values.productQuantity}
              onChange={myFormik.handleChange}
            />
            {
              (myFormik.touched.productQuantity && Boolean(myFormik.errors.productQuantity)) ?
                <span style={{ color: "red" }}>{myFormik.errors.productQuantity}</span>
                :
                null
            } */}
            <br />

            {/* COURSE DESCRIPTION */}

            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              COURSE DESCRIPTION:
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              </div>
              <input
                id="productDescription"
                placeholder="Course Description"
                value={myFormik.values.productDescription}
                onChange={myFormik.handleChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {
                (myFormik.touched.productDescription && Boolean(myFormik.errors.productDescription)) ?
                  <span style={{ color: "red" }}>{myFormik.errors.productDescription}</span>
                  :
                  null
              }
            </div>

            {/* <input
              className='pDescription'
              id="productDescription"
              placeholder="Product Description"
              value={myFormik.values.productDescription}
              onChange={myFormik.handleChange}
            />
            {
              (myFormik.touched.productDescription && Boolean(myFormik.errors.productDescription)) ?
                <span style={{ color: "red" }}>{myFormik.errors.productDescription}</span>
                :
                null
            } */}

            <br />


            {/* IMAGE UPLOAD */}

            <input
              type="file"
              id='picture'
              value={myFormik.values.picture}
              onChange={
                (e) => {
                  let url = URL.createObjectURL(e.currentTarget.files[0])
                  setPreview(url)
                  setPicture(e.currentTarget.files[0])
                }
              } />
            <br />
            <img width={200} src={preview} alt="" />
            <br />


            <button
              className='bg-[#00df9a] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '
              type="submit"> Submit </button>
          </form>
          <br />
          <br />
        </div>


      </div>

      {/* <div>
        <form onSubmit={myFormik.handleSubmit}>

          <input
            className='pName'
            id="productName"
            placeholder="Product Name"
            value={myFormik.values.productName}
            onChange={myFormik.handleChange}
          />
          {
            (myFormik.touched.productName && Boolean(myFormik.errors.productName)) ?
              <span style={{ color: "red" }}>{myFormik.errors.productName}</span>
              :
              null
          }
          <br />
          <input
            className='pPrice'
            type='number'
            id="productPrice"
            placeholder="Product Price"
            value={myFormik.values.productPrice}
            onChange={myFormik.handleChange}
          />
          {
            (myFormik.touched.productPrice && Boolean(myFormik.errors.productPrice)) ?
              <span style={{ color: "red" }}>{myFormik.errors.productPrice}</span>
              :
              null
          }
          <br />
          <input
            className='pQuantity'
            type='number'
            id="productQuantity"
            placeholder="Product quantity"
            value={myFormik.values.productQuantity}
            onChange={myFormik.handleChange}
          />
          {
            (myFormik.touched.productQuantity && Boolean(myFormik.errors.productQuantity)) ?
              <span style={{ color: "red" }}>{myFormik.errors.productQuantity}</span>
              :
              null
          }

          <br />
          <input
            className='pDescription'
            id="productDescription"
            placeholder="Product Description"
            value={myFormik.values.productDescription}
            onChange={myFormik.handleChange}
          />
          {
            (myFormik.touched.productDescription && Boolean(myFormik.errors.productDescription)) ?
              <span style={{ color: "red" }}>{myFormik.errors.productDescription}</span>
              :
              null
          }
          <br />
          <input
            type="file"
            id='picture'
            value={myFormik.values.picture}
            onChange={
              (e) => {
                let url = URL.createObjectURL(e.currentTarget.files[0])
                setPreview(url)
                setPicture(e.currentTarget.files[0])
              }
            } />
          <br />
          <img width={200} src={preview} alt="" />
          <br />
          <button className='addButton' type="submit"> Submit </button>
        </form>
        <br />
        <br />
      </div> */}


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

export default AddItem;