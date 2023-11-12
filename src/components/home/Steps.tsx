import React, { useCallback } from 'react'
import Image from 'next/image'
import { Container, AnimateScrollReveal } from '../shared'
import { homeSteps } from '@/data'
import { useRouter } from 'next/navigation'

const Steps = () => {
    const router = useRouter()
    const navigateToContact = () => {
        router.push(`/contact`);
    };
    const renderSteps = useCallback(
        (item: any) => {
            return (
                <AnimateScrollReveal id={`service${item.id}`} duration={1.3} key={item.id} className={`grid grid-cols-1 md:grid-cols-5 gap-12 items-center lg:gap-16 mt-20 mb-24`}>
                    <AnimateScrollReveal duration={1.5} delay={0.123} id={`serice-img${item.id}`} animName='fadeInRight' className={`relative w-full col-span-1 md:col-span-2 h-[14rem] ${(item.id + 1) % 2 !== 0 ? ' -order-1 md:order-1 ml-auto' : ' '}`}>
                        <Image
                            src={item.img}
                            alt="Your Image"
                            className=" rounded-2xl"
                            layout="fill"
                            objectFit="cover"
                            priority={true}
                        />
                    </AnimateScrollReveal>
                    <AnimateScrollReveal id={`serice-txt${item.id}`} duration={1.34} delay={0.1} animName='fadeInLeft' className={` flex flex-col justify-between col-span-1 md:col-span-3 ${(item.id + 1) % 2 !== 0 ? ' -order-1' : ' '}`}>
                        <Container>
                            <Container as='h5' className=' text-slate-500 font-semibold text-lg mb-2 flex items-center'>
                                <Container as='span' className="material-icons text-gradient-bottom mr-1">double_arrow</Container>
                                <Container className=' text-2xl text-blue-600 font-semibold ml-1'>0{item.id}.</Container> {item.head}
                                <Container as='span' className="material-icons text-gradient-bottom ml-1">double_arrow</Container>
                            </Container>
                            <Container as='h4' className=' text-slate-700 font-bold text-lg md:text-3xl mb-7'>{item.title}</Container>
                            <Container as='p'>{item.description}</Container>
                        </Container>
                        <Container className=' w-1/2 mt-2'>
                            <button onClick={() => navigateToContact()} className='button button-primary'>Get Started</button>
                        </Container>
                    </AnimateScrollReveal>
                </AnimateScrollReveal>
            )
        },
        [],
    )
    return (
        <Container className='container-inner'>
            {
                homeSteps.map(renderSteps)
            }
        </Container>
    )
}

export default Steps