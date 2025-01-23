'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h1 className="text-2xl font-bold">ReactLab</h1>
          <p className="mt-4 text-sm text-gray-200">
            Building the next generation of developers with hands-on learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="/courses" className="hover:underline">Courses</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">Contact</a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">Blog</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/faq" className="hover:underline">FAQ</a>
            </li>
            <li>
              <a href="/support" className="hover:underline">Support</a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-blue-500 rounded-full hover:bg-gray-100 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-blue-500 rounded-full hover:bg-gray-100 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-blue-500 rounded-full hover:bg-gray-100 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-blue-500 rounded-full hover:bg-gray-100 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} ReactLab. All rights reserved.</p>
      </div>
    </footer>
  );
}