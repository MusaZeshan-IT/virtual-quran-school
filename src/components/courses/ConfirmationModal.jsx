import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ConfirmationModal = ({ isOpen, onClose, course }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            // Replace with your API endpoint to initiate payment
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    course: course.name,
                    amount: course.fee
                })
            });

            if (response.ok) {
                const result = await response.json();
                window.location.href = result.paymentUrl; // Redirect to Payoneer
            } else {
                // Handle error
                console.error('Payment initiation failed.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                >
                    <i className="fa-solid fa-xmark text-2xl"></i>
                </button>
                <h2 className="text-2xl font-poppins font-bold tracking-wide mb-4 border-b border-gray-300 pb-2">Confirm Purchase</h2>
                <div className="mb-4 flex flex-col gap-x-4">
                    <h3 className="text-[19px] font-semibold text-gray-700 mb-2"><span className='text-black text-xl'>Name:</span> {course.name}</h3>
                    <p className="text-[19px] font-semibold text-gray-700"><span className='text-black text-xl'>Sub Total:</span> {plan.fee}$</p>
                </div>
                <p className="text-gray-700 mb-6 text-sm font-poppins">Please enter your details to proceed with the purchase:</p>
                <div className="mb-4">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        required
                    />
                </div>
                <p className="text-gray-700 mb-6 text-sm font-poppins">Are you sure you want to purchase this course?</p>
                <div className="flex gap-4">
                    <Link to="/payment-success">
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="bg-black font-poppins text-white py-2 px-4 rounded-md"
                        >
                            {isSubmitting ? 'Processing...' : 'Proceed to Checkout'}
                        </button>
                    </Link>
                    <button
                        onClick={onClose}
                        className="bg-red-600 font-poppins text-white py-2 px-4 rounded-md"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

ConfirmationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired,
};

export default ConfirmationModal;
