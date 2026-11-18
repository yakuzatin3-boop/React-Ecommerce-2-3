import React from 'react'

function HomePage() {
  return (
    <div className=' mt-20 m-auto'>
      
      {/* hero section */}
      <div className='w-full m-auto bg-blue-500 h-150 flex'>
        {/* left */}

        <div className='w-full overflow-hidden'>
            <img className='w-full object-cover' src="https://i.pinimg.com/1200x/ed/c9/d3/edc9d32565bfa67656838f1a183086f3.jpg" alt="" />
          </div>

        
        {/* <div className='w-[50%] bg-blue-950 h-full'>

        </div>
        
        <div className='w-[50%] bg-amber-500 h-full'>
          <div className='w-full h-full align-center overflow-hidden'>
            <img className='w-full object-cover' src="https://i.pinimg.com/1200x/82/8f/30/828f30f0e8a91bee5db644635869d2c9.jpg" alt="" />
          </div>
        </div> */}
      </div>
      {/* main */}
      <div className='w-7xl m-auto h-120 bg-red-500'>
        
      </div>
    </div>
  )
}

export default HomePage
