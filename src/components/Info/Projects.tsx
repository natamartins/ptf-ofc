import React from 'react'
import Image from 'next/image'
import Skills from '../../../public/skills.svg'


import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { date } from '../../date'
import Link from 'next/link'

console.log("Date =>", date)

const Projects = () => {

    return (
        <section className='max-w-prose m-auto flex flex-col justify-center content-center justify-items-center'>
            <h1 className='text-3xl	  mb-1 scrool-01 text-center'>Projects</h1>
            <div className='info'>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={2}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        date?.map(project => (
                            <div key={project.title} className='cardIndo'>
                                <Image src={project.img} alt='' />
                                <h1>{project.title}</h1>
                                <p>{project.describer}</p>
                                <div>
                                    <Link href={project.siteUrl} target='_blank'>Site</Link>
                                    <Link href={project.githubUrl} target='_blank'>GitHub</Link>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default Projects