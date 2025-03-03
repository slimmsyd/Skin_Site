'use client';

import Link from 'next/link';

export default function AgePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf2f8] via-white to-[#fdf2f8]">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <Link 
          href="/"
          className="inline-flex items-center text-[#FF69B4] hover:text-[#FF1493] mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl font-medium mb-8">Age Policy</h1>
        
        <div className="prose prose-pink max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#FF69B4]/10">
            <h2 className="text-2xl font-medium mb-4">Age Requirements</h2>
            <ul className="space-y-4 text-[#2D3142]/80">
              <li>
                <strong>Minimum Age:</strong> Clients must be at least 16 years of age to receive waxing services.
              </li>
              <li>
                <strong>Parental Consent:</strong> Clients under 18 years of age must have written parental consent before receiving any services.
              </li>
              <li>
                <strong>ID Verification:</strong> We reserve the right to request identification to verify age before providing services.
              </li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">Additional Information</h2>
            <ul className="space-y-4 text-[#2D3142]/80">
              <li>
                <strong>First-Time Clients:</strong> New clients under 18 must be accompanied by a parent or legal guardian for their first appointment.
              </li>
              <li>
                <strong>Consent Forms:</strong> Parental consent forms must be completed in person or submitted with proper identification.
              </li>
              <li>
                <strong>Service Restrictions:</strong> Certain services may have additional age restrictions or requirements.
              </li>
            </ul>

            <div className="mt-8 p-4 bg-[#FF69B4]/5 rounded-xl">
              <p className="text-sm text-[#2D3142]/60">
                For any questions regarding our age policy or to obtain parental consent forms, please contact our staff. We prioritize the safety and comfort of our young clients while ensuring compliance with local regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 