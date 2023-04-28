import React from 'react'
import Image from 'next/image'

import { HeroPattern } from '../heopatters/HeroPatter'
import MyPhoto from '../../../public/my-photo.svg'
import Arrow from '../../../public/Arrow.svg'
import Ellipse from '../../../public/Ellipse.svg'

const Me = () => {
    return (
        <main className=' max-w-prose m-auto grid grid-cols-1 justify-center content-center justify-items-center sm:justify-between items-center  sm:mb-20  sm:grid-cols-2 relative'>
            <Image className='w-72 sm:mb-20 order-2 sm:order-1' src={MyPhoto} alt="" />
            <div className='sm:mb-40 mb-20 order-1 sm:order-2'>
                <HeroPattern />
                <div className='flex items-center' >
                    <p className='flex  items-center  relative gap-1 mb-10'>
                        <Image className='w-36 sm:absolute sm:-left-40 sm:-top-8 sm:-rotate-0 absolute left-40 top-24 -rotate-45' src={Arrow} alt='/' />
                        Olá! sou o
                        <span className='text-violet-800'>
                            Natã Martins.
                        </span></p>
                </div>
                <p className='text-3xl mb-2'>Front-end Developer</p>
                <p className='text-2xl mb-2 relative'>
                    UI/UX <span className='ml-4 mr-1'>designer<Image className='absolute -top-1 left-20 w-32' src={Ellipse} alt='' /></span> !
                </p>
                <p className='text-violet-800 text-xs flex relative'>Belo Horizonte - MG
                    <span className='w-2 h-2 bg-lime-600 absolute rounded-full top-1 right-44' />
                </p>
            </div>
        </main>
    )
}

export default Me