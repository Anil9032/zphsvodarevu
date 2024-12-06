import React from 'react';
import { BookOpen, Users, HeartHandshake, GraduationCap } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
          alt="School Building"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to ZPHS Vodarevu</h1>
            <p className="text-xl">Empowering Minds, Shaping Futures</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<BookOpen className="h-8 w-8" />}
            title="Quality Education"
            description="Comprehensive curriculum focused on academic excellence and holistic development"
          />
          <FeatureCard 
            icon={<Users className="h-8 w-8" />}
            title="Experienced Faculty"
            description="Dedicated teachers committed to nurturing young minds"
          />
          <FeatureCard 
            icon={<HeartHandshake className="h-8 w-8" />}
            title="Student Support"
            description="Personalized attention and guidance for every student"
          />
          <FeatureCard 
            icon={<GraduationCap className="h-8 w-8" />}
            title="Free Education"
            description="Quality education accessible to all through government support"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Our School</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              ZPHS Vodarevu is committed to providing quality education to all students. 
              Our school focuses on academic excellence while nurturing creativity, 
              critical thinking, and character development. With modern facilities and 
              experienced faculty, we ensure that every student receives the best possible education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}