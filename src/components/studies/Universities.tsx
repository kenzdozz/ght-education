'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, Pagination } from '../shared'
import { useRouter } from 'next/navigation'
import { ICountry, ISchool, studyCountries } from '@/data/studies'

const Universities = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const newData = useCallback((): { country: ICountry; school: ISchool }[] => {
        return studyCountries.flatMap((country) => {
            return country.schools.map((school) => ({
                school,
                country,
            }));
        });
    }, []);

    const [data, setData] = useState(newData().slice(0, limit));
    const [pageCount, setPageCount] = useState<number>(newData().length);


    const handleSchoolClick = (item: { country: ICountry; school: ISchool; }) => {
        router.push(`/studies/countries/${item.country.slug}/universities/${item.school.slug}`);
    };

    const onNext = () => {
        if (currentPage < pageCount) {
            updatePage(currentPage + 1);
        }
    };

    const onPrevious = () => {
        if (currentPage > 1) {
            updatePage(currentPage - 1);
        }
    };

    const updatePage = (pageNo: number): void => {
        if (pageNo > pageCount) {
            pageNo = 1;
        }
        const skip = (currentPage - 1) * limit;
        setData(newData().slice(skip, skip + limit));
        setCurrentPage(pageNo);
    };

    useEffect(() => {
        updatePage(currentPage);
    }, [currentPage]);
    return (
        <Container className='container my-14'>
            <Container
                as="h4"
                className="textBorder font-bold text-xl md:text-3xl capitalize"
            >
                Explore Universities
            </Container>
            <Container className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 '>
                {
                    data.map((item, i: number) => (
                        <Container key={item.school.slug + i} onClick={() => handleSchoolClick(item)} className={`rounded-md border-[1px]  relative w-full h-auto transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1`}>

                            <Container className=' w-full bg-blue-400 relative h-[12rem] rounded-t-md'>
                                {/* <Image
                        src={`${img}`}
                        alt='name'
                        fill
                        style={{objectFit:"cover"}}
                    /> */}
                            </Container>
                            <Container className=' mt-4 px-7 mb-4'>
                                <Container as='h5' className='text-blue-800 uppercase text-center font-semibold text-lg mb-2'>
                                    {item.school.name}
                                </Container>
                                <Container as='p' className=" text-base text-center">
                                    {item.school.name} is a prestigous school in {item.country.name}.
                                </Container>
                            </Container>
                        </Container>
                    ))
                }
            </Container>
            {data?.length > 0 && (
                <Container className="mt-9 w-auto flex items-center justify-center ">
                    <Pagination
                        currentPage={currentPage}
                        totalCount={newData().length}
                        pageSize={limit}
                        onNext={onNext}
                        onPrev={onPrevious}
                        onPageChange={updatePage}
                    />
                </Container>
            )}
        </Container>
    )
}

export default Universities