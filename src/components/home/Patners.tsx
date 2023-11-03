import React from 'react'
import Image from 'next/image'
import { Container } from '../shared'

const Patners = () => {
    return (
        <Container className=' container flex items-center gap-7 py-8 overflow-x-hidden'>
            {
                Array.from(Array(10)).map((_, i: number) => (
                    <Image
                        src='/img/img1.jpg'
                        alt='img-pop'
                        width={100}
                        height={50}
                        className='transition-all duration-300 shadow shrink-0 hover:-translate-y-1 cursor-pointer'
                    />
                ))
            }
        </Container>
    )
}

export default Patners