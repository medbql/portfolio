import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your form submission logic
        console.log(formData);
    };

    return (
        <>
         <section id="contact" className="w-full min-h-screen py-20 px-30 ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-7xl text-text underline mb-20">Contact Me:</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-sm p-10 rounded-xl shadow-lg">
                        <h3 className="text-3xl text-primary mb-8">Send me a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-text-light mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-text-light/20 rounded-lg focus:outline-none focus:border-primary text-text-light"
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-text-light mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-text-light/20 rounded-lg focus:outline-none focus:border-primary text-text-light"
                                    required
                                    autoComplete="off"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-text-light mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full px-4 py-3 bg-white/10 border border-text-light/20 rounded-lg focus:outline-none focus:border-primary text-text-light"
                                    required
                                    autoComplete="off"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary cursor-pointer transition active:scale-97 text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-900"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-3xl text-primary mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <i className="fi fi-rr-envelope text-2xl text-primary"></i>
                                    <span className="text-text-light">bouquim@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <i className="fi fi-rr-phone-call text-2xl text-primary"></i>
                                    <span className="text-text-light">+212 693 223 328</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <i className="fi fi-rr-marker text-2xl text-primary"></i>
                                    <span className="text-text-light">Hay Linbiaat, Salé, Morocco</span>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
        </>
       

        
        
    );
}

export default Contact;
