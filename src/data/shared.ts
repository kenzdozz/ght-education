import { SVGIconName } from '@/types';

export const NAV_MENU_ITEMS = [
  {
    title: 'Study Abroad',
    url: '/study-abroad',
    subNav: [
      {
        title: 'Study in USA',
        url: 'usa',
      },
      {
        title: 'Study in UK',
        url: 'uk',
      },
      {
        title: 'Study in Canada',
        url: 'canada',
      },
      {
        title: 'Study in Ireland',
        url: 'ireland',
      },
      {
        title: 'Study in Australia',
        url: 'australia',
      },
      {
        title: 'Study in New Zealand',
        url: 'new-zealand',
      },
    ],
  },
  {
    title: 'Our Services',
    url: '/services',
  },
  {
    title: 'About Us',
    url: '/about',
  },
  {
    title: 'FAQs',
    url: '/faqs',
  },
  {
    title: 'Contact Us',
    url: '/contact',
  },
];

export const sideBarMenuItems = [
  { name: 'Countries', url: '/studies/countries' },
  { name: 'Schools', url: '/studies/schools' },
  { name: 'Our Services', url: '/services' },
  { name: 'Who We Are', url: '/about/story' },
  { name: 'Our Team', url: '/about/teams' },
  { name: 'Faqs', url: '/faqs' },
  { name: 'Contact', url: '/contact' },
];

export interface IServiceStep {
  id: number;
  head: string;
  title: string;
  description: string;
  img: string;
  btnText: string;
}

export const SERVICES_STEPS: IServiceStep[] = [
  {
    id: 1,
    head: 'Admission',
    title: 'Admission Assistance',
    description:
      'We offer personalized support for students of varied academic backgrounds, ensuring fair access to top institutions worldwide. Our tailored guidance and representation empower students, including those with lower academic standings, to secure admissions confidently. Leveraging our network, we navigate the complexities of the process, providing strategic aid and meticulous preparation for successful placements in esteemed educational institutions.',
    img: '/img/woman.webp',
    btnText: 'Get Admitted',
  },
  {
    id: 2,
    head: 'Visa',
    title: 'Visa Consultation & Counseling',
    description:
      "Our Visa Consultation & Counseling service provides personalized guidance for diverse visa applications. With expertise in documentation and interviews, we assist step-by-step through the process. We're dedicated to avoiding visa refusals and ensuring fair representation for genuine applicants. Committed to professionalism, we empower clients with confidence during their visa journey.",
    img: '/img/counseling.webp',
    btnText: 'Get Consultation',
  },
  {
    id: 3,
    head: 'Travel',
    title: 'Travel & Stay',
    description:
      'We provide assistance that covers comprehensive support for a seamless transition abroad. We facilitate travel logistics, including flight bookings and documentation, while securing suitable accommodations tailored to individual preferences. Additionally, we provide valuable insights into local culture and regulations, ensuring a comfortable and stress-free stay to focus on academic or professional pursuits.',
    img: '/img/travel.webp',
    btnText: 'Plan Journey',
  },
];

export const FOOTER_LINKS = [
  {
    name: 'Study Abroad',
    url: '/study-abroad',
  },

  {
    name: 'Our Services',
    url: '/services',
  },
  {
    name: 'About us',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
  {
    name: 'FAQs',
    url: '/faqs',
  },
];

export const FAQ_ITEMS = [
  {
    title: 'I Am Interested In Studying Abroad But Wish To Know The Available Programs?',
    text: "Based on your current education, financial status and test scores, our team of experts would be able to clearly suggest what program is best suited for you. Programs are available in variety of contexts ranging from foundation, Diploma, Certificate, Associate degree, Bachelor's degree, PGD, Master's Degree, and PhD etc.",
  },
  {
    title: 'Is There Age Restriction, Or Can I Regardless Of My Age Enroll Into Any Program?',
    text: 'No, there is age limitation. If you are applying for an undergraduate program, you will have to fall within the age bracket of 16-30 years. Post Graduate applicants are expected to fall within the age bracket of 30-40 years. However, there are exceptions, when you contact us we will make proper assessment and offer professional advice.',
  },
  {
    title:
      'I Have Graduated From High School Or University For More Than Five Years, Can I Still Be Considered For Admission?',
    text: 'Well, it depends. If you have graduated from high school/university for more than five years. You may need to explain what you have been doing since your graduation, and this must be accompanied with evidences such as letter of employment (that is if you have been working) or institutions you have attended over the years. Applicant whose year of graduation from high school or university is not more than 2-5 years from the date of application, is encouraged to apply without any hindrance or provision of additional documents. However, this depends on the study destination. You would need to explain what you have been doing during this period – working, time off etc. most times getting an admission would be based on your life experiences and how you sell them. We help write a winning admission letter that would clearly describe your situation and keep you informed on the supporting documents.',
  },
  {
    title: 'When Do I Apply?',
    text: 'Application is ongoing. You can start your enrollment process now for winter, summer and fall intakes. Since some programs require external exams to be considered for admission, we like to work early with our clients to avoid any last-minute disappointments/rush.',
  },
  {
    title:
      'I Intend To Apply For An Undergraduate Program, Do I Have To Undertake An Entrance Examination I.E JAMB, SAT, TOEFL, IELTS, PTE?',
    text: "There are specific requirements for different programs or countries. That's where we come in. We advise you based on your needs or current test scores. There are also some Schools that grant admission directly. You only need to apply for admission with either WAEC or NECO only, you can also present both WAEC and NECO together if you have both of them with copy of your passport data page (international passport).",
  },
  {
    title:
      'I Wish To Apply For Post-Graduate Program, Do I Have To Undertake Entrance Examinations Such As TOEFL, IELTS, GMAT, GRE?',
    text: 'No and Yes, for some countries admission is granted directly. You only need to provide your WAEC /NECO, Copy of your degree certificate, academic transcripts, Reference letter, statement of purpose, detailed CV together with the copy of your passport data page (international passport). While some countries may need the entrance examinations/ Interview to be taken. We help you throughout the entire process to meet the strict structures of certain universities.',
  },
  {
    title: 'Are There Opportunities To Engage In Part-Time Job While Studying?',
    text: "Sure, international students are allowed to work while studying. However, permission to work on campus or off campus is granted usually after 6 months or a year of studies, depending on students' academic performances, for some countries however, you can study and work at the commencement of your study. Students can work an average of stipulated hours per week. Jobs are available on and off campus.",
  },
  {
    title: 'How Do I Apply For My Visa?',
    text: 'Visa application is submitted to relevant embassies, but is considered only when admission is officially granted to students. At GlobalHT Education, we offer second-to-none visa consultation/supports to ensure visa application turns out successful! To apply for visa, applicant must have to demonstrate that he or she has sufficient means of subsistence. Applicant will have to provide supporting documents joined with admission/acceptance letter issued by accredited university of concerned country, to apply for a visa.',
  },
  {
    title: 'I Have Been Granted Visa, What Are The Next Steps To Take?',
    text: "We don't leave you behind. We hold your hands throughout the next processes even upon arrival to your destination country. The next step is to travel down to your study destination.",
  },
  {
    title: 'What Is The Cost Implication For Flight To My Country Of Destination?',
    text: 'Airline flight ticket is subject to numerous factors such as dates of travel, exchange rates and the airline company. In other words, ticket price is subject to availability. By determining your departure, return dates and airline preference well in advance will provide not only an avenue to get accurate airfares, but also cost- effective flight deals. You can contact our flight reservation, booking and ticketing department for further information.',
  },
  {
    title:
      "When I Arrive At My Study Destination, How Will I Locate The School, Since I Don't Have Any Relatives Or Friends There That Will Pick Me Up At The Airport?",
    text: "You don't have to be anxious about that, one of our representatives will be sent to the airport awaiting your arrival provided you sent us your travel itinerary on time. Upon your arrival, he/she will welcome and receive you and thereafter take you to the school's international office where you will register and commence class leaps and bounds. Our past clients are also around to give you a hug and make you feel at home.",
  },
];

export const TESTIMONIALS = [
  {
    name: 'Julian',
    message:
      'Global HT Education has been instrumental in shaping my academic journey to Anglia Ruskin University in the UK. Their expertise, dedication, and personalized approach were evident from the start, making the entire process smooth and stress-free. Thank you, Global HT Education, for being the guiding force behind my academic achievements in the UK.',
    img: '/img/testimonials/julian.webp',
    id: 1,
  },
  {
    name: 'Chidi',
    message:
      'Choosing Global HT Education  as an agent was a game-changer for my academic journey to TUS Ireland. Their unparalleled dedication and expert guidance made the entire process, from course selection to settling in a new country, an absolute breeze. The team at Global HT Education went above and beyond, providing insightful advice, timely assistance with documentation, and unwavering support throughout. Their commitment to transparency and reliability is truly commendable. Thanks to their efforts, I graduated with distinction in my MSc program.',
    img: '/img/testimonials/chidi.webp',
    id: 2,
  },
  {
    name: 'Daniel',
    message:
      'The team at Global HT Education demonstrated exceptional professionalism and genuine care for my educational journey. Their expertise and seamless coordination made the transition to studying at TUS Ireland a seamless experience. I am truly grateful for their support and highly recommend Global HT Education to anyone seeking reliable assistance in pursuing education abroad. They are not just consultants; they are your dedicated consultant in shaping a successful academic future.',
    img: '/img/testimonials/daniel.webp',
    id: 3,
  },
  {
    name: 'Ruth Cadmus',
    message:
      'Dear Global HT Education, I would like to appreciate the smooth process of my application into BCU . The reception and the lecture has been smooth, they have various activities and good tutors who takes their time to ensure your foundation year is smooth to catapult you to BCU .I am truly happy to be at BCUIC',
    img: '/img/testimonials/ruth.webp',
    id: 4,
  },
];

export const NIGERIA_STATES: { text: string; value: string }[] = [
  {
    text: 'Abia',
    value: 'abia',
  },
  {
    text: 'Adamawa',
    value: 'adamawa',
  },
  {
    text: 'Akwa Ibom',
    value: 'akwa-ibom',
  },
  {
    text: 'Anambra',
    value: 'anambra',
  },
  {
    text: 'Bauchi',
    value: 'bauchi',
  },
  {
    text: 'Bayelsa',
    value: 'bayelsa',
  },
  {
    text: 'Benue',
    value: 'benue',
  },
  {
    text: 'Borno',
    value: 'borno',
  },
  {
    text: 'Cross River',
    value: 'cross-river',
  },
  {
    text: 'Delta',
    value: 'delta',
  },
  {
    text: 'Ebonyi',
    value: 'ebonyi',
  },
  {
    text: 'Edo',
    value: 'edo',
  },
  {
    text: 'Ekiti',
    value: 'ekiti',
  },
  {
    text: 'Enugu',
    value: 'enugu',
  },
  {
    text: 'Gombe',
    value: 'gombe',
  },
  {
    text: 'Imo',
    value: 'imo',
  },
  {
    text: 'Jigawa',
    value: 'jigawa',
  },
  {
    text: 'Kaduna',
    value: 'kaduna',
  },
  {
    text: 'Kano',
    value: 'kano',
  },
  {
    text: 'Katsina',
    value: 'katsina',
  },
  {
    text: 'Kebbi',
    value: 'kebbi',
  },
  {
    text: 'Kogi',
    value: 'kogi',
  },
  {
    text: 'Kwara',
    value: 'kwara',
  },
  {
    text: 'Lagos',
    value: 'lagos',
  },
  {
    text: 'Nasarawa',
    value: 'nasarawa',
  },
  {
    text: 'Niger',
    value: 'niger',
  },
  {
    text: 'Ogun',
    value: 'ogun',
  },
  {
    text: 'Ondo',
    value: 'ondo',
  },
  {
    text: 'Osun',
    value: 'osun',
  },
  {
    text: 'Oyo',
    value: 'oyo',
  },
  {
    text: 'Plateau',
    value: 'plateau',
  },
  {
    text: 'Rivers',
    value: 'rivers',
  },
  {
    text: 'Sokoto',
    value: 'sokoto',
  },
  {
    text: 'Taraba',
    value: 'taraba',
  },
  {
    text: 'Yobe',
    value: 'yobe',
  },
  {
    text: 'Zamfara',
    value: 'zamfara',
  },
];

export const HOME_STEPS: { icon: SVGIconName; head: string; text: string }[] = [
  {
    icon: 'apply',
    head: 'CHECK REQUIREMENTS',
    text: 'Contact us and we will get you started on the requirements',
  },
  {
    icon: 'badge',
    head: 'ADMISSION ASSISTANCE',
    text: 'We would help you process your admission from start to finish',
  },
  {
    icon: 'grad-cap',
    head: 'VISA CONSULTATION',
    text: 'Our experts would provide you with the information and guidance you need',
  },
  {
    icon: 'world',
    head: 'TRAVEL AND STAY',
    text: 'We would assist in your travel and accommodation for a happy stay abroad',
  },
];

export const patners = [
  '/img/logos/logo-1.jpeg',
  '/img/logos/logo-2.jpeg',
  '/img/logos/logo-3.jpeg',
  '/img/logos/logo-4.jpeg',
  '/img/logos/logo-5.jpeg',
  '/img/logos/logo-6.jpeg',
  '/img/logos/logo-7.jpeg',
  '/img/logos/logo-8.jpeg',
  '/img/logos/logo-9.jpeg',
  '/img/logos/logo-10.jpeg',
  '/img/logos/logo-11.jpeg',
  '/img/logos/logo-12.jpeg',
  '/img/logos/logo-13.jpeg',
  '/img/logos/logo-14.jpeg',
];

export const socialMedia: { icon: SVGIconName; link: string }[] = [
  {
    icon: 'face-book',
    link: 'https://www.facebook.com/profile.php?id=100070652747952&mibextid=ZbWKwL',
  },
  { icon: 'instagram', link: 'https://www.instagram.com/ght_education' },
];
