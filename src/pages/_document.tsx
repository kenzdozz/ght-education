import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta
          name="description"
          content="Author: GlobalHT Education is the leading one-stop solution provider for international students to study and live in UK, Ireland, Canada, USA, and Australia. At Global HT Education, we continuously strive to provide credible and trustworthy counselling to students from all over the world to help them further their academic and professional"
        />
        <meta name="keywords" content="international students, Education, Travel, Scholarship, Academics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="mt-14 md:mt-20">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
