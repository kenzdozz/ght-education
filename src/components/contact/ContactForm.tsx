'use client';
import { AcademicCapIcon, EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/20/solid';
import { Container } from '../shared';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { contactUs } from '@/services/contact.service';
import { NIGERIA_STATES, STUDY_COUNTRIES } from '@/data';

type ContactFormProps = {
  isWide: boolean;
  message?: string;
  country?: string;
};

const ContactForm = (props: ContactFormProps) => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [values, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    school: '',
    country: '',
    message: '',
  });

  const isAnyValueEmpty = Object.values(values).some((value) => value === '');

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      toast.error('Please enter a valid email address.');
      setFormSubmit(false);
      return;
    }
    try {
      const resp = await contactUs(values);
      if (resp) {
        toast.success('your message has been recieved');
        setValue({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          state: '',
          school: '',
          country: '',
          message: '',
        });
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error('Message could not be sent, please try again.');
    } finally {
      setFormSubmit(false);
    }
  };

  useEffect(() => {
    if (props) {
      const updatedValues = { ...values };

      if (props.country) {
        updatedValues.country = props.country;
      }

      if (props.message) {
        updatedValues.message = props.message;
      }

      setValue(updatedValues);
    }
  }, [props.country, props.message]);

  return (
    <Container>
      <Container
        as="h4"
        className={`${
          props.isWide ? 'text-lg font-bold md:text-3xl' : 'text-xl font-semibold md:text-xl'
        } textBorder capitalize`}
      >
        Get in Touch with Us
      </Container>
      <Container className={`my-6 grid grid-cols-1 gap-5 ${props.isWide ? 'md:grid-cols-2' : ''}`}>
        <Container>
          <Container as="label" className="mb-2 block text-sm font-medium capitalize text-blue-600 ">
            First Name
          </Container>
          <Container as="span" className="relative block  h-12 text-gray-400">
            <UserIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-blue-600" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleFormInput}
              value={values.firstName}
              className="block h-full w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-900 outline-none focus:border-gray-400"
            />
          </Container>
        </Container>
        <Container>
          <Container as="label" className="mb-2 block text-sm font-medium capitalize text-blue-600 ">
            Last Name
          </Container>
          <Container as="span" className="relative block  h-12 text-gray-400">
            <UserIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-blue-600" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleFormInput}
              value={values.lastName}
              className="block h-full w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-900 outline-none focus:border-gray-400"
            />
          </Container>
        </Container>
        <Container>
          <Container as="label" className="mb-2 block text-sm font-medium capitalize text-blue-600 ">
            Email
          </Container>
          <Container as="span" className="relative block  h-12 text-gray-400">
            <EnvelopeIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-blue-600" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleFormInput}
              value={values.email}
              className="block h-full w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-900 outline-none focus:border-gray-400"
            />
          </Container>
        </Container>
        <Container>
          <Container as="label" className="mb-2 block text-sm font-medium capitalize text-blue-600 ">
            Phone Number
          </Container>
          <Container as="span" className="relative block  h-12 text-gray-400">
            <PhoneIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-blue-600" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleFormInput}
              value={values.phone}
              className="block h-full w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-900 outline-none focus:border-gray-400"
            />
          </Container>
        </Container>
        <Container>
          <Container as="label" className="mb-2 block text-sm font-medium text-blue-600">
            State of Residence
          </Container>
          <select
            id="states"
            onChange={handleFormInput}
            value={values.state}
            name="state"
            className="block h-12 w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 outline-none focus:border-gray-400"
          >
            <option>Choose a state</option>
            {NIGERIA_STATES.map((el) => (
              <option key={el.value} value={el.value}>
                {el.text}
              </option>
            ))}
          </select>
        </Container>
        {!props.country && (
          <Container>
            <Container as="label" className="mb-2 block text-sm font-medium text-blue-600">
              Country of Interest
            </Container>
            <select
              id="country"
              name="country"
              onChange={handleFormInput}
              value={values.country}
              className="block h-12 w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 outline-none focus:border-gray-400"
            >
              <option>Choose a Country</option>
              {STUDY_COUNTRIES.map((el) => (
                <option key={el.slug} value={el.slug}>
                  {el.name}
                </option>
              ))}
            </select>
          </Container>
        )}
        <Container>
          <Container as="label" className="mb-2 block text-sm font-medium capitalize text-blue-600 ">
            School of Interest
          </Container>
          <Container as="span" className="relative block  h-12 text-gray-400">
            <AcademicCapIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-blue-600" />
            <input
              type="text"
              name="school"
              placeholder="School of Interest"
              onChange={handleFormInput}
              value={values.school}
              className="block h-full w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-900 outline-none focus:border-gray-400"
            />
          </Container>
        </Container>
        {!props.message && (
          <Container className={props.isWide ? 'col-span-1 md:col-span-2' : ''}>
            <Container as="label" className="mb-2 block text-sm font-medium text-blue-600 ">
              Message
            </Container>
            <textarea
              name="message"
              onChange={handleFormInput}
              value={values.message}
              className="block min-h-[10rem] w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 outline-none focus:border-gray-400"
              placeholder="Message"
              required
            />
          </Container>
        )}
      </Container>
      <Container className=" mt-3 flex items-center justify-center">
        <button
          disabled={isAnyValueEmpty || formSubmit}
          onClick={() => submitMessage()}
          title={isAnyValueEmpty ? 'All fields are required' : ''}
          className={`${
            isAnyValueEmpty ? 'bg-gray-400' : 'bg-blue-400'
          } rounded-md border-0 px-16 py-2 font-semibold text-white outline-none`}
        >
          {formSubmit ? 'Sending...' : 'Send'}
        </button>
      </Container>
    </Container>
  );
};

export default ContactForm;
