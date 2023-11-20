"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { faqs } from '@/data';
import { Container } from '@/components/shared';
import { useRouter } from 'next/navigation';

const Faqs = ({ isRow = false, isSlice = false }: { isRow?: boolean, isSlice?: boolean }) => {
    const [clickedId, setClickedId] = useState(0)
    const [end, setEnd] = useState(faqs.length)
    const router = useRouter()
    const navigateToFaq = () => {
        router.push(`/faqs`);
    };
    const toggleShow = (id: number) => {
        setClickedId((prev) => {
            if (id === prev) {
                return 0
            } else {
                return id
            }
        })
    }

    useEffect(() => {
        if (isSlice) {
            setEnd(5)
        } else {
            setEnd(faqs.length)
        }

    }, [isSlice])


    const renderFaqs = useCallback(
        (item: { title: string; text: string }, id: number) => {
            return (
                <Container key={id} className={`shadow-xl w-full rounded-xl bg-white overflow-hidden transition-max-h duration-1000 py-2 px-3 ${clickedId === id + 1 ? ' max-h-screen' : ' max-h-20 lg:max-h-16'
                    }`}>
                    <Container className='flex items-center justify-between text-3xl cursor-pointer' onClick={() => toggleShow(id + 1)}>

                        <Container as='h6' className={` text-xs md:text-sm uppercase w-11/12 flex items-center ${clickedId === id + 1 ? 'text-blue-600' : ' text-slate-800'}`}>
                            <Container as='span' className=' flex bg-blue-500 w-6 h-6 text-lg mr-2 rounded-full items-center justify-center'>
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
        <Container as='section' className=' container pt-6 pb-6'>
            {/* <Container as='h5' className=' text-slate-500 font-semibold text-lg text-center mb-0 md:mb-2 flex items-center justify-center'>
                <Container as='span' className="material-icons text-blue-500 mr-1">double_arrow</Container>
                FAQS
                <Container as='span' className="material-icons text-blue-500 ml-1">double_arrow</Container>
            </Container> */}
            <Container className={`grid grid-cols-1 transition-all duration-200 ${isSlice ? ' max-h-full' : 'max-h-full'} ${isRow ? 'md:grid-cols-1' : 'md:grid-cols-1'} gap-9 mt-7`}>
                {
                    faqs.slice(0, end).map(renderFaqs)
                }
                {
                    (isSlice) && (
                        <button onClick={() => navigateToFaq()} className='border-0 outline-none w-[8rem] h-[2.5rem] capitalize rounded-lg ml-auto text-white py-1 px-3 bg-gradient-primary'>
                            See More
                        </button>
                    )
                }
            </Container>
        </Container>
    )
}

export default Faqs