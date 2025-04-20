function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full min-h-[80px] flex items-center justify-center mx-auto p-4">
            {/* Copyright Section */}
            <div className="bg-primary-light w-full max-w-md p-3 rounded-full shadow-lg shadow-primary-dark/50">
                <p className="text-text-lighter text-center text-xs ">
                    © {currentYear} All Rights Reserved, Designed & Built by Mohamed Bouquil
                </p>
            </div>
        </footer>
    );
}

export default Footer; 