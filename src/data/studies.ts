export interface ISchool {
    name: string;
    slug: string;
}

export interface ICountry {
    img: string;
    slug: string;
    name: string;
    schools: ISchool[];
}

interface CountryData {
    img: string;
    schools: ISchool[];
}

interface StudiesData {
    [country: string]: CountryData;
}
export const studyCountries: ICountry[] = [
    {
        img: "/img/usa.jpg",
        name: "United States of America",
        slug: "usa",
        schools: [
            {
                name: "American University",
                slug: "american-university",
            },
            {
                name: "University of Alabama",
                slug: "university-of-alabam",
            },
            {
                name: "Pace University",
                slug: "pace-university",
            },
            {
                name: "University of the Pacific",
                slug: "university-of-the-pacific",
            },
            {
                name: "Illinois institute of technology",
                slug: "illinois-institute-of-technology",
            },
            {
                name: "Trent University",
                slug: "trent-university",
            },
            {
                name: "University of Dayton",
                slug: "university-of-dayton",
            },
            {
                name: "California Lutheran University",
                slug: "california-lutheran-university",
            },
            {
                name: "Baylor University (Post graduate)",
                slug: "baylor-university",
            },
            {
                name: "University of Windsor",
                slug: "university-of-windsor",
            },
            {
                name: "Cleveland state university",
                slug: "cleveland-state-university",
            },
            {
                name: "University of south Carolina",
                slug: "university-of-south-carolina",
            },
            {
                name: "Arizona state university",
                slug: "arizona-state-university",
            },
            {
                name: "Texas A&M University",
                slug: "texas-a&m university",
            },
            {
                name: "DePaul University",
                slug: "depaul-university",
            },
            {
                name: "Auburn University",
                slug: "auburn-university",
            },
            {
                name: "University of Mississippi",
                slug: "university-of-mississippi",
            },
            {
                name: "Centennial college",
                slug: "centennial-college",
            },
            {
                name: "Auburn University",
                slug: "auburn-university",
            },
        ],
    },
    {
        img: "/img/uk.jpg",
        name: "United Kingdom",
        slug: "uk",
        schools: [
            {
                name: "University of Worcester",
                slug: "university-of-worcester",
            },
            {
                name: "St Mary's University London",
                slug: "st-marys-university-london",
            },
            {
                name: "The University for the Creative Arts",
                slug: "the-university-for-the-creative-arts",
            },
            {
                name: "University of Bedfordshire",
                slug: "university-of-bedfordshire",
            },
            {
                name: "University of Chichester",
                slug: "university-of-chichester",
            },
            {
                name: "University of West bristol",
                slug: "university-of-west-bristol",
            },
            {
                name: "University of Portsmouth",
                slug: "university-of-portsmouth",
            },
            {
                name: "University of Bournemouth",
                slug: "university-of-bournemouth",
            },
            {
                name: "University of Exeter",
                slug: "university-of-exeter",
            },
            {
                name: "University of Sussex",
                slug: "university-of-sussex",
            },
            {
                name: "University of Law",
                slug: "university-of-law",
            },
            {
                name: "University of Dundee",
                slug: "university-of-dundee",
            },
            {
                name: "University of Aston",
                slug: "university-of-aston",
            },
            {
                name: "City University of London",
                slug: "city-university-of-london",
            },
            {
                name: "University of Brighton",
                slug: "university-of-brighton",
            },
            {
                name: "Manchester Metropolitan University",
                slug: "manchester-metropolitan-university",
            },
            {
                name: "Goldsmith University of London",
                slug: "goldsmith-university-of-london",
            },
            {
                name: "University of Essex",
                slug: "university-of-essex",
            },
            {
                name: "University of Liverpool",
                slug: "university-of-liverpool",
            },
            {
                name: "Teesside University",
                slug: "teesside-university",
            },
            {
                name: "University of Reading",
                slug: "university-of-reading",
            },
            {
                name: "Coventry University",
                slug: "coventry-university",
            },
        ],
    },
    {
        img: "/img/canada.webp",
        name: "Canada",
        slug: "canada",
        schools: [
            {
                name: "Georgia college",
                slug: "georgia-college",
            },
            {
                name: "Toronto Metropolitan University",
                slug: "toronto-metropolitan-university",
            },
            {
                name: "Fashawe college of Applied Arts and Technology",
                slug: "fashawe-college-of-applied-arts-and-technology",
            },
            {
                name: "Brock University",
                slug: "brock-university",
            },
            {
                name: "LaSalle college Montreal",
                slug: "lasalle-college-montreal",
            },
            {
                name: "St Mary's University Canada",
                slug: "st-marys-university-canada",
            },
            {
                name: "Mount Allison University",
                slug: "mount-allison-university",
            },
            {
                name: "Durham college",
                slug: "durham-college",
            },
            {
                name: "Coast mountain college",
                slug: "coast-mountain-college",
            },
            {
                name: "Great plain college",
                slug: "great-plain-college",
            },
            {
                name: "Centennial college",
                slug: "centennial-college",
            },
            {
                name: "Conestoga college",
                slug: "conestoga-college",
            },
            {
                name: "Lakeland college",
                slug: "lakeland-college",
            },
            {
                name: "Niagara college Toronto",
                slug: "niagara-college-toronto",
            },
            {
                name: "Fraser international College",
                slug: "fraser-international-college",
            },
            {
                name: "Durham college",
                slug: "durham-college",
            },
            {
                name: "Great plain college",
                slug: "great-plain-college",
            },
            {
                name: "Mount Saint college",
                slug: "mount-saint-college",
            },
            {
                name: "Canadore college",
                slug: "canadore-college",
            },
            {
                name: "International college of Manitoba",
                slug: "international-college-of-manitoba",
            },
            {
                name: "University of Regina",
                slug: "university-of-regina",
            },
            {
                name: "Canadian college of technology and business",
                slug: "canadian-college-of-technology-and-business",
            },
            {
                name: "Nipssing University",
                slug: "nipssing-university",
            },
            {
                name: "Sault college",
                slug: "sault-college",
            },
            {
                name: "Algonquin college",
                slug: "algonquin-college",
            },
            {
                name: "Royal Road University",
                slug: "royal-road-university",
            },
            {
                name: "Seneca college",
                slug: "seneca-college",
            },
            {
                name: "Alexander college",
                slug: "alexander-college",
            },
            {
                name: "George Brown college",
                slug: "george-brown-college",
            },
            {
                name: "Cape Breton University",
                slug: "cape-breton-university",
            },
            {
                name: "Tent University",
                slug: "tent-university",
            },
            {
                name: "St Lawrence college",
                slug: "st-lawrence-college",
            },
            {
                name: "Capitolano University",
                slug: "capitolano-university",
            },
            {
                name: "University of Canada west",
                slug: "university-of-canada-west",
            },
            {
                name: "Crandall University",
                slug: "crandall-university",
            },
            {
                name: "Saskatchewan polytechnic",
                slug: "saskatchewan-polytechnic",
            },
            {
                name: "Adler University",
                slug: "adler-university",
            },
            {
                name: "Lambton college",
                slug: "lambton-college",
            },
            {
                name: "Sheridan college",
                slug: "sheridan-college",
            },
        ],
    },
    {
        img: "/img/ireland.jpg",
        name: "Ireland",
        slug: "ireland",
        schools: [
            {
                name: "Technological University of the Shannon",
                slug: "technological-university-of-the-shannon",
            },
            {
                name: "Dublin Business School",
                slug: "dublin-business-school",
            },
            {
                name: "Griffith College",
                slug: "griffith-college",
            },
            {
                name: "University of Maynooth",
                slug: "university-of-maynooth",
            },
            {
                name: "University of Galway",
                slug: "university-of-galway",
            },
            {
                name: "Dublin City University",
                slug: "dublin-city-university",
            },
            {
                name: "University of Limerick",
                slug: "university-of-limerick",
            },
            {
                name: "Trinity College Dublin",
                slug: "trinity-college-dublin",
            },
            {
                name: "Shannon college of Hotel Management",
                slug: "shannon-college-of-hotel-management",
            },
            {
                name: "TU, Dublin (Dublin Institute of Technology and TU Blanchard's town",
                slug: "tu-dublin",
            },
            {
                name: "University college cork",
                slug: "university-college-cork",
            },
        ],
    },
    {
        img: "/img/australia.jpg",
        name: "Australia",
        slug: "australia",
        schools: [
            {
                name: "International College of Management",
                slug: "international-college-of-management",
            },
            {
                name: "Edith Cowan University",
                slug: "edith-cowan-university",
            },
            {
                name: "Charles Darwin University",
                slug: "charles-darwin-university",
            },
            {
                name: "Central Queensland University",
                slug: "central-queensland-university",
            },
        ],
    },
    {
        img: "/img/New-Zealand.webp",
        name: "New Zealand",
        slug: "new-zealand",
        schools: [
            {
                name: "Auckland University of Technology",
                slug: "auckland-university-of-technology",
            },
            {
                name: "Victoria University of Wellington",
                slug: "victoria-university-of-wellington",
            },
            {
                name: "National Technology Institute NTEC",
                slug: "national-technology-institute-ntec",
            },
            {
                name: "Southern Institute of Technology",
                slug: "southern-institute-of-technology",
            },
            {
                name: "Whitireia WelTec",
                slug: "whitireia-weltec",
            },
            {
                name: "Auckland Institute of Technology",
                slug: "auckland-institute-of-technology",
            },
            {
                name: "Auckland Institute of Studies UG and Diplomas",
                slug: "auckland-institute-of-studies-ug-and-diplomas",
            },
            {
                name: "Ara Institute of Canterbury",
                slug: "ara-institute-of-canterbury",
            },
            {
                name: "Unitec Institute of Technology",
                slug: "unitec-institute-of-technology",
            },
            {
                name: "Pacific International Hotel Management School",
                slug: "pacific-international-hotel-management-school",
            },
            {
                name: "New Zealand Tertiary College",
                slug: "new-zealand-tertiary-college",
            },
            {
                name: "Institute of Pacific United",
                slug: "institute-of-pacific-united",
            },
        ],
    },
];

export const featureSchools = [
    {
        img: "/img/alabama.webp",
        name: "University of Alabama",
        country: "usa",
        slug: "university-of-alabam",
    },
    {
        img: "/img/illiniosis.webp",
        name: "Illinois institute of technology",
        country: "usa",
        slug: "illinois-institute-of-technology",
    },
    {
        img: "/img/st-mary.webp",
        name: "St Mary's University London",
        country: "uk",
        slug: "st-mary-university-london",
    },
    {
        img: "/img/portsmouth.webp",
        country: "uk",
        name: "University of Portsmouth",
        slug: "university-of-portsmouth",
    },
    {
        img: "/img/toronto.webp",
        name: "Toronto Metropolitan University",
        country: "canada",
        slug: "toronto-metropolitan-university",
    },
    {
        img: "/img/dublin.webp",
        name: "Dublin City University",
        country: "ireland",
        slug: "dublin-city-university",
    },
];
