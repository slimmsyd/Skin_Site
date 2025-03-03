'use client';

import Link from 'next/link';

export default function Policies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf2f8] via-white to-[#fdf2f8]">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <Link 
          href="/"
          className="inline-flex items-center text-[#FF69B4] hover:text-[#FF1493] mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-5xl font-medium mb-4">Salon Policies</h1>
        <p className="text-[#2D3142]/60 mb-16 text-lg">
          Please review our policies carefully before booking your appointment.
        </p>
        
        <div className="space-y-16">
          {/* Age Policy Section */}
          <section className="bg-white rounded-3xl p-10 shadow-sm border border-[#FF69B4]/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-[#FF69B4]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FF69B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-medium">Age Policy</h2>
            </div>
            
            <div className="space-y-6 text-[#2D3142]/80">
              <div className="bg-[#FF69B4]/5 rounded-2xl p-6">
                <p className="font-medium text-[#FF69B4] mb-2">Important Notice</p>
                <p>Clients under the age of 12 will not be serviced or allowed in the salon under any circumstances.</p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF69B4]">•</span>
                  <p>Clients between ages 12-17 must be accompanied by a legal guardian during the entire service. No exceptions will be made.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF69B4]">•</span>
                  <p>Due to our intimate studio space, we cannot accommodate extra guests unless they are receiving services.</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Cancellation Policy Section */}
          <section className="bg-white rounded-3xl p-10 shadow-sm border border-[#FF69B4]/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-[#FF69B4]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FF69B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-medium">Cancellation & Rescheduling Policy</h2>
            </div>

            <div className="space-y-6 text-[#2D3142]/80">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#FF69B4]/5 rounded-2xl p-6">
                  <h3 className="font-medium mb-2">48+ Hours Notice</h3>
                  <p className="text-sm">Appointments may be rescheduled with no penalty</p>
                </div>
                <div className="bg-[#FF69B4]/5 rounded-2xl p-6">
                  <h3 className="font-medium mb-2">Same Day Changes</h3>
                  <p className="text-sm">75% of scheduled service will be charged</p>
                </div>
                <div className="bg-[#FF69B4]/5 rounded-2xl p-6">
                  <h3 className="font-medium mb-2">No-Show</h3>
                  <p className="text-sm">100% of scheduled service will be charged</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF69B4]">•</span>
                  <p>Same-day cancellations and reschedules will result in a charge of 75% of the scheduled service cost.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF69B4]">•</span>
                  <p>No-call, no-show appointments will be charged 100% of the scheduled service cost.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF69B4]">•</span>
                  <p>Please provide at least 48 hours notice for any changes to avoid charges.</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Payment Policy Section */}
          <section className="bg-white rounded-3xl p-10 shadow-sm border border-[#FF69B4]/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-[#FF69B4]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FF69B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-medium">Payment Policy</h2>
            </div>

            <div className="space-y-6 text-[#2D3142]/80">
              <div className="bg-[#FF69B4]/5 rounded-2xl p-6">
                <h3 className="font-medium mb-2">Accepted Payment Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Cash */}
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl bg-[#FF69B4]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#FF69B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Cash</span>
                      <p className="text-sm text-[#2D3142]/60">Preferred payment method</p>
                    </div>
                  </div>

                  {/* Credit/Debit Cards */}
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl bg-[#FF69B4]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#FF69B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Credit/Debit Cards</span>
                      <p className="text-sm text-[#2D3142]/60">Including saved booking card</p>
                    </div>
                  </div>

                  {/* Apple Pay */}
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl bg-[#FF69B4]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#FF69B4]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.0451 12.7268C17.0344 10.8102 18.5945 9.89395 18.6639 9.85265C17.8237 8.63034 16.4809 8.41572 15.9705 8.39485C14.8025 8.27589 13.6751 9.0868 13.0817 9.0868C12.4778 9.0868 11.5395 8.41572 10.5492 8.43659C9.27561 8.45746 8.08765 9.19792 7.44584 10.3577C6.12269 12.7268 7.09305 16.2102 8.36662 18.0632C9.00843 18.9706 9.75369 19.9828 10.7335 19.9411C11.6927 19.8951 12.0574 19.3223 13.2245 19.3223C14.3811 19.3223 14.7249 19.9411 15.7361 19.9202C16.7787 19.8951 17.4205 18.9914 18.0414 18.0736C18.7667 17.0301 19.0583 16.0179 19.0688 15.9762C19.0479 15.9658 17.0556 15.1632 17.0451 12.7268Z M15.1617 7.02034C15.6931 6.36994 16.0578 5.47261 15.9705 4.56445C15.1931 4.59615 14.2129 5.07846 13.6605 5.70799C13.1709 6.26001 12.7226 7.19905 12.8204 8.07551C13.6814 8.13768 14.6089 7.66621 15.1617 7.02034"/>
                      </svg>
                    </div>
                    <span className="font-medium">Apple Pay</span>
                  </div>

                  {/* Cash App */}
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl bg-[#FF69B4]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#FF69B4]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.0001 4H4.00012C2.90012 4 2.00012 4.89 2.00012 6V18C2.00012 19.11 2.89012 20 4.00012 20H20.0001C21.1101 20 22.0001 19.11 22.0001 18V6C22.0001 4.89 21.1101 4 20.0001 4ZM19.0001 18H5.00012C4.45012 18 4.00012 17.55 4.00012 17V7C4.00012 6.45 4.45012 6 5.00012 6H19.0001C19.5501 6 20.0001 6.45 20.0001 7V17C20.0001 17.55 19.5501 18 19.0001 18Z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium">Cash App</span>
                      <p className="text-sm text-[#2D3142]/60">$NIECE2YOU</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p>Payment is due in full at the end of your service. The final balance will be calculated based on the services provided.</p>
                
                <div className="bg-[#FF69B4]/5 rounded-2xl p-6">
                  <p className="text-sm">
                    <span className="font-medium">Pre-authorized Payment:</span> For your convenience, we can process payment using the card provided during booking. Please let us know your preferred payment method at checkout.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 