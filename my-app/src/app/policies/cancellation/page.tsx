'use client';

import Link from 'next/link';

export default function CancellationPolicy() {
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

        <h1 className="text-4xl font-medium mb-8">Cancellation & Rescheduling Policy</h1>
        
        <div className="prose prose-pink max-w-none space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#FF69B4]/10">
            <h2 className="text-2xl font-medium mb-4">Cancellation Guidelines</h2>
            <ul className="space-y-4 text-[#2D3142]/80">
              <li>
                <strong>24-Hour Notice:</strong> We require a minimum of 24 hours notice for all cancellations and rescheduling requests.
              </li>
              <li>
                <strong>Late Cancellation Fee:</strong> Cancellations made with less than 24 hours notice will incur a 50% charge of the service price.
              </li>
              <li>
                <strong>No-Show Policy:</strong> Failure to show up for your appointment will result in a full charge of the service price.
              </li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">How to Reschedule</h2>
            <ul className="space-y-4 text-[#2D3142]/80">
              <li>
                <strong>Online:</strong> Log into your account and use our online booking system to reschedule your appointment.
              </li>
              <li>
                <strong>Phone:</strong> Call our front desk during business hours to speak with our staff.
              </li>
              <li>
                <strong>Email:</strong> Send your rescheduling request to appointments@skinregenesis.com.
              </li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">Exceptions</h2>
            <ul className="space-y-4 text-[#2D3142]/80">
              <li>
                <strong>Medical Emergencies:</strong> Cancellation fees may be waived with proper medical documentation.
              </li>
              <li>
                <strong>Severe Weather:</strong> In cases of severe weather conditions, we may modify our cancellation policy.
              </li>
            </ul>

            <div className="mt-8 p-4 bg-[#FF69B4]/5 rounded-xl">
              <p className="text-sm text-[#2D3142]/60">
                We understand that unexpected events occur. However, our cancellation policy allows us to serve all our clients efficiently and maintain the highest level of service. For any questions or special circumstances, please contact our staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 