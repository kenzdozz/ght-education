import React from "react";
import { Container } from "../shared";
import Faqs from "../Faqs";
import { states } from "@/data";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const University = () => {
    return (
        <Container className=" container my-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Container className=" col-span-1 lg:col-span-2">
                <Container className=" rounded-md shadow-md py-9 px-11 mb-8">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-3xl capitalize"
                    >
                        About Study in kenth university
                    </Container>
                    <Container as="p" className=" my-4">
                        When people think of Australia, they see wide open spaces of outback
                        bush, kangaroos, koalas, and clean air and water.
                    </Container>
                    <Container as="p">Australia is so much more than that.</Container>
                    <Container as="p">
                        Many international students choose to study in Australia because of
                        its friendly, laid-back nature, excellent education system, and a
                        high standard of living.
                    </Container>
                </Container>
                <Container className=" rounded-md shadow-md py-9 px-11">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-3xl capitalize"
                    >
                        Guides and FAQ
                    </Container>
                    <Faqs />
                </Container>
            </Container>

            <Container>
                <Container className=" rounded-md shadow-md py-9 px-11 mb-8">
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
                                    name="firstname"
                                    placeholder="first name"
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
                                    name="phoneNumner"
                                    placeholder="0902345678"
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </Container>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-blue-600"
                            >
                                Highest Level of Education
                            </Container>
                            <select
                                id="countries"
                                className="bg-gray-50 h-12 border border-gray-300 text-gray-400 text-sm rounded-lg focus:border-gray-700 block w-full p-2.5"
                            >
                                <option selected>Choose a education level</option>
                                <option value="bsc">Bachelors</option>
                                <option value="msc">Masters</option>
                                <option value="high-school">High School</option>
                                {/* <option value="DE">Germany</option> */}
                            </select>
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
                        <button className=" bg-gradient-primary w-60 h-16 text-white text-base font-semibold rounded-md flex items-center transition-all duration-300 justify-center hover:-translate-y-1">
                            Contact me with more info
                        </button>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
};

export default University;
