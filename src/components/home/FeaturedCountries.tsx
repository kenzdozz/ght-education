import React, { useCallback } from 'react';
import Image from 'next/image';
import { Container } from '../shared';
import { FEATURED_COUNTRIES, IFeaturedCountry } from '@/data/studies';
import { useRouter } from 'next/navigation';

const FeaturedCountries = () => {
  const [index, setIndex] = React.useState(0);
  const router = useRouter();

  const navigateToCountry = (country: IFeaturedCountry) => {
    router.push(`/studies/countries/${country.slug}`);
  };
  const increaseCurrentIndex = () => {
    setIndex((prev) => {
      if (prev === FEATURED_COUNTRIES.length - 1) return 0;
      return prev + 1;
    });
  };

  const decreaseCurrentIndex = () => {
    setIndex((prev) => {
      if (prev === 0) return FEATURED_COUNTRIES.length - 1;
      return prev - 1;
    });
  };
  const renderSchools = useCallback(
    (item: IFeaturedCountry, itemIndex: number) => {
      let position = 'nextSlide';
      if (itemIndex === index) {
        position = 'activeSlide';
      }
      if (itemIndex === index - 1 || (index === 0 && itemIndex === FEATURED_COUNTRIES.length - 1)) {
        position = 'lastSlide';
      }
      return (
        <Container
          className={`homeHeadImage ${position} grid h-full w-full grid-cols-1 items-center md:grid-cols-2`}
          key={itemIndex}
        >
          <Container className=" flex h-[18rem] w-full flex-col justify-center bg-transparent text-center md:w-[80%] md:text-left">
            <Container as="h2" className=" text-2xl font-semibold text-white md:text-3xl">
              Our Featured Countries
            </Container>
            <Container className=" pt-2 md:pt-9">
              <Container as="h3" className=" mb-2 text-xl font-semibold text-white md:mb-5 md:text-2xl">
                {item.name}
              </Container>
              <Container as="p" className=" mb-2 font-medium text-white md:mb-5">
                {item.description}
              </Container>
              <button
                onClick={() => navigateToCountry(item)}
                className=" cursor-pointer rounded-md border-2 border-white bg-transparent px-3 py-2 text-white outline-none"
              >
                Learn More
              </button>
            </Container>
          </Container>
          <Container className=" relative h-[15rem] bg-white md:h-full">
            <Container className=" absolute left-0 top-1/2 z-[2] h-full w-full -translate-y-1/2 rounded-md bg-red-100 md:-left-[20%] md:h-[24rem] md:w-[120%]">
              <Image src={item.img} alt="Your Image" className="rounded-md" fill style={{ objectFit: 'cover' }} />
            </Container>
          </Container>
        </Container>
      );
    },
    [index],
  );

  return (
    <Container className=" bg-blue-default relative  grid h-[33rem]  grid-cols-1 md:grid-cols-2">
      <button
        onClick={() => decreaseCurrentIndex()}
        className=" prev-buttons absolute left-10 top-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-lg bg-slate-100 bg-opacity-50 px-2 py-1 text-4xl outline-none md:top-[80%] xl:top-1/2 "
      >
        <Container as="span" className="material-icons text-blue-900">
          chevron_left
        </Container>
      </button>
      <button
        onClick={() => increaseCurrentIndex()}
        className=" next-buttons absolute right-5 top-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-lg bg-slate-100 bg-opacity-50 px-2 py-1 text-4xl outline-none md:top-[80%] lg:right-10 xl:top-1/2 "
      >
        <Container as="span" className="material-icons text-blue-900">
          chevron_right
        </Container>
      </button>
      <Container className="hidden bg-transparent md:block" />
      <Container className="hidden bg-white md:block" />
      <Container className=" container absolute bottom-0 left-1/2 top-0 z-[1] h-full w-full -translate-x-1/2 overflow-x-hidden ">
        {FEATURED_COUNTRIES.map(renderSchools)}
      </Container>
    </Container>
  );
};

export default FeaturedCountries;
