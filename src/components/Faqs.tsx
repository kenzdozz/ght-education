"use client"
import React, { useCallback, useState } from 'react'
import { faqs } from '@/data';
import { Container } from '@/components/shared';

const Faqs = () => {
    const [clickedId, setClickedId] = useState(0)

    const toggleShow = (id: number) => {
        setClickedId((prev) => {
            if (id === prev) {
                return 0
            } else {
                return id
            }
        })
    }

    const renderFaqs = useCallback(
        (item: { title: string; text: string }, id: number) => {
            return (
                <Container className={`shadow-xl w-full rounded-xl bg-white overflow-hidden transition-max-h duration-1000 py-2 px-3 ${clickedId === id + 1 ? ' max-h-screen' : ' max-h-14'
                    }`}>
                    <Container className='flex items-center justify-between text-3xl cursor-pointer' onClick={() => toggleShow(id + 1)}>

                        <Container as='h4' className={`text-xl w-10/12 flex items-center ${clickedId === id + 1 ? 'text-blue-600' : ' text-slate-800'}`}>
                            <Container as='span' className=' flex bg-blue-300 w-8 h-8 mr-2 rounded-full items-center justify-center'>
                                <Container as='span' className="material-icons text-white">question_mark</Container>
                            </Container>
                            {item.title}
                        </Container>
                        <Container as='span' className={`material-icons text-blue-600 transition-all duration-300 cursor-pointer ${clickedId === id + 1 ? 'rotate-180' : ''}`}>expand_more</Container>
                    </Container>
                    {/* {
                        clickedId === (id + 1) && ( */}
                    <Container as='p' className={` mt-4 transition-all duration-1000 ${clickedId === id + 1 ? ' opacity-100' : ' opacity-0'}`}>
                        {item.text}
                    </Container>
                    {/* )
                    } */}
                </Container>
            )
        },
        [clickedId],
    )

    return (
        <Container as='section' className=' container pt-20 pb-6'>
            <Container as='h5' className=' text-slate-500 font-semibold text-lg text-center mb-2 flex items-center justify-center'>
                <Container as='span' className="material-icons text-blue-300 mr-1">double_arrow</Container>
                FAQS
                <Container as='span' className="material-icons text-blue-300 ml-1">double_arrow</Container>
            </Container>
            <Container className=' grid grid-cols-1 md:grid-cols-2 gap-9 mt-16'>
                {
                    faqs.map(renderFaqs)
                }
            </Container>
        </Container>
    )
}

export default Faqs