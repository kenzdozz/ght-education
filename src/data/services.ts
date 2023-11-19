import { SVGIconName } from "@/types";

export interface ISubService {
    id: number;
    text: string;
    description: string;
    icon: SVGIconName;
}

export const SUB_SERVICES: ISubService[] = [
    {
        text: "Profile Evaluation",
        description: "Assessing academic history and goals for suitable program recommendations.",
        icon: 'tourist',
        id: 0,
    },
    {
        text: "University Selection",
        description: "Guidance in choosing institutions aligned with academic aspirations.",
        icon: 'school',
        id: 1,
    },
    {
        text: "Application Preparation",
        description: "Assistance in compiling and refining application materials.",
        icon: 'atom',
        id: 2,
    },
    {
        text: "Admission Representation",
        description: "Advocating for clients during the admissions process with institutions.",
        icon: 'ring',
        id: 3,
    },
    {
        text: "Visa Application Review",
        description: "Thorough review of documentation before submission.",
        icon: 'flight',
        id: 4,
    },
    {
        text: "Visa Interview Preparation",
        description: "Guidance and mock interviews to prepare for visa interviews.",
        icon: 'speaker-phone',
        id: 5,
    },
    {
        text: "Visa Refusal Reversal",
        description: "Assistance in addressing and reversing previous visa refusals.",
        icon: 'plane-arrival',
        id: 6,
    },
    {
        text: "Documentation Assistance",
        description: "Guidance in preparing and organizing necessary visa documents.",
        icon: 'sad-face',
        id: 7,
    },
    {
        text: "Travel Logistics",
        description: "Assistance in flight bookings, travel insurance, airports pick-up and itinerary planning.",
        icon: 'petal',
        id: 8,
    },
    {
        text: "Accommodation Search",
        description: "Aid in finding suitable housing options, considering preferences.",
        icon: 'accomodation',
        id: 9,
    },
    {
        text: "Cultural Guidance",
        description: "Information on local customs, culture, and regulations in the destination country.",
        icon: 'accomodation',
        id: 10,
    },
    {
        text: "Settlement Support",
        description: "Advice on settling into the new environment and handling initial challenges.",
        icon: 'accomodation',
        id: 11,
    },
]