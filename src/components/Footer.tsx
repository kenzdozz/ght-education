import React, { useCallback } from 'react';
import Image from 'next/image';
import { Container, SVGIcon } from './shared';
import Link from 'next/link';
import { FOOTER_LINKS, socialMedia } from '@/data';
import { EnvelopeIcon, PhoneIcon, HomeIcon } from '@heroicons/react/20/solid';

const Footer = () => {
  const renderLinks = useCallback(({ name, url }: { name: string; url: string }, i: number) => {
    return (
      <Link href={url} key={i} className=" w-auto hover:text-red-700">
        {name}
      </Link>
    );
  }, []);

  return (
    <Container as="footer" className="w-full overflow-x-clip bg-gradient-to-b from-white to-blue-800 pb-5 pt-10">
      <Container className=" container flex flex-wrap justify-between gap-6">
        <Container className=" flex w-[55%] shrink-0 flex-col gap-2 text-sm md:w-[20%]">
          <Link href="/" className=" relative ">
            <Image src="/img/logo.png" alt="company logo" width={0} height={0} style={{ height: 'auto', width: 150 }} />
          </Link>
          <Container as="p" className=" text-sm text-slate-800">
            Your partner for successful education abroad since 2017. Expert admissions and visa support.
          </Container>
          <Container className=" mt-3 flex flex-wrap items-center">
            {socialMedia.map((el) => (
              <a key={el.link} href={el.link} target="__blank" className=" w-8 text-slate-800">
                <SVGIcon name={el.icon} size="tiny" />
              </a>
            ))}
          </Container>
        </Container>
        <Container className=" w-[35%] shrink-0 md:w-[10%]">
          <Container as="h5" className="text-xl font-semibold text-slate-800">
            Links
          </Container>
          <Container className="mt-4 flex flex-col gap-2 text-sm text-slate-800">
            {FOOTER_LINKS.map(renderLinks)}
          </Container>
        </Container>
        <Container className=" w-full shrink-0 text-sm md:w-[27%]">
          <Container as="h5" className="text-xl font-semibold text-slate-800">
            Head Office
          </Container>
          <Container className=" mt-4 flex items-center text-slate-800">
            <HomeIcon className="pointer-events-none mr-1 h-6 w-6 text-slate-900" />
            No 18 Ezimgbu link Road GRA, Phase 4 Port Harcourt, Rivers State, Nigeria.
          </Container>
          <Container as="p" className=" mt-4 flex flex-wrap items-center gap-1 text-slate-800">
            <PhoneIcon className="pointer-events-none mr-1 h-6 w-6 text-slate-900" />
            <a href="tel:+2347030344279">+234-703-0344-279</a>, <a href="tel:+2348036718217">+234-803-6718-217</a>
          </Container>
          <Container as="p" className=" mt-4 flex flex-wrap items-center gap-1 text-slate-800">
            <EnvelopeIcon className="pointer-events-none mr-1 h-6 w-6 text-slate-900" />
            <Container as="span">
              <a href="mailto:info@ghteducation.com">info@ghteducation.com</a>
            </Container>
          </Container>
        </Container>
        <Container className="w-full shrink-0 text-sm md:w-[27%]">
          <Container as="h5" className="text-xl font-semibold text-slate-800">
            Branch Office
          </Container>
          <Container className=" mt-4 flex items-center text-slate-800">
            <HomeIcon className="pointer-events-none mr-1 h-6 w-6 text-slate-900" />
            1st Floor Premium House, Magazine Road Jericho GRA Ibadan, Oyo State, Nigeria
          </Container>
          <Container as="p" className=" mt-4 flex flex-wrap items-center gap-1 text-slate-800">
            <PhoneIcon className="pointer-events-none mr-1 h-6 w-6 text-slate-900" />
            <a href="tel:+2347037379147">+234-703-7379-147</a>
          </Container>
          <Container as="p" className=" mt-4 flex flex-wrap items-center gap-1 text-slate-800">
            <EnvelopeIcon className="pointer-events-none mr-1 h-6 w-6 text-slate-900" />
            <Container as="span">
              <a href="mailto:info@ghteducation.com">info@ghteducation.com</a>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container className="container">
        <Container as="hr" className="my-2 border-slate-600" />
        <Container className="text-center text-sm text-slate-800">
          Copyright &copy; {new Date().getFullYear()} by GlobalHT Education. All Right Reserved.
        </Container>
      </Container>
    </Container>
  );
};

export default Footer;
