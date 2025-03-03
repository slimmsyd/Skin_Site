"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      type: "assistant",
      content: "👋 Hi! How can I help you book your waxing appointment today?",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
          content: "I can help you book an appointment, answer questions about our services, or provide aftercare tips. What would you like to know?",
          timestamp: new Date()
        }
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

    const responseMessage = {
      type: "assistant" as const,
      content: "I'd be happy to help you book an appointment! You can visit our booking page or call us at (555) 123-4567.",
      timestamp: new Date(),
    };

    setTimeout(() => {
      if (message.toLowerCase().includes("brazilian")) {
        responseMessage.content = "Our Brazilian Wax service is $60 for a 30-minute session. Would you like to book this service?";
      } else if (message.toLowerCase().includes("price") || message.toLowerCase().includes("cost")) {
        responseMessage.content = "Our services range from $8 to $100 depending on the treatment. You can view all our prices in the Services section.";
      } else if (message.toLowerCase().includes("book") || message.toLowerCase().includes("appointment")) {
        responseMessage.content = "Great! I can help you book an appointment. What service are you interested in?";
      }

      setMessages((prev) => [...prev, responseMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-8 left-0 right-0 z-50 mx-4 font-['Space_Grotesk']">
        <div className="backdrop-blur-xl bg-white shadow-sm rounded-full p-4 flex justify-between items-center max-w-7xl mx-auto border border-[#FF69B4]/10">
          <p className="text-[#2D3142]/60 ml-4">Ready for silky smooth skin?</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-[#FF69B4] text-white px-8 py-3 rounded-full hover:bg-[#FF1493] transition-all duration-300"
          >
            Chat With Us
          </button>
        </div>
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
              height: isMinimized ? "auto" : "500px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-xl z-50 overflow-hidden border border-[#FF69B4]/20 font-['Space_Grotesk']"
            style={{ maxHeight: "70vh" }}
          >
            {/* Header */}
            <div className="p-4 border-b border-[#FF69B4]/10 bg-gradient-to-r from-[#fdf2f8] to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF69B4] to-[#FF1493] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#2D3142]">SKIN Regenesis</h3>
                    <p className="text-xs text-[#2D3142]/60">Usually replies within minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 hover:bg-[#fdf2f8] rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {isMinimized ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      )}
                    </svg>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-[#fdf2f8] rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages - Added hide-scrollbar class */}
                <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-140px)] hide-scrollbar">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.type === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          msg.type === "user"
                            ? "bg-[#FF69B4] text-white"
                            : "bg-[#fdf2f8] text-[#2D3142]"
                        }`}
                      >
                        <div className="text-sm">{msg.content}</div>
                        <p className="text-xs mt-1 opacity-70">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-[#fdf2f8] p-3 rounded-2xl flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#FF69B4]/30 animate-pulse"></div>
                        <span className="text-sm text-[#2D3142]/70">Typing...</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-[#FF69B4]/10 bg-white">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 p-2 rounded-xl border border-[#FF69B4]/20 focus:outline-none focus:border-[#FF69B4] text-sm"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isLoading}
                      className={`p-2 rounded-xl ${
                        isLoading
                          ? "bg-[#FF69B4]/50 cursor-not-allowed"
                          : "bg-[#FF69B4] hover:bg-[#FF1493]"
                      } text-white transition-colors`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 