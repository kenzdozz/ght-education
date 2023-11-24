import { Inter } from 'next/font/google'
import HomeIndex from '@/components/new-home'
import Page from '@/components/Page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Page title="Home">
      <HomeIndex />
    </Page>
  )
}
