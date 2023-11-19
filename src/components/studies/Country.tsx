"use client";
import React, {
    RefObject,
    useRef,
    useState,
} from "react";
import { Container, Pagination } from "../shared";
import { ICountry, ISchool } from "@/data/studies";
import {
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    AcademicCapIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import S from "@/styles/pages/studies/study.module.scss";
import Faqs from "../Faqs";
import { states } from "@/data";
import { contactUs } from "@/services/contact.service";
import { ToastContainer, toast } from "react-toastify";

type SectionRef = RefObject<HTMLDivElement>;

const Country = ({ country }: { country: ICountry }) => {
    const router = useRouter();
    const contactRef = useRef(null);
    const guideRef = useRef(null);
    const beyondLifeRef = useRef(null);
    const admissionRef = useRef(null);
    const feeRef = useRef(null);
    const [formSubmit, setFormSubmit] = useState(false);

    const [values, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
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

    function scrollToSection(ref: SectionRef) {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }


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
                ...values,
                message: `I would like to know about stuying in ${country.slug}`,
                country: country.slug,
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
                });
            }
        } catch (error: any) {
            toast.error(error.message || "message could not be sent try again");
        } finally {
            setFormSubmit(false);
        }
    };

    // const onPrevious = () => {
    //     if (currentPage > 1) {
    //         updatePage(currentPage - 1);
    //     }
    // };

    // const updatePage = (pageNo: number): void => {
    //     if (pageNo > pageCount) {
    //         pageNo = 1;
    //     }
    //     const skip = (currentPage - 1) * limit;
    //     setSchools(newData().slice(skip, skip + limit));
    //     setCurrentPage(pageNo);
    // };

    // useEffect(() => {
    //     updatePage(currentPage);
    // }, [currentPage]);

    return (
        <>
            <ToastContainer />
            <Container className=" container grid grid-cols-1 lg:grid-cols-4 gap-10 my-16">
                <Container as="aside" className="col-span-1">
                    <Container
                        as="h4"
                        className="textBorder font-semibold text-xl md:text-xl capitalize"
                    >
                        user guide
                    </Container>
                    <Container className="bg-slate-100 rounded-md py-4 mt-10">
                        <Container as="ul">
                            <Container
                                as="li"
                                onClick={() => scrollToSection(admissionRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                Admission details
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(beyondLifeRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                life in {country.slug}
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(feeRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                how to pay
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(guideRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                Faqs
                            </Container>
                        </Container>
                    </Container>

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
                <Container as="section" className=" col-span-1 lg:col-span-3">
                    <Container>
                        <Container as="p" className=" mb-3">
                            Upon completing your studies in Australia, you’ll be ready to work
                            in today’s competitive international job market. Australia is home
                            to some of the finest research institutions in the world. The
                            education provided fosters innovative, versatile, independent and
                            critical thinking skills as you grow in the field of your choice.
                        </Container>
                        <Container as="p" className=" mb-3">
                            Australia opens its doors to international students through public
                            and private universities, vocational and English language
                            institutions. At Expert Education, we’ll help you reach your
                            academic goals in Australia. We provide honest, credible, and
                            authentic education and migration counselling advice for Australia
                            student visa requirements.
                        </Container>
                    </Container>
                    <Container
                        as="h4"
                        className="textBorder font-bold text-xl md:text-3xl mt-8 capitalize"
                    >
                        Universities and courses available
                    </Container>
                    <Container as="ul" className=" mt-3">
                        {country.schools.map((item, i: number) => (
                            <Container key={i} as="li" className={` ${S.SchoolList} mb-3`}>
                                {item.name}
                            </Container>
                        ))}
                    </Container>
                    {/* first reading section after list of universities  */}
                    <div ref={feeRef} className=" mt-7">
                        <Container
                            as="h4"
                            className="textBorder font-bold text-xl md:text-3xl mt-8 capitalize"
                        >
                            Fee, Scholarship, Cost of Living
                        </Container>
                        <Container className="w-full relative mt-7 h-[22rem] rounded-md">
                            <Image
                                src="/img/country-finance.jpg"
                                alt="country-finance"
                                fill
                                className=" rounded-md object-center"
                                style={{ objectFit: "cover" }}
                            />
                        </Container>

                        <Container className=" my-10">
                            <Container className="mb-10">
                                <Container
                                    as="h4"
                                    className="font-bold mb-2 text-xl  capitalize"
                                >
                                    Financial preparation for studying in {country.slug}

                                </Container>
                                <Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                </Container>
                            </Container>
                            <Container className="mb-10">
                                <Container
                                    as="h4"
                                    className="font-bold mb-2 text-xl  capitalize"
                                >
                                    Accomplishing academic goals worry-free!

                                </Container>
                                <Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                </Container>
                            </Container>
                            <Container className="mb-10">
                                <Container
                                    as="h4"
                                    className="font-bold mb-2 text-xl  capitalize"
                                >
                                    Travel and Accommodation

                                </Container>
                                <Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                </Container>
                            </Container>
                        </Container>
                    </div>

                    {/* second reading section after list of universities  */}
                    <div ref={admissionRef} className=" mt-7">
                        <Container
                            as="h4"
                            className="textBorder font-bold text-xl md:text-3xl mt-8 capitalize"
                        >
                            Admission Process
                        </Container>
                        <Container className="w-full relative mt-7 h-[22rem] rounded-md">
                            <Image
                                src="/img/country-finance.jpg"
                                alt="country-finance"
                                fill
                                className=" rounded-md object-center"
                                style={{ objectFit: "cover" }}
                            />
                        </Container>

                        <Container className=" my-10">
                            <Container className="mb-10">
                                <Container
                                    as="h4"
                                    className="font-bold mb-2 text-xl  capitalize"
                                >
                                    Financial preparation for studying in {country.slug}

                                </Container>
                                <Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                </Container>
                            </Container>
                            <Container className="mb-10">
                                <Container
                                    as="h4"
                                    className="font-bold mb-2 text-xl  capitalize"
                                >
                                    Accomplishing academic goals worry-free!

                                </Container>
                                <Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                </Container>
                            </Container>
                            <Container className="mb-10">
                                <Container
                                    as="h4"
                                    className="font-bold mb-2 text-xl  capitalize"
                                >
                                    Travel and Accommodation

                                </Container>
                                <Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                </Container>
                            </Container>
                        </Container>
                    </div>

                    {/* third reading section after list of universities  */}
                    <div ref={beyondLifeRef} className=" mt-7">
                        <Container
                            as="h4"
                            className="textBorder font-bold text-xl md:text-3xl mt-8 capitalize"
                        >
                            Study & Beyond – Life in {country.slug}
                        </Container>
                        <Container className="w-full relative mt-7 h-[22rem] rounded-md">
                            <Image
                                src="/img/country-finance.jpg"
                                alt="country-finance"
                                fill
                                className=" rounded-md object-center"
                                style={{ objectFit: "cover" }}
                            />
                        </Container>

                        <Container className=" my-10">
                            <Container className="mb-10">
                                <Container
                                    as="h4"
                                    className="font-bold mb-2 text-xl  capitalize"
                                >
                                    Financial preparation for studying in {country.slug}

                                </Container>
                                <Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                </Container>
                            </Container>
                            <Container className="mb-10">
                                <Container
                                    as="h4"
                                    className="font-bold mb-2 text-xl  capitalize"
                                >
                                    Accomplishing academic goals worry-free!

                                </Container>
                                <Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                </Container>
                            </Container>
                            <Container className="mb-10">
                                <Container
                                    as="h4"
                                    className="font-bold mb-2 text-xl  capitalize"
                                >
                                    Travel and Accommodation

                                </Container>
                                <Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                    <Container as='p' className=" mb-2">The cost of studying depends on the educational provider you select, the location and the chosen level of study. </Container>
                                </Container>
                            </Container>
                        </Container>
                    </div>

                    {/* faq section  */}
                    <div
                        ref={guideRef}
                        className=" rounded-md shadow-md py-9 px-2 lg:px-11"
                    >
                        <Container
                            as="h5"
                            className=" textBorder font-bold text-lg md:text-3xl capitalize"
                        >
                            Guides and FAQ
                        </Container>
                        <Faqs isSlice isRow />
                    </div>
                </Container>
            </Container>

        </>
    );
};

export default Country;
