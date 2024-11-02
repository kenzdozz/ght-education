'use client';
import React from 'react';
import { AnimateScrollReveal, Container } from './shared';
import ScriptWithCleanup from '@/utils/useScript';

const ICEF = (props: { title: string; subtitles: string[]; bgColor: string; animTimeout: number }) => {
  return (
    <AnimateScrollReveal duration={props.animTimeout} className={`${props.bgColor} py-5 transition-opacity`}>
      <Container className="container grid grid-cols-2 items-center justify-center gap-6">
        <Container className="flex justify-end">
          <Container as="span" id="iasBadge" className="block h-[105px] w-[90px]" data-account-id="6273" />
        </Container>
        <Container className="text-sm">
          <Container className="mb-1 text-lg">{props.title}</Container>
          {props.subtitles.map((subtitle, k) => (
            <Container key={k}>{subtitle}</Container>
          ))}
        </Container>
      </Container>
      <ScriptWithCleanup async defer crossOrigin="anonymous" src="https://www-cdn.icef.com/scripts/iasbadgeid.js" />
    </AnimateScrollReveal>
  );
};

export default ICEF;
