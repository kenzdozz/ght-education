"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container, MenuItems, NavSubMenu } from "./shared";
import { NavItem } from "@/types";
import { NAV_MENU_ITEMS } from "@/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Nav = () => {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sideDropdown, setSideDropdown] = useState(false);
    const dropdownRef = useRef<HTMLSpanElement>(null);

    const navigateToPage = (route: string) => {
        router.push(route);
        setSidebarOpen(false);
    };
    const renderNavs = useCallback((nav: NavItem) => {
        return <MenuItems menu={nav} key={nav.url} />;
    }, []);

    const changeDropDown = () => {
        setSideDropdown(!sideDropdown)
    }

    const closeSideBar = (baseurl: string, url: string) => {
        router.push(`${baseurl}/${url}`)
        setSidebarOpen(false);
        setSideDropdown(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setSideDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const renderSideNavs = useCallback((nav: { title: string; url: string, subNav?: { title: string; url: string }[] }, i: number) => {
        return (
            <Container key={i} >
                {
                    nav.subNav ? (
                        <span ref={dropdownRef} className=" relative">
                            <Container className="cursor-pointer flex items-center gap-3 text-white">
                                <Container
                                    onClick={() => navigateToPage(nav.url)}
                                    as="span"
                                    className="text-white font-medium text-lg transition-all duration-200 hover:text-orange-200"
                                >
                                    {nav.title}
                                </Container>
                                <Container as='span' className="cursor-pointer px-3" onClick={() => changeDropDown()}> <ChevronDownIcon className="inline w-6 h-6" /></Container>
                            </Container>

                            <NavSubMenu subitem={nav.subNav} closeSideBar={closeSideBar} parenturl={nav.url} dropdown={sideDropdown} />
                        </span>
                    )
                        : (
                            <Container
                                onClick={() => navigateToPage(nav.url)}
                                as="span"
                                className="cursor-pointer text-white font-medium text-lg transition-all duration-200 hover:text-orange-200"
                            >
                                {nav.title}
                            </Container>
                        )
                }
            </Container>
        );
    }, [sideDropdown]);

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
                className={`Nav transition-all duration-300 ${scrolled ? " bg-blue-100 bg-opacity-90 " : " bg-white"
                    } py-2 md:py-5 h-14 md:h-20`}
            >
                <Container className=" container flex items-center justify-between">
                    <Link href="/" className=" relative ">
                        <Image
                            src='/img/logo.png'
                            alt="company logo"
                            width={0}
                            height={0}
                            style={{ height: 60, width: 'auto' }}
                        />
                    </Link>
                    <Container className="item-container hidden md:flex items-center gap-7">
                        {NAV_MENU_ITEMS.map(renderNavs)}
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
                        className="rounded-md w-10 h-auto py-1 transition-all duration-200 hover:scale-110 cursor-pointer flex flex-col gap-1 px-1 md:hidden"
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
            <Container className={`side-bar block md:hidden ${sidebarOpen && "show-side-bar"}`}>
                <Container className=" flex items-end justify-end">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className=" rounded-full w-8 h-8 bg-red-200 flex items-center justify-center outline-none border-0 cursor-pointer"
                    >
                        <Container as="span" className="material-icons text-white">close</Container>
                    </button>
                </Container>
                <Container className=" w-full h-full flex mt-8 flex-col gap-5">
                    {NAV_MENU_ITEMS.map(renderSideNavs)}
                </Container>
            </Container>
        </>
    );
};

export default Nav;
