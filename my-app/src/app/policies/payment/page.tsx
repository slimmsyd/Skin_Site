'use client';

import Link from 'next/link';

export default function PaymentPolicy() {
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

        <h1 className="text-4xl font-medium mb-8">Payment Information</h1>
        
        <div className="prose prose-pink max-w-none space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#FF69B4]/10">
            <h2 className="text-2xl font-medium mb-4">Accepted Payment Methods</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-[#FF69B4]/5 rounded-xl text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
                <span className="text-sm">Credit Cards</span>
              </div>
              <div className="p-4 bg-[#FF69B4]/5 rounded-xl text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
                <span className="text-sm">Cash</span>
              </div>
              <div className="p-4 bg-[#FF69B4]/5 rounded-xl text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                </svg>
                <span className="text-sm">Digital Payments</span>
              </div>
              <div className="p-4 bg-[#FF69B4]/5 rounded-xl text-center">
                <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
                <span className="text-sm">Gift Cards</span>
              </div>
            </div>

            <h2 className="text-2xl font-medium mt-8 mb-4">Payment Process</h2>
            <ul className="space-y-4 text-[#2D3142]/80">
              <li>
                <strong>Booking Deposit:</strong> A 20% deposit is required to secure your appointment.
              </li>
              <li>
                <strong>Remaining Balance:</strong> The remaining balance is due at the time of service.
              </li>
              <li>
                <strong>Package Payments:</strong> Service packages must be paid in full at the time of purchase.
              </li>
            </ul>

            <h2 className="text-2xl font-medium mt-8 mb-4">Pricing Transparency</h2>
            <ul className="space-y-4 text-[#2D3142]/80">
              <li>
                <strong>Service Prices:</strong> All prices are clearly listed for each service.
              </li>
              <li>
                <strong>Additional Charges:</strong> Any potential additional charges will be discussed before service begins.
              </li>
              <li>
                <strong>Package Discounts:</strong> Special pricing is available for service packages and memberships.
              </li>
            </ul>

            <div className="mt-8 p-4 bg-[#FF69B4]/5 rounded-xl">
              <p className="text-sm text-[#2D3142]/60">
                All prices are subject to change. We strive to maintain competitive pricing while ensuring the highest quality of service. For detailed pricing information, please consult our services menu or contact our staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 