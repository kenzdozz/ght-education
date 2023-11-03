import React from 'react'
import { Container } from '../shared'
import Faqs from '../Faqs'

const University = () => {
    return (
        <Container className=' container my-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Container className=' col-span-2'>
                <Container className=" rounded-md shadow-md py-9 px-11 mb-8">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-3xl capitalize"
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
                        className=" textBorder font-bold text-3xl capitalize"
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
                        className=" textBorder font-bold text-2xl capitalize"
                    >
                        Get In touch with us to start you application
                    </Container>
                    <Container className=" my-6 grid grid-cols-1 gap-5">
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800 "
                            >
                                First name
                            </Container>
                            <input
                                type="text"
                                className="bg-transparent border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                placeholder="John"
                                required
                            />
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800 "
                            >
                                Last name
                            </Container>
                            <input
                                type="text"
                                className="bg-transparent border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                placeholder="John"
                                required
                            />
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800 "
                            >
                                Email
                            </Container>
                            <input
                                type="email"
                                className="bg-transparent border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                placeholder="John@gmail.com"
                                required
                            />
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800 "
                            >
                                Phone Number
                            </Container>
                            <input
                                type="tel"
                                className="bg-transparent border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                                placeholder="0904590894"
                                required
                            />
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800"
                            >
                                Highest Level of Education
                            </Container>
                            <select
                                id="countries"
                                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:border-gray-700 block w-full p-2.5"
                            >
                                <option selected>Choose a country</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-slate-800"
                            >
                                Which State Are You Located
                            </Container>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:border-gray-700 block w-full p-2.5"
                            >
                                <option selected>Choose a state</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </Container>
                    </Container>
                    <Container className=" flex items-center justify-center mt-3">
                        <button className=" bg-blue-default w-60 h-16 text-white text-base font-semibold rounded-md flex items-center transition-all duration-300 justify-center hover:-translate-y-1">
                            Contact me with more info
                        </button>
                    </Container>
                </Container>
            </Container>

        </Container>
    )
}

export default University