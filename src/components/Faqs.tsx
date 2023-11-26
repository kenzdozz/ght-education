'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { FAQ_ITEMS } from '@/data';
import { AnimateScrollReveal, Container } from '@/components/shared';
import { useRouter } from 'next/navigation';

const Faqs = ({ isRow = false, isSlice = false }: { isRow?: boolean; isSlice?: boolean }) => {
  const [clickedId, setClickedId] = useState(1);
  const [end, setEnd] = useState(FAQ_ITEMS.length);
  const router = useRouter();
  const navigateToFaq = () => {
    router.push(`/faqs`);
  };
  const toggleShow = (id: number) => {
    setClickedId((prev) => {
      if (id === prev) {
        return 0;
      } else {
        return id;
      }
    });
  };

  useEffect(() => {
    if (isSlice) {
      setEnd(5);
    } else {
      setEnd(FAQ_ITEMS.length);
    }
  }, [isSlice]);

  const renderFaqs = useCallback(
    (item: { title: string; text: string }, id: number) => {
      return (
        <AnimateScrollReveal
          animName="fadeInUp"
          key={id}
          className={`transition-max-h w-full overflow-hidden rounded-xl bg-white p-5 shadow-md duration-1000 ${
            clickedId === id + 1 ? ' max-h-screen' : ' lg:max-h-30 max-h-40'
          }`}
        >
          <Container className="flex cursor-pointer items-center justify-between" onClick={() => toggleShow(id + 1)}>
            <Container
              as="h6"
              className={`bold flex w-11/12 items-center text-base capitalize ${
                clickedId === id + 1 ? 'text-blue-600' : ' text-slate-800'
              }`}
            >
              <Container
                as="span"
                className=" mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-lg"
              >
                <Container as="span" className="material-icons text-white">
                  question_mark
                </Container>
              </Container>
              <Container
                as="span"
                className={` ${clickedId === id + 1 ? '' : 'line-clamp-1 overflow-hidden overflow-ellipsis'}`}
              >
                {' '}
                {item.title}
              </Container>
            </Container>
            <Container
              as="span"
              className={`material-icons cursor-pointer text-blue-600 transition-all duration-300 ${
                clickedId === id + 1 ? 'rotate-180' : ''
              }`}
            >
              expand_more
            </Container>
          </Container>

          <Container
            as="p"
            className={`mt-4 text-base text-slate-500 transition-all duration-1000 ${
              clickedId === id + 1 ? ' opacity-100' : ' hidden opacity-0'
            }`}
          >
            {item.text}
          </Container>
        </AnimateScrollReveal>
      );
    },
    [clickedId],
  );

  return (
    <Container as="section" className="container pb-6 pt-6">
      <Container
        className={`grid grid-cols-1 transition-all duration-200 ${isSlice ? ' max-h-full' : 'max-h-full'} ${
          isRow ? 'md:grid-cols-1' : 'md:grid-cols-1'
        } mt-0 gap-5`}
      >
        {FAQ_ITEMS.slice(0, end).map(renderFaqs)}
        {isSlice && (
          <button
            onClick={() => navigateToFaq()}
            className="bg-gradient-primary ml-auto h-[2.5rem] w-[8rem] rounded-lg border-0 px-3 py-1 capitalize text-white outline-none"
          >
            See More
          </button>
        )}
      </Container>
    </Container>
  );
};

export default Faqs;
