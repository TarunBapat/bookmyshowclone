import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Text */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">&copy; 2024 MyApp. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a
            href="/about"
            className="text-sm hover:text-white transition duration-300"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-sm hover:text-white transition duration-300"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="text-sm hover:text-white transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-sm hover:text-white transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
