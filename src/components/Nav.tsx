"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Container, MenuItems } from "./shared";
import { NavItem } from "@/types";
import { navMenuItems, sideBarMenuItems } from "@/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Nav = () => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigateToPage = (route: string) => {
        router.push(route);
        setSidebarOpen(false);
    };
    const renderNavs = useCallback((nav: NavItem) => {
        return <MenuItems menu={nav} key={nav.url} />;
    }, []);

    const renderSideNavs = useCallback((nav: { name: string; url: string }) => {
        return (
            <Container onClick={() => navigateToPage(nav.url)}>
                <Container
                    as="span"
                    className="text-white font-medium text-lg transition-all duration-200 hover:text-orange-200"
                >
                    {nav.name}
                </Container>
            </Container>
        );
    }, []);

    // const handleScroll: EventListener = () => {
    //     if (window.scrollY > 0) {
    //         setScrolled(true);
    //     } else {
    //         setScrolled(false);
    //     }
    // };

    let lastScrollY = 0;

    const handleScroll: EventListener = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Scrolling down
            setScrolled(true);
        } else {
            // Scrolling up
            setScrolled(false);
        }

        lastScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Container
                as="nav"
                className={`Nav transition-all duration-300 ${scrolled ? " bg-white" : " bg-white"
                    } shadow-lg py-2 md:py-5 h-14 md:h-20`}
            >
                <Container className=" container flex items-center justify-between">
                    <Link href="/" className=" relative ">
                        <Image
                            src='/img/logo.png'
                            alt="company logo"
                            width={140}
                            height={60}
                        />
                    </Link>
                    <Container className="item-container hidden md:flex items-center gap-10">
                        {navMenuItems.map(renderNavs)}
                    </Container>
                    <Container className=" hidden lg:flex contact transition-all duration-300">
                        <a
                            href="tel:+234-903-0143-401"
                            className=" flex items-center transition-all duration-300"
                        >
                            <Container
                                as="span"
                                className=" w-8 h-8 lg:w-14 lg:h-14 rounded-full flex items-center justify-center glass-over"
                            >
                                <Container as="span" className="material-icons text-red-600">
                                    call
                                </Container>
                            </Container>
                            <Container as="span" className=" ml-1 lg:ml-3">
                                <Container
                                    as="p"
                                    className=" text-sm font-medium lg:font-semibold lg:text-base"
                                >
                                    +234-903-0143-401
                                </Container>
                                <Container
                                    as="p"
                                    className=" font-light text-sm lg:font-medium lg:text-base"
                                >
                                    Contact Support
                                </Container>
                            </Container>
                        </a>
                    </Container>
                    <Container
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className=" bg-slate-200 shadow-md rounded-md w-10 h-auto py-1 transition-all duration-200 hover:scale-110 cursor-pointer flex flex-col gap-1 px-1 md:hidden"
                    >
                        <Container
                            as="span"
                            className=" w-full h-[2px] bg-blue-600"
                        ></Container>
                        <Container
                            as="span"
                            className=" w-full h-[2px] bg-blue-600"
                        ></Container>
                        <Container
                            as="span"
                            className=" w-full h-[2px] bg-blue-600"
                        ></Container>
                    </Container>
                </Container>
            </Container>
            <Container
                className={`side-bar block md:hidden ${sidebarOpen && "show-side-bar"}`}
            >
                <Container className=" flex items-end justify-end">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className=" rounded-full w-8 h-8 bg-red-200 flex items-center justify-center outline-none border-0 cursor-pointer"
                    >
                        <Container as="span" className="material-icons text-white">
                            close
                        </Container>
                    </button>
                </Container>
                <Container className=" w-full h-full flex mt-8 flex-col gap-5">
                    {sideBarMenuItems.map(renderSideNavs)}
                </Container>
            </Container>
        </>
    );
};

export default Nav;
