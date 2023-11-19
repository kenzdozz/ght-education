"use client";
import React, { useState } from "react";
import {
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { Container } from "../shared";
import { states, STUDY_COUNTRIES } from "@/data";
import { contactUs } from "@/services/contact.service";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
    const [formSubmit, setFormSubmit] = useState(false);

    const [values, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
        message: "",
        country: "",
        school: "",
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
            const resp = await contactUs(values);
            if (resp) {
                toast.success("your message has been recieved");
                setValue({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    state: "",
                    message: "",
                    country: "",
                    school: "",
                });
            }
        } catch (error: any) {
            toast.error(error.message || "message could not be sent try again");
        } finally {
            setFormSubmit(false);
        }
    };
    return (
        <Container className=" my-16 container">
            <ToastContainer />
            <Container
                as="h5"
                className=" textBorder font-bold text-lg md:text-3xl capitalize"
            >
                Get In touch with us
            </Container>
            <Container className=" rounded-md shadow-md py-9 px-0 md:px-11 mt-2 md:mt-10 mb-8">
                <Container className=" my-0 md:my-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Container>
                        <Container
                            as="label"
                            className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                        >
                            First name
                        </Container>
                        <Container as="span" className="relative text-gray-400  block h-12">
                            <UserIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
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
                        <Container as="span" className="relative text-gray-400  block h-12">
                            <UserIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="last name"
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
                        <Container as="span" className="relative text-gray-400  block h-12">
                            <EnvelopeIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
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
                        <Container as="span" className="relative text-gray-400  block h-12">
                            <PhoneIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
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
                            name="state"
                            onChange={handleFormInput}
                            value={values.state}
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
                            Country of Study
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
                        <Container as="span" className="relative text-gray-400  block h-12">
                            <AcademicCapIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
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

                    <Container className=" col-span-1 md:col-span-2">
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
                            placeholder="some text here"
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
                        {formSubmit ? "Sending Message.." : "Send Message"}
                    </button>
                </Container>
            </Container>
        </Container>
    );
};

export default Contact;
