import React from 'react'
import Image from 'next/image'
import { Container } from '../shared'

const Mission = () => {
    return (
        <Container>
            <Container className=' container grid grid-cols-1 md:grid-cols-3 gap-20 mt-20 mb-10 items-center'>
                <Container className=' w-full relative h-[18rem] rounded-md'>
                    <Image
                        src='/img/about/mission.jpg'
                        alt='waho-we-are'
                        layout='fill'
                        className=' rounded-md'
                        objectFit='cover'
                    />
                </Container>
                <Container className=' col-span-2'>
                    <Container as='h2' className=' capitalize text-gradient font-semibold text-3xl'>Our Mission</Container>
                    <Container as='p' className=' mt-4'>
                        We assist in rendering support to individuals seeking any form of educational advancement overseas through personalized admission assistance and visa counseling, which are the first steps towards meeting their life ambitions. Our services also extend further throughout the student study period, to family members and those seeking tourist visas.

                        We thoroughly go through the visa process, providing advice, making informed changes based on our array of experience while filling applications to minimize any prospect of rejection.

                        We ensure that no credible Visa applicant is denied visa as a result of error of omission or oversight by helping to reverse the visa refusals when consulted.


                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Mission