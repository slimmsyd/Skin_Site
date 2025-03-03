'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addDays, parse, isAfter, isBefore, addMinutes } from 'date-fns';
import { toZonedTime, fromZonedTime } from 'date-fns-tz';

interface BookingCalendarProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceDuration: string;
}

export default function BookingCalendar({ isOpen, onClose, serviceName, serviceDuration }: BookingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Convert duration string to minutes
  const getDurationMinutes = (duration: string) => {
    const hours = duration.includes('hour') ? parseInt(duration) * 60 : 0;
    const minutes = duration.includes('minutes') ? parseInt(duration) : 0;
    return hours + minutes;
  };

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', 
    '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM'
  ];

  const getDaysInMonth = (date: Date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    return eachDayOfInterval({ start, end });
  };

  const isDateAvailable = (date: Date) => {
    const now = new Date();
    return isAfter(date, now);
  };

  const isTimeAvailable = (time: string) => {
    if (!selectedDate) return false;
    
    const timeDate = parse(time, 'h:mm aa', selectedDate);
    const now = new Date();
    
    // Convert to EST
    const estTime = toZonedTime(timeDate, 'America/New_York');
    const estNow = toZonedTime(now, 'America/New_York');
    
    return isAfter(estTime, estNow);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // Handle booking logic here
      console.log('Booking:', {
        service: serviceName,
        date: format(selectedDate, 'MM/dd/yyyy'),
        time: selectedTime
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-2xl overflow-hidden shadow-xl"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-medium mb-2">Book Appointment</h3>
                <p className="text-[#2D3142]/60 text-sm">{serviceName}</p>
              </div>
              <button
                onClick={onClose}
                className="text-[#2D3142]/60 hover:text-[#FF69B4] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Calendar Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-medium">{format(currentDate, 'MMMM yyyy')}</h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                    className="p-2 rounded-full hover:bg-[#FF69B4]/10 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                    className="p-2 rounded-full hover:bg-[#FF69B4]/10 transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#FF69B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm text-[#2D3142]/60 py-2">
                    {day}
                  </div>
                ))}
                {getDaysInMonth(currentDate).map((date, i) => {
                  const isAvailable = isDateAvailable(date);
                  const isSelected = selectedDate && isSameDay(date, selectedDate);
                  
                  return (
                    <button
                      key={i}
                      onClick={() => isAvailable && handleDateSelect(date)}
                      disabled={!isAvailable}
                      className={`
                        aspect-square rounded-full text-sm flex items-center justify-center
                        transition-all duration-200
                        ${!isSameMonth(date, currentDate) ? 'text-[#2D3142]/20' : ''}
                        ${isAvailable ? 'hover:bg-[#FF69B4]/10' : 'cursor-not-allowed opacity-50'}
                        ${isSelected ? 'bg-[#FF69B4] text-white' : ''}
                      `}
                    >
                      {format(date, 'd')}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4">Available Times</h4>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                  {timeSlots.map((time) => {
                    const isAvailable = isTimeAvailable(time);
                    const isTimeSelected = time === selectedTime;
                    
                    return (
                      <button
                        key={time}
                        onClick={() => isAvailable && handleTimeSelect(time)}
                        disabled={!isAvailable}
                        className={`
                          py-2 px-4 rounded-full text-sm
                          transition-all duration-200
                          ${isAvailable ? 'hover:bg-[#FF69B4]/10' : 'cursor-not-allowed opacity-50'}
                          ${isTimeSelected ? 'bg-[#FF69B4] text-white' : 'border border-[#FF69B4]/10'}
                        `}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Booking Button */}
            <button
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime}
              className={`
                w-full py-3 rounded-full text-white text-sm font-medium
                transition-all duration-200 transform
                ${selectedDate && selectedTime 
                  ? 'bg-[#FF69B4] hover:bg-[#FF1493] active:scale-95'
                  : 'bg-[#FF69B4]/50 cursor-not-allowed'
                }
              `}
            >
              Confirm Booking
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 