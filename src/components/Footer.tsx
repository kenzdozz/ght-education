import React, { useCallback } from "react";
import { Container } from "./shared";
import Link from "next/link";
import { footerCountries, footerLinks } from "@/data";
import { UserIcon, EnvelopeIcon, PhoneIcon, HomeIcon } from "@heroicons/react/20/solid";

const Footer = () => {
    const renderCountries = useCallback(
        ({ name, url }: { name: string; url: string }, i: number) => {
            return (
                <Link href={url} key={i}>
                    {name}
                </Link>
            );
        },
        []
    );

    const renderLinks = useCallback(
        ({ name, url }: { name: string; url: string }, i: number) => {
            return (
                <Link href={url} key={i} className=" hover:text-red-700">
                    {name}
                </Link>
            );
        },
        []
    );

    return (
        <Container as="footer" className=" bg-blue-default w-full py-10 overflow-x-clip">
            <Container className=" container flex justify-between gap-6 flex-wrap">
                <Container className=" w-[55%] md:w-[20%] shrink-0 text-sm flex flex-col gap-5">
                    <Container className=" text-white">Logo</Container>
                    <Container as="p" className=" text-white text-sm">
                        We are a company that help you get your dream abroad school and
                        study with low stress
                    </Container>
                    <Container as="p" className=" text-white">
                        Email: info@ghteducation.com
                    </Container>
                </Container>
                <Container className=" w-[35%] md:w-[15%] shrink-0">
                    <Container as="h5" className="text-white font-semibold text-xl">
                        Links
                    </Container>
                    <Container className="text-white text-sm flex flex-col gap-2 mt-6">
                        {footerLinks.map(renderLinks)}
                    </Container>
                </Container>
                <Container className=" w-full md:w-[30%] text-sm shrink-0">
                    <Container as="h5" className="text-white font-semibold text-xl">
                        Head Office
                    </Container>
                    <Container className=" text-white mt-4 flex items-center">
                        <HomeIcon className="pointer-events-none text-white w-6 h-6 mr-1" />
                        No 18 Ezimgbu link Road GRA, Phase 4 Port Harcourt, Rivers State,
                        Nigeria.
                    </Container>
                    <Container as="p" className=" text-white mt-3 flex items-center flex-wrap gap-1">
                        <PhoneIcon className="pointer-events-none text-white w-6 h-6 mr-1" /> <a href="tel:+234-903-0143-401">+234-903-0143-401</a> <a href="tel:+234-803-6718-217">+234-803-6718-217</a>
                    </Container>
                    <Container as="p" className=" text-white mt-3 flex items-center gap-1 flex-wrap">
                        <EnvelopeIcon className="pointer-events-none text-white w-6 h-6 mr-1" /> <a href="mailto:info@ghteducation.com">info@ghteducation.com</a> <a href="mailto:globalht.education@gmail.com">globalht.education@gmail.com</a>
                    </Container>
                </Container>
                <Container className="w-full text-sm md:w-[20%] shrink-0">
                    <Container as="h5" className="text-white font-semibold text-xl">
                        Branch Office
                    </Container>
                    <Container className=" text-white mt-4 flex items-center">
                        <HomeIcon className="pointer-events-none text-white w-6 h-6 mr-1" />
                        Kwara State Office No 6 Pack Close, GRA Ilorin, Kwara State,
                        Nigeria.
                    </Container>
                    <Container as="p" className=" text-white mt-3 flex items-center flex-wrap gap-1">
                        <PhoneIcon className="pointer-events-none text-white w-6 h-6 mr-1" /> <a href="tel:+234-903-0143-401">+234-903-0143-401</a> <a href="tel:+234-803-6718-217">+234-803-6718-217</a>
                    </Container>
                    <Container as="p" className=" text-white mt-3 flex items-center gap-1 flex-wrap">
                        <EnvelopeIcon className="pointer-events-none text-white w-6 h-6 mr-1" /> <a href="mailto:info@ghteducation.com">info@ghteducation.com</a> <a href="mailto:globalht.education@gmail.com">globalht.education@gmail.com</a>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
};

export default Footer;
