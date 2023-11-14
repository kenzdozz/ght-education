'use client'
import React, { useState } from "react";
import { Container } from "../shared";
import Faqs from "../Faqs";
import { states } from "@/data";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const University = ({ school }: { school: string }) => {
    const [formSubmit, setFormSubmit] = useState(true);

    const [values, setValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        state: '',
    })
    const isAnyValueEmpty = Object.values(values).some(value => value === '');

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
        setFormSubmit(true)
        try {
            console.log('submited');

        } catch (error) {
            console.log(error);

        } finally {
            setFormSubmit(false)
        }
    }
    return (
        <Container className=" container my-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Container className=" col-span-1 lg:col-span-2">
                <Container className=" rounded-md shadow-md py-9 px-2 lg:px-11 mb-8">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-3xl capitalize"
                    >
                        About Study in {school}
                    </Container>
                    <Container as="p" className=" my-4">
                        Drop a message for information on how to study in {school}
                    </Container>
                    <Container as="p">Our team will get back to you via an email with details on what to do next.</Container>
                    <Container as="p">
                        Once again we congratulate you for taking this specila journey with us
                    </Container>
                </Container>
                <Container className=" rounded-md shadow-md py-9 px-2 lg:px-11">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-3xl capitalize"
                    >
                        Guides and FAQ
                    </Container>
                    <Faqs isRow isSlice />
                </Container>
            </Container>

            <Container>
                <Container className=" rounded-md shadow-md py-9 px-2 lg:px-11 mb-8">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-2xl capitalize"
                    >
                        Get In touch with us to start you application
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
                            <Container
                                as="span"
                                className="relative text-gray-400  block h-12"
                            >
                                <UserIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
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
                            <Container
                                as="span"
                                className="relative text-gray-400  block h-12"
                            >
                                <PhoneIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="0902345678"
                                    onChange={handleFormInput}
                                    value={values.phoneNumber}
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
                                <option selected>Choose a state</option>
                                {states.map((el) => (
                                    <option key={el.value} value={el.value}>{el.text}</option>
                                ))}
                            </select>
                        </Container>
                    </Container>
                    <Container className=" flex items-center justify-center mt-3">
                        <button disabled={isAnyValueEmpty} onClick={() => submitMessage()} className={`${isAnyValueEmpty ? ' bg-gray-400' : 'bg-gradient-primary'} w-60 h-16 text-white text-base font-semibold rounded-md flex items-center transition-all duration-300 justify-center hover:-translate-y-1`}>
                            Contact me with more info
                        </button>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
};

export default University;
