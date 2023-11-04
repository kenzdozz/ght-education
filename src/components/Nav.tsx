"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Container, MenuItems } from "./shared";
import { NavItem } from "@/types";
import { navMenuItems, sideBarMenuItems } from "@/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

const contact = {
    title: "Contact Us",
    url: "/contact",
    subNav: [
        {
            title: "Portharcourt",
            url: "portharcourt",
        },
        {
            title: "Ibadan",
            url: "ibadan",
        },
    ],
};

const Nav = () => {
    const router = useRouter()
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigateToPage = (route: string) => {
        router.push(route);
        setSidebarOpen(false)
    };
    const renderNavs = useCallback((nav: NavItem) => {
        return <MenuItems menu={nav} key={nav.url} />;
    }, []);

    const renderSideNavs = useCallback((nav: { name: string; url: string }) => {
        return (
            <Container onClick={() => navigateToPage(nav.url)}>
                <Container as="span" className="text-white font-medium text-lg transition-all duration-200 hover:text-orange-200">{nav.name}</Container>
            </Container>
        );
    }, []);

    const handleScroll: EventListener = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Container as="nav" className="Nav bg-white relative shadow-lg py-5 h-20">
                <Container className=" container flex items-center justify-between">
                    <Link href="/">
                        <Container as="span">Logo</Container>
                    </Link>
                    <Container className="item-container hidden md:flex items-center gap-10">
                        {navMenuItems.map(renderNavs)}
                    </Container>
                    <Container className="action-container hidden md:flex items-center">
                        <MenuItems menu={contact} />
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
            <Container className={`side-bar ${sidebarOpen && "show-side-bar"}`}>
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
                    {
                        sideBarMenuItems.map(renderSideNavs)
                    }
                </Container>
            </Container>
        </>
    );
};

export default Nav;
