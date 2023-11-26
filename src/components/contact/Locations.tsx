import { HomeIcon } from '@heroicons/react/20/solid';
import { AnimateScrollReveal, Container } from '../shared';

const Locations = () => {
  return (
    <Container>
      <AnimateScrollReveal allowOverflow duration={1.2} className="container">
        <Container as="h5" className="textBorder flex items-baseline text-lg font-bold capitalize md:text-3xl">
          <HomeIcon className="pointer-events-none mr-3 h-6 w-6" />
          Our Office Locations
        </Container>
      </AnimateScrollReveal>
      <Container className="py-3">
        <AnimateScrollReveal
          duration={1.2}
          className=" container mb-4 mt-3 grid grid-cols-1 items-center gap-4 md:grid-cols-2 lg:gap-20"
        >
          <AnimateScrollReveal
            duration={1.5}
            delay={0.1}
            animName="fadeInRight"
            className=" folded-paper flex flex-col items-center px-8 py-10"
          >
            <Container as="h4" className="mb-0 text-center text-2xl font-semibold capitalize text-blue-600">
              Head Office
            </Container>
            <Container as="h4" className="text-l mb-4 font-semibold">
              Portharcourt, Rivers
            </Container>
            <Container as="p" className=" text-center font-medium text-slate-600">
              No 18 Ezimgbu link Road GRA, Phase 4 Port Harcourt, Rivers State, Nigeria.
            </Container>
          </AnimateScrollReveal>
          <Container className=" pt-[2rem]">
            <AnimateScrollReveal
              duration={1.5}
              delay={0.1}
              animName="fadeInLeft"
              className=" folded-paper-mission flex flex-col items-center px-8 py-10"
            >
              <Container as="h4" className="mb-0 flex text-center text-2xl font-semibold capitalize text-blue-600">
                Branch Office
              </Container>
              <Container as="h4" className="text-l mb-4 font-semibold">
                Ibadan, Oyo
              </Container>
              <Container as="p" className=" text-center font-medium text-slate-600">
                1st Floor Premium House, Magazine Road Jericho GRA Ibadan, Oyo State, Nigeria
              </Container>
            </AnimateScrollReveal>
          </Container>
        </AnimateScrollReveal>
      </Container>
    </Container>
  );
};

export default Locations;
