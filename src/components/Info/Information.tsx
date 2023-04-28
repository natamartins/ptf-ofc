import React from 'react'
import Image from 'next/image'
import Skills from '../../../public/skills.svg'

const Information = () => {
    return (
        <section className='grid justify-center max-w-prose m-auto text-center p-5 m-auto justify-between'>
            <p className='mb-1 scrool-01'>
                Atualmente, trabalho como Front-end Developer.
                Atuando em criação de landing page, site etc, manutenção
                de códigos, teste etc, sempre prezando por um código limpo é confiavel.
            </p>
            <p className='scrool-02'>Ahh, meus hobbies são tocar violão e tomar café☕</p>
            <p className='scrool-03'>Apertem os cintos, minha próxima parada é dominar um universo chamado <span className='text-violet-800'>Front End</span> 🚀</p>
            <div className='justify-between m-auto max-w-prose m-auto p-5'>
                <Image className='grid justify-center text-center m-auto  mb-20' src={Skills} alt="/" />
            </div>
        </section>
    )
}

export default Information