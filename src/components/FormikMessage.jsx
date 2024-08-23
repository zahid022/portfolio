import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRef } from 'react';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

function FormikMessage() {
    const form = useRef();

    const sendEmail = () => {
        emailjs
            .sendForm('service_zu8p0rs', 'template_uivt08q', form.current, {
                publicKey: 'vvEehB_CqTEKoeNOX',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <Formik
            initialValues={{
                user_name: '',
                user_email: '',
                message: ''
            }}
            validationSchema={Yup.object({
                user_name: Yup.string()
                    .min(3, 'Name must be at least 3 characters')
                    .required('Name is required'),

                user_email: Yup.string()
                    .email('Invalid email address')
                    .required('Email required'),

                message: Yup.string()
                    .min(10, 'Description must be at least 10 characters')
                    .required('Description required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false)
                sendEmail()
            }}
        >
            {({ isSubmitting }) => (
                <Form ref={form} className='max-w-[450px] w-full'>
                    <div className='mb-5'>
                        <label className='block mb-3 pl-4 font-medium text-[16px] text-[#9CA3AF]' htmlFor="user_name">Name</label>
                        <Field className='bg-transparent text-[#9CA3AF] outline-none border-2 w-full py-4 px-6 rounded-full block border-[#8963D4]' placeholder='Write name' name="user_name" type="text" />
                        <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="user_name" component="div" />
                    </div>
                    <div className='mb-5'>
                        <label className='block mb-3 pl-4 font-medium text-[16px] text-[#9CA3AF]' htmlFor="user_email">E-mail</label>
                        <Field className='bg-transparent text-[#9CA3AF] outline-none border-2 w-full py-4 px-6 rounded-full block border-[#8963D4]' placeholder='Write email' name="user_email" type="email" />
                        <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="user_email" component="div" />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-3 pl-4 font-medium text-[16px] text-[#9CA3AF]' htmlFor="message">Description</label>
                        <Field className='bg-transparent rounded-3xl text-[#9CA3AF] outline-none border-2 w-full py-4 px-6 block border-[#8963D4]' placeholder='Write description' name="message" as="textarea" rows="5" />
                        <ErrorMessage className='text-red-500 pl-4 text-[12px]' name="message" component="div" />
                    </div>
                    <div className='flex justify-center'>
                        <button className='px-9 font-medium py-3 rounded-md text-white' type="submit" disabled={isSubmitting}>
                            Send message
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default FormikMessage