'use client'
import Image from 'next/image'
import { Header, Steps, Patners, Countries, Testimonies } from '@/components/home'
import useScrollReveal from '@/utils/useScrollReveal'

export default function Home() {
  const [homeRef] = useScrollReveal()
  return (
    <main className="min-h-screen" ref={homeRef}>
      <Header />
      <Steps />
      <Patners />
      <Countries />
      <Testimonies />
    </main>
  )
}
