import React, { useCallback } from 'react'
import Image from 'next/image'
import { AnimateScrollReveal, Container } from '../shared'
import { teams } from '@/data'
import S from '@/styles/pages/about/about.module.scss'

const Team = () => {
    const renderTeams = useCallback(
        (item: { name: string, img: string, description: string, role: string }, i: number) => {
            return (
                <AnimateScrollReveal duration={1.2} delay={i * 0.22} key={i} className={`w-full bg-red-100 relative cursor-pointer shadow-2xl rounded-2xl ${S.TeamImage}`}>
                    <Container className={`bg-slate-700 bg-opacity-80 rounded-2xl ${S.TeamText}`}>
                        <Container as='h5' className=' mb-2 text-white font-medium text-2xl'>{item.name}</Container>
                        <Container as='h6' className=' mb-2 text-red-400 text-xl'>{item.role}</Container>
                        {/* <Container as='p' className=' text-white'>
                            {item.description}
                        </Container> */}

                    </Container>
                    <Image
                        src={item.img}
                        alt={item.name}
                        className=" rounded-2xl shadow-2xl"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    {/* <Container>Image needed</Container> */}
                </AnimateScrollReveal>
            )
        },
        [],
    )
    return (
        <Container className=' container mt-14 mb-10'>
            <Container as='h2' className='text-blue-600 mb-10 font-semibold text-3xl'>
                Our Exciting Teams
            </Container>
            <Container className=' container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-20 gap-6'>
                {
                    teams.map(renderTeams)
                }
            </Container>
        </Container>
    )
}

export default Team