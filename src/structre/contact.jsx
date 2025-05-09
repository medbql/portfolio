import  emailjs  from "@emailjs/browser";
import { useState, useEffect } from "react";
import { useInView } from './useInView';

function Contact() {
    const [ref, isInView] = useInView();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Add useEffect to handle auto-dismissal of messages
    useEffect(() => {
        let timeoutId;
        if (isSent || error) {
            timeoutId = setTimeout(() => {
                setIsSent(null);
                setError(null);
            }, 3000);
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isSent, error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setIsSent(null);
        
        // Get the form element
        const form = e.target;
        
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((response) => {
                if (response.status === 200) {
                    setIsSent(true);
                    setFormData({ name: '', email: '', message: '' });
                }
            })
            .catch((error) => {
                console.error('Email sent error!', error);
                setError('Failed to send message. Please try again.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section ref={ref} id="contact" className={`w-full min-h-screen py-20 px-4 md:px-15 ${isInView ? 'animate-(--animate--down-lt)' : ''}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className={`text-4xl md:text-5xl text-text underline mb-10 md:mb-20 text-center md:text-left ${isInView ? 'animate-(--animate--out)' : ''}`}>Contact Me:</h2>
                
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 ${isInView ? 'animate-(--animate--down-lt)' : ''}`}>
                    {/* Contact Form */}
                    <div className="w-full px-4 md:px-10">
                        <div className="bg-primary-light/50 p-6 md:p-8 rounded-xl shadow-lg">
                            <h3 className="text-xl text-primary-dark mb-6 md:mb-8">Send me a message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm text-text-light mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-text-lighter border border-text-light/20 rounded-lg focus:outline-none focus:border-primary text-text-light"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm text-text-light mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 bg-text-lighter border border-text-light/20 rounded-lg focus:outline-none focus:border-primary text-text-light"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm text-text-light mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full p-3 bg-text-lighter border border-text-light/20 rounded-lg focus:outline-none focus:border-primary text-text-light resize-none"
                                        required
                                        autoComplete="off"
                                    ></textarea>
                                </div>

                                {/* Status Messages */}
                                {isSent && (
                                    <div className="animate-fade-in bg-green-700/20 border border-green-500/20 text-green-700 px-4 py-3 rounded-lg">
                                        Message sent successfully! 
                                    </div>
                                )}
                                {error && (
                                    <div className="animate-fade-in bg-red-700/20 border border-red-500/20 text-red-700 px-4 py-3 rounded-lg">
                                        {error}
                                    </div>
                                )}

                                <button
                                    disabled={isLoading}
                                    type="submit"
                                    className={`
                                        w-full 
                                        text-sm 
                                        bg-secondary 
                                        flex 
                                        items-center 
                                        justify-center 
                                        gap-2 
                                        bg-primary 
                                        cursor-pointer 
                                        transition 
                                        active:scale-97 
                                        text-white 
                                        py-3 
                                        px-6 
                                        rounded-lg 
                                        hover:bg-secondary-dark 
                                        transition-colors 
                                        duration-300
                                        ${isLoading ? 'opacity-75' : ''}
                                    `}
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="w-full px-4 md:px-10 space-y-8 md:space-y-10">
                        <div>
                            <h3 className="text-2xl md:text-3xl text-primary-dark mb-6 md:mb-8">Contact Information</h3>
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-center space-x-4">
                                    <i className="fi fi-rr-envelope text-2xl text-primary"></i>
                                    <span className="text-text-light text-sm md:text-base">bouquim@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <i className="fi fi-rr-phone-call text-2xl text-primary"></i>
                                    <span className="text-text-light text-sm md:text-base">+212 693 223 328</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <i className="fi fi-rr-marker text-2xl text-primary"></i>
                                    <span className="text-text-light text-sm md:text-base">Hay Linbiaat, Salé, Morocco</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
