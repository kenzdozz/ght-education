"use client";

import React, {
    memo,
} from "react";
import { Container } from ".";

const _SearchInput = (): JSX.Element => {

    return (
        <Container className="container-inner relative z-20">
            <Container className="absolute left-1/2 w-full -translate-x-1/2 -top-7 z-10 h-12 border-2 border-blue-400 rounded-md bg-white flex items-center">
                <input
                    type="text"
                    className=" h-full rounded-md w-10/12 md:w-11/12 shrink-0 border-0 pl-3 outline-none text-base text-black placeholder:text-slate-300 font-normal"
                    placeholder="search universities"
                />
                <button className=" bg-orange-500 w-2/12 md:w-1/12 h-full flex items-center justify-center transition-all duration-300 text-white hover:bg-orange-600">
                    search
                </button>
            </Container>
            <Container className=" absolute top-12 w-full z-[3] bg-white transition-all duration-200 max-h-0">

            </Container>
        </Container>
    );
};

export const SearchInput = memo(_SearchInput);