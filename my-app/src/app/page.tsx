import Image from "next/image";
import Link from "next/link";
import VideoCarousel from '@/components/VideoCarousel';
import ServiceCategories from '@/components/ServiceCategories';
import ChatPopup from '@/components/ChatPopup';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf2f8] via-white to-[#fdf2f8] text-[#2D3142] overflow-hidden">
      {/* Floating Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4">
        <div className="backdrop-blur-xl bg-white/80 rounded-full px-6 py-4 flex justify-between items-center max-w-7xl mx-auto shadow-sm">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-medium">
              <span className="text-[#FF69B4]">SKIN</span>
              <span className="text-[#2D3142]">Regenesis</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/services" className="hover:text-[#FF69B4] transition-colors">Services</Link>
            <Link href="/about" className="hover:text-[#FF69B4] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#FF69B4] transition-colors">Contact</Link>
            <Link 
              href="/book" 
              className="bg-[#FF69B4] hover:bg-[#FF1493] text-white px-6 py-2 rounded-full transition-all duration-300 shadow-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 px-4">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-[#FF69B4]/10 to-[#FF1493]/5 rounded-full blur-3xl animate-pulse" />
          
          <div className="relative grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-[#FF69B4]/10 text-[#FF69B4] text-sm mb-4">
                Premium Waxing Services
              </div>
              <h2 className="text-6xl font-medium leading-tight">
                Reveal Your
                <span className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-transparent bg-clip-text"> Natural Beauty</span>
              </h2>
              <p className="text-[#2D3142]/80 text-xl">
                Experience the art of expert waxing in a serene, 
                professional environment designed for your comfort.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/book" 
                  className="bg-[#FF69B4] text-white px-8 py-3 rounded-full hover:bg-[#FF1493] transition-all duration-300 shadow-sm group"
                >
                  <span className="group-hover:mr-2 transition-all duration-300">Book Appointment</span>
                  <span className="group-hover:opacity-100 opacity-0 transition-all duration-300">→</span>
                </Link>
                <div className="bg-white/80 backdrop-blur-sm border border-[#FF69B4]/20 px-4 py-3 rounded-full text-sm">
                  <span className="text-[#FF69B4] font-medium">Open Today:</span> {getCurrentDayHours()}
                </div>
              </div>
            </div>

            {/* TikTok-Style Video Container */}
            <div className="relative aspect-[9/16] w-full max-w-[400px] mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF69B4]/20 to-[#FF1493]/20 rounded-[3rem] blur-xl animate-pulse" />
              
              {/* Video Container */}
              <div className="relative z-20 rounded-[2rem] overflow-hidden border border-[#FF69B4]/10 shadow-xl bg-black">
                {/* Video Element */}
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="/video-placeholder.jpg"
                >
                  <source src="/assets/LadyVid.mp4" type="video/mp4" />
                </video>
                
                {/* TikTok-style Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                
                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    @skinregenesis
                    <span className="bg-[#FF69B4] text-white text-xs px-2 py-0.5 rounded-full">Follow</span>
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Experience luxury waxing services at SKIN Regenesis ✨
                  </p>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <span>#waxing</span>
                    <span>#beauty</span>
                    <span>#skincare</span>
                  </div>
                </div>

                {/* Side Actions */}
                <div className="absolute right-4 bottom-20 flex flex-col items-center gap-6">
                  {/* Like Button */}
                  <button className="group">
                    <div className="w-12 h-12 bg-black/20 backdrop-blur-lg rounded-full flex items-center justify-center mb-1 group-hover:bg-[#FF69B4]/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <span className="text-white text-xs">45.2K</span>
                  </button>

                  {/* Comment Button */}
                  <button className="group">
                    <div className="w-12 h-12 bg-black/20 backdrop-blur-lg rounded-full flex items-center justify-center mb-1 group-hover:bg-[#FF69B4]/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 15a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10zm-2 0V5H5v14h10v-2a2 2 0 0 1 2-2h2z" />
                      </svg>
                    </div>
                    <span className="text-white text-xs">1.2K</span>
                  </button>

                  {/* Share Button */}
                  <button className="group">
                    <div className="w-12 h-12 bg-black/20 backdrop-blur-lg rounded-full flex items-center justify-center mb-1 group-hover:bg-[#FF69B4]/20 transition-all duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                      </svg>
                    </div>
                    <span className="text-white text-xs">Share</span>
                  </button>
                </div>

                {/* Music Note Animation */}
                <div className="absolute top-4 right-4 animate-spin-slow">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Services Section - Moved Up */}
      <ServiceCategories />

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-medium text-center mb-16">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-[#FF69B4]/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h4 className="font-medium mb-2">{feature.title}</h4>
                <p className="text-[#2D3142]/60 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 px-4 relative overflow-hidden bg-[#fff5f9]">
        <div className="max-w-7xl mx-auto relative">
          <h3 className="text-3xl font-medium text-center mb-4">Client Love</h3>
          <p className="text-center text-[#2D3142]/60 mb-16 max-w-xl mx-auto">
            Real experiences from our valued clients
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#FF69B4]/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#FF69B4] to-[#FF1493] flex items-center justify-center text-white font-medium">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <div className="flex gap-1 text-[#FF69B4]">★★★★★</div>
                  </div>
                </div>
                <p className="text-[#2D3142]/80 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-16 bg-white">
        <VideoCarousel />
      </section>

      {/* Chat Popup instead of fixed CTA */}
      <ChatPopup />
    </div>
  );
}

const services = [
  {
    name: "Full Body Wax",
    description: "Complete hair removal service for silky smooth results from head to toe.",
    price: "From $120"
  },
  {
    name: "Brazilian Wax",
    description: "Our most popular service, performed with expertise and attention to comfort.",
    price: "From $85"
  },
  {
    name: "Leg Waxing",
    description: "Achieve perfectly smooth legs with our gentle waxing technique.",
    price: "From $65"
  }
];

const features = [
  {
    icon: "✨",
    title: "Expert Care",
    description: "Highly trained professionals with years of experience"
  },
  {
    icon: "🌸",
    title: "Premium Products",
    description: "Using only the finest waxing products for your skin"
  },
  {
    icon: "💝",
    title: "Comfort First",
    description: "Relaxing environment and gentle techniques"
  },
  {
    icon: "⭐️",
    title: "Lasting Results",
    description: "Enjoy smooth skin for weeks"
  }
];

const reviews = [
  {
    name: "Alexandra",
    text: "Best waxing experience ever! The staff is so professional and made me feel completely comfortable. The results are amazing!"
  },
  {
    name: "Michelle",
    text: "I've been coming here for months and I'm always impressed. Quick, thorough, and virtually painless. Wouldn't go anywhere else!"
  }
];

const operatingHours = [
  { day: 'Monday', hours: 'Closed', isClosed: true },
  { day: 'Tuesday', hours: '10AM - 5PM' },
  { day: 'Wednesday', hours: '10AM - 5PM' },
  { day: 'Thursday', hours: '10AM - 5PM' },
  { day: 'Friday', hours: '10AM - 6PM' },
  { day: 'Saturday', hours: '10AM - 2PM' },
  { day: 'Sunday', hours: 'Closed', isClosed: true }
];

function getCurrentDayHours() {
  const today = new Date().getDay();
  const hours = operatingHours[today];
  return hours.isClosed ? 'Closed Today' : hours.hours;
}
