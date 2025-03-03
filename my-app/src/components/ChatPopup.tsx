"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookingCalendar from '@/components/BookingCalendar';

interface Message {
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  includeBookingButton?: boolean;
}

interface ServiceOption {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
}

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBookingCalendar, setShowBookingCalendar] = useState(false);
  const [showServiceSelection, setShowServiceSelection] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      type: "assistant",
      content: "👋 Hi there! I'm Gabrielle, a Master Esthetician at SKIN Regenesis. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const serviceOptions: ServiceOption[] = [
    {
      id: "brazilian",
      name: "Brazilian Wax",
      duration: "30 min",
      price: "$60",
      description: "Complete hair removal from the pubic region, including front and back."
    },
    {
      id: "legs",
      name: "Full Legs Wax",
      duration: "45 min",
      price: "$70",
      description: "Complete hair removal from the entire leg, including thighs and calves."
    },
    {
      id: "bikini",
      name: "Bikini Wax",
      duration: "20 min",
      price: "$40",
      description: "Hair removal from the bikini line area only."
    },
    {
      id: "underarm",
      name: "Underarm Wax",
      duration: "15 min",
      price: "$25",
      description: "Complete hair removal from the underarm area."
    },
    {
      id: "facial",
      name: "Facial Wax",
      duration: "20 min",
      price: "$35",
      description: "Hair removal from facial areas including eyebrows, upper lip, and chin."
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add initial messages
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(prev => [...prev, 
        {
          type: "assistant",
          content: "I can answer questions about our waxing services, skincare advice, or help you understand our booking process. What would you like to know?",
          timestamp: new Date()
        }
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSelectService = (service: ServiceOption) => {
    setSelectedService(service);
    setShowServiceSelection(false);
    setShowBookingCalendar(true);
    
    // Add a message about the selected service
    setMessages(prev => [...prev, 
      {
        type: "assistant",
        content: `You've selected ${service.name} (${service.duration}, ${service.price}). Now you can choose your preferred date and time.`,
        timestamp: new Date()
      }
    ]);
  };

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = {
      type: "user" as const,
      content: message,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    // Check if the message is about booking steps
    const bookingKeywords = ['booking steps', 'how to book', 'steps to book', 'booking process', 'what happens after booking'];
    const isBookingQuestion = bookingKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );

    if (isBookingQuestion) {
      // Provide booking steps information directly
      const bookingStepsMessage = {
        type: "assistant" as const,
        content: `Here's our booking process:

1. Confirmation Email: After booking, you'll receive an immediate confirmation email with your appointment details.

2. Address Details: The salon address will be sent immediately after scheduling your appointment.

3. Door Access: Your door entry code will be sent on the day of your appointment.

4. Enjoy Your Service: Arrive at your appointment time and enjoy your premium waxing experience.

Would you like to book an appointment now?`,
        timestamp: new Date(),
        includeBookingButton: true
      };
      
      setTimeout(() => {
        setMessages((prev) => [...prev, bookingStepsMessage]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('/api/chatBot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message.trim() }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      // Check if the response mentions booking
      const responseText = data.message || "";
      const includeBookingButton = responseText.toLowerCase().includes('book') || 
                                  responseText.toLowerCase().includes('appointment') ||
                                  responseText.toLowerCase().includes('schedule');
      
      const assistantMessage = {
        type: "assistant" as const,
        content: responseText || "I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly.",
        timestamp: new Date(),
        includeBookingButton
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      
      const errorMessage = {
        type: "assistant" as const,
        content: "I apologize, but I'm having trouble connecting right now. Please try again later or contact us directly.",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookingButtonClick = () => {
    setShowServiceSelection(true);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-8 right-8 z-50 ">
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-2xl p-3.5 rounded-2xl border border-white/20 transition-all duration-300"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse absolute top-2 right-2"></span>
          <svg 
            className="w-6 h-6 text-black" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "auto" : "600px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-8 w-[400px] bg-black/10 backdrop-blur-3xl rounded-3xl shadow-2xl z-50 overflow-hidden border border-white/20 "
            style={{ maxHeight: "75vh" }}
          >
            {/* Header */}
            <div className="p-5 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                    <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#FF69B4]/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7 opacity-80">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-white/90 tracking-tight">Gabrielle | Master Esthetician</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <p className="text-xs text-white/50">SKIN Regenesis Expert</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-2 hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {isMinimized ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 12H6" />
                      )}
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-167px)] hide-scrollbar">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${
                        msg.type === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl backdrop-blur-xl ${
                          msg.type === "user"
                            ? "bg-white/10 text-white/90"
                            : "bg-black/20 text-white/90"
                        }`}
                      >
                        <div className="text-sm leading-relaxed whitespace-pre-line">
                          {msg.content.split('\n').map((line, i) => {
                            // Check if line starts with a number followed by a period (numbered list)
                            if (/^\d+\.\s/.test(line)) {
                              const [number, ...rest] = line.split(/\.\s/);
                              const content = rest.join('. ');
                              return (
                                <div key={i} className="flex items-start gap-2 mb-2">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FF69B4]/30 flex items-center justify-center text-xs font-medium">
                                    {number}
                                  </span>
                                  <span className="flex-1">
                                    <span className="font-medium">{content.split(':')[0]}:</span>
                                    {content.includes(':') ? content.split(':').slice(1).join(':') : ''}
                                  </span>
                                </div>
                              );
                            }
                            return <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>;
                          })}
                        </div>
                        <p className="text-[11px] mt-1.5 text-white/40">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      
                      {/* Booking Button */}
                      {msg.includeBookingButton && msg.type === "assistant" && (
                        <button
                          onClick={handleBookingButtonClick}
                          className="mt-2 bg-[#FF69B4] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#FF1493] transition-colors"
                        >
                          Book Appointment
                        </button>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-black/20 backdrop-blur-xl py-3 px-4 rounded-2xl flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse delay-150"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse delay-300"></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-5 border-t border-white/[0.08] bg-black/[0.15]">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Ask me about waxing services..."
                      className="flex-1 py-2.5 px-4 rounded-xl bg-white/[0.07] border border-white/[0.08] focus:outline-none focus:border-white/20 text-[15px] text-white/90 placeholder-white/30 backdrop-blur-xl"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isLoading}
                      className={`p-2.5 rounded-xl ${
                        isLoading
                          ? "bg-white/5 cursor-not-allowed"
                          : "bg-white/[0.07] hover:bg-white/[0.12]"
                      } text-white/80 backdrop-blur-xl transition-colors`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Selection Modal */}
      {showServiceSelection && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center">
          <div className="bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-medium">Select a Service</h2>
              <button 
                onClick={() => setShowServiceSelection(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {serviceOptions.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => handleSelectService(service)}
                  className="bg-white border border-[#FF69B4]/20 rounded-2xl p-4 cursor-pointer hover:shadow-md transition-all hover:border-[#FF69B4]/50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg">{service.name}</h3>
                    <span className="text-[#FF69B4] font-medium">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{service.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Booking Calendar Modal */}
      {showBookingCalendar && selectedService && (
        <BookingCalendar 
          isOpen={showBookingCalendar} 
          onClose={() => setShowBookingCalendar(false)}
          serviceName={selectedService.name}
          serviceDuration={selectedService.duration}
        />
      )}
    </>
  );
} 