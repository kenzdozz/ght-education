import AppHead from './AppHead';
import Footer from './Footer';
import Nav from './Nav';
import { Poppins } from 'next/font/google';

const popins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400', '600', '700', '800'],
});

export default function Page({
  title,
  children,
  mainRef,
}: {
  title: string;
  children: React.ReactNode;
  mainRef?: React.RefObject<HTMLElement>;
}) {
  return (
    <>
      <AppHead title={title} />
      <div className={popins.className}>
        <Nav />
        <main ref={mainRef}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
