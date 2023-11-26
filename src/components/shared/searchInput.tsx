'use client';
import React, { memo } from 'react';
import { Container } from '.';

const _SearchInput = (): JSX.Element => {
  return (
    <Container className="container relative z-20">
      <Container className="absolute -top-7 left-1/2 z-10 flex h-12 w-full -translate-x-1/2 items-center rounded-md border-2 border-blue-400 bg-white">
        <input
          type="text"
          className=" h-full w-10/12 shrink-0 rounded-md border-0 pl-3 text-base font-normal text-black outline-none placeholder:text-slate-300 md:w-11/12"
          placeholder="search universities"
        />
        <button className=" flex h-full w-2/12 items-center justify-center bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 md:w-1/12">
          search
        </button>
      </Container>
      <Container className=" absolute top-12 z-[3] max-h-0 w-full bg-white transition-all duration-200"></Container>
    </Container>
  );
};

export const SearchInput = memo(_SearchInput);
