"use client";

import { motion } from "framer-motion";
import { PageTemplate } from "@/components/ui/page-template";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, MapPin, User, MessageSquare, CheckCircle } from "lucide-react";
import { useState } from "react";
import { format, addDays, isWeekend } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { ru } from "date-fns/locale";

// Generate next 14 business days
const generateAvailableDates = () => {
  const dates = [];
  const mskNow = toZonedTime(new Date(), 'Europe/Moscow');
  let currentDate = addDays(mskNow, 1); // Start from tomorrow
  
  while (dates.length < 14) {
    // Convert to MSK to check business days
    const mskDate = toZonedTime(currentDate, 'Europe/Moscow');
    if (!isWeekend(mskDate)) {
      dates.push(mskDate);
    }
    currentDate = addDays(currentDate, 1);
  }
  return dates;
};

// Format date for display in MSK timezone
const formatDate = (date: Date) => {
  const mskDate = toZonedTime(date, 'Europe/Moscow');
  return format(mskDate, 'EEEE, d MMMM', { locale: ru });
};

const meetingTypes = [
  {
    id: "consultation",
    title: "Консультация по цифровой трансформации",
    duration: "45 минут",
    description: "Обсуждение стратегии цифровой трансформации вашего бизнеса"
  },
  {
    id: "ai-strategy",
    title: "AI-стратегия для бизнеса",
    duration: "60 минут", 
    description: "Планирование внедрения ИИ-решений в ваши бизнес-процессы"
  },
  {
    id: "project-discussion",
    title: "Обсуждение проекта",
    duration: "30 минут",
    description: "Первичное обсуждение вашего проекта и возможностей сотрудничества"
  }
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [selectedMeetingType, setSelectedMeetingType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  // Generate time slots based on selected date
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9; // 9 AM MSK
    const endHour = 18; // 6 PM MSK
    
    // Get current time in MSK
    const mskNow = toZonedTime(new Date(), 'Europe/Moscow');
    
    // Generate all slots from 9:00 to 18:00
    for (let hour = startHour; hour <= endHour; hour++) {
      const hourStr = hour.toString().padStart(2, '0');
      
      // Add :00 slot
      slots.push({
        time: `${hourStr}:00`,
        isAvailable: true
      });
      
      // Add :30 slot (except for 18:30 which is after business hours)
      if (hour < endHour) {
        slots.push({
          time: `${hourStr}:30`,
          isAvailable: true
        });
      }
    }

    // If it's today, disable past time slots
    const selectedDateIsToday = selectedDate === mskNow.toISOString().split('T')[0];
    if (selectedDateIsToday) {
      return slots.map(slot => {
        const [slotHour, slotMinute] = slot.time.split(':').map(Number);
        const isPastSlot = slotHour < mskNow.getHours() || 
          (slotHour === mskNow.getHours() && slotMinute <= mskNow.getMinutes());
        
        return {
          ...slot,
          isAvailable: !isPastSlot
        };
      });
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();
  const availableDates = generateAvailableDates();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsBooked(true);
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isBooked) {
    return (
      <PageTemplate>
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center glass-card p-12"
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4 text-gp-primary">
                Встреча забронирована!
              </h1>
              <p className="text-gp-primary/80 mb-6">
                Мы отправили подтверждение на ваш email. Ожидайте ссылку на встречу за 15 минут до начала.
              </p>
              <div className="glass-subtle p-4 rounded-lg mb-6">
                <p className="text-sm text-gp-primary/70">
                  <strong>Дата:</strong> {selectedDate && formatDate(new Date(selectedDate))}<br/>
                  <strong>Время:</strong> {selectedTime} (МСК)<br/>
                  <strong>Тип встречи:</strong> {meetingTypes.find(t => t.id === selectedMeetingType)?.title}
                </p>
              </div>
              <Button 
                className="bg-white text-gp-primary hover:bg-white/90"
                onClick={() => window.location.href = '/'}
              >
                Вернуться на главную
              </Button>
            </motion.div>
          </div>
        </section>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gp-primary">
              Забронировать встречу
            </h1>
            <p className="text-xl text-gp-primary/80 mb-4">
              Выберите удобное время для обсуждения вашего проекта
            </p>
            <div className="flex items-center justify-center gap-2 text-gp-primary/60">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Время: Москва (МСК)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-4">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= stepNum 
                        ? 'bg-black text-white' 
                        : 'bg-white/20 text-gp-primary/60'
                    }`}>
                      {stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div className={`w-16 h-0.5 mx-2 ${
                        step > stepNum ? 'bg-black' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1: Meeting Type */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-center mb-8 text-gp-primary">
                  Выберите тип встречи
                </h2>
                <div className="grid gap-4">
                  {meetingTypes.map((type) => (
                    <motion.div
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedMeetingType(type.id)}
                      className={`glass-card p-6 cursor-pointer transition-all border ${
                        selectedMeetingType === type.id
                          ? 'border-black border-1'  // например, 4px толщиной и черная рамка
                          : 'border-gray-200 hover:bg-white/15'
                      }`}
                      
                    >
                      <div className="flex items-start justify-between ">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gp-primary mb-2">
                            {type.title}
                          </h3>
                          <p className="text-gp-primary/70 mb-2">
                            {type.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gp-primary/60">
                            <Clock className="w-4 h-4" />
                            <span>{type.duration}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="text-center">
                  <Button 
                    size="lg"
                    onClick={() => setStep(2)}
                    disabled={!selectedMeetingType}
                    className="bg-white text-gp-primary hover:bg-black hover:text-white px-8 py-6 text-lg"
                  >
                    Продолжить
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-semibold text-center text-gp-primary">
                  Выберите дату и время
                </h2>
                
                {/* Date Selection */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gp-primary flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Доступные даты
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {availableDates.map((date, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                        className={`glass-card p-3 text-sm transition-all ${
                          selectedDate === date.toISOString().split('T')[0]
                            ? 'ring-2 ring-gp-accent bg-white/20'
                            : 'hover:bg-white/15'
                        }`}
                      >
                        <div className="text-gp-primary font-medium">
                          {date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}
                        </div>
                        <div className="text-gp-primary/60 text-xs">
                          {date.toLocaleDateString('ru-RU', { weekday: 'short' })}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-medium mb-4 text-gp-primary flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Доступное время (МСК)
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                      {timeSlots.map((slot) => (
                        <motion.button
                          key={slot.time}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedTime(slot.time)}
                          disabled={!slot.isAvailable}
                          className={`
                            relative p-4 text-center rounded-lg transition-all
                            ${selectedTime === slot.time 
                              ? 'bg-black text-white ring-2 ring-black'
                              : slot.isAvailable 
                                ? 'bg-white hover:bg-gray-50 text-gp-primary border border-gray-200'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }
                          `}
                        >
                          <span className="text-base font-medium">{slot.time}</span>
                          {selectedTime === slot.time && (
                            <motion.div
                              layoutId="selected-time"
                              className="absolute inset-0 bg-black rounded-lg -z-10"
                              initial={false}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-center gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="px-8"
                  >
                    Назад
                  </Button>
                  <Button 
                    onClick={() => setStep(3)}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-white text-gp-primary hover:bg-white/90 px-8"
                  >
                    Продолжить
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-semibold text-center text-gp-primary">
                  Контактная информация
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите о вашем проекте или вопросах, которые хотели бы обсудить..."
                      className="mt-1"
                    />
                  </div>

                  {/* Booking Summary */}
                  <div className="glass-subtle p-6 rounded-lg">
                    <h3 className="font-semibold text-gp-primary mb-4">Детали встречи:</h3>
                    <div className="space-y-2 text-sm text-gp-primary/80">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{meetingTypes.find(t => t.id === selectedMeetingType)?.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedDate && formatDate(new Date(selectedDate))}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{selectedTime} (МСК)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>{meetingTypes.find(t => t.id === selectedMeetingType)?.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="px-8"
                    >
                      Назад
                    </Button>
                    <Button 
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email}
                      className="bg-white text-gp-primary hover:bg-white/90 px-8"
                    >
                      {isSubmitting ? "Бронирование..." : "Забронировать встречу"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
} 