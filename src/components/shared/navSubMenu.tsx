"use client";
import React, { memo } from "react";
import Link from "next/link";
import { Container } from ".";

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
    return (
        <Container as="ul" className={`dropdown ${dropdown ? "show" : ""}`}>
            {subitem.map((submenu, index) => (
                <Container as="li" key={index}>
                    {closeSideBar ? (
                        <Container
                            onClick={() => closeSideBar(parenturl, submenu.url)}
                            as="span"
                            className="menu-items"
                        >
                            {submenu.title}
                            <Container
                                as="span"
                                className="material-icons submenu-icon text-blue-500"
                            >
                                double_arrow
                            </Container>
                        </Container>
                    ) : (
                        <Link href={`${parenturl}/${submenu.url}`} className="menu-items">
                            {submenu.title}
                            <Container
                                as="span"
                                className="material-icons submenu-icon text-blue-500"
                            >
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
