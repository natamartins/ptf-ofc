import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'

import Logo from '../../../public/Logo.svg'

const Nav = () => {
    const hover = 'hover:text-violet-800'
    return (
        <header>
            <nav className='max-w-prose m-auto flex relative items-center justify-between p-5 mb-20 sm:mb-20'>
                <Image src={Logo} alt="esté logo é uma letra n" />
                <div className='flex items-center gap-5'>
                    <Link href='https://www.linkedin.com/in/nat%C3%A3martins/' target='__blank' className={hover}>
                        <Linkedin size={20} />
                    </Link>
                    <Link href='https://github.com/natamartins' target='__blank' className={hover}>
                        <Github size={20} />
                    </Link>
                    <Link href='https://www.instagram.com/eusounathanmartins/?theme=dark'
                        target='__blank'
                        className={hover}>
                        <Instagram size={20} />
                    </Link>
                    <Link href='https://twitter.com/NataCodedev'
                        target='__blank'
                        className={hover}>
                        <Twitter size={20} />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav