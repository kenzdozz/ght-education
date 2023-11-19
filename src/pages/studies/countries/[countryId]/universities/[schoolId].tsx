import Page from '@/components/Page'
import { Header, University } from '@/components/studies'
import { ICountry, ISchool, STUDY_COUNTRIES } from '@/data/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export async function getStaticPaths() {
    const paths: { params: { countryId: string; schoolId: string } }[] = [];

    STUDY_COUNTRIES.map(country => {
        country.schools.forEach(school => {
            paths.push({
                params: {
                    countryId: country.slug,
                    schoolId: school.slug,
                },
            })
        })
    })

    return { paths, fallback: false }
}
export async function getStaticProps() {
    return { props: {} }
}

const UniversityPage = () => {
    const router = useRouter()
    const [school, setSchool] = useState<ISchool>();
    const [countryName, setCountryName] = useState<string>();

    const [universityIdRef] = useScrollReveal()
    const text = `Study in ${school?.name}`

    useEffect(() => {
        if (router && router.query) {
            console.log(router.query, 'query');

            const { countryId, schoolId } = router.query as Record<string, string>

            const country = STUDY_COUNTRIES.find(c => c.slug === countryId);
            setCountryName(country?.slug)
            setSchool(country?.schools.find(s => s.slug === schoolId));
        }
    }, [router]);

    if (!school || !countryName) return null

    return (
        <Page mainRef={universityIdRef}>
            <Header head={text} />
            <University school={school.name} country={countryName as string} />
        </Page>
    )
}

export default UniversityPage
