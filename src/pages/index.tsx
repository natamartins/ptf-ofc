import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import MyPhoto from '../../public/my-photo.svg'
import Arrow from '../../public/Arrow.svg'
import Skills from '../../public/skills.svg'
import Link from 'next/link'
import { HeroPattern } from '@/components/heopatters/HeroPatter'


export default function Home() {
  const hover = 'hover:text-violet-800'

  return (
    <>
      <header>
        <nav className='
        max-w-prose
        m-auto
        flex
        items-center 
        justify-between
        p-5
        mb-20
        sm:mb-20
        '>
          <Image src={Logo} alt="esté logo é uma letra n" />
          <div className='flex items-center gap-5'>
            <Link href='https://www.linkedin.com/in/nat%C3%A3martins/' target='__blank' className={hover}>
              Linkedin
            </Link>
            <Link href='https://github.com/natamartins' target='__blank' className={hover}>
              Github
            </Link>
            <Link href='https://www.instagram.com/eusounathanmartins/?theme=dark'
              target='__blank'
              className={hover}>
              Instagram
            </Link>
          </div>
        </nav>
      </header>
      <main className='
        max-w-prose
        m-auto
        grid
        grid-cols-1
        justify-center
        content-center
        justify-items-center
        sm:justify-between
        items-center 
        sm:mb-20
        sm:grid-cols-2
        relative
        '>
        <Image className='w-72 sm:mb-20 order-2 sm:order-1' src={MyPhoto} alt="" />
        <div className='sm:mb-40 mb-20 order-1 sm:order-2'>
          <HeroPattern />
          <div className='flex items-center' >
            <p className='flex  items-center  relative gap-1 mb-10'>
              <Image className='
              w-36  
              sm:absolute sm:-left-40 sm:-top-8 sm:-rotate-0
              absolute left-40 top-24 -rotate-45
              ' src={Arrow} alt='/' />
              Olá! sou o
              <span className='text-violet-800'>
                Natã Martins.
              </span></p>
          </div>
          <p className='text-3xl mb-2'>Front-end Developer</p>
          <p className='text-2xl'>UI/UX Designer!</p>
          <p className='text-violet-800 text-xs flex relative'>Belo Horizonte - MG
            <span className='w-2 h-2 bg-lime-600 absolute rounded-full top-1 right-44' />
          </p>
        </div>
      </main>
      <section className='
        grid 
        justify-center 
        max-w-prose
        m-auto 
        text-center
        p-5 
        m-auto
        justify-between'
      >
        <p className='mb-1 scrool-01'>
          Atualmente, trabalho como Front-end Developer.
          Atuando em criação de landing page, site etc, manutenção
          de códigos, teste etc, sempre prezando por um código limpo é confiavel.
        </p>
        <p className='scrool-02'>Ahh, meus hobbies são tocar violão e tomar café☕</p>
        <p className='scrool-03'>Apertem os cintos, minha próxima parada é dominar um universo chamado <span className='text-violet-800'>Front End</span> 🚀</p>
      </section>
      <div className='justify-between m-auto max-w-prose
         m-auto p-5'>
        <Image className='grid justify-center text-center m-auto  mb-20' src={Skills} alt="/" />
      </div>
      <footer className='grid justify-center max-w-prose
         m-auto text-center  p-5 m-auto justify-between mb-20'>
        <p className='mb-5'>
          Atualmente, estou procurando ingressar em uma equipe que valoriza
          melhorar a vida das pessoas através de design acessível.
        </p>
        <p className='flex flex-col'>
          Ou tem um projeto em mente? Vamos conversar.
          <Link href='mailto:nata.codedev@gmail.com' className={hover}>
            nata.codedev@gmail.com</Link>
        </p>
      </footer>
    </>
  )
}
