import { memo } from 'react';
import { Container } from '.';
import { PhoneIcon, HomeIcon } from '@heroicons/react/20/solid';

const _ContactTab = () => {
  return (
    <Container className={`grid w-full grid-cols-1 bg-red-900 px-1 py-14 md:grid-cols-2 md:px-10`}>
      <Container className=" mb-4 flex flex-col gap-7 border-b-2 border-r-0 border-white pb-1 md:mb-0 md:border-b-0 md:border-r-2 md:pb-0">
        <Container as="h5" className=" text-xl font-bold text-white">
          Address
        </Container>
        <Container className=" mt-0 flex flex-col gap-6 md:mt-4">
          <Container as="h5" className=" font-bold text-white">
            Portharcourt office:{' '}
            <Container className=" flex items-center gap-1 font-medium">
              <HomeIcon className="pointer-events-none mr-1 h-6 w-6 text-white" />
              No 18 Ezimgbu link Road GRA, Phase 4 Port Harcourt, Rivers State, Nigeria.
            </Container>{' '}
          </Container>
          <Container as="h5" className=" font-bold text-white">
            Ibadan office:{' '}
            <Container className=" flex items-center gap-1 font-medium">
              <HomeIcon className="pointer-events-none mr-1 h-6 w-6 text-white" />
              No 18 Ezimgbu link Road GRA, Phase 4 Port Harcourt, Rivers State, Nigeria.
            </Container>{' '}
          </Container>
        </Container>
      </Container>
      <Container className=" flex flex-col gap-7 pl-0 md:pl-10">
        <Container as="h5" className=" text-xl font-bold text-white">
          Contact
        </Container>
        <Container className=" mt-0 flex flex-col gap-6 md:mt-4">
          <Container as="h5" className=" font-bold text-white">
            Portharcourt office:{' '}
            <a href="tel:+234-803-6718-217" className=" flex items-center gap-1 font-medium">
              <PhoneIcon className="pointer-events-none mr-1 h-4 w-4 text-white" />
              +234-803-6718-217
            </a>{' '}
          </Container>
          <Container as="h5" className=" font-bold text-white">
            Ibadan office:{' '}
            <a href="tel:+234-803-6718-217" className=" flex items-center gap-1 font-medium">
              <PhoneIcon className="pointer-events-none mr-1 h-4 w-4 text-white" />
              +234-903-0143-401
            </a>{' '}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export const ContactTab = memo(_ContactTab);
