import React from 'react'
import Image from 'next/image'
import { Container, AnimateScrollReveal } from '../shared'

const WhoWeAre = () => {
    return (
        <Container>
            <AnimateScrollReveal duration={1.2} className=' container grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 mb-10 items-center'>
                <AnimateScrollReveal duration={1.5} animName='fadeInRight' delay={0.1} className=' col-span-2'>
                    <Container as='h2' className=' capitalize text-gradient font-semibold text-3xl'>Who we are</Container>
                    <Container as='p' className=' mt-4'>
                        We provide support to individuals, corporate organizations and scholarship bodies, who desire quality academic and professional development overseas. Our organization GlobalHT Education Limited, have been in the business of recruiting students for overseas schools since it was established in 2017, given the experience of our staff who have worked in similar organizations with more than 5 years’ work experience before joining our organization; you can be rest assured of our excellent performance in the area of recruitment and visa counseling for students, visitors, tourist and dependents. Presently, we represent and recruit students for Canadian High school, foundation, Diploma, undergraduate, post graduate. doctorate degree and research programme for over 80 top ranking higher institutions in the UK, US, Canada, Australia, Ireland, Spain, Sweden, Hungary, Mauritius, the Caribbean islands, Russia, Cyprus, Netherlands, Turkey, Germany, etc.
                    </Container>
                </AnimateScrollReveal>
                <AnimateScrollReveal duration={1.5} animName='fadeInLeft' delay={0.123} className=' w-full relative h-[24rem] rounded-md'>
                    <Image
                        src='/img/about/about.jpg'
                        alt='waho-we-are'
                        layout='fill'
                        className=' rounded-md'
                        objectFit='cover'
                    />
                </AnimateScrollReveal>
            </AnimateScrollReveal>
        </Container>
    )
}

export default WhoWeAre