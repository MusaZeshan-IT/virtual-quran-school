import React, { useState, useRef } from 'react';
import api from '../apis/api';

const ContactForm = () => {
    const [isFocused, setIsFocused] = useState({
        name: false,
        email: false,
        subject: false,
        message: false,
    });
    const [isSending, setIsSending] = useState(false);

    const formRef = useRef(null);

    const handleFocus = (field) => {
        setIsFocused((prevState) => ({ ...prevState, [field]: true }));
    };

    const handleBlur = (field) => {
        setIsFocused((prevState) => ({ ...prevState, [field]: false }));
    };

    function sendEmail(e) {
        e.preventDefault();

        setIsSending(true);

        const formData = {
            name: formRef.current.name.value,
            email_from: formRef.current.email_from.value,
            subject: formRef.current.subject.value,
            message: formRef.current.message.value,
        };

        api.post('/contact/', formData)
            .then(() => {
                formRef.current.reset();
            })
            .catch((error) => {
                console.error('There was an error sending the message:', error)
                alert('Failed to send message. Please try again later.')
            })
            .finally(() => {
                setIsSending(false);
                alert('Message sent successfully!');
            });
    }

    return (
        <div className='w-full flex justify-center mt-20 px-4'>
            <form
                ref={formRef}
                onSubmit={sendEmail}
                className='flex flex-col items-center md:w-[750px] w-full gap-y-8'
            >
                {/* Input Fields */}
                <div className='flex gap-x-6 w-full'>
                    {/* Name Field */}
                    <div className='flex flex-col w-full relative'>
                        <label
                            htmlFor="name"
                            className={`absolute italic font-inter font-bold transition-all duration-300 ${isFocused.name ? 'text-emerald-500 -top-3 text-[13px]' : 'text-emerald-600 top-1 text-[15px]'
                                }`}
                        >
                            Name
                        </label>
                        <input
                            required
                            id='name'
                            onFocus={() => handleFocus('name')}
                            onBlur={() => handleBlur('name')}
                            className={`italic w-full border-b-2 mt-8 px-1 text-[15px] focus:outline-none font-inter ${isFocused.name ? 'border-emerald-600 text-gray-900' : 'border-emerald-500'
                                }`}
                            type="text"
                            name='name'
                        />
                    </div>
                    {/* Email Field */}
                    <div className='flex flex-col w-full relative'>
                        <label
                            htmlFor="email"
                            className={`absolute italic font-inter font-bold transition-all duration-300 ${isFocused.email ? 'text-emerald-500 -top-3 text-[13px]' : 'text-emerald-600 top-1 text-[15px]'
                                }`}
                        >
                            Email
                        </label>
                        <input
                            required
                            id='email'
                            onFocus={() => handleFocus('email')}
                            onBlur={() => handleBlur('email')}
                            className={`italic w-full border-b-2 mt-8 px-1 text-[15px] focus:outline-none font-inter ${isFocused.email ? 'border-emerald-600 text-gray-900' : 'border-emerald-500'
                                }`}
                            type="email"
                            name='email_from'
                        />
                    </div>
                </div>
                {/* Subject Field */}
                <div className='flex flex-col w-full relative'>
                    <label
                        htmlFor="subject"
                        className={`absolute italic font-inter font-bold transition-all duration-300 ${isFocused.subject ? 'text-emerald-500 -top-3 text-[13px]' : 'text-emerald-600 top-1 text-[15px]'
                            }`}
                    >
                        Subject
                    </label>
                    <input
                        required
                        id='subject'
                        onFocus={() => handleFocus('subject')}
                        onBlur={() => handleBlur('subject')}
                        className={`italic w-full border-b-2 mt-8 px-1 text-[15px] focus:outline-none font-inter ${isFocused.subject ? 'border-emerald-600 text-gray-900' : 'border-emerald-500'
                            }`}
                        type="text"
                        name='subject'
                    />
                </div>
                {/* Message Field */}
                <div className='flex flex-col w-full relative'>
                    <label
                        htmlFor="message"
                        className={`absolute italic font-inter font-bold transition-all duration-300 ${isFocused.message ? 'text-emerald-500 -top-3 text-[13px]' : 'text-emerald-600 top-1 text-[15px]'
                            }`}
                    >
                        Message
                    </label>
                    <textarea
                        rows={4}
                        id="message"
                        onFocus={() => handleFocus('message')}
                        onBlur={() => handleBlur('message')}
                        className={`italic w-full border-b-2 mt-8 px-1 text-[15px] focus:outline-none font-inter ${isFocused.message ? 'border-emerald-600 text-gray-900' : 'border-emerald-500'
                            }`}
                        required
                        name="message"
                    ></textarea>
                </div>
                {/* Submit Button */}
                <button disabled={isSending} type="submit" className={`w-[155px] ${isSending ? 'opacity-75 cursor-not-allowed' : ''} mt-3 transition-all duration-200 ease-in bg-emerald-600 hover:bg-emerald-700 text-white font-inter tracking-[0.8px] font-semibold rounded-lg py-3 px-5 italic text-[13px]`}>
                    {isSending ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
