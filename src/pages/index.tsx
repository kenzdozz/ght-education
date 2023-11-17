import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeIndex from '@/components/new-home'
import Nav from '@/components/Nav'
import Page from '@/components/Page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Page>
      <HomeIndex />
    </Page>
  )
}
