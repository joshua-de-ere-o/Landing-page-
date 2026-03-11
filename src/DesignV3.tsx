import { motion } from "motion/react";
import { 
  CheckCircle2, 
  MessageSquare, 
  Calendar, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  ArrowRight,
  User,
  Bot,
  AlertCircle,
  XCircle,
  Database,
  Layout,
  Bell,
  Cpu,
  Sparkles,
  Smartphone,
  Globe,
  Lock
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- Constants ---
const WHATSAPP_NUMBER = "593963803030"; // WhatsApp del usuario (Ecuador)
const DEMO_URL = "https://id-preview--0d55e48a-f1f4-428f-a14a-34edef8d4d6b.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRFFTekNRaXcwZ1BoNnIzbkdudzhyZFpuVTJKMiIsInByb2plY3RfaWQiOiIwZDU1ZTQ4YS1mMWY0LTQyOGYtYTE0YS0zNGVkZWY4ZDRkNmIiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6IjBkNTVlNDhhLWYxZjQtNDI4Zi1hMTRhLTM0ZWRlZjhkNGQ2YiIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzM4MjUyMDUsIm5iZiI6MTc3MzIyMDQwNSwiaWF0IjoxNzczMjIwNDA1fQ.T2fdLfo1cjTqf9mrOVj_BwJcVZ4OQE3O2xPum18qLdukXVV4hhaeswkFs6tm2DINDiPcGkkdO9wEsoD23VQM8f_2QW0XmjNMNTyp-tznomPcFgxvSn5QTnkNR0sWjHQUJO_M5iYY9Px-qe3niFctxQvEeQlzqgIn8MidL8rsngHJK0uLH_RjsJLSbr1ikI3FFs4E0sUgX9pxsFnUzHEpCJZclaY2bj-wDOe4Bq2S6FrS6G3YKH_qxUdu91TJRP9kDzzjb3r1-wGNjFgY7x484CIR_ShdU45LYf3O6jKqnIhJA7fPL7S2cc5ST52jc3GBSGvpuSw_VW3y923-7UfacO7FsqaM81188HtLXa2XLos3SNahJXR55bMyyiZsQkKTeNFYo0er5qmYEZ_dKU0arpyRPbxLLDIpLnWqHVTW6mcODsmS2sSb3RONf4YQAPOBNrRPujDxQQFiXbJY2aY0xW7-SkpOxlHXBatqIbGqstQ0TKH6T1tVi_t1Zdo94IeGG7PcCHwJKt8dp6uWYJGSH9SWqnQxekDr-AxTFHBpZpiVs58V27HlFu5H856J9hhlZh16qmzvbO5Z2C674axpGvxM7PLS0Cc2cRyheCfgourDZMr8wt0JBvtSmAXCnvD2xjmBARHrcs65_zb1EKc1rNejNQlY_81-wMOj-f-ty90";

const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// --- Presentation Component ---

const SlideContent = ({ slide, isPrint = false }: { slide: any; isPrint?: boolean }) => (
  <div className={`flex flex-col items-center text-center gap-8 ${isPrint ? 'p-10 h-screen justify-center' : ''}`}>
    {!slide.messages && <div className={isPrint ? 'text-emerald-600' : ''}>{slide.icon}</div>}
    <div className="space-y-4">
      <h2 className={`font-display font-bold ${isPrint ? 'text-4xl text-black' : 'text-3xl sm:text-5xl text-white'}`}>
        {slide.title}
      </h2>
      <p className="text-lg sm:text-xl text-emerald-500 font-medium italic">
        {slide.subtitle}
      </p>
    </div>
    
    {slide.content && (
      <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${isPrint ? 'text-zinc-700' : 'text-zinc-400'}`}>
        {slide.content}
      </p>
    )}

    {slide.points && (
      <ul className="text-left space-y-3 max-w-xl">
        {slide.points.map((point: string, i: number) => (
          <li key={i} className={`flex items-start gap-4 text-base ${isPrint ? 'text-zinc-800' : 'text-zinc-300'}`}>
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
            {point}
          </li>
        ))}
      </ul>
    )}

    {slide.messages && (
      <div className={`w-full max-w-2xl mx-auto space-y-3 p-6 rounded-[2rem] ${isPrint ? 'bg-zinc-100 border border-zinc-200' : 'bg-zinc-900/50 border border-white/5'}`}>
        {slide.messages.map((msg: any, i: number) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm text-left whitespace-pre-line ${
              msg.role === 'user' 
                ? (isPrint ? 'bg-zinc-300 text-black' : 'bg-zinc-800 text-white') 
                : (isPrint ? 'bg-emerald-100 text-black border border-emerald-200' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20')
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const Presentation = ({ onClose }: { onClose: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Recepcionista IA",
      subtitle: "La evolución de la atención al cliente en WhatsApp",
      content: "Automatización inteligente 24/7 para agendar citas y gestionar clientes sin intervención humana.",
      icon: <Bot className="w-20 h-20 text-emerald-500" />,
      type: "cover"
    },
    {
      title: "¿El problema?",
      subtitle: "Estás perdiendo dinero cada vez que no respondes",
      points: [
        "60% de los clientes no dejan mensaje si no respondes al instante.",
        "La gestión manual de citas consume horas de productividad.",
        "Perder un mensaje es perder una venta."
      ],
      icon: <AlertCircle className="w-16 h-16 text-red-500" />
    },
    {
      title: "La Solución",
      subtitle: "Tu negocio nunca duerme",
      points: [
        "Atención inmediata 24/7 en WhatsApp.",
        "Agendamiento automático en tu calendario.",
        "Respuestas precisas basadas en tu conocimiento.",
        "Escalabilidad sin contratar más personal."
      ],
      icon: <Zap className="w-16 h-16 text-emerald-500" />
    },
    {
      title: "¿Cómo funciona?",
      subtitle: "Un flujo perfecto en 4 pasos",
      points: [
        "1. El cliente escribe por WhatsApp.",
        "2. La IA responde y califica la necesidad.",
        "3. El cliente elige un horario disponible.",
        "4. La cita se agenda y tú recibes la notificación."
      ],
      icon: <Layout className="w-16 h-16 text-blue-500" />
    },
    {
      title: "Caso Real de Uso",
      subtitle: "Mira a tu Recepcionista IA en acción",
      type: "mockup",
      messages: [
        { role: "user", text: "Hola, me gustaría información sobre sus servicios." },
        { role: "bot", text: "¡Hola! Bienvenido a [AQUÍ PUEDE IR EL NOMBRE DE TU NEGOCIO]. 🌟 Soy tu asistente virtual y estoy aquí para que tu experiencia sea impecable desde el primer segundo.\n\nOfrecemos servicios de alta gama diseñados para que te sientas y te veas mejor que nunca. Para darte una atención personalizada, ¿podrías decirme tu nombre y qué servicio te interesa?\n\nSi ya estás listo para transformar tu día, puedes agendar tu cita directamente aquí." },
        { role: "user", text: "Soy Carlos, quiero una cita para una limpieza dental mañana a las 10:00 AM." },
        { role: "bot", text: "¡Mucho gusto, Carlos! Déjame revisar... 🔍\n\nPara mañana a las 10:00 AM ya tenemos la agenda llena, pero no te preocupes, ¡queremos verte! Tengo estos horarios disponibles para ti:\n\n✅ 11:30 AM\n✅ 03:00 PM\n✅ 04:30 PM\n\n¿Cuál de estos te queda mejor?" },
        { role: "user", text: "A las 3:00 PM está perfecto." },
        { role: "bot", text: "¡Excelente elección, Carlos! 🙌 Tu cita para Limpieza Dental ha sido confirmada para mañana a las 03:00 PM.\n\nTe hemos enviado un recordatorio a tu calendario. ¡Nos vemos pronto!" }
      ]
    },
    {
      title: "Planes de Inversión",
      subtitle: "Escala según tus necesidades",
      content: "Desde el Plan Inicial para profesionales hasta el Sistema de Automatización Completa para empresas de alto volumen.",
      icon: <TrendingUp className="w-16 h-16 text-emerald-500" />
    },
    {
      title: "¿Listo para empezar?",
      subtitle: "Transforma tu WhatsApp hoy mismo",
      content: "Solicita tu diagnóstico gratuito y descubre cuánto tiempo y dinero puedes ahorrar con IA.",
      icon: <CheckCircle2 className="w-20 h-20 text-emerald-500" />,
      type: "cta"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col overflow-hidden print:bg-white print:text-black print:overflow-visible">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: landscape; margin: 0; }
          body { overflow: visible !important; }
          .no-print { display: none !important; }
          .page-break { page-break-after: always; }
        }
      `}} />
      
      {/* Header Controls */}
      <div className="flex items-center justify-between p-6 border-b border-white/5 bg-black/50 backdrop-blur-md print:hidden">
        <div className="flex items-center gap-3">
          <Bot className="text-emerald-500 w-6 h-6" />
          <span className="font-bold text-white">Presentación Comercial</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-black rounded-xl text-sm font-bold transition-all hover:bg-emerald-400"
          >
            Descargar PDF
          </button>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-all"
          >
            <XCircle className="w-6 h-6 text-zinc-500" />
          </button>
        </div>
      </div>

      {/* Screen View */}
      <div className="flex-grow flex items-center justify-center p-4 sm:p-12 relative overflow-hidden print:hidden">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="max-w-4xl w-full glass-card p-12 sm:p-20 rounded-[3rem] border-white/5"
        >
          <SlideContent slide={slides[currentSlide]} />
          
          <div className="mt-8 text-center text-zinc-600 text-sm font-mono">
            Slide {currentSlide + 1} de {slides.length}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center gap-4">
          <button 
            onClick={prevSlide}
            className="p-4 bg-zinc-900 border border-white/5 rounded-full hover:bg-zinc-800 transition-all"
          >
            <ArrowRight className="w-6 h-6 text-white rotate-180" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-4 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-all"
          >
            <ArrowRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

      {/* Print View (Only visible during print) */}
      <div className="hidden print:block">
        {slides.map((slide, i) => (
          <div key={i} className="page-break">
            <SlideContent slide={slide} isPrint={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Components ---

const Navbar = ({ onOpenPresentation }: { onOpenPresentation: () => void }) => (
  <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/20">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      <div className="flex items-center gap-2.5 group cursor-pointer">
        <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-white/5">
          <Bot className="text-black w-5 h-5" />
        </div>
        <span className="font-display font-bold text-2xl tracking-tighter text-white">
          Recepcionista<span className="text-emerald-500">IA</span>
        </span>
      </div>
      
      <nav className="hidden lg:flex items-center gap-10">
        {[
          { name: "Funciones", id: "funciones" },
          { name: "Servicio", id: "servicio" },
          { name: "Precios", id: "precios" }
        ].map((item) => (
          <a 
            key={item.name}
            href={`#${item.id}`} 
            className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors relative group"
          >
            {item.name}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
          </a>
        ))}
        <button 
          onClick={onOpenPresentation}
          className="text-xs font-bold uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors relative group flex items-center gap-2"
        >
          Presentación
          <Sparkles className="w-3 h-3" />
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
        </button>
      </nav>

      <div className="flex items-center gap-6">
        {/* Button removed as per user request */}
      </div>
    </div>
  </header>
);

const FeatureCard = ({ title, desc, icon, className = "" }: { title: string; desc: string; icon: any; className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass-card p-8 rounded-[2rem] flex flex-col gap-4 group ${className}`}
  >
    <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 flex items-center justify-center border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-500">
      {icon}
    </div>
    <div className="space-y-2">
      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const Marquee = () => {
  const items = [
    "Clínicas Médicas", "Spas & Estética", "Despachos Contables", 
    "Academias de Baile", "Talleres Mecánicos", "Consultorios Dentales",
    "Gimnasios & Fitness", "Inmobiliarias", "Escuelas de Idiomas"
  ];
  
  return (
    <div className="relative overflow-hidden py-12 border-y border-white/5 bg-zinc-950/30">
      <div className="flex gap-12 animate-marquee-left whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-zinc-500 font-display font-medium text-sm uppercase tracking-[0.2em] opacity-50 hover:opacity-100 hover:text-emerald-500 transition-all duration-300">
            <Sparkles className="w-3 h-3 text-emerald-500/50" />
            {item}
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export default function DesignV3() {
  const [showPresentation, setShowPresentation] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {showPresentation && <Presentation onClose={() => setShowPresentation(false)} />}
      <Navbar onOpenPresentation={() => setShowPresentation(true)} />
      
      <main>
        {/* Hero Section: Centered Layout */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Background Atmosphere (Recipe 7) */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-600/5 blur-[120px] rounded-full" />
          </div>

          <div className="mx-auto max-w-5xl px-6 text-center space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-emerald-500 mx-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Nueva Era de Automatización
              </div>
              
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] sm:leading-[0.85] tracking-tighter text-white text-balance">
                Tu WhatsApp <br />
                <span className="text-emerald-500 text-glow">en Piloto</span> <br />
                Automático.
              </h1>
              
              <p className="text-base sm:text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed text-balance px-4 sm:px-0">
                Deja de responder mensajes manualmente. Nuestra IA atiende, califica y agenda citas por ti las 24 horas del día.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 px-4 sm:px-0">
                <a 
                  href={getWhatsAppLink("¡Hola! Quiero empezar ahora con la Recepcionista IA.")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-white text-black px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10 flex items-center justify-center gap-3 group"
                >
                  Empezar ahora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={DEMO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-zinc-900 text-white border border-white/10 px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl hover:bg-zinc-800 transition-all flex items-center justify-center"
                >
                  Ver Demo
                </a>
              </div>

              <div className="flex flex-col items-center gap-6 pt-12 border-t border-white/5">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-zinc-500">
                  <span className="text-white font-bold">+500 negocios</span> ya están automatizando su atención.
                </p>
              </div>

              {/* AI Chat Mockup (Re-inserted) */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative max-w-2xl mx-auto pt-10 sm:pt-16 px-4 sm:px-0"
              >
                <div className="relative z-10 glass-card p-5 sm:p-8 rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-emerald-500/10 text-left">
                  <div className="flex items-center justify-between mb-6 sm:mb-8 border-b border-white/5 pb-4 sm:pb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Bot className="text-black w-5 h-5 sm:w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">Recepcionista IA</h4>
                        <p className="text-[8px] sm:text-[10px] text-emerald-500 font-bold uppercase tracking-widest">En línea ahora</p>
                      </div>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full bg-zinc-700" />
                      <div className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full bg-zinc-700" />
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex justify-end">
                      <div className="bg-emerald-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tr-none max-w-[90%] sm:max-w-[85%] text-xs sm:text-sm text-black font-medium shadow-lg shadow-emerald-500/10">
                        Hola, me gustaría agendar un turno para esta semana.
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-zinc-800/50 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tl-none max-w-[90%] sm:max-w-[85%] text-xs sm:text-sm text-zinc-300">
                        ¡Hola! Con gusto te ayudo. ¿Para qué servicio te gustaría agendar? (Ej: Consulta Médica, Estética o Spa)
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-emerald-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tr-none max-w-[90%] sm:max-w-[85%] text-xs sm:text-sm text-black font-medium shadow-lg shadow-emerald-500/10">
                        Consulta médica, por favor.
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-zinc-800/50 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tl-none max-w-[90%] sm:max-w-[85%] text-xs sm:text-sm text-zinc-300 space-y-3">
                        <p>Perfecto. Para mañana tengo estos horarios disponibles. ¿Cuál te queda mejor?</p>
                        <div className="grid grid-cols-2 gap-2">
                          {["09:00", "11:30", "15:00", "17:30"].map(t => (
                            <button key={t} className="bg-zinc-700/50 hover:bg-emerald-500 hover:text-black p-2 rounded-lg text-[10px] sm:text-xs font-bold transition-colors">
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-[80px] -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-600/20 blur-[80px] -z-10" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Marquee />

        {/* Features: Bento Grid (Recipe 8 Style) */}
        <section id="funciones" className="py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em]">
                  <Sparkles className="w-3 h-3" />
                  Capacidades de Élite
                </div>
                <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter">Potencia tu negocio <br /> con IA real.</h2>
                <p className="text-zinc-500 max-w-md leading-relaxed">Más que un chatbot, una solución integral para la gestión de clientes y citas diseñada para convertir consultas en ingresos.</p>
              </div>
              <div className="flex gap-4">
                <div className="p-8 glass-card rounded-[2.5rem] text-center min-w-[160px] border-emerald-500/10">
                  <p className="text-4xl font-display font-bold text-emerald-500">24/7</p>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Disponibilidad</p>
                </div>
                <div className="p-8 glass-card rounded-[2.5rem] text-center min-w-[160px]">
                  <p className="text-4xl font-display font-bold text-white">0s</p>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Tiempo de espera</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard 
                className="md:col-span-2 bg-gradient-to-br from-zinc-900/50 to-emerald-500/5"
                title="Conversaciones Humanas & Fluidas"
                desc="Nuestra IA no usa menús aburridos de 'presione 1'. Entiende el lenguaje natural, resuelve dudas complejas y mantiene el tono de tu marca en cada interacción, logrando una conexión real con el cliente."
                icon={<MessageSquare className="w-6 h-6 text-emerald-500" />}
              />
              <FeatureCard 
                title="Agenda Inteligente"
                desc="Sincronización total con tu calendario. Evita solapamientos y gestiona cancelaciones automáticamente sin que tengas que intervenir."
                icon={<Calendar className="w-6 h-6 text-purple-500" />}
              />
              <FeatureCard 
                title="Notificaciones Instantáneas"
                desc="Recibe alertas en tiempo real cuando se agende una nueva cita o un cliente necesite atención humana urgente."
                icon={<Bell className="w-6 h-6 text-yellow-500" />}
              />
              <FeatureCard 
                className="md:col-span-2"
                title="Panel de Control CRM"
                desc="Visualiza todas tus conversaciones, datos de clientes y estadísticas de rendimiento en un solo lugar. Toma decisiones basadas en datos reales de tu negocio y optimiza tu operación."
                icon={<Database className="w-6 h-6 text-blue-500" />}
              />
              <FeatureCard 
                title="Seguridad de Grado Bancario"
                desc="Tus datos y los de tus clientes están cifrados y protegidos bajo los estándares más estrictos de privacidad y cumplimiento."
                icon={<Lock className="w-6 h-6 text-red-500" />}
              />
              <FeatureCard 
                title="Multi-idioma Nativo"
                desc="Atiende a clientes de todo el mundo sin barreras lingüísticas. La IA detecta y responde en el idioma del cliente de forma fluida."
                icon={<Globe className="w-6 h-6 text-orange-500" />}
              />
              <FeatureCard 
                className="md:col-span-2 border-emerald-500/20"
                title="Escalabilidad Ilimitada"
                desc="Atiende 1 o 1,000 conversaciones al mismo tiempo sin perder calidad. Tu negocio crece, tu capacidad de atención también lo hace de forma automática."
                icon={<TrendingUp className="w-6 h-6 text-emerald-400" />}
              />
            </div>
          </div>
        </section>

        {/* Done-for-you Section (Recipe 12 Prestige) */}
        <section id="servicio" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Nosotros lo hacemos <br /> todo por ti.</h2>
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                    No pierdas tiempo configurando herramientas complejas. Nuestro equipo de expertos se encarga de la implementación completa para que tú solo recibas las citas.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { t: "Configuración Técnica", d: "Vinculamos tu número de WhatsApp de forma oficial y segura." },
                    { t: "Entrenamiento Personalizado", d: "Cargamos tus servicios, precios y personalidad de marca en la IA." },
                    { t: "Integración de Agenda", d: "Sincronizamos el sistema con tu calendario actual (Google, Outlook, etc)." },
                    { t: "Soporte Continuo", d: "Estamos contigo para ajustar y optimizar el sistema según tu crecimiento." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/50 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-white font-bold">{item.t}</h4>
                        <p className="text-zinc-500 text-sm">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="glass-card p-10 rounded-[3rem] border-emerald-500/20 relative z-10">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Zap className="text-emerald-500 w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Tiempo de Activación</p>
                        <p className="text-2xl font-display font-bold text-white">24 a 48 Horas</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-sm text-zinc-400 leading-relaxed italic">
                        "En menos de dos días, mi WhatsApp pasó de ser un caos de mensajes sin responder a una máquina de agendamiento perfecta. El equipo se encargó de todo."
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/5 overflow-hidden">
                          <img src="https://picsum.photos/seed/owner/100/100" alt="Owner" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Dra. Elena Martínez</p>
                          <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Clínica Dental Estética</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* How it Works: Product Flow (User Request) */}
        <section id="cómo-funciona" className="py-32 px-6 bg-zinc-950/50">
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-24">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Tu negocio en <br /> piloto automático.</h2>
              <p className="text-zinc-500">Mira cómo Recepcionista IA atiende a tus clientes por ti.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {
                  n: "01",
                  t: "El cliente escribe",
                  d: "Tu cliente envía un mensaje por WhatsApp en cualquier momento, incluso de madrugada.",
                  i: <MessageSquare className="w-6 h-6 text-emerald-500" />
                },
                {
                  n: "02",
                  t: "La IA responde",
                  d: "Tu recepcionista responde al instante con lenguaje natural, resolviendo dudas y ofreciendo disponibilidad.",
                  i: <Bot className="w-6 h-6 text-purple-500" />
                },
                {
                  n: "03",
                  t: "Elige día y hora",
                  d: "El cliente selecciona el horario que mejor le conviene directamente en el chat, sin esperas.",
                  i: <Calendar className="w-6 h-6 text-blue-500" />
                },
                {
                  n: "04",
                  t: "Agenda organizada",
                  d: "La cita queda registrada automáticamente en tu sistema. Recibes una notificación y listo.",
                  i: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                }
              ].map((step, i) => (
                <div key={i} className="glass-card p-8 rounded-[2.5rem] space-y-6 relative group border-white/5 hover:border-emerald-500/30 transition-all duration-500">
                  <div className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.3em] absolute top-6 right-8 group-hover:text-emerald-500 transition-colors">
                    Paso {step.n}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {step.i}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-bold text-white">{step.t}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing: Dark Luxury (Recipe 4) */}
        <section id="precios" className="py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-24">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Inversión Inteligente.</h2>
              <p className="text-zinc-500">Planes diseñados para escalar con tu éxito.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              {/* Plan Inicial */}
              <div className="glass-card p-8 sm:p-12 rounded-[3rem] border-2 border-emerald-500/30 relative overflow-hidden flex flex-col shadow-2xl shadow-emerald-500/5">
                <div className="absolute top-0 right-0 bg-emerald-500 text-black px-8 py-2 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                  Más Popular
                </div>
                
                <div className="space-y-8 flex-grow">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-display font-bold text-white">Plan Inicial</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">Perfecto para profesionales y pequeños negocios que buscan automatizar su agenda hoy mismo.</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest">Implementación Única</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-display font-bold text-white">$250</span>
                      <span className="text-zinc-500 text-sm">pago único</span>
                    </div>
                  </div>

                  <ul className="space-y-4 py-8 border-y border-white/5">
                    {[
                      "Conexión segura WhatsApp",
                      "Entrenamiento IA personalizado",
                      "Panel de gestión de citas",
                      "Pruebas en vivo incluidas"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-sm text-zinc-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="p-6 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Mantenimiento</h4>
                      <span className="text-2xl font-display font-bold text-white">$49<span className="text-xs text-zinc-500 font-normal">/mes</span></span>
                    </div>
                    <ul className="space-y-2">
                      {["Soporte 24/7", "Hosting en la nube", "Gestión de API"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[10px] text-zinc-500">
                          <div className="w-1 h-1 rounded-full bg-emerald-500/50" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-10 space-y-4">
                  <a 
                    href={getWhatsAppLink("¡Hola! Quiero reservar uno de los 10 cupos para el Plan Inicial de la Recepcionista IA.")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/20 hover:-translate-y-1 active:scale-95 flex items-center justify-center"
                  >
                    Reservar Cupo (Solo 10)
                  </a>
                  <p className="text-center text-zinc-500 text-[10px] font-medium uppercase tracking-widest">⚡ Activación en 24-48 horas</p>
                </div>
              </div>

              {/* Plan Avanzado: Sistema de Automatización Completa */}
              <div className="glass-card p-8 sm:p-12 rounded-[3rem] text-left space-y-8 relative overflow-hidden flex flex-col group border-white/5 hover:border-emerald-500/20 transition-all duration-500">
                <div className="space-y-8 flex-grow">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em]">
                      <Zap className="w-3 h-3" />
                      Automatización Avanzada
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white leading-tight">Sistema de Automatización Completa</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      Transforma tu WhatsApp en un sistema inteligente para gestionar clientes, citas y conversaciones desde un solo lugar.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-zinc-900/30 border border-white/5 space-y-3">
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      Integramos tu recepcionista IA con herramientas de gestión para que tu negocio pueda atender, organizar y dar seguimiento a cada cliente de forma automática.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Ideal para</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Clínicas", "Academias", "Empresas de servicios", "Alto volumen"].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-[10px] text-zinc-400 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">Implementación personalizada</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">Cada negocio tiene procesos distintos. Por eso diseñamos e integramos un sistema adaptado a tu operación.</p>
                    </div>
                    
                    <ul className="space-y-3">
                      {[
                        "Integración con sistema de agenda profesional",
                        "Gestión centralizada de información de clientes",
                        "Panel tipo CRM para seguimiento",
                        "Automatizaciones diseñadas para tu proceso"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-zinc-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-10">
                  <a 
                    href={getWhatsAppLink("¡Hola! Me gustaría solicitar un diagnóstico de automatización para mi negocio.")}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 py-5 rounded-2xl font-bold text-lg transition-all group-hover:border-emerald-500/30 shadow-xl shadow-black/20 flex items-center justify-center"
                  >
                    Solicitar diagnóstico de automatización
                  </a>
                  <p className="text-center text-zinc-600 text-[10px] mt-4 uppercase tracking-widest">Análisis de procesos incluido</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section (Recipe 8 Minimal Utility) */}
        <section className="py-32 px-6 border-t border-white/5">
          <div className="mx-auto max-w-3xl">
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">Preguntas Frecuentes.</h2>
              <p className="text-zinc-500">Todo lo que necesitas saber antes de empezar.</p>
            </div>

            <div className="space-y-4">
              {[
                { q: "¿Es seguro para mi número de WhatsApp?", a: "Sí, utilizamos conexiones oficiales y seguras que cumplen con las políticas de Meta para evitar bloqueos y garantizar la estabilidad de tu cuenta." },
                { q: "¿Cómo aprende la IA sobre mi negocio?", a: "Nuestro equipo carga tu base de conocimientos (servicios, precios, horarios, políticas) y entrena al modelo para que responda exactamente como tú lo harías." },
                { q: "¿Se integra con mi calendario actual?", a: "Totalmente. Nos sincronizamos con Google Calendar, Outlook y las principales herramientas de agendamiento del mercado." },
                { q: "¿Qué pasa si un cliente necesita hablar con un humano?", a: "La IA detecta cuando una consulta requiere atención humana y te envía una notificación inmediata para que puedas intervenir si lo deseas." },
                { q: "¿Puedo cancelar en cualquier momento?", a: "Sí, no tenemos contratos de permanencia a largo plazo. El mantenimiento es mes a mes." }
              ].map((faq, i) => (
                <details key={i} className="group glass-card rounded-3xl border border-white/5 overflow-hidden">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <h4 className="text-lg font-bold text-white pr-8">{faq.q}</h4>
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                      <ChevronDown className="w-4 h-4 text-zinc-400" />
                    </div>
                  </summary>
                  <div className="px-8 pb-8 text-zinc-500 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/5 -z-10" />
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white">
              ¿Listo para el siguiente nivel?
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Únete a los negocios que ya están escalando su atención al cliente con Recepcionista IA.
            </p>
            <a 
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-black px-12 py-6 rounded-2xl text-xl font-bold transition-all hover:scale-105 shadow-2xl shadow-emerald-500/20 inline-block"
            >
              Solicitar Demo Gratuita
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Bot className="text-black w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Recepcionista<span className="text-emerald-500">IA</span>
              </span>
            </div>
            <p className="text-zinc-500 max-w-xs text-sm leading-relaxed">
              Transformando la atención al cliente mediante inteligencia artificial avanzada y automatización inteligente.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Producto</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Funciones</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Seguridad</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">© 2026 Recepcionista IA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map(social => (
              <a key={social} href="#" className="text-zinc-600 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">{social}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
