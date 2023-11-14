import { studies } from '@/data/studies'
import React from 'react'
import UniversityP from './University'

export const generateStaticParams = () => {
    const data: { id: string; schoolId: string }[] = [];

    Object.keys(studies).forEach(id => {
        studies[id].schools.forEach(s => {
            data.push({
                id, // Adding the 'id' parameter
                schoolId: encodeURIComponent(s.school), // Encoding the school name
            });
        });
    });

    return data;
};

const UniversityPage = ({ params }: { params: { id: string; schoolId: string } }) => {
    return (
        <UniversityP sid={params.schoolId} />
    );
};


export default UniversityPage