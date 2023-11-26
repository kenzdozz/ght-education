// Note: This is AppHead not Header: <head> not <header>.

import Head from 'next/head';
import React from 'react';

const AppHead = ({ title }: { title?: string }): JSX.Element => {
  return (
    <Head>
      <title>{`GlobalHT Education | ${title || 'Home'}`}</title>
    </Head>
  );
};

export default AppHead;
