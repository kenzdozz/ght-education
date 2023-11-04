'use client'
import { Header } from '@/components/studies'
import { Contact } from '@/components/contact'
import React from 'react'
import { useParams } from 'next/navigation'

const ContactPage = () => {
    const { location } = useParams()
    const text = `contact our ${location} office`
    return (
        <main>
            <Header head={text} />
            <Contact />
        </main>
    )
}

export default ContactPage