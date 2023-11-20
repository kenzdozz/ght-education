'use client'
import Faqs from '@/components/Faqs'
import Page from '@/components/Page'
import { Container } from '@/components/shared'
import { Header } from '@/components/studies'
import useScrollReveal from '@/utils/useScrollReveal'
import React, { useState } from 'react'
import {
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { states, STUDY_COUNTRIES } from "@/data";
import { contactUs } from "@/services/contact.service";
import { ToastContainer, toast } from "react-toastify";


const FaqsPage = () => {
    const [faqRef] = useScrollReveal()
    const [formSubmit, setFormSubmit] = useState(false);

    const [values, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
        school: "",
        message: "",
        country: "",
    });
    const isAnyValueEmpty = Object.values(values).some((value) => value === "");

    const handleFormInput = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { value, name } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const submitMessage = async () => {
        setFormSubmit(true);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(values.email)) {
            toast.error("Please enter a valid email address.");
            setFormSubmit(false);
            return;
        }
        try {
            const resp = await contactUs({
                ...values
            });
            if (resp) {
                toast.success("your message has been recieved");
                setValue({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    state: "",
                    school: "",
                    country: '',
                    message: ''
                });
            }
        } catch (error: any) {
            toast.error(error.message || "message could not be sent try again");
        } finally {
            setFormSubmit(false);
        }
    };


    return (
        <Page mainRef={faqRef}>
            <ToastContainer />
            <Header
                head="Got Questions? We Have Answers."
                text="Explore Frequently Asked Questions" />
            <Container className=" container grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-[2] mt-16 mb-10">
                <Container className='  col-span-1 lg:col-span-3'>
                    <Container className=' flex items-center justify-center'>
                        <Container className='textBorder font-bold text-xl md:text-3xl' as='h2'>
                            FAQS
                        </Container>
                    </Container>
                    <Faqs />
                </Container>

                <Container as="aside" className="col-span-1">

                    {/* form  */}
                    <Container className=" rounded-md shadow-md py-9 mt-8 px-2 lg:px-2 mb-8">
                        <Container
                            as="h5"
                            className=" textBorder font-semibold text-sm  capitalize"
                        >
                            Get In touch with us
                        </Container>
                        <Container className=" my-6 grid grid-cols-1 gap-5">
                            <Container>
                                <Container
                                    as="label"
                                    className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                                >
                                    First name
                                </Container>
                                <Container
                                    as="span"
                                    className="relative text-gray-400  block h-12"
                                >
                                    <UserIcon className="pointer-events-none text-blue-600 w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="first name"
                                        onChange={handleFormInput}
                                        value={values.firstName}
                                        className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                    />
                                </Container>
                            </Container>
                            <Container>
                                <Container
                                    as="label"
                                    className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                                >
                                    last name
                                </Container>
                                <Container
                                    as="span"
                                    className="relative text-gray-400  block h-12"
                                >
                                    <UserIcon className="pointer-events-none text-blue-600 w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="surname"
                                        onChange={handleFormInput}
                                        value={values.lastName}
                                        className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                    />
                                </Container>
                            </Container>
                            <Container>
                                <Container
                                    as="label"
                                    className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                                >
                                    email
                                </Container>
                                <Container
                                    as="span"
                                    className="relative text-gray-400  block h-12"
                                >
                                    <EnvelopeIcon className="pointer-events-none text-blue-600 w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="@gmail.com"
                                        onChange={handleFormInput}
                                        value={values.email}
                                        className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                    />
                                </Container>
                            </Container>
                            <Container>
                                <Container
                                    as="label"
                                    className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                                >
                                    phone number
                                </Container>
                                <Container
                                    as="span"
                                    className="relative text-gray-400  block h-12"
                                >
                                    <PhoneIcon className="pointer-events-none text-blue-600 w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="0902345678"
                                        onChange={handleFormInput}
                                        value={values.phone}
                                        className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                    />
                                </Container>
                            </Container>

                            <Container>
                                <Container
                                    as="label"
                                    className="block mb-2 text-sm font-medium text-blue-600"
                                >
                                    Which state are you located
                                </Container>
                                <select
                                    id="states"
                                    onChange={handleFormInput}
                                    value={values.state}
                                    name="state"
                                    className="bg-transparent h-12 border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                >
                                    <option>Choose a state</option>
                                    {states.map((el) => (
                                        <option key={el.value} value={el.value}>
                                            {el.text}
                                        </option>
                                    ))}
                                </select>
                            </Container>
                            <Container>
                                <Container
                                    as="label"
                                    className="block mb-2 text-sm font-medium text-blue-600"
                                >
                                    Country of Interest
                                </Container>
                                <select
                                    id="country"
                                    name="country"
                                    onChange={handleFormInput}
                                    value={values.country}
                                    className="bg-transparent h-12 border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                >
                                    <option>Choose a Country</option>
                                    {STUDY_COUNTRIES.map((el) => (
                                        <option key={el.slug} value={el.slug}>
                                            {el.name}
                                        </option>
                                    ))}
                                </select>
                            </Container>
                            <Container>
                                <Container
                                    as="label"
                                    className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                                >
                                    Study School
                                </Container>
                                <Container
                                    as="span"
                                    className="relative text-gray-400  block h-12"
                                >
                                    <AcademicCapIcon className="pointer-events-none text-blue-600 w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                    <input
                                        type="text"
                                        name="school"
                                        placeholder="university of alabama"
                                        onChange={handleFormInput}
                                        value={values.school}
                                        className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                    />
                                </Container>
                            </Container>
                            <Container className=" ">
                                <Container
                                    as="label"
                                    className="block mb-2 text-sm font-medium text-blue-600 "
                                >
                                    Message
                                </Container>
                                <textarea
                                    name="message"
                                    onChange={handleFormInput}
                                    value={values.message}
                                    className="bg-transparent border border-gray-300 min-h-[10rem] focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                    placeholder="Message"
                                    required
                                />
                            </Container>
                        </Container>
                        <Container className=" flex items-center justify-center mt-3">
                            <button
                                disabled={isAnyValueEmpty}
                                onClick={() => submitMessage()}
                                className={`${isAnyValueEmpty ? " bg-gray-400" : "bg-gradient-primary"
                                    } w-60 h-16 text-white text-base font-semibold rounded-md flex items-center transition-all duration-300 justify-center hover:-translate-y-1`}
                            >
                                {formSubmit ? "Contacting.." : "Contact me with more info"}
                            </button>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Page>
    )
}

export default FaqsPage
