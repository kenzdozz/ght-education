import React, { useCallback } from 'react'
import { Container } from './shared'
import Link from 'next/link'
import { footerCountries } from '@/data'

const Footer = () => {
    const renderCountries = useCallback(
        ({ name, url }: { name: string, url: string }, i: number) => {
            return (
                <Link href={url} key={i}>
                    {name}
                </Link>
            )
        },
        [],
    )

    return (
        <Container as='footer' className=' bg-blue-default w-full py-10'>
            <Container className=' container flex justify-between gap-6'>
                <Container className=' w-1/3 shrink-0 flex flex-col gap-5'>
                    <Container className=' text-white'>Logo</Container>
                    <Container as='p' className=' text-white'>We are a company that help you get your dream abroad school and study with low stress</Container>
                    <Container as='p' className=' text-white'>Email: @gmail.com</Container>
                </Container>
                <Container>
                    <Container as='h5' className='text-white'>Countries</Container>
                    <Container className='text-white flex flex-col gap-4 mt-6'>
                        {
                            footerCountries.map(renderCountries)
                        }
                    </Container>
                </Container>
                <Container className=''>
                    <Container as='h5' className='text-white'>Links</Container>
                    <Container className='text-white flex flex-col gap-4 mt-6'>
                        {
                            footerCountries.map(renderCountries)
                        }
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Footer