'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  name: string;
  price: string;
  duration: string;
  description?: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  icon: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Body Wax Services",
    description: "Complete body waxing solutions for smooth, lasting results",
    icon: "✨",
    services: [
      {
        name: "French Bikini Wax",
        price: "$50.00",
        duration: "25 minutes",
        description: "This wax does not include between the cheeks or labia strips. Only what will be present outside of a bikini."
      },
      {
        name: "Brazilian Wax",
        price: "$60.00",
        duration: "30 minutes",
        description: "This wax includes everything from the front to the back. All hair will be removed unless otherwise specified."
      },
      {
        name: "Tweenie Wax (Bikini + Butt Strips)",
        price: "$55.00",
        duration: "25 minutes",
        description: "This wax includes the hairs present outside of a bikini plus between the cheeks. Does not include labia strips."
      },
      {
        name: "Between The Cheeks",
        price: "$20.00",
        duration: "20 minutes"
      },
      {
        name: "Buttock Wax",
        price: "$35.00",
        duration: "30 minutes"
      },
      {
        name: "Full Leg Wax",
        price: "$85.00",
        duration: "1 hour"
      },
      {
        name: "Lower Leg Wax",
        price: "$45.00",
        duration: "45 minutes"
      },
      {
        name: "Upper Leg Wax",
        price: "$45.00",
        duration: "50 minutes"
      },
      {
        name: "Full Arm wax",
        price: "$65.00",
        duration: "50 minutes"
      },
      {
        name: "Half Arm Wax",
        price: "$45.00",
        duration: "30 minutes"
      },
      {
        name: "Full Back Wax",
        price: "$65.00",
        duration: "45 minutes"
      },
      {
        name: "Half Back (Upper or Lower)",
        price: "$50.00",
        duration: "30 minutes"
      },
      {
        name: "Shoulder Wax",
        price: "$25.00",
        duration: "30 minutes"
      },
      {
        name: "Stomach Wax",
        price: "$35.00",
        duration: "30 minutes"
      },
      {
        name: "Toes Wax",
        price: "$15.00",
        duration: "15 minutes"
      },
      {
        name: "Underarm Wax",
        price: "$25.00",
        duration: "15 minutes"
      },
      {
        name: "Over Tattoo Wax",
        price: "$40.00",
        duration: "30 minutes",
        description: "Your tattoo must be 6+ months healed before booking this service. Will make your tattoos appear brighter and more visible. If your tattoo does not look healed, I will not be able to follow through with the service."
      }
    ]
  },
  {
    title: "Combo Services",
    description: "Save with our specially designed service combinations",
    icon: "💝",
    services: [
      {
        name: "Lip + Chin Wax Combo",
        price: "$20.00",
        duration: "25 minutes"
      },
      {
        name: "Lip + Brow Wax Combo",
        price: "$30.00",
        duration: "30 minutes"
      },
      {
        name: "Brow Wax + Tint Combo",
        price: "$45.00",
        duration: "30 minutes"
      }
    ]
  },
  {
    title: "Face Wax Services",
    description: "Expert facial waxing for a polished, refined look",
    icon: "✨",
    services: [
      {
        name: "Brow Wax",
        price: "$25.00",
        duration: "25 minutes"
      },
      {
        name: "Chin Wax",
        price: "$15.00",
        duration: "15 minutes"
      },
      {
        name: "Full Face Wax",
        price: "$50.00",
        duration: "30 minutes",
        description: "Includes Lip, Chin, and Sides of Face"
      },
      {
        name: "Lip Wax",
        price: "$10.00",
        duration: "15 minutes"
      },
      {
        name: "Side Wisps/ Neck Wisps",
        price: "$15.00",
        duration: "25 minutes"
      },
      {
        name: "Neck Wax",
        price: "$20.00",
        duration: "25 minutes"
      },
      {
        name: "Between the Brow Wax",
        price: "$8.00",
        duration: "10 minutes",
        description: "This is not a full brow service. This will only take care of the hair in between your eyebrows."
      }
    ]
  },
  {
    title: "Men Wax Services",
    description: "Professional waxing services tailored for men",
    icon: "👔",
    services: [
      {
        name: "Men's Brow Wax",
        price: "$25.00",
        duration: "15 minutes"
      },
      {
        name: "Men's Full Arm Wax",
        price: "$70.00",
        duration: "45 minutes"
      },
      {
        name: "Men's Half Arm Wax",
        price: "$50.00",
        duration: "30 minutes"
      },
      {
        name: "Men's Chest Wax",
        price: "$60.00",
        duration: "45 minutes"
      },
      {
        name: "Men's Full Leg Wax",
        price: "$100.00",
        duration: "1 hour 30 minutes"
      },
      {
        name: "Men's Half Leg",
        price: "$55.00",
        duration: "1 hour"
      },
      {
        name: "Men's Buttock Wax",
        price: "$50.00",
        duration: "50 minutes"
      },
      {
        name: "Men's Stomach Wax",
        price: "$50.00",
        duration: "30 minutes"
      },
      {
        name: "Men's Shoulder Wax",
        price: "$45.00",
        duration: "30 minutes"
      },
      {
        name: "Men's Underarm Wax",
        price: "$30.00",
        duration: "25 minutes"
      }
    ]
  },
  {
    title: "Minor Wax Services",
    description: "Specialized waxing services for teens aged 13-15 with parental consent",
    icon: "🌸",
    services: [
      {
        name: "Minor Full Leg Wax",
        price: "$75.00",
        duration: "1 hour",
        description: "Must be 13-15 years old for this service. Parental consent is required. Guardian must remain in the building during service."
      },
      {
        name: "Minor Half Leg Wax (Upper or Lower)",
        price: "$40.00",
        duration: "45 minutes",
        description: "Must be 13-15 years old for this service. Parental consent is required. Guardian must remain in the building during service."
      },
      {
        name: "Minor Underarm Wax",
        price: "$20.00",
        duration: "15 minutes",
        description: "Must be 13-15 years old for this service. Parental consent is required. Guardian must remain in the building during service."
      },
      {
        name: "Minor French Bikini Wax",
        price: "$40.00",
        duration: "25 minutes",
        description: "Must be 13-15 years old for this service. This wax only covers what would be shown outside of a bikini. No Butt Strips. Parental consent is required. Guardian must remain in the room during service."
      },
      {
        name: "Minor Brow Waxing",
        price: "$20.00",
        duration: "20 minutes",
        description: "Must be between the ages of 13-15 years old for this service. Parental consent is required. Guardian must remain in the building during service."
      },
      {
        name: "Minor Between the Brow",
        price: "$8.00",
        duration: "10 minutes",
        description: "Parental Consent is needed. This service only includes the hairs in between the brow. This is the only service where I will accept clients as young as 10."
      }
    ]
  },
  {
    title: "Other Services",
    description: "Additional beauty and maintenance services",
    icon: "💫",
    services: [
      {
        name: "Vajazzle✨✨✨",
        price: "$6.00",
        duration: "10 minutes",
        description: "You can only book this service if you have had a Brazilian, French, or Tweenie Wax from me in the last 3 days! Vajazzles only last for a minimum of 48 hours. Perfect for my ladies who want to add a little bling to their fresh wax!"
      },
      {
        name: "Brow Tweeze",
        price: "$20.00",
        duration: "25 minutes"
      },
      {
        name: "Brow Tint",
        price: "$25.00",
        duration: "30 minutes"
      },
      {
        name: "Brow Consultation",
        price: "Free",
        duration: "15 minutes",
        description: "We will go over brow shaping, brow history, and future goals for your brows."
      },
      {
        name: "Wax Touch Up",
        price: "Free",
        duration: "10 minutes",
        description: "This is only in the case that I missed a spot (rare). If you went home and saw a few hairs leftover in the spot that I waxed, come back so I can fix it free of charge!"
      }
    ]
  },
  {
    title: "Products",
    description: "Professional aftercare and maintenance products",
    icon: "🛍️",
    services: [
      {
        name: "Numbing Spray",
        price: "$15.00",
        duration: "5 minutes",
        description: "Perfect for my clients who want to experience a little less pain and be a little more at ease during their service. This spray is designed specifically for waxing services and will help alleviate some of the initial sting during service."
      },
      {
        name: "Finipil",
        price: "$20.00",
        duration: "5 minutes",
        description: "Need to re-up on your aftercare but not ready for your next wax? Let's get this product in your hands! Finipil is an anti-septic cream that is used to treat ingrown hairs and a plethora of other skin concerns."
      },
      {
        name: "Bushbalm Ingrown Hair Oil",
        price: "$26.00",
        duration: "5 minutes",
        description: "Need to re-up on your aftercare but not ready for your next wax? Let's get this product in your hands! This product is curated specifically for intimate waxing areas. This oil will moisturize and help reduce ingrowns."
      },
      {
        name: "Bushbalm Dark Spot Oil",
        price: "$26.00",
        duration: "5 minutes",
        description: "Need to re-up on your aftercare but not ready for your next wax? Let's get this product in your hands! This product is curated specifically for intimate waxing areas. This oil will moisturize and help reduce hyperpigmentation."
      },
      {
        name: "Bushbalm Ingrown Hair Exfoliating Scrub",
        price: "$23.00",
        duration: "5 minutes",
        description: "Need to re-up on your aftercare but not ready for your next wax? Let's get this product in your hands! This product is curated specifically for intimate waxing areas. This scrub will exfoliate and help reduce ingrowns."
      },
      {
        name: "Bushbalm Dark Spot Exfoliating Scrub",
        price: "$23.00",
        duration: "5 minutes",
        description: "Need to re-up on your aftercare but not ready for your next wax? Let's get this product in your hands! This product is curated specifically for intimate waxing areas. This scrub will exfoliate and help reduce hyperpigmentation."
      },
      {
        name: "Bushbalm Roller Rescue Soothing Serum",
        price: "$20.00",
        duration: "5 minutes",
        description: "Need to re-up on your aftercare but not ready for your next wax? Let's get this product in your hands! This product is curated specifically for intimate waxing areas. This serum will exfoliate (contains chemical exfoliants) and help reduce ingrowns."
      },
      {
        name: "Bushbalm Nourishing Body Wash",
        price: "$20.00",
        duration: "5 minutes",
        description: "Need to re-up on your aftercare but not ready for your next wax? Let's get this product in your hands! This body wash is safe for intimate areas and pH balanced. Works great when paired with an exfoliating glove."
      }
    ]
  },
  // Add other categories...
];

export default function ServiceCategories() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [modalPage, setModalPage] = useState(0);

  // Calculate how many categories to show at once (3)
  const categoriesPerPage = 3;
  const totalPages = Math.ceil(serviceCategories.length / categoriesPerPage);

  // For modal carousel
  const itemsPerPage = 3;
  const getPageCount = (serviceCount: number) => Math.ceil(serviceCount / itemsPerPage);

  const handleNextCategory = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevCategory = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    if (selectedCategory !== null) {
      const pageCount = getPageCount(serviceCategories[selectedCategory].services.length);
      setModalPage((prev) => (prev + 1) % pageCount);
    }
  };

  const handlePrev = () => {
    if (selectedCategory !== null) {
      const pageCount = getPageCount(serviceCategories[selectedCategory].services.length);
      setModalPage((prev) => (prev - 1 + pageCount) % pageCount);
    }
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium text-center mb-4">Our Services</h2>
        <p className="text-center text-[#2D3142]/60 mb-16 max-w-xl mx-auto">
          Discover our range of professional waxing services tailored to your needs
        </p>

        {/* Service Categories Carousel */}
        <div className="relative">
          {/* Categories Container */}
          <div className="overflow-hidden px-8">
            <motion.div
              animate={{ x: `-${currentPage * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6"
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-[calc(33.333%-1rem)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    onClick={() => {
                      setSelectedCategory(index);
                      setIsModalOpen(true);
                    }}
                    className="group relative bg-white rounded-3xl p-8 shadow-sm border border-[#FF69B4]/10 
                             hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden h-full"
                  >
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF69B4]/5 to-[#FF1493]/5 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <span className="text-4xl mb-6 block">{category.icon}</span>
                      <h3 className="text-xl font-medium mb-3 text-[#2D3142]">
                        {category.title}
                      </h3>
                      <p className="text-[#2D3142]/60 text-sm mb-6">
                        {category.description}
                      </p>
                      <span className="text-[#FF69B4] text-sm font-medium flex items-center gap-2">
                        View Services
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation and Progress Bar Container */}
          <div className="mt-8 flex justify-between items-center px-8">
            {/* Progress Bar */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === currentPage ? 'w-8 bg-[#FF69B4]' : 'w-4 bg-[#FF69B4]/20'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevCategory}
                className="bg-[#FF69B4]/10 hover:bg-[#FF69B4]/20 rounded-full p-3 backdrop-blur-sm transition-all"
              >
                <svg className="w-5 h-5 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNextCategory}
                className="bg-[#FF69B4]/10 hover:bg-[#FF69B4]/20 rounded-full p-3 backdrop-blur-sm transition-all"
              >
                <svg className="w-5 h-5 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedCategory !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-medium mb-2">
                    {serviceCategories[selectedCategory].title}
                  </h3>
                  <p className="text-[#2D3142]/60">
                    {serviceCategories[selectedCategory].description}
                  </p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#2D3142]/60 hover:text-[#FF69B4] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Services Carousel */}
              <div className="relative">
                {/* Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#FF69B4]/10 hover:bg-[#FF69B4]/20 rounded-full p-3 backdrop-blur-sm transition-all"
                >
                  <svg className="w-6 h-6 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#FF69B4]/10 hover:bg-[#FF69B4]/20 rounded-full p-3 backdrop-blur-sm transition-all"
                >
                  <svg className="w-6 h-6 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Services List */}
                <motion.div 
                  className="overflow-hidden px-8"
                >
                  <motion.div
                    animate={{ x: `-${modalPage * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="flex gap-4"
                  >
                    {serviceCategories[selectedCategory].services.map((service, index) => (
                      <motion.div
                        key={index}
                        className="flex-none w-[calc(33.333%-1rem)] bg-white rounded-xl p-6 border border-[#FF69B4]/10 hover:border-[#FF69B4]/30 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="mb-3">
                            <h4 className="font-medium text-lg mb-1">{service.name}</h4>
                            <div className="flex justify-between items-center">
                              <p className="text-sm text-[#2D3142]/60">{service.duration}</p>
                              <p className="font-medium text-[#FF69B4] text-lg">{service.price}</p>
                            </div>
                          </div>
                          
                          {service.description && (
                            <p className="text-sm text-[#2D3142]/70 mt-2 mb-4 border-t border-[#FF69B4]/10 pt-3 flex-grow">
                              {service.description}
                            </p>
                          )}
                          
                          <div className="mt-auto">
                            <Link 
                              href={`/book?service=${encodeURIComponent(service.name)}`}
                              className={`block w-full text-center text-sm text-white bg-[#FF69B4] py-2 rounded-full hover:bg-[#FF1493] transition-colors ${
                                selectedCategory === serviceCategories.length - 1 ? 'bg-[#FF69B4]/90' : ''
                              }`}
                            >
                              {selectedCategory === serviceCategories.length - 1 ? 'Add to Cart' : 'Book Now'}
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Progress Bar */}
                <div className="mt-8 flex justify-center items-center gap-2">
                  {Array.from({ length: getPageCount(serviceCategories[selectedCategory].services.length) }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setModalPage(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === modalPage ? 'w-8 bg-[#FF69B4]' : 'w-4 bg-[#FF69B4]/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
} 