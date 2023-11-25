import React from 'react'
import Image from 'next/image'
import { Container, AnimateScrollReveal } from '../shared'

const WhoWeAre = () => {
    return (
        <Container>
            <AnimateScrollReveal duration={1.2} className=' container grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-20 mt-14 mb-10 items-center'>
                <AnimateScrollReveal duration={1.5} animName='fadeInRight' delay={0.1} className=' col-span-1 md:col-span-3'>
                    <Container as='h2' className=' capitalize text-blue-600 font-semibold text-3xl'>Who we are</Container>
                    <Container as='p' className=' mt-4'>
                        At GlobalHT Education, we are more than just an education consultancy; we are architects of aspirations, dedicated to shaping the futures of individuals and organizations worldwide. Established in 2017, our journey began with a passionate commitment to redefine the landscape of global education.
                    </Container>
                    <Container as="p" className="my-3">
                        Driven by a profound belief in the transformative power of education, we stand as advocates for ambitious dreamers, providing tailored guidance and unwavering support to those seeking quality academic and professional development opportunities overseas. 
                    </Container>
                    <Container as="p">
                        With a team of seasoned professionals, we endeavor to create pathways that transcend borders, unlocking doors to a world of possibilities. Our story is defined by the journeys we&rsquo;ve shaped, the dreams we&rsquo;ve empowered, and the lasting impact we&rsquo;ve forged through personalized, innovative, and reliable services.
                    </Container>
                </AnimateScrollReveal>
                <AnimateScrollReveal duration={1.5} animName='fadeInLeft' delay={0.113} className='mt-7 col-span-1 md:col-span-2 w-full relative h-[24rem] rounded-md'>
                    <Image
                        src='/img/about/whoweare.jpg'
                        alt='waho-we-are'
                        fill
                        className=' rounded-md'
                        style={{ objectFit: "contain" }}
                    />
                </AnimateScrollReveal>
            </AnimateScrollReveal>
        </Container>
    )
}

export default WhoWeAre