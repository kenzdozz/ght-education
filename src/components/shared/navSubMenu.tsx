"use client";
import React, { memo } from "react";
import Link from "next/link";
import { Container } from ".";

const _NavSubMenu = ({
    subitem,
    dropdown,
    parenturl
}: {
    subitem: {
        title: string;
        url: string;
    }[];
    dropdown: boolean;
    parenturl: string
}) => {

    return (
        <Container as='ul' className={`dropdown ${dropdown ? "show" : ""}`}>
            {subitem.map((submenu, index) => (
                <Container as='li' key={index} >
                    <Link
                        href={`${parenturl}/${submenu.url}`} className="menu-items">
                        {submenu.title}
                        <Container as='span' className="material-icons submenu-icon text-blue-500">double_arrow</Container>
                    </Link>
                </Container>
            ))}
        </Container>
    );
};

export const NavSubMenu = memo(_NavSubMenu);
