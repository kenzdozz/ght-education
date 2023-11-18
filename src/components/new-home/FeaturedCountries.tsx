import React, { useCallback, useRef } from 'react'
import Image from 'next/image'
import { Container } from '../shared'
import { FEATURED_COUNTRIES, IFeaturedCountry } from '@/data/studies'
import { useRouter } from 'next/navigation'

const FeaturedCountries = () => {
    const [index, setIndex] = React.useState(0);
    const router = useRouter()
    const intervalIdRef = useRef<any | undefined>(undefined);

    const navigateToCountry = (country: IFeaturedCountry) => {
        router.push(`/studies/countries/${country.slug}`);
    };
    const increaseCurrentIndex = () => {
        clearInterval(intervalIdRef.current);
        setIndex((prev) => {
            if (prev === FEATURED_COUNTRIES.length - 1) return 0;
            return prev + 1;
        });
    };

    const decreaseCurrentIndex = () => {
        clearInterval(intervalIdRef.current);
        setIndex((prev) => {
            if (prev === 0) return FEATURED_COUNTRIES.length - 1;
            return prev - 1;
        });
    };
    const renderSchools = useCallback(
        (item: IFeaturedCountry, itemIndex: number) => {
            let position = "nextSlide";
            if (itemIndex === index) {
                position = "activeSlide";
            }
            if (
                itemIndex === index - 1 ||
                (index === 0 && itemIndex === FEATURED_COUNTRIES.length - 1)
            ) {
                position = "lastSlide";
            }
            return (
                <Container
                    className={`homeHeadImage ${position} w-full h-full grid grid-cols-1 items-center md:grid-cols-2`}
                    key={itemIndex}
                >
                    <Container className=' bg-transparent flex flex-col justify-center text-center md:text-left w-full md:w-[80%] h-[18rem]'>
                        <Container as='h2' className=' text-white font-semibold text-3xl'>Our Featured Countries</Container>
                        <Container className=' pt-9'>
                            <Container as='h3' className=' text-white font-semibold mb-5 text-2xl'>{item.name}</Container>
                            <Container as='p' className=' text-white font-medium mb-5'>{item.description}</Container>
                            <button onClick={() => navigateToCountry(item)} className=' bg-transparent border-2 border-white text-white rounded-md py-2 px-3 outline-none cursor-pointer'>Learn More</button>
                        </Container>
                    </Container>
                    <Container className=' bg-white relative h-[15rem] md:h-full'>
                        <Container className=' absolute left-0 md:-left-[20%] bg-red-100 z-[2] w-full md:w-[120%] top-1/2 -translate-y-1/2 rounded-md h-full md:h-[24rem]'>
                            <Image
                                src={item.img}
                                alt="Your Image"
                                className="rounded-md"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </Container>
                    </Container>
                </Container>
            );
        },
        [index]
    );

    return (
        <Container className=' grid relative  bg-blue-default grid-cols-1  md:grid-cols-2 h-[33rem]'>
            <button onClick={() => decreaseCurrentIndex()} className=" outline-none bg-slate-100 bg-opacity-50 prev-buttons text-4xl rounded-lg py-1 px-2 flex items-center justify-center absolute z-10 top-1/2 md:top-[80%] xl:top-1/2 -translate-x-1/2 left-10 ">
                <Container as='span' className="material-icons text-blue-900">chevron_left</Container>
            </button>
            <button onClick={() => increaseCurrentIndex()} className=" outline-none bg-slate-100 bg-opacity-50 next-buttons text-4xl rounded-lg py-1 px-2 flex items-center justify-center absolute z-10 top-1/2 md:top-[80%] xl:top-1/2 -translate-x-1/2 right-5 lg:right-10 ">
                <Container as='span' className="material-icons text-blue-900">chevron_right</Container>
            </button>
            <Container className='hidden md:block bg-transparent' />
            <Container className='hidden md:block bg-white' />
            <Container className=' container overflow-x-hidden absolute z-[1] w-full h-full top-0 bottom-0 left-1/2 -translate-x-1/2 '>
                {FEATURED_COUNTRIES.map(renderSchools)}
            </Container>
        </Container>
    )
}

export default FeaturedCountries