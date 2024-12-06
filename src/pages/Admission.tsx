import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FileText, Calendar, Download } from 'lucide-react';

const admissionSchema = z.object({
  fullName: z.string().min(3, 'Full name is required'),
  previousClass: z.string().min(1, 'Previous class is required'),
  presentClass: z.string().min(1, 'Present class is required'),
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
});

export function Admission() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(admissionSchema)
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Admission Form</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                {...register('fullName')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Previous Class</label>
              <input
                type="text"
                {...register('previousClass')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.previousClass && (
                <p className="mt-1 text-sm text-red-600">{errors.previousClass.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Present Class</label>
              <input
                type="text"
                {...register('presentClass')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.presentClass && (
                <p className="mt-1 text-sm text-red-600">{errors.presentClass.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                {...register('phoneNumber')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-medium mb-4">Required Documents</h3>
              <ul className="space-y-3">
                <RequiredDocument icon={<FileText />} text="Transfer Certificate (TC)" />
                <RequiredDocument icon={<Calendar />} text="Birth Certificate" />
                <RequiredDocument 
                  icon={<Download />} 
                  text="Download Application Form"
                  isDownloadable
                />
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function RequiredDocument({ 
  icon, 
  text, 
  isDownloadable 
}: { 
  icon: React.ReactNode; 
  text: string; 
  isDownloadable?: boolean; 
}) {
  return (
    <li className="flex items-center space-x-2">
      <span className="text-blue-600">{icon}</span>
      <span>{text}</span>
      {isDownloadable && (
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 ml-auto"
          onClick={(e) => {
            e.preventDefault();
            // Add download logic here
          }}
        >
          Download
        </a>
      )}
    </li>
  );
}