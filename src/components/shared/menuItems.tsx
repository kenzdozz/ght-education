"use client"
import React, { memo, useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { NavSubMenu, Container } from '.'
import { NavItem } from '@/types';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const _MenuItems = ({ menu: nav, slug = false }: { menu: NavItem, slug?: boolean }) => {
    const [dropdown, setDropdown] = useState(false);
    const router = useRouter();

    const isActive = router.pathname !== "/" && nav.url !== "/" && router.pathname.includes(nav.url);

    return (
        <Container
            as='span'
            className={`relative py-2 nav-menu ${isActive ? "active" : ""}`}
            onMouseLeave={() => setDropdown(false)}
            onMouseEnter={() => setDropdown((prev) => !prev)}
        >
            {nav.subNav ? (
                <>
                    <button type="button" className=' outline-none border-0' aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}>
                        {nav.title}
                        <ChevronDownIcon className="inline w-6 h-6" />
                    </button>
                    <NavSubMenu subitem={nav.subNav} parenturl={nav.url} slug={slug} dropdown={dropdown} />
                </>
            ) : (
                <Link
                    href={nav.url} className=''>
                    {nav.title}
                </Link>
            )}
        </Container>
    )
}

export const MenuItems = memo(_MenuItems)