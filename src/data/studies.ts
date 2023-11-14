interface School {
    school: string;
}

interface CountryData {
    img: string;
    schools: School[];
}

interface StudiesData {
    [country: string]: CountryData;
}
export const studyCountries = [
    {
        img: "/img/img1.webp",
        name: "United Kingdom",
        url: "countries/uk",
    },
    {
        img: "/img/img2.webp",
        name: "United State",
        url: "countries/us",
    },
    {
        img: "/img/img3.webp",
        name: "Canada",
        url: "countries/canada",
    },
    {
        img: "/img/img4.webp",
        name: "Germany",
        url: "countries/germany",
    },
    {
        img: "/img/img4.webp",
        name: "Australia",
        url: "countries/australia",
    },
    {
        img: "/img/img4.webp",
        name: "View Others",
        url: "countries",
    },
];

export const featureSchools = [
    {
        img: "/img/alabama.webp",
        name: "University of Alabama",
        country: "USA",
    },
    {
        img: "/img/illiniosis.webp",
        name: "Illinois institute of technology",
        country: "USA",
    },
    {
        img: "/img/st-mary.webp",
        name: "St Mary's University London",
        country: "UK",
    },
    {
        img: "/img/portsmouth.webp",
        name: "University of Portsmouth",
        country: "UK",
    },
    {
        img: "/img/toronto.webp",
        name: "Toronto Metropolitan University",
        country: "canada",
    },
    {
        img: "/img/dublin.webp",
        name: "Dublin City University",
        country: "ireland",
    },
];

export const studies: StudiesData = {
    USA: {
        img: '/img/usa.jpg',
        schools: [
            {
                school: "American University",
            },
            {
                school: "Pace University",
            },
            {
                school: "University of the Pacific",
            },
            {
                school: "Illinois institute of technology",
            },
            {
                school: "Trent University",
            },
            {
                school: "University of Dayton ",
            },
            {
                school: "California Lutheran University",
            },
            {
                school: "Baylor University (Post graduate)",
            },
            {
                school: "University of Windsor",
            },
            {
                school: "Cleveland state university",
            },
            {
                school: "University of south Carolina",
            },
            {
                school: "Arizona state university",
            },
            {
                school: "Texas A&M University",
            },
            {
                school: "DePaul University",
            },
            {
                school: "Auburn University",
            },
            {
                school: "University of Mississippi",
            },
            {
                school: "Centennial college",
            },
            {
                school: "Auburn University",
            },
        ],
    },
    Uk: {
        img: '/img/uk.jpg',
        schools: [
            {
                school: "University of Worcester",
            },
            {
                school: `St Mary's University London`,
            },
            {
                school: `The University for the Creative Arts`,
            },
            {
                school: "University of Bedfordshire",
            },
            {
                school: "University of Chichester ",
            },
            {
                school: "University of West bristol",
            },
            {
                school: "University of Portsmouth",
            },
            {
                school: "University of Bournemouth",
            },
            {
                school: "University of Exeter",
            },
            {
                school: "University of Sussex",
            },
            {
                school: "University of Law",
            },
            {
                school: "University of Dundee",
            },
            {
                school: "University of Aston",
            },
            {
                school: "City University of London",
            },
            {
                school: "University of Brighton",
            },
            {
                school: "Manchester Metropolitan University",
            },
            {
                school: "Goldsmith University of London",
            },
            {
                school: "University of Essex ",
            },
            {
                school: "University of Liverpool",
            },
            {
                school: "Teesside University",
            },
            {
                school: "University of Reading",
            },
            {
                school: "Coventry University",
            },
        ],
    },
    canada: {
        img: '/img/canada.webp',
        schools: [
            { school: "Georgia college" },
            { school: "Toronto Metropolitan University" },
            { school: "Fashawe college of Applied Arts and Technology" },
            { school: "Brock University" },
            { school: "LaSalle college Montreal" },
            { school: "St Mary's University Canada" },
            { school: "Mount Allison University" },
            { school: "Durham college" },
            { school: "Coast mountain college" },
            { school: "Great plain college" },
            { school: "Centennial college" },
            { school: "Conestoga college" },
            { school: "Lakeland college" },
            { school: "Niagara college Toronto" },
            { school: "Fraser international College" },
            { school: "Durham college" },
            { school: "Great plain college" },
            { school: "Mount Saint college" },
            { school: "Canadore college" },
            { school: "International college of Manitoba" },
            { school: "University of Regina" },
            { school: "Canadian college of technology and business" },
            { school: "Nipssing University" },
            { school: "Sault college" },
            { school: "Algonquin college" },
            { school: "Royal Road University" },
            { school: "Seneca college" },
            { school: "Alexander college" },
            { school: "George Brown college" },
            { school: "Cape Breton University" },
            { school: "Tent University" },
            { school: "St Lawrence college" },
            { school: "Capitolano University" },
            { school: "University of Canada west" },
            { school: "Crandall University" },
            { school: "Saskatchewan polytechnic" },
            { school: "Adler University" },
            { school: "Lambton college" },
            { school: "Sheridan college" },
        ],
    },
    ireland: {
        img: '/img/ireland.jpg',
        schools: [
            { school: "Technological University of the Shannon" },
            { school: "Dublin Business School" },
            { school: "Griffith College" },
            { school: "University of Maynooth" },
            { school: "University of Galway" },
            { school: "Dublin City University" },
            { school: "University of Limerick" },
            { school: "Trinity College Dublin" },
            { school: "Shannon college of Hotel Management" },
            {
                school:
                    "TU, Dublin ( Dublin Institute of Technology and TU Blanchard's town",
            },
            { school: "University college cork" },
        ],
    },
    newZealand: {
        img: '/img/New-Zealand.webp',
        schools: [
            { school: "Auckland University of Technology" },
            { school: "Victoria University of Wellington" },
            { school: "National Technology Institute NTEC" },
            { school: "Southern Institute of Technology" },
            { school: "Whitireia WelTec" },
            { school: "Auckland Institute of Technology" },
            { school: "Auckland Institute of Studies UG and Diplomas" },
            { school: "Ara Institute of Canterbury" },
            { school: "Unitec Institute of Technology" },
            { school: "Pacific International Hotel Management School" },
            { school: "New Zealand Tertiary College" },
            { school: "Institute of Pacific United" },
        ],
    },
    australia: {
        img: '/img/australia.jpg',
        schools: [
            { school: "International College of Management" },
            { school: "Edith Cowan University" },
            { school: "Charles Darwin University" },
            { school: "Central Queensland University" },
        ],
    }
};
