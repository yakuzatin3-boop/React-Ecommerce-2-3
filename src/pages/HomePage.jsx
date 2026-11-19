import React from 'react'

function HomePage() {
  return (
    <div className=' mt-20 m-auto'>
      
      {/* hero section */}
      <div className='w-7xl rounded-4xl m-auto p-10 bg-blue-900 h-120 flex'>
        {/* left */}

        
        <div className='w-[50%] h-full'>
          <h1 className='text-5xl font-bold first-letter:text-6xl drop-shadow-[0_10px_15px_rgba(128,128,128,0.6)] text-red-700'>TEchShop CAMBODIA</h1>
          <p className='text-white text-3xl font-medium first-letter:text-4xl first-letter:text-red-500 first-letter:font-bold'>Welcom back and thank you for use our service & Our TechShop.</p>
          <p className='text-white text-xl'>In this website help you to buy ony thing that you need with safety for payment, order contact with best service from our TechShop.</p>

          <div className='mt-10 flex gap-5'>
            <button className='border-0 p-3 text-2xl w-50 font-medium text-white bg-orange-600 rounded-4xl shadow-2xl'>SingUp</button>
            <button className='border-0 p-3 text-2xl w-80 bg-amber-600 rounded-4xl font-medium text-gray-300 text-shadow-2xs'>About Us & Cotact</button>
          </div>
          <div className='mt-5'>
          <div className='flex gap-10'>
            <p>Viewer</p>
            <p>Customer</p>
            <p>Rating Star</p>
            <p>Favorite</p>
          </div>
        </div>
        </div>

        
        
        <div className='w-[50%] h-full'>
          <div className='w-full h-full align-center overflow-hidden'>
            <img className='w-full h-full object-cover drop-shadow-[0_10px_15px_rgba(128,128,128,0.6)]' src="/src/assets/img/img-hero.png" alt="" />
          </div>
        </div>
      </div>
      {/* main */}
      <div className='w-7xl m-auto h-120 bg-red-500'>
        
      </div>
    </div>
  )
}

export default HomePage
