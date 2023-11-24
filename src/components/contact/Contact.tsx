"use client";
import React, { useState } from "react";
import {
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { Container } from "../shared";
import { NIGERIA_STATES, STUDY_COUNTRIES } from "@/data";
import { contactUs } from "@/services/contact.service";
import { ToastContainer, toast } from "react-toastify";
import ContactForm from "./ContactForm";

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
        <Container className="my-16 container">
            <ToastContainer />
            <ContactForm isWide={true} />
        </Container>
    );
};

export default Contact;
