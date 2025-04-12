import { useState } from 'react';

function Footer() {
    const [currentYear, ] = useState(new Date().getFullYear());

    return (
        <footer className="w-full h-[15vh] bg-primary-light pt-4 pb-0">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2  items-center">
                    {/* Copyright Section */}
                    <div className="text-center md:text-left">
                        <p className="text-text-light text-sm">
                            © {currentYear} All Rights Reserved
                        </p>
                        <p className="text-text-lighter text-xs mt-1">
                            Designed & Built with ❤️ by Mohamed Bouquil
                        </p>
                    </div>


                  

                    {/* Quick Links */}
                    <div className="flex justify-center md:justify-end space-x-4">
                        <a 
                            href="#about" 
                            className="text-text-light hover:text-primary transition-colors duration-300 text-sm"
                        >
                            Home
                        </a>
                        <a 
                            href="#project" 
                            className="text-text-light hover:text-primary transition-colors duration-300 text-sm"
                        >
                            Projects
                        </a>
                        <a 
                            href="#contact" 
                            className="text-text-light hover:text-primary transition-colors duration-300 text-sm"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="mt-3 pt-3 border-t border-text-light/20">
                    <p className="text-center text-text-lighter text-xs">
                        Made with React.js and Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 