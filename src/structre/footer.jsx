import { useState } from 'react';

function Footer() {
    const [currentYear, setCurrentYear ] = useState(new Date().getFullYear());

    return (
        <footer className="w-full h-[10vh] flex items-center justify-center mx-auto p-2 px-4">                
                    {/* Copyright Section */}
                    <div className=" bg-primary-light w-1/3 p-2 rounded-full shadow-lg shadow-primary-dark/50 ">
                        <p className="text-text-lighter text-center text-xs">
                            © {currentYear} All Rights Reserved, Designed & Built by Mohamed Bouquil
                        </p>

            </div>
        </footer>
    );
}

export default Footer; 