'use client'
import React, { useState } from "react";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { Container } from "../shared";
import { states } from "@/data";

const Contact = () => {
    const [formSubmit, setFormSubmit] = useState(false);

    const [values, setValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        state: '',
        message: ''
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
        <Container className=" my-16 container">
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
                                name="phoneNumner"
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
                            name="state"
                            onChange={handleFormInput}
                            value={values.state}
                            className="bg-transparent h-12 border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                        >
                            <option selected>Choose a state</option>
                            {
                                states.map((el) => (
                                    <option key={el.value} value={el.value}>{el.text}</option>
                                ))
                            }

                        </select>
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
                    <button disabled={isAnyValueEmpty} onClick={() => submitMessage()} className={`${isAnyValueEmpty ? ' bg-gray-400' : 'bg-gradient-primary'} w-60 h-16 text-white text-base font-semibold rounded-md flex items-center transition-all duration-300 justify-center hover:-translate-y-1`}>
                        Send Message
                    </button>
                </Container>
            </Container>
        </Container>
    );
};

export default Contact;
