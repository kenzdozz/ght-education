import React, { useCallback } from 'react'
import Image from 'next/image'
import { Container } from '../shared'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import S from '@/styles/pages/home/home.module.scss'
import { testimonies } from '@/data';

const Testimonies = () => {
    const renderTestimonies = useCallback(
        ({ name, message, img, id }: { name: string, message: string, id: number, img: string }) => {
            return (
                <SwiperSlide key={id}>
                    <Container className=' w-[25rem] rounded-md bg-white relative shadow-md pt-10 pb-16 transition-all duration-300 px-8 hover:shadow-lg hover:-translate-y-1'>
                        <Container as='p' className={`w-full mb-4 font-medium text-base ${S.quote}`}>
                            I found out about TGM Education when I saw an advert for their Roadshow in Port-Harcourt. I followed them after that and they  have been wonderful all through my application processing and I have gained Admission and on my way to the UK after getting my Visa with their help.
                        </Container>
                        <Container as='p' className=' w-1/2 ml-auto mt-auto'>
                            {name}
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
                </SwiperSlide>
            )
        },
        [],
    )

    return (
        <Container className=' container my-20 bg-slate-100 rounded-sm py-9 px-5'>
            <Container as='h4' className=' text-slate-700 text-center font-semibold text-xl mb-3 capitalize'>what our customers say</Container>
            <Container className=' mt-14 overflow-x-hidden pt-6 relative transition-all pb-6 duration-300'

            >
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    freeMode={true}
                    speed={800}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.next-buttons',
                        prevEl: '.prev-buttons'
                    }}
                    modules={[FreeMode, Pagination, Navigation]}
                    className="customer-swiper"
                >{
                        testimonies.map(renderTestimonies)
                    }
                </Swiper>
            </Container>
            <Container className=' relative h-4'>
                <button className=" outline-none bg-slate-100 bg-opacity-50 prev-buttons text-4xl rounded-lg py-1 px-2 flex items-center justify-center absolute z-10 -bottom-8 left-[30%] lg:left-[45%]"
                >
                    <Container as='span' className="material-icons text-purple-900">chevron_left</Container>
                </button>
                <button className=" outline-none bg-slate-100 bg-opacity-50 next-buttons text-4xl rounded-lg py-1 px-2 flex items-center justify-center absolute z-10 -bottom-8 right-[30%] lg:right-[45%]"

                >
                    <Container as='span' className="material-icons text-purple-900">chevron_right</Container>
                </button>
            </Container>
            {/* <Container className=' flex items-center gap-7 mt-16'>
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
            </Container> */}
        </Container>
    )
}

export default Testimonies