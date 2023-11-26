'use client';
import React, { memo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavSubMenu, Container } from '.';
import { NavItem } from '@/types';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const _MenuItems = ({ menu: nav }: { menu: NavItem; slug?: boolean }) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();

  const isActive = router.pathname !== '/' && nav.url !== '/' && router.pathname.includes(nav.url);

  return (
    <Container
      as="span"
      className={`nav-menu relative py-2 ${isActive ? 'active' : ''}`}
      onMouseLeave={() => setDropdown(false)}
      onMouseEnter={() => setDropdown((prev) => !prev)}
    >
      {nav.subNav ? (
        <>
          <Link href={nav.url}>
            {nav.title}
            <ChevronDownIcon className="inline h-6 w-6" />
          </Link>
          <NavSubMenu subitem={nav.subNav} parenturl={nav.url} dropdown={dropdown} />
        </>
      ) : (
        <Link href={nav.url}>{nav.title}</Link>
      )}
    </Container>
  );
};

export const MenuItems = memo(_MenuItems);
