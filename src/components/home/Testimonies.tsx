import React from 'react'
import Image from 'next/image'
import { Container } from '../shared'
import S from '@/styles/pages/home/home.module.scss'

const Testimonies = () => {
    return (
        <Container className=' container my-20 bg-slate-100 rounded-sm py-9 px-5'>
            <Container as='h4' className=' text-slate-700 text-center font-semibold text-xl mb-3 capitalize'>what our customers say</Container>
            <Container className=' flex items-center gap-7 mt-16'>
                <Container className=' w-[25rem] rounded-md bg-white relative shadow-md py-10 transition-all duration-300 px-8 hover:shadow-lg hover:-translate-y-1'>
                    <Container as='p' className={`w-full mb-4 font-medium text-base ${S.quote}`}>
                        I found out about TGM Education when I saw an advert for their Roadshow in Port-Harcourt. I followed them after that and they've been wonderful all through my application processing and I have gained Admission and on my way to the UK after getting my Visa with their help.
                    </Container>
                    <Container as='p' className=' w-20 ml-auto mt-auto'>
                        Mr Paul Ani
                    </Container>
                    <Container className='rounded-full absolute z-10 left-1/2 -translate-x-1/2 -bottom-7 h-20 w-20 overflow-hidden '>
                        <Image
                            src='/img/img1.jpg'
                            alt='img-pop'
                            layout='fill'
                            objectFit='cover'
                        />
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Testimonies