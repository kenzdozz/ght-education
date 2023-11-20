import { HomeIcon } from "@heroicons/react/20/solid";
import { AnimateScrollReveal, Container } from "../shared"

const Locations = () => {
  return (
    <Container>
      <AnimateScrollReveal allowOverflow duration={1.2} className="container">
        <Container as="h5" className="flex items-baseline textBorder font-bold text-lg md:text-3xl capitalize">
          <HomeIcon className="pointer-events-none w-6 h-6 mr-3" />
          Our Office Locations
        </Container>
      </AnimateScrollReveal>
      <Container className="py-3">
        <AnimateScrollReveal duration={1.2} className=" container grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-20 mt-3 mb-4 items-center">
          <AnimateScrollReveal
            duration={1.5}
            delay={0.1}
            animName="fadeInRight"
            className=" flex flex-col items-center px-8 py-10 folded-paper"
          >
            <Container as="h4" className="capitalize text-blue-600 font-semibold text-2xl text-center mb-0">Head Office</Container>
            <Container as="h4" className="mb-4 font-semibold text-l">Portharcourt, Rivers</Container>
            <Container as="p" className=" text-center font-medium text-slate-600">
              No 18 Ezimgbu link Road GRA, Phase 4 Port Harcourt, Rivers State, Nigeria.
            </Container>
          </AnimateScrollReveal>
          <Container className=" pt-[2rem]">
            <AnimateScrollReveal
              duration={1.5}
              delay={0.1}
              animName="fadeInLeft"
              className=" flex flex-col items-center px-8 py-10 folded-paper-mission"
            >
              <Container as="h4" className="flex capitalize text-blue-600 font-semibold text-2xl text-center mb-0">Branch Office</Container>
              <Container as="h4" className="mb-4 font-semibold text-l">Ibadan, Oyo</Container>
              <Container as="p" className=" text-center font-medium text-slate-600">
                1st Floor Premium House, Magazine Road Jericho GRA Ibadan, Oyo State, Nigeria
              </Container>
            </AnimateScrollReveal>
          </Container>
        </AnimateScrollReveal>
      </Container>
    </Container>
  )
}

export default Locations;
