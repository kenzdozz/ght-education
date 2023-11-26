'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '.';

const _NavSubMenu = ({
  subitem,
  dropdown,
  parenturl,
  closeSideBar,
}: {
  subitem: {
    title: string;
    url: string;
  }[];
  dropdown: boolean;
  parenturl: string;
  closeSideBar?: (url1: string, url2: string) => void;
}) => {
  const router = useRouter();
  const isActive = (item: { url: string }) => router.asPath.includes(`${parenturl}/${item.url}`);

  return (
    <Container as="ul" className={`${closeSideBar ? 'sidedropdown' : 'dropdown'} ${dropdown ? 'show' : ''}`}>
      {subitem.map((submenu, index) => (
        <Container as="li" key={index}>
          {closeSideBar ? (
            <Container
              onClick={() => closeSideBar(parenturl, submenu.url)}
              as="span"
              className={`side-menu-items cursor-pointer `}
            >
              {submenu.title}
              <Container as="span" className="material-icons submenu-icon ml-3 !text-base text-blue-500">
                double_arrow
              </Container>
            </Container>
          ) : (
            <Link href={`${parenturl}/${submenu.url}`} className={`menu-items ${isActive(submenu) ? 'active' : ''}`}>
              {submenu.title}
              <Container as="span" className="material-icons submenu-icon ml-3 !text-base text-blue-500">
                double_arrow
              </Container>
            </Link>
          )}
        </Container>
      ))}
    </Container>
  );
};

export const NavSubMenu = memo(_NavSubMenu);
