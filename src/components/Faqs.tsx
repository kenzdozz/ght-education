"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { FAQ_ITEMS } from '@/data';
import { AnimateScrollReveal, Container } from '@/components/shared';
import { useRouter } from 'next/navigation';

const Faqs = ({ isRow = false, isSlice = false }: { isRow?: boolean, isSlice?: boolean }) => {
    const [clickedId, setClickedId] = useState(1)
    const [end, setEnd] = useState(FAQ_ITEMS.length)
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
            setEnd(FAQ_ITEMS.length)
        }

    }, [isSlice])


    const renderFaqs = useCallback(
        (item: { title: string; text: string }, id: number) => {
            return (
                <AnimateScrollReveal animName="fadeInUp" key={id} className={`shadow-md w-full rounded-xl bg-white overflow-hidden transition-max-h duration-1000 p-5 ${clickedId === id + 1 ? ' max-h-screen' : ' max-h-40 lg:max-h-30'
                    }`}>
                    <Container className='flex items-center justify-between cursor-pointer' onClick={() => toggleShow(id + 1)}>
                        <Container as='h6' className={`text-base capitalize bold w-11/12 flex items-center ${clickedId === id + 1 ? 'text-blue-600' : ' text-slate-800'}`}>
                            <Container as='span' className=' flex bg-blue-500 w-6 h-6 text-lg mr-2 rounded-full items-center justify-center'>
                                <Container as='span' className="material-icons text-white">question_mark</Container>
                            </Container>
                            <Container as='span' className={` ${clickedId === id + 1 ? '' : 'overflow-hidden overflow-ellipsis line-clamp-1'}`}> {item.title}</Container>
                        </Container>
                        <Container as='span' className={`material-icons text-blue-600 transition-all duration-300 cursor-pointer ${clickedId === id + 1 ? 'rotate-180' : ''}`}>expand_more</Container>
                    </Container>

                    <Container as='p' className={`text-base text-slate-500 mt-4 transition-all duration-1000 ${clickedId === id + 1 ? ' opacity-100' : ' hidden opacity-0'}`}>
                        {item.text}
                    </Container>
                </AnimateScrollReveal>
            )
        },
        [clickedId],
    )

    return (
        <Container as='section' className=' container pt-6 pb-6'>
            <Container className={`grid grid-cols-1 transition-all duration-200 ${isSlice ? ' max-h-full' : 'max-h-full'} ${isRow ? 'md:grid-cols-1' : 'md:grid-cols-1'} gap-5 mt-0`}>
                {FAQ_ITEMS.slice(0, end).map(renderFaqs)}
                {(isSlice) && (
                    <button onClick={() => navigateToFaq()} className='border-0 outline-none w-[8rem] h-[2.5rem] capitalize rounded-lg ml-auto text-white py-1 px-3 bg-gradient-primary'>
                        See More
                    </button>
                )}
            </Container>
        </Container>
    )
}

export default Faqs