'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Container, MenuItems, NavSubMenu } from './shared';
import { NavItem } from '@/types';
import { NAV_MENU_ITEMS } from '@/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

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
    setSideDropdown(!sideDropdown);
  };

  const closeSideBar = (baseurl: string, url: string) => {
    router.push(`${baseurl}/${url}`);
    setSidebarOpen(false);
    setSideDropdown(false);
  };

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

  const renderSideNavs = useCallback(
    (
      nav: {
        title: string;
        url: string;
        subNav?: { title: string; url: string }[];
      },
      i: number,
    ) => {
      return (
        <Container key={i}>
          {nav.subNav ? (
            <span ref={dropdownRef} className=" relative">
              <Container className="flex cursor-pointer items-center gap-3 text-white">
                <Container
                  onClick={() => navigateToPage(nav.url)}
                  as="span"
                  className="text-lg font-medium text-white transition-all duration-200 hover:text-orange-200"
                >
                  {nav.title}
                </Container>
                <Container as="span" className="cursor-pointer px-3" onClick={() => changeDropDown()}>
                  {' '}
                  <ChevronDownIcon className="inline h-6 w-6" />
                </Container>
              </Container>

              <NavSubMenu
                subitem={nav.subNav}
                closeSideBar={closeSideBar}
                parenturl={nav.url}
                dropdown={sideDropdown}
              />
            </span>
          ) : (
            <Container
              onClick={() => navigateToPage(nav.url)}
              as="span"
              className="cursor-pointer text-lg font-medium text-white transition-all duration-200 hover:text-orange-200"
            >
              {nav.title}
            </Container>
          )}
        </Container>
      );
    },
    [sideDropdown],
  );

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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container
        as="nav"
        className={`Nav transition-all duration-300 ${
          scrolled ? ' bg-blue-100 bg-opacity-90 ' : ' bg-white'
        } h-14 py-2 md:h-20 md:py-5`}
      >
        <Container className=" container flex items-center justify-between">
          <Link href="/" className=" relative ">
            <Image src="/img/logo.png" alt="company logo" width={0} height={0} style={{ height: 60, width: 'auto' }} />
          </Link>
          <Container className="item-container hidden items-center gap-7 md:flex">
            {NAV_MENU_ITEMS.map(renderNavs)}
          </Container>
          <Container className=" contact hidden transition-all duration-300 lg:flex">
            <a href="tel:+2347030344279" className=" flex items-center transition-all duration-300">
              <Container
                as="span"
                className=" glass-over flex h-8 w-8 items-center justify-center rounded-full lg:h-14 lg:w-14"
              >
                <Container as="span" className="material-icons text-red-600">
                  call
                </Container>
              </Container>
              <Container as="span" className=" ml-1 lg:ml-3">
                <Container as="p" className=" text-sm font-semibold">
                  +234-703-0344-279
                </Container>
                <Container as="p" className="text-sm">
                  Contact Support
                </Container>
              </Container>
            </a>
          </Container>
          <Container
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex h-auto w-10 cursor-pointer flex-col gap-1 rounded-md px-1 py-1 transition-all duration-200 hover:scale-110 md:hidden"
          >
            <Container as="span" className=" h-[2px] w-full bg-blue-600"></Container>
            <Container as="span" className=" h-[2px] w-full bg-blue-600"></Container>
            <Container as="span" className=" h-[2px] w-full bg-blue-600"></Container>
          </Container>
        </Container>
      </Container>
      <Container className={`side-bar block md:hidden ${sidebarOpen && 'show-side-bar'}`}>
        <Container className=" flex items-end justify-end">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className=" flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-0 bg-red-200 outline-none"
          >
            <Container as="span" className="material-icons text-white">
              close
            </Container>
          </button>
        </Container>
        <Container className=" mt-8 flex h-full w-full flex-col gap-5">{NAV_MENU_ITEMS.map(renderSideNavs)}</Container>
      </Container>
    </>
  );
};

export default Nav;
