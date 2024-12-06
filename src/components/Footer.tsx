import React from 'react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>ZPHS Vodarevu</p>
            <p>Main Road, Vodarevu Village</p>
            <p>Phone: +91 XXXXX XXXXX</p>
            <p>Email: info@zphsvodarevu.edu.in</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Admissions</a></li>
              <li><a href="#" className="hover:text-blue-300">Gallery</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">School Hours</h3>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 4:30 PM</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} ZPHS Vodarevu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}