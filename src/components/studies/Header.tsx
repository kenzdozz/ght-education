import React from 'react';
import { AnimateScrollReveal, Container } from '../shared';

const Header = ({ head, text }: { head: string; text?: string }) => {
  return (
    <Container className={`PageHeader`}>
      <AnimateScrollReveal duration={0.8} as="h2" className="text-gradient p-1 text-4xl font-bold capitalize">
        {head}
      </AnimateScrollReveal>
      <AnimateScrollReveal
        duration={1.2}
        delay={0.12}
        as="p"
        className="notshow mt-4 w-full text-center text-lg font-medium text-slate-500 md:w-[80%]"
      >
        {text}
      </AnimateScrollReveal>
      <Container className={`__after`} />
    </Container>
  );
};

export default Header;
