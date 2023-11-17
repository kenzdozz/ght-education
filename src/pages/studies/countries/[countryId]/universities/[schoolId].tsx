import Page from '@/components/Page'
import { Header, University } from '@/components/studies'
import { ISchool, studyCountries } from '@/data/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export async function getStaticPaths() {
    const paths: { params: { countryId: string; schoolId: string } }[] = [];

    studyCountries.map(country => {
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

    const [universityIdRef] = useScrollReveal()
    const text = `Study in ${school?.name}`

    useEffect(() => {
        if (router && router.query) {
            const { countryId, schoolId } = router.query as Record<string, string>

            const country = studyCountries.find(c => c.slug === countryId);
            setSchool(country?.schools.find(s => s.slug === schoolId));
        }
    }, [router]);

    if (!school) return null

    return (
        <Page mainRef={universityIdRef}>
            <Header head={text} />
            <University school={school.name} />
        </Page>
    )
}

export default UniversityPage
