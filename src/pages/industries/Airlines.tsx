import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Airlines() {
  return (
    <div className="container mx-auto px-4 py-20">
      <Link to="/industries" className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-800">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Industries
      </Link>
      
      <h1 className="mb-6 text-4xl font-bold">Airlines Industry Solutions</h1>
      
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1600"
          alt="Airlines Industry"
          className="mb-8 h-[400px] w-full rounded-lg object-cover"
        />
        
        <div className="prose max-w-none">
          <p className="mb-4 text-lg text-gray-600">
            We help airlines create exceptional experiences for their customers and employees through innovative loyalty programs, employee engagement solutions, and operational improvements.
          </p>
          
          <h2 className="mb-4 text-2xl font-semibold">Our Solutions</h2>
          <ul className="mb-8 list-disc pl-6">
            <li className="mb-2">Frequent flyer programs</li>
            <li className="mb-2">Employee recognition</li>
            <li className="mb-2">Customer experience management</li>
            <li className="mb-2">Operational efficiency</li>
            <li className="mb-2">Partner collaboration</li>
          </ul>
          
          <h2 className="mb-4 text-2xl font-semibold">Industry Impact</h2>
          <ul className="mb-8 list-disc pl-6">
            <li className="mb-2">Enhanced customer loyalty</li>
            <li className="mb-2">Improved employee satisfaction</li>
            <li className="mb-2">Increased revenue</li>
            <li className="mb-2">Better operational efficiency</li>
            <li className="mb-2">Stronger market position</li>
          </ul>
        </div>
      </div>
    </div>
  );
}