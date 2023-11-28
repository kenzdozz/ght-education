export interface ISchool {
  name: string;
  slug: string;
}

export interface ICountry {
  img: string;
  slug: string;
  name: string;
  description: string;
  schools: ISchool[];
}

export interface IFeaturedCountry {
  img: string;
  slug: string;
  name: string;
  description: string;
}

export interface ICountryText {
  universities: string[];
  fees: string[];
  admission: string[];
  life: string[];
}

export const STUDY_COUNTRIES: ICountry[] = [
  {
    img: '/img/usa.webp',
    name: 'United States of America',
    slug: 'usa',
    description:
      'Exceptional education, inclusive culture. Renowned for excellence, inviting global students to explore diverse opportunities in a welcoming environment.',
    schools: [
      {
        name: 'American University',
        slug: 'american-university',
      },
      {
        name: 'University of Alabama',
        slug: 'university-of-alabam',
      },
      {
        name: 'Pace University',
        slug: 'pace-university',
      },
      {
        name: 'University of the Pacific',
        slug: 'university-of-the-pacific',
      },
      {
        name: 'Illinois institute of technology',
        slug: 'illinois-institute-of-technology',
      },
      {
        name: 'Trent University',
        slug: 'trent-university',
      },
      {
        name: 'University of Dayton',
        slug: 'university-of-dayton',
      },
      {
        name: 'California Lutheran University',
        slug: 'california-lutheran-university',
      },
      {
        name: 'Baylor University (Post graduate)',
        slug: 'baylor-university',
      },
      {
        name: 'University of Windsor',
        slug: 'university-of-windsor',
      },
      {
        name: 'Cleveland state university',
        slug: 'cleveland-state-university',
      },
      {
        name: 'University of south Carolina',
        slug: 'university-of-south-carolina',
      },
      {
        name: 'Arizona state university',
        slug: 'arizona-state-university',
      },
      {
        name: 'Texas A&M University',
        slug: 'texas-a&m university',
      },
      {
        name: 'DePaul University',
        slug: 'depaul-university',
      },
      {
        name: 'Auburn University',
        slug: 'auburn-university',
      },
      {
        name: 'University of Mississippi',
        slug: 'university-of-mississippi',
      },
      {
        name: 'Centennial college',
        slug: 'centennial-college',
      },
      {
        name: 'Auburn University',
        slug: 'auburn-university',
      },
    ],
  },
  {
    img: '/img/uk.jpg',
    name: 'United Kingdom',
    slug: 'uk',
    description:
      'A global education hub with top-tier universities and rich cultural experiences, offering academic excellence and diverse opportunities for international students.',
    schools: [
      {
        name: 'University of Worcester',
        slug: 'university-of-worcester',
      },
      {
        name: "St Mary's University London",
        slug: 'st-marys-university-london',
      },
      {
        name: 'The University for the Creative Arts',
        slug: 'the-university-for-the-creative-arts',
      },
      {
        name: 'University of Bedfordshire',
        slug: 'university-of-bedfordshire',
      },
      {
        name: 'University of Chichester',
        slug: 'university-of-chichester',
      },
      {
        name: 'University of West bristol',
        slug: 'university-of-west-bristol',
      },
      {
        name: 'University of Portsmouth',
        slug: 'university-of-portsmouth',
      },
      {
        name: 'University of Bournemouth',
        slug: 'university-of-bournemouth',
      },
      {
        name: 'University of Exeter',
        slug: 'university-of-exeter',
      },
      {
        name: 'University of Sussex',
        slug: 'university-of-sussex',
      },
      {
        name: 'University of Law',
        slug: 'university-of-law',
      },
      {
        name: 'University of Dundee',
        slug: 'university-of-dundee',
      },
      {
        name: 'University of Aston',
        slug: 'university-of-aston',
      },
      {
        name: 'City University of London',
        slug: 'city-university-of-london',
      },
      {
        name: 'University of Brighton',
        slug: 'university-of-brighton',
      },
      {
        name: 'Manchester Metropolitan University',
        slug: 'manchester-metropolitan-university',
      },
      {
        name: 'Goldsmith University of London',
        slug: 'goldsmith-university-of-london',
      },
      {
        name: 'University of Essex',
        slug: 'university-of-essex',
      },
      {
        name: 'University of Liverpool',
        slug: 'university-of-liverpool',
      },
      {
        name: 'Teesside University',
        slug: 'teesside-university',
      },
      {
        name: 'University of Reading',
        slug: 'university-of-reading',
      },
      {
        name: 'Coventry University',
        slug: 'coventry-university',
      },
    ],
  },
  {
    img: '/img/canada.webp',
    name: 'Canada',
    slug: 'canada',
    description:
      'Exceptional education, inclusive culture. Renowned for excellence, inviting global students to explore diverse opportunities in a welcoming environment.',
    schools: [
      {
        name: 'Georgia college',
        slug: 'georgia-college',
      },
      {
        name: 'Toronto Metropolitan University',
        slug: 'toronto-metropolitan-university',
      },
      {
        name: 'Fashawe college of Applied Arts and Technology',
        slug: 'fashawe-college-of-applied-arts-and-technology',
      },
      {
        name: 'Brock University',
        slug: 'brock-university',
      },
      {
        name: 'LaSalle college Montreal',
        slug: 'lasalle-college-montreal',
      },
      {
        name: "St Mary's University Canada",
        slug: 'st-marys-university-canada',
      },
      {
        name: 'Mount Allison University',
        slug: 'mount-allison-university',
      },
      {
        name: 'Durham college',
        slug: 'durham-college',
      },
      {
        name: 'Coast mountain college',
        slug: 'coast-mountain-college',
      },
      {
        name: 'Great plain college',
        slug: 'great-plain-college',
      },
      {
        name: 'Centennial college',
        slug: 'centennial-college',
      },
      {
        name: 'Conestoga college',
        slug: 'conestoga-college',
      },
      {
        name: 'Lakeland college',
        slug: 'lakeland-college',
      },
      {
        name: 'Niagara college Toronto',
        slug: 'niagara-college-toronto',
      },
      {
        name: 'Fraser international College',
        slug: 'fraser-international-college',
      },
      {
        name: 'Durham college',
        slug: 'durham-college',
      },
      {
        name: 'Great plain college',
        slug: 'great-plain-college',
      },
      {
        name: 'Mount Saint college',
        slug: 'mount-saint-college',
      },
      {
        name: 'Canadore college',
        slug: 'canadore-college',
      },
      {
        name: 'International college of Manitoba',
        slug: 'international-college-of-manitoba',
      },
      {
        name: 'University of Regina',
        slug: 'university-of-regina',
      },
      {
        name: 'Canadian college of technology and business',
        slug: 'canadian-college-of-technology-and-business',
      },
      {
        name: 'Nipssing University',
        slug: 'nipssing-university',
      },
      {
        name: 'Sault college',
        slug: 'sault-college',
      },
      {
        name: 'Algonquin college',
        slug: 'algonquin-college',
      },
      {
        name: 'Royal Road University',
        slug: 'royal-road-university',
      },
      {
        name: 'Seneca college',
        slug: 'seneca-college',
      },
      {
        name: 'Alexander college',
        slug: 'alexander-college',
      },
      {
        name: 'George Brown college',
        slug: 'george-brown-college',
      },
      {
        name: 'Cape Breton University',
        slug: 'cape-breton-university',
      },
      {
        name: 'Tent University',
        slug: 'tent-university',
      },
      {
        name: 'St Lawrence college',
        slug: 'st-lawrence-college',
      },
      {
        name: 'Capitolano University',
        slug: 'capitolano-university',
      },
      {
        name: 'University of Canada west',
        slug: 'university-of-canada-west',
      },
      {
        name: 'Crandall University',
        slug: 'crandall-university',
      },
      {
        name: 'Saskatchewan polytechnic',
        slug: 'saskatchewan-polytechnic',
      },
      {
        name: 'Adler University',
        slug: 'adler-university',
      },
      {
        name: 'Lambton college',
        slug: 'lambton-college',
      },
      {
        name: 'Sheridan college',
        slug: 'sheridan-college',
      },
    ],
  },
  {
    img: '/img/ireland.webp',
    name: 'Ireland',
    slug: 'ireland',
    description:
      "Educational excellence, amidst rich cultural tapestry. Discover academic brilliance intertwined with cultural immersion in Ireland's vibrant university landscape.",
    schools: [
      {
        name: 'Technological University of the Shannon',
        slug: 'technological-university-of-the-shannon',
      },
      {
        name: 'Dublin Business School',
        slug: 'dublin-business-school',
      },
      {
        name: 'Griffith College',
        slug: 'griffith-college',
      },
      {
        name: 'University of Maynooth',
        slug: 'university-of-maynooth',
      },
      {
        name: 'University of Galway',
        slug: 'university-of-galway',
      },
      {
        name: 'Dublin City University',
        slug: 'dublin-city-university',
      },
      {
        name: 'University of Limerick',
        slug: 'university-of-limerick',
      },
      {
        name: 'Trinity College Dublin',
        slug: 'trinity-college-dublin',
      },
      {
        name: 'Shannon college of Hotel Management',
        slug: 'shannon-college-of-hotel-management',
      },
      {
        name: "TU, Dublin (Dublin Institute of Technology and TU Blanchard's town",
        slug: 'tu-dublin',
      },
      {
        name: 'University college cork',
        slug: 'university-college-cork',
      },
    ],
  },
  {
    img: '/img/australia.webp',
    name: 'Australia',
    slug: 'australia',
    description:
      "Experience academic diversity and vibrant culture in Australia's universities. Discover excellence in Australia's diverse academic settings.",
    schools: [
      {
        name: 'International College of Management',
        slug: 'international-college-of-management',
      },
      {
        name: 'Edith Cowan University',
        slug: 'edith-cowan-university',
      },
      {
        name: 'Charles Darwin University',
        slug: 'charles-darwin-university',
      },
      {
        name: 'Central Queensland University',
        slug: 'central-queensland-university',
      },
    ],
  },
  {
    img: '/img/New-Zealand.webp',
    name: 'New Zealand',
    slug: 'new-zealand',
    description:
      "Discover academic excellence amidst New Zealand's scenic beauty. Experience quality education and diverse culture in New Zealand.",
    schools: [
      {
        name: 'Auckland University of Technology',
        slug: 'auckland-university-of-technology',
      },
      {
        name: 'Victoria University of Wellington',
        slug: 'victoria-university-of-wellington',
      },
      {
        name: 'National Technology Institute NTEC',
        slug: 'national-technology-institute-ntec',
      },
      {
        name: 'Southern Institute of Technology',
        slug: 'southern-institute-of-technology',
      },
      {
        name: 'Whitireia WelTec',
        slug: 'whitireia-weltec',
      },
      {
        name: 'Auckland Institute of Technology',
        slug: 'auckland-institute-of-technology',
      },
      {
        name: 'Auckland Institute of Studies UG and Diplomas',
        slug: 'auckland-institute-of-studies-ug-and-diplomas',
      },
      {
        name: 'Ara Institute of Canterbury',
        slug: 'ara-institute-of-canterbury',
      },
      {
        name: 'Unitec Institute of Technology',
        slug: 'unitec-institute-of-technology',
      },
      {
        name: 'Pacific International Hotel Management School',
        slug: 'pacific-international-hotel-management-school',
      },
      {
        name: 'New Zealand Tertiary College',
        slug: 'new-zealand-tertiary-college',
      },
      {
        name: 'Institute of Pacific United',
        slug: 'institute-of-pacific-united',
      },
    ],
  },
];

export const FEATURED_COUNTRIES: IFeaturedCountry[] = [
  {
    img: '/img/usa.webp',
    name: 'United States of America',
    description:
      'A global education leader, renowned for top universities and diverse opportunities, inviting students to explore academic excellence and innovation.',
    slug: 'usa',
  },
  {
    img: '/img/canada.webp',
    name: 'Canada',
    description:
      'Exceptional education, inclusive culture. Renowned for excellence, inviting global students to explore diverse opportunities in a welcoming environment.',
    slug: 'canada',
  },
  {
    img: '/img/uk.jpg',
    name: 'United Kingdom',
    description:
      'A global education hub with top-tier universities and rich cultural experiences, offering academic excellence and diverse opportunities for international students.',
    slug: 'uk',
  },
];

export const COUNTRY_PAGE_TEXT: Record<string, ICountryText> = {
  usa: {
    universities: [
      'The United States stands as a beacon of higher education, boasting a vast spectrum of prestigious universities and an unparalleled diversity of courses. The academic landscape offers an extensive array of programs spanning engineering, business, liberal arts, sciences, medicine, technology, and beyond.',
      'The country’s commitment to innovation and academic excellence presents students with unparalleled opportunities to tailor their educational journey through diverse majors, minors, and interdisciplinary studies.',
    ],
    fees: [
      'Tuition Fees: Tuition costs in the United States vary by institution and program, ranging from $20,000 to $60,000 annually for undergraduate and graduate studies. Scholarships and financial aid options are available for international students, helping alleviate tuition expenses.',
      'Financial Support: Various scholarships, grants, and assistantships exist for international students based on merit, need, and specific criteria. Additionally, external scholarships from organizations and government entities are accessible.',
      'Cost of Living: Living expenses range from $15,000 to $25,000 per year, varying by location and lifestyle. Larger cities tend to have higher costs, encompassing accommodation, food, transportation, and miscellaneous expenses.',
      'Our guidance assists students in navigating scholarships, understanding financial aid options, and managing living expenses for a financially feasible educational journey in the US.',
    ],
    admission: [
      "Personalized Consultation: We start by understanding each student's aspirations and academic background, offering tailored advice to select suitable universities and programs aligned with their goals.",
      'Application Support: Our team assists in crafting standout applications, aiding in document preparation, ensuring clarity and relevance in transcripts, resumes, recommendation letters, and personal statements.',
      'Test Preparation: We provide specialized resources and guidance for standardized tests like SAT, ACT, GRE, or TOEFL, empowering students to excel in these assessments.',
      'Visa Assistance: Post-acceptance, our support extends to navigating the visa application process, providing guidance, and preparing students for a seamless transition to studying in the US.',
      'Our focused approach aims to simplify the admission process, empowering students to present compelling applications and embark on a successful academic journey in the United States.',
    ],
    life: [
      'Campus Engagement: US universities offer vibrant campus cultures with diverse clubs and activities fostering community and personal growth.',
      'Career Development: Ample internship opportunities and research initiatives complement studies, enhancing practical skills and career prospects.',
      'Cultural Exploration: Students immerse in American culture, exploring landmarks, festivals, and cuisines, experiencing the country’s diverse landscape and vibrant cities.',
      'Employment Pathways: Post-graduation work options like OPT and CPT provide valuable work experience in students’ fields of study.',
      'Support Services: Universities prioritize student support, offering resources from academic advising to healthcare, ensuring a well-rounded educational journey.',
      'The United States offers a dynamic environment, blending academic excellence with diverse cultural experiences, fostering personal and professional growth for students.',
    ],
  },
  uk: {
    universities: [
      "The United Kingdom is recognized for its diverse range of academic opportunities spanning engineering, business, sciences, arts, law, medicine, and technology. Offering a flexible academic framework, students can tailor their programs, exploring specialized fields or pursuing interdisciplinary studies. Emphasizing practical learning methodologies, the UK's educational approach equips students with versatile skills.",
      "Moreover, the multicultural ambiance within these institutions nurtures a global mindset among students, preparing them for an interconnected world. The UK's educational landscape, characterized by diverse disciplines, practical learning avenues, and a culturally rich environment, offers students a transformative academic experience fostering global competence and cultural awareness.",
    ],
    fees: [
      'Tuition Fees: Tuition fees in the UK vary by program and institution, ranging from £10,000 to £40,000 annually for undergraduate and postgraduate courses. Scholarships and financial aid are available to alleviate the financial burden for international students.',
      'Scholarship Opportunities: Diverse scholarships reward academic excellence and specific talents, covering tuition or living expenses, easing the financial strain on students pursuing higher education in the UK.',
      'Cost of Living: On average, students can expect living expenses of about £12,500 or £9,500 per year inside London or outside London respectively. Financial management guidance is provided, aiding students in budgeting and navigating accommodation choices.',
      'Our support extends to financial advice, including part-time job opportunities, to ensure students effectively manage their expenses while enjoying a fulfilling educational experience in the UK.',
    ],
    admission: [
      "University Selection: Our guidance begins with personalized consultations to understand each student's academic goals and preferences. We assist in identifying suitable universities and programs, ensuring alignment with their aspirations and academic strengths.",
      "Application Preparation: Crafting a compelling application is pivotal. Our experts provide comprehensive support in preparing application materials, including transcripts, recommendation letters, and personal statements. We focus on showcasing students' unique qualities and achievements, enhancing their candidacy.",
      "Deadline Management: Timely submissions are critical. We diligently manage application deadlines, ensuring adherence and meticulous completion of all required documents, optimizing students' chances of acceptance.",
      'Interview Preparation: For universities requiring interviews, we offer guidance and mock interview sessions, equipping students with confidence and readiness to ace their admissions interviews.',
      'Visa Assistance: Post-acceptance, our support extends to navigating the visa application process. We provide comprehensive guidance, clarifying documentation requirements and ensuring a smooth transition to studying in the UK.',
    ],
    life: [
      'Cultural Fusion: The UK offers a diverse cultural experience, fostering global connections and broadening perspectives through its rich history and vibrant cities.',
      'Student Engagement: Thriving on vibrant student life, UK universities offer diverse clubs, societies, and career development opportunities, encouraging personal growth and skill enhancement.',
      "Cultural Events: Engage in the UK's dynamic cultural calendar, from music festivals to seasonal celebrations, and explore its captivating landscapes and historic landmarks.",
      'Travel Opportunities: With its strategic location, students have easy access to Europe and can explore nearby destinations, making the most of breaks and weekends.',
    ],
  },
  canada: {
    universities: [
      "Canada's educational landscape offers a range of institutions providing courses in sciences, engineering, business, arts, healthcare, and technology. Universities prioritize innovative programs that blend theoretical learning with practical experiences, enhancing students' skills and employability.",
      "Canada's higher education system is globally acclaimed for its quality and multicultural environment, attracting students seeking a world-class education and diverse cultural exposure.",
    ],
    fees: [
      'Tuition Fees: Tuition fees in Canada vary based on the institution and program. Undergraduate fees typically range from CAD 15,000 to CAD 35,000 yearly, while postgraduate fees span CAD 7,000 to CAD 45,000 annually.',
      'Financial Support: Scholarships, grants, and financial aid options are available for international students, encouraging academic excellence and assisting with tuition or living expenses.',
      'Living Expenses: The cost of living varies across Canada. On average, students allocate around CAD 10,000 to CAD 15,000 per year for accommodation, food, transport, and other expenses.',
    ],
    admission: [
      "Tailored Support: We provide personalized consultations to align students' academic aspirations with suitable institutions and assist in preparing compelling applications, enhancing their chances of acceptance.",
      'Visa Assistance: Our support extends to guiding students through the visa application process, ensuring compliance and a smooth transition to studying in Canada.',
    ],
    life: [
      "Cultural Diversity: Canada's inclusive environment fosters cultural diversity, allowing students to engage in diverse experiences and create global connections.",
      'Student Life: Vibrant student communities offer various clubs, sports, and social activities, providing ample opportunities for personal growth and skill development.',
      "Outdoor Adventures: Canada's breathtaking landscapes offer outdoor activities, from exploring national parks to enjoying seasonal sports, allowing students to experience the country's natural beauty.",
    ],
  },
  australia: {
    universities: [
      'Australia offers diverse educational opportunities across various institutions. Universities provide courses spanning sciences, engineering, business, arts, healthcare, and technology, emphasizing practical learning and industry relevance.',
      "Innovative Programs: Australian universities focus on innovative programs, integrating theoretical knowledge with practical experiences. These programs enhance students' skills and prepare them for a competitive global landscape.",
    ],
    fees: [
      'Tuition Fees: Tuition fees in Australia vary depending on the institution and program. On average, undergraduate fees range from AUD 20,000 to AUD 45,000 annually, while postgraduate fees span AUD 22,000 to AUD 50,000 per year.',
      'Financial Support: Australia offers various scholarships, grants, and financial aid options for international students, encouraging academic excellence and supporting living expenses.',
      'Cost of Living: The cost of living in Australia varies across regions. Students generally allocate approximately AUD 18,000 to AUD 25,000 per year for accommodation, food, transport, and other expenses.',
    ],
    admission: [
      'Personalized Assistance: Our personalized approach assists students in selecting suitable institutions, ensuring alignment with their academic goals. We offer guidance throughout the application process, enhancing their chances of acceptance.',
      "Application Support: Crafting persuasive applications is crucial. We provide comprehensive support in preparing documents, refining applications, and meeting deadlines, maximizing students' chances of securing admission.",
      'Visa Guidance: Our support extends to navigating the visa application process, ensuring compliance and a smooth transition for students heading to Australia.',
    ],
    life: [
      "Cultural Diversity: Australia's inclusive society celebrates cultural diversity, providing an enriching environment for international students to interact and embrace various cultures.",
      'Student Experience: Australian universities offer vibrant student life with numerous clubs, societies, and extracurricular activities, promoting personal growth and fostering lifelong friendships.',
      "Natural Beauty & Recreation: The country's diverse landscapes offer outdoor adventures, from pristine beaches to scenic hikes, providing students with recreational opportunities amidst natural beauty.",
    ],
  },
  ireland: {
    universities: [
      "Ireland's educational institutions offer diverse courses across multiple fields, including sciences, engineering, business, arts, healthcare, and technology. Universities focus on quality education and research-driven programs.",
      'Innovative Learning: Irish universities emphasize innovative teaching methods, incorporating practical experiences into their curriculum. Students benefit from programs that enhance critical thinking and skill development.',
    ],
    fees: [
      'Tuition Fees: Tuition fees in Ireland vary based on the institution and program. On average, undergraduate fees range from EUR 10,000 to EUR 25,000 yearly, while postgraduate fees span EUR 10,000 to EUR 30,000 annually.',
      'Financial Aid: Ireland offers scholarships, grants, and financial aid for international students, supporting academic achievements and contributing to living expenses.',
      'Cost of Living: The cost of living in Ireland depends on the region. Students generally allocate approximately EUR 8,000 to EUR 12,000 per year for accommodation, food, transport, and other expenses.',
    ],
    admission: [
      'Consultative Approach: Our tailored consultations help students select suitable institutions aligned with their academic aspirations. We guide them through the application process, ensuring a thorough and compelling presentation of their candidacy.',
      "Application Support: We offer comprehensive assistance in application preparation, refining documents, and meeting deadlines to increase students' chances of admission.",
      'Visa Guidance: Our support extends to visa application guidance, ensuring students navigate the process seamlessly and prepare for their educational journey in Ireland.',
    ],
    life: [
      "Cultural Immersion: Ireland's rich cultural heritage provides a unique experience for students, offering a blend of tradition and modernity. The country's inclusive atmosphere fosters cultural exchange and community engagement.",
      'Student Life: Irish universities provide active student communities with clubs, societies, and extracurricular activities, allowing students to engage, learn, and grow beyond the classroom.',
      "Natural Beauty & Recreation: Ireland's scenic landscapes and historic sites offer opportunities for outdoor activities and exploration, enriching students' experiences with its natural beauty and cultural history.",
    ],
  },
  'new-zealand': {
    universities: [
      'New Zealand offers a diverse range of institutions providing courses in sciences, engineering, business, arts, healthcare, and technology. The universities prioritize quality education and practical learning experiences.',
      'Innovative Learning Environment: New Zealand universities focus on fostering innovation and critical thinking, offering programs that integrate theory with hands-on learning, preparing students for real-world challenges.',
    ],
    fees: [
      'Tuition Fees: Tuition fees in New Zealand vary depending on the institution and program. On average, undergraduate fees range from NZD 22,000 to NZD 32,000 annually, while postgraduate fees span NZD 25,000 to NZD 40,000 per year.',
      'Financial Assistance: New Zealand provides scholarships, grants, and financial aid for international students, encouraging academic excellence and easing financial constraints.',
      'Cost of Living: The cost of living in New Zealand varies by location. Students typically budget around NZD 15,000 to NZD 20,000 per year for accommodation, food, transport, and personal expenses.',
    ],
    admission: [
      'Guidance and Consultation: Our tailored consultations assist students in selecting suitable institutions aligned with their academic aspirations. We offer comprehensive guidance throughout the application process.',
      'Application Support: We provide extensive support in preparing applications, refining documents, and meeting deadlines, ensuring students present their best selves to enhance their chances of acceptance.',
      'Visa Assistance: Our support extends to visa application guidance, ensuring compliance with requirements and facilitating a smooth transition for students heading to New Zealand.',
    ],
    life: [
      "Cultural Experience: New Zealand's inclusive society embraces cultural diversity, offering students an immersive experience and fostering global connections.",
      'Student Engagement: Universities in New Zealand promote student engagement through clubs, societies, and extracurricular activities, fostering personal growth and skill development.',
      "Natural Wonders & Recreation: New Zealand's stunning landscapes provide opportunities for outdoor adventures, from exploring mountains to enjoying beaches, offering students a range of recreational experiences.",
    ],
  },
};
