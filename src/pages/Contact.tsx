import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <ContactInfo 
                icon={<MapPin />}
                title="Address"
                content="ZPHS Vodarevu, Main Road, Vodarevu Village"
              />
              <ContactInfo 
                icon={<Phone />}
                title="Phone"
                content="+91 XXXXX XXXXX"
              />
              <ContactInfo 
                icon={<Mail />}
                title="Email"
                content="info@zphsvodarevu.edu.in"
              />
              <ContactInfo 
                icon={<Clock />}
                title="Working Hours"
                content="Monday - Saturday: 9:00 AM - 4:30 PM"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
}) {
  return (
    <div className="flex items-start space-x-3">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}