import React from 'react'
import { Container } from '../shared'

const Contact = () => {
    return (
        <Container className=' my-16 container'>
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
                            Which state are you located
                        </Container>
                        <select
                            id="states"
                            className="bg-transparent border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                        >
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </Container>

                    <Container className=' col-span-1 md:col-span-2'>
                        <Container
                            as="label"
                            className="block mb-2 text-sm font-medium text-slate-800 "
                        >
                            Message
                        </Container>
                        <textarea

                            className="bg-transparent border border-gray-300 min-h-[10rem] focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                            placeholder="some text here"
                            required
                        />
                    </Container>


                </Container>
                <Container className=" flex items-center justify-center mt-3">
                    <button className=" bg-gradient-primary w-60 h-16 text-white text-base font-semibold rounded-md flex items-center transition-all duration-300 justify-center hover:-translate-y-1">
                        Send Message
                    </button>
                </Container>
            </Container>
        </Container>
    )
}

export default Contact