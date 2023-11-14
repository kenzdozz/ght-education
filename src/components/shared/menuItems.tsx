"use client"
import React, { memo, useState } from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavSubMenu, Container } from '.'
import { NavItem } from '@/types';

const _MenuItems = ({ menu: nav, slug = false }: { menu: NavItem, slug?: boolean }) => {
    const [dropdown, setDropdown] = useState(false);
    const pathname = usePathname();
    return (
        <Container as='span' className={`relative py-2 nav-menu ${pathname !== "/" &&
            nav.url !== "/" &&
            pathname.includes(nav.url)
            ? "active"
            : ""
            }`} onMouseLeave={() => setDropdown(false)} onMouseEnter={() => setDropdown((prev) => !prev)}>
            {nav.subNav ? (
                <>
                    <button type="button" className=' outline-none border-0' aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}

                    >
                        {nav.title}{" "}
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