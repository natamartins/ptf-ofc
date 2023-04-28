import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='grid justify-center max-w-prose m-auto text-center  p-5 m-auto justify-between mb-20'>
            <p className='mb-5'>
                Atualmente, estou procurando ingressar em uma equipe que valoriza
                melhorar a vida das pessoas através de design acessível.
            </p>
            <p className='flex flex-col'>
                Ou tem um projeto em mente? Vamos conversar.
                <Link href='mailto:nata.codedev@gmail.com' className='hover:text-violet-800'>
                    nata.codedev@gmail.com</Link>
            </p>
        </footer>
    )
}

export default Footer