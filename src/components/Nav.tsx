'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, MenuItems } from './shared'
import { NavItem } from '@/types';
import { navMenuItems } from '@/data';

const contact = {
    title: 'Contact Us',
    url: '/contact',
    subNav: [
        {
            title: 'Portharcourt',
            url: 'blog',
        },
        {
            title: 'Ibadan',
            url: 'videos',
        }
    ],
}

const Nav = () => {
    const renderNavs = useCallback((nav: NavItem) => {
        return (
            <MenuItems menu={nav} key={nav.url} />
        );
    }, []);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll: EventListener = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container as='nav' className='Nav bg-white relative shadow-lg py-5 h-20'>
            <Container className=' container flex items-center justify-between'>
                <Container as='h4'>Logo</Container>
                <Container className="item-container flex items-center gap-10">
                    {navMenuItems.map(renderNavs)}
                </Container>
                <Container className="action-container flex items-center" >
                    <MenuItems menu={contact} />
                </Container>
            </Container>
        </Container>
    )
}

export default Nav