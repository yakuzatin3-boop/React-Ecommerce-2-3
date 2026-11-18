import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import { FaCartPlus, FaCartArrowDown } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='p-2 w-full h-18 bg-white  shadow-lg flex justify-between items-center fixed  top-0  ' >
      {/* navleft */}
      <div className='w-5xl flex justify-between items-center'>

        {/* left */}
        <div className='flex gap-2 items-center'>
          {/* logo */}
          <div className='w-15 overflow-hidden rounded-full'>
            <img className='' src="https://i.pinimg.com/736x/c7/49/93/c74993381e2b7a90713c656957336063.jpg" alt="" />
          </div>
          <div>
            <span className='font-bold text-3xl '>TechShop</span>
          </div>
        </div>
        {/* list menu */}
        <ul className='list-unstyled flex gap-6'>
          <li>
            <Link className='text-2xl font-medium ' to="/">Home</Link>
          </li>
          <li>
            <Link className='text-2xl font-medium ' to="/about">About</Link>
          </li>
          <li>
            <Link className='text-2xl font-medium ' to="/products">Shop</Link>
          </li>
          <li>
            <Link className='text-2xl font-medium ' to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* right */}
      <div className='flex gap-3 items-center'>
        <div>
          <input className='bg-gray-200 border-0 rounded-3xl font-medium text-xl p-1 px-5 placeholder:text-xl font-monospace' type="text" name="" placeholder="search product" id="" />
        </div>
        <div>
          <button className='p-2 bg-gray-300 text-3xl text-blue rounded-full'>
            <FaCartArrowDown/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
