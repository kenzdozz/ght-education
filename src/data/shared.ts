import { SVGIconName } from "@/types"

export const navMenuItems = [
    {
        title: 'Study Abroad',
        url: '/studies',
        subNav: [
            {
                title: 'Countries',
                url: 'countries',
            },
            {
                title: 'Schools',
                url: 'schools',
            },
        ],
    },
    {
        title: 'Our Services',
        url: '/services',
    },
    {
        title: "About Us",
        url: "/about",
        subNav: [
            {
                title: "Who We Are",
                url: "story",
            },
            {
                title: "Our Team",
                url: "teams",
            },
        ],
    },
    {
        title: 'Faqs',
        url: '/faqs',
    },
    {
        title: 'Contact Us',
        url: '/contact',
    },
]

export const sideBarMenuItems = [
    { name: 'Countries', url: '/studies/countries' },
    { name: 'Schools', url: '/studies/schools' },
    { name: 'Our Services', url: '/services' },
    { name: 'Who We Are', url: '/about/story' },
    { name: 'Our Team', url: '/about/teams' },
    { name: 'Faqs', url: '/faqs' },
    { name: 'Contact', url: '/contact' },
]

export const homeImgaes = [
    {
        img: '/img/img1.webp',
    },
    {
        img: '/img/img2.webp',
    },
    {
        img: '/img/img3.webp',
    },
    {
        img: '/img/img4.webp',
    },
]

export const homeSteps = [
    {
        title: 'We are here to serve',
        head: "Contact us",
        description: 'We serve any person or group interested in pursuing some form of training abroad. This could be either High school, foundation, top-up, undergraduate, graduate degree, post graduate, doctorate degree, industrial and executive Short courses, Specialist trainings overseas and online training programs.',
        img: '/img/img1.webp',
        id: 0
    },
    {
        title: 'We guide through the process',
        description: 'We provide relevant career guidance taking into cognizance previous qualification, family and financial background; career interests and future goals to assist them choose the right course and institution.',
        img: '/img/img2.webp',
        head: 'Guidance',
        id: 1
    },
    {
        title: 'Immigration Counseling',
        description: 'We also provide immigration counseling for all categories of applicants, flight booking and hotel reservation for our clients.',
        img: '/img/img2.webp',
        head: 'Counseling',
        id: 2
    },

]

export const homeCountries = [
    {
        img: '/img/img1.webp',
        name: 'United Kingdom',
        url: 'countries/uk'
    },
    {
        img: '/img/img2.webp',
        name: 'United State',
        url: 'countries/us'
    },
    {
        img: '/img/img3.webp',
        name: 'Canada',
        url: 'countries/canada'
    },
    {
        img: '/img/img4.webp',
        name: 'Germany',
        url: 'countries/germany'
    },
    {
        img: '/img/img4.webp',
        name: 'Australia',
        url: 'countries/australia'
    },
    {
        img: '/img/img4.webp',
        name: 'View Others',
        url: 'countries'
    },
]

export const footerCountries = [
    {
        name: 'United Kingdom',
        url: 'countries/uk'
    },
    {
        name: 'United State',
        url: 'countries/us'
    },
    {
        name: 'Canada',
        url: 'countries/canada'
    },
    {
        name: 'Germany',
        url: 'countries/germany'
    },
    {
        name: 'Australia',
        url: 'countries/australia'
    },

]

export const footerLinks = [
    {
        name: 'Countries',
        url: 'studies/countries/'
    },
    {
        name: 'Uversities',
        url: 'studies/schools'
    },
    {
        name: 'Our Services',
        url: 'services'
    },
    {
        name: 'Who we are',
        url: 'about/story'
    },
    {
        name: 'Teams',
        url: 'about/teams'
    },
    {
        name: 'Contact',
        url: 'contact'
    },
    {
        name: 'Faq',
        url: 'faqs'
    },

]

export const faqs = [
    {
        title: 'Why are you gay',
        text: 'I am gay because I no wan dey fuck woman again so i decided to be gay..hope u know my own definition of gay na to dey fuck plenty woman...oops...then I am not gay if thats what you mean'
    },
    {
        title: 'Why are you gay',
        text: 'I am gay because I no wan dey fuck woman again so i decided to be gay..hope u know my own definition of gay na to dey fuck plenty woman...oops...then I am not gay if thats what you mean'
    },
    {
        title: 'Why are you gay',
        text: 'I am gay because I no wan dey fuck woman again so i decided to be gay..hope u know my own definition of gay na to dey fuck plenty woman...oops...then I am not gay if thats what you mean'
    },
    {
        title: 'Why are you gay',
        text: 'I am gay because I no wan dey fuck woman again so i decided to be gay..hope u know my own definition of gay na to dey fuck plenty woman...oops...then I am not gay if thats what you mean'
    },
]

export const testimonies = [
    {
        name: 'Olinya Chaimaka',
        message: `teilmed, you are just the best. Thanks for making me feel special on a day like this and to know my life matters. Ngozi was the superwoman that helped me out. Not all heroes wear capes indeed. Thanks a lot.`,
        img: '/img/img1.webp',
        id: 0
    },
    {
        name: 'Vivain Mmesoma',
        message: `Teilemed, you are just the best. Thanks for making me feel special on a day like this and to know my life matters. Ngozi was the superwoman that helped me out. Not all heroes wear capes indeed. Thanks a lot.`,
        img: '/img/img1.webp',
        id: 1
    },

    {
        name: 'Abimbola Okenwa',
        message: `Teilemed, you are just the best. Thanks for making me feel special on a day like this and to know my life matters. Ngozi was the superwoman that helped me out. Not all heroes wear capes indeed. Thanks a lot.`,
        img: '/img/img1.webp',
        id: 2
    },
    {
        name: 'Marylin Nkechi',
        message: `Teilemed, you are just the best. Thanks for making me feel special on a day like this and to know my life matters. Ngozi was the superwoman that helped me out. Not all heroes wear capes indeed. Thanks a lot.`,
        img: '/img/img1.webp',
        id: 3
    },
]

export const states: { text: string, value: string }[] = [
    {
        text: 'Abia',
        value: 'abia'
    },
    {
        text: 'Adamawa',
        value: 'adamawa'
    },
    {
        text: 'Akwa Ibom',
        value: 'akwa-ibom'
    },
    {
        text: 'Anambra',
        value: 'anambra'
    },
    {
        text: 'Bauchi',
        value: 'bauchi'
    },
    {
        text: 'Bayelsa',
        value: 'bayelsa'
    },
    {
        text: 'Benue',
        value: 'benue'
    },
    {
        text: 'Borno',
        value: 'borno'
    },
    {
        text: 'Cross River',
        value: 'cross-river'
    },
    {
        text: 'Delta',
        value: 'delta'
    },
    {
        text: 'Ebonyi',
        value: 'ebonyi'
    },
    {
        text: 'Edo',
        value: 'edo'
    },
    {
        text: 'Ekiti',
        value: 'ekiti'
    },
    {
        text: 'Enugu',
        value: 'enugu'
    },
    {
        text: 'Gombe',
        value: 'gombe'
    },
    {
        text: 'Imo',
        value: 'imo'
    },
    {
        text: 'Jigawa',
        value: 'jigawa'
    },
    {
        text: 'Kaduna',
        value: 'kaduna'
    },
    {
        text: 'Kano',
        value: 'kano'
    },
    {
        text: 'Katsina',
        value: 'katsina'
    },
    {
        text: 'Kebbi',
        value: 'kebbi'
    },
    {
        text: 'Kogi',
        value: 'kogi'
    },
    {
        text: 'Kwara',
        value: 'kwara'
    },
    {
        text: 'Lagos',
        value: 'lagos'
    },
    {
        text: 'Nasarawa',
        value: 'nasarawa'
    },
    {
        text: 'Niger',
        value: 'niger'
    },
    {
        text: 'Ogun',
        value: 'ogun'
    },
    {
        text: 'Ondo',
        value: 'ondo'
    },
    {
        text: 'Osun',
        value: 'osun'
    },
    {
        text: 'Oyo',
        value: 'oyo'
    },
    {
        text: 'Plateau',
        value: 'plateau'
    },
    {
        text: 'Rivers',
        value: 'rivers'
    },
    {
        text: 'Sokoto',
        value: 'sokoto'
    },
    {
        text: 'Taraba',
        value: 'taraba'
    },
    {
        text: 'Yobe',
        value: 'yobe'
    },
    {
        text: 'Zamfara',
        value: 'zamfara'
    },
]

export const process: { icon: SVGIconName, head: string, text: string }[] = [
    {
        icon: 'apply',
        head: 'CHECK REQUIREMENTS',
        text: 'contact us with information to get you started'
    },
    {
        icon: 'badge',
        head: 'SEND DOCUMENTS',
        text: 'complete the online booking, our team confirms booking and proceed'
    },
    {
        icon: 'grad-cap',
        head: 'ADMISSION/VISA',
        text: 'Your payment validates that your car reservation has been completed'
    },
    {
        icon: 'world',
        head: 'TRAVEL',
        text: 'Your payment validates that your car reservation has been completed'
    },
]
