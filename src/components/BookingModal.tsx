'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultService?: string;
}

export default function BookingModal({ isOpen, onClose, defaultService = '' }: BookingModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);
    const [loadingAuth, setLoadingAuth] = useState(true);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        serviceRequested: defaultService,
        projectDescription: '',
        budgetRange: '',
        preferredContactMethod: 'email',
    });

    useEffect(() => {
        if (!isOpen) return;

        async function checkAuth() {
            setLoadingAuth(true);
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);

            // Auto-fill some details if user is logged in
            if (user) {
                setFormData(prev => ({
                    ...prev,
                    email: user.email || '',
                    firstName: user.user_metadata?.first_name || '',
                    lastName: user.user_metadata?.last_name || ''
                }));
            }

            setLoadingAuth(false);
        }

        checkAuth();
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const { error: supabaseError } = await supabase
                .from('booking_requests')
                .insert([
                    {
                        user_id: user?.id,
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email,
                        phone: formData.phone,
                        company_name: formData.companyName,
                        service_requested: formData.serviceRequested,
                        project_description: formData.projectDescription,
                        budget_range: formData.budgetRange,
                        preferred_contact_method: formData.preferredContactMethod,
                    }
                ]);

            if (supabaseError) throw supabaseError;

            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    serviceRequested: defaultService,
                    projectDescription: '',
                    budgetRange: '',
                    preferredContactMethod: 'email',
                });
            }, 3000);
        } catch (err: any) {
            console.error('Error submitting booking form:', err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden my-4">
                <div className="p-5 md:p-6 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {success ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Request Received!</h3>
                            <p className="text-gray-600 font-body">Thank you for reaching out. Our team will review your consultation request and get back to you shortly.</p>
                        </div>
                    ) : loadingAuth ? (
                        <div className="py-12 flex justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#306CEC]"></div>
                        </div>
                    ) : !user ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#306CEC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Authentication Required</h3>
                            <p className="text-gray-600 font-body mb-6 max-w-sm mx-auto">You must be logged in to book a session. This allows you to track your request status.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3">
                                <a href="/auth/login" className="px-6 py-2.5 bg-[#306CEC] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                    Log In
                                </a>
                                <a href="/auth/signup" className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                                    Create Account
                                </a>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 font-heading mb-1">Book a Session</h2>
                                <p className="text-gray-600 font-body text-sm">Tell us a bit about your needs and we'll schedule a time to talk.</p>
                            </div>

                            {error && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4 font-body">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                        <input
                                            required
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#306CEC] focus:border-[#306CEC] outline-none text-gray-900"
                                            placeholder="Jane"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                        <input
                                            required
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#306CEC] focus:border-[#306CEC] outline-none text-gray-900"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#306CEC] focus:border-[#306CEC] outline-none text-gray-900"
                                            placeholder="jane@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#306CEC] focus:border-[#306CEC] outline-none text-gray-900"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                    <input
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#306CEC] focus:border-[#306CEC] outline-none text-gray-900"
                                        placeholder="Acme Corp"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                                        <select
                                            name="serviceRequested"
                                            value={formData.serviceRequested}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#306CEC] focus:border-[#306CEC] outline-none text-gray-900"
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="business-strategy">Business & Strategy</option>
                                            <option value="technology">Technology & Digital</option>
                                            <option value="legal">Legal & Structuring</option>
                                            <option value="marketing">Marketing & Sales</option>
                                            <option value="scaling">Scaling & Expansion</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget</label>
                                        <select
                                            name="budgetRange"
                                            value={formData.budgetRange}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#306CEC] focus:border-[#306CEC] outline-none text-gray-900"
                                        >
                                            <option value="">Select a range...</option>
                                            <option value="< 500k KES">Under 500,000 KES</option>
                                            <option value="500k - 1M KES">500,000 - 1,000,000 KES</option>
                                            <option value="1M - 5M KES">1,000,000 - 5,000,000 KES</option>
                                            <option value="5M+ KES">5,000,000+ KES</option>
                                            <option value="Not Sure">Not Sure</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Details *</label>
                                    <textarea
                                        required
                                        name="projectDescription"
                                        value={formData.projectDescription}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#306CEC] focus:border-[#306CEC] outline-none text-gray-900 resize-none"
                                        placeholder="Tell us about your goals, challenges, and what you hope to achieve..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-4 bg-[#306CEC] hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting Request...' : 'Request Consultation'}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
