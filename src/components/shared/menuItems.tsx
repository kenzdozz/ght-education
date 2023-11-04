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
        <Container as='span' className={`relative nav-menu ${pathname !== "/" &&
            nav.url !== "/" &&
            pathname.includes(nav.url)
            ? "active"
            : ""
            }`} onMouseLeave={() => setDropdown(false)} onMouseEnter={() => setDropdown((prev) => !prev)}>
            {nav.subNav ? (
                <>
                    <button type="button" className='py-2 outline-none border-0' aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}

                    >
                        {nav.title}{" "}
                    </button>
                    <NavSubMenu subitem={nav.subNav} parenturl={nav.url} slug={slug} dropdown={dropdown} />
                </>
            ) : (
                <Link
                    href={nav.url}>
                    {nav.title}
                </Link>
                // <a href={nav.url}>{nav.title}</a>
            )}
        </Container>
    )
}

export const MenuItems = memo(_MenuItems)