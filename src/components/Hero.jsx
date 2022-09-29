import React from 'react'

import HeroVid from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video className='object-cover h-full w-full absolute -z-10' src={HeroVid} autoPlay loop muted/>
        <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
            <h1>Decentralized</h1>
            <h1 className='py-2'><span className='bluee'>Trading</span> Protocol</h1>
            <p className='text-xl py-4'>Guranteed liquidity trading for millions of users and top eth applications.</p>
            <div>
                <button className='m-2'>Use Defi</button>
                <button className='m-2'>FAQ</button>
                
            </div>
        </div>
        <div>
            <p className='text-center text-white text-2xl font-bold'>Total Volume Secured: $42,104,783.56</p>
        </div>

    </div>
  )
}

export default Hero