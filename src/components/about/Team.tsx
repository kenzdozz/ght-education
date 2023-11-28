import React, { useCallback } from 'react';
import Image from 'next/image';
import { AnimateScrollReveal, Container } from '../shared';
import { ITeam, OUR_TEAM } from '@/data';
import S from '@/styles/pages/about/about.module.scss';

const Team = () => {
  const renderTeams = useCallback((item: ITeam, i: number) => {
    return (
      <AnimateScrollReveal
        duration={1.2}
        delay={i * 0.22}
        key={i}
        className={`relative w-full cursor-pointer rounded-2xl bg-red-100 shadow-2xl ${S.TeamImage}`}
      >
        <Container className={`rounded-2xl bg-slate-700 bg-opacity-80 ${S.TeamText}`}>
          <Container as="h5" className=" mb-2 text-2xl font-medium text-white">
            {item.name}
          </Container>
          <Container as="h6" className=" text-md mb-2 text-red-400">
            {item.role}
          </Container>
        </Container>
        <Image src={item.img} alt={item.name} className="rounded-2xl shadow-2xl" fill style={{ objectFit: 'cover' }} />
      </AnimateScrollReveal>
    );
  }, []);
  return (
    <Container className=" container mb-10 mt-14">
      <AnimateScrollReveal animName="scaleX" as="h2" className="mb-10 text-3xl font-semibold text-blue-600">
        Our Exciting Team
      </AnimateScrollReveal>
      <Container className=" container grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {OUR_TEAM.map(renderTeams)}
      </Container>
    </Container>
  );
};

export default Team;
