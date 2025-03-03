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
                    <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white/90 tracking-tight">SKIN Regenesis</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <p className="text-xs text-white/50">Online now</p>
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
                <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-140px)] hide-scrollbar">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.type === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl backdrop-blur-xl ${
                          msg.type === "user"
                            ? "bg-white/10 text-white/90"
                            : "bg-black/20 text-white/90"
                        }`}
                      >
                        <div className="text-sm leading-relaxed">{msg.content}</div>
                        <p className="text-[11px] mt-1.5 text-white/40">
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
                      placeholder="Type your message..."
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
    </>
  );
} 