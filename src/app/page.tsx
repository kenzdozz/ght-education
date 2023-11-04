'use client'
import Image from 'next/image'
import { Header, Steps, Patners, Countries, Testimonies } from '@/components/home'
import useScrollReveal from '@/utils/useScrollReveal'
import { SearchInput } from '@/components/shared'

export default function Home() {
  const [homeRef] = useScrollReveal()
  return (
    <main className="min-h-screen" ref={homeRef}>
      <Header />
      <SearchInput />
      <Steps />
      <Patners />
      <Countries />
      <Testimonies />
    </main>
  )
}
