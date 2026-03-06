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
  AlertCircle,
  XCircle
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <MessageSquare className="text-white w-5 h-5" />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight text-zinc-900">
            Recepcionista<span className="text-emerald-600">IA</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problema" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">El Problema</a>
          <a href="#como-funciona" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">Cómo Funciona</a>
          <a href="#beneficios" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">Beneficios</a>
          <a href="#precios" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">Precios</a>
        </div>
        <div>
          <button className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-200">
            Solicitar Demo
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const WhatsAppMockup = () => (
  <div className="relative w-full max-w-[320px] mx-auto bg-zinc-900 rounded-[3rem] p-3 shadow-2xl border-4 border-zinc-800">
    <div className="bg-white rounded-[2.2rem] overflow-hidden h-[580px] flex flex-col font-sans text-zinc-900">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] p-4 pt-8 text-white flex items-center gap-3">
        <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center overflow-hidden">
          <img src="https://picsum.photos/seed/business/100/100" alt="Business" referrerPolicy="no-referrer" />
        </div>
        <div>
          <p className="font-bold text-sm">Tu Negocio</p>
          <p className="text-[10px] opacity-80">En línea</p>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 bg-[#E5DDD5] p-4 space-y-3 overflow-y-auto overflow-x-hidden">
        <div className="flex justify-start">
          <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
            <p className="text-xs text-zinc-800">Hola, me gustaría agendar una cita para mañana.</p>
            <p className="text-[9px] text-zinc-400 text-right mt-1">10:00 AM</p>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-end"
        >
          <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none shadow-sm max-w-[80%]">
            <p className="text-xs text-zinc-800">¡Hola! Claro que sí. Soy tu asistente virtual. ¿Para qué servicio te gustaría agendar?</p>
            <p className="text-[9px] text-zinc-400 text-right mt-1">10:00 AM</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="flex justify-start"
        >
          <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
            <p className="text-xs text-zinc-800">Limpieza dental, por favor.</p>
            <p className="text-[9px] text-zinc-400 text-right mt-1">10:01 AM</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          className="flex justify-end"
        >
          <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none shadow-sm max-w-[80%]">
            <p className="text-xs text-zinc-800">Perfecto. Estos son los horarios disponibles para mañana:</p>
            <div className="mt-2 space-y-1">
              <div className="bg-white/50 border border-emerald-200 rounded p-1 text-[10px] text-center">09:00 AM</div>
              <div className="bg-white/50 border border-emerald-200 rounded p-1 text-[10px] text-center">11:30 AM</div>
              <div className="bg-white/50 border border-emerald-200 rounded p-1 text-[10px] text-center">04:00 PM</div>
            </div>
            <p className="text-[9px] text-zinc-400 text-right mt-1">10:01 AM</p>
          </div>
        </motion.div>
      </div>
      
      {/* Input Area */}
      <div className="p-3 bg-[#F0F0F0] flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full h-8 px-3 flex items-center">
          <p className="text-[10px] text-zinc-400">Escribe un mensaje...</p>
        </div>
        <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center">
          <Zap className="text-white w-4 h-4 fill-white" />
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-4 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <Zap className="w-3 h-3 fill-emerald-700" />
          Disponible 24/7 para tu negocio
        </div>
        <h1 className="text-5xl md:text-6xl font-sans font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6">
          Convierte tu WhatsApp en una <span className="text-emerald-600">recepcionista automática</span> que agenda por ti.
        </h1>
        <p className="text-xl text-zinc-600 mb-8 leading-relaxed max-w-xl">
          Responde clientes, organiza tu agenda y confirma citas automáticamente, incluso cuando estás ocupado o fuera de horario.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 group">
            Solicitar Demo Gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
            Ver cómo funciona
          </button>
        </div>
        <div className="mt-10 flex items-center gap-4 text-sm text-zinc-500">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
            ))}
          </div>
          <p>Más de <span className="font-bold text-zinc-900">500+ negocios</span> ya automatizan sus citas.</p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-emerald-400/20 blur-[100px] rounded-full -z-10" />
        <WhatsAppMockup />
      </motion.div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problema" className="py-24 bg-zinc-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">¿Tu WhatsApp se ha vuelto inmanejable?</h2>
        <p className="text-lg text-zinc-600">Muchos negocios pierden hasta el 40% de sus clientes potenciales simplemente por no responder a tiempo.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Clock className="w-6 h-6 text-red-500" />,
            title: "Clientes que no esperan",
            desc: "Si tardas más de 10 minutos en responder, el cliente ya está escribiendo a tu competencia."
          },
          {
            icon: <AlertCircle className="w-6 h-6 text-red-500" />,
            title: "Agenda desordenada",
            desc: "Gestionar citas manualmente en chats infinitos causa errores, olvidos y huecos vacíos en tu día."
          },
          {
            icon: <XCircle className="w-6 h-6 text-red-500" />,
            title: "Pérdida fuera de horario",
            desc: "Tu negocio deja de captar clientes en las noches o fines de semana cuando estás descansando."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100"
          >
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
            <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-100 rounded-3xl -z-10 rotate-3" />
            <img 
              src="https://picsum.photos/seed/automation/800/600" 
              alt="Automatización" 
              className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">La solución inteligente que trabaja por ti</h2>
          <p className="text-lg text-zinc-600 mb-8">Nuestra IA no es un simple bot de respuestas fijas. Es un asistente que entiende a tus clientes y guía la conversación hasta cerrar la cita.</p>
          
          <ul className="space-y-4">
            {[
              "Responde inmediatamente a cualquier hora del día.",
              "Muestra tus servicios y horarios disponibles en tiempo real.",
              "Agenda la cita directamente en tu calendario (Google, Outlook, etc).",
              "Envía recordatorios automáticos para reducir inasistencias."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                <span className="text-zinc-700 font-medium">{text}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-10">
            <button className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Descubre cómo funciona paso a paso <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="como-funciona" className="py-24 bg-zinc-900 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simplicidad extrema en 4 pasos</h2>
        <p className="text-zinc-400 text-lg">Diseñado para que no tengas que configurar nada complejo.</p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-zinc-800 -z-0" />
        
        {[
          { step: "01", title: "El cliente escribe", desc: "Tu cliente envía un mensaje normal a tu WhatsApp de siempre." },
          { step: "02", title: "La IA responde", desc: "El asistente saluda, resuelve dudas y ofrece los horarios libres." },
          { step: "03", title: "Elige horario", desc: "El cliente selecciona el servicio y la hora que mejor le conviene." },
          { step: "04", title: "Cita confirmada", desc: "La cita aparece en tu agenda y el cliente recibe su confirmación." }
        ].map((item, i) => (
          <div key={i} className="relative z-10 text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-emerald-900/20">
              {item.step}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section id="beneficios" className="py-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 border-l-4 border-emerald-500 pl-6">Beneficios Operativos</h2>
          <div className="space-y-6">
            {[
              { title: "Ahorro de tiempo real", desc: "Recupera hasta 3 horas diarias que antes perdías respondiendo mensajes repetitivos.", icon: <Clock className="w-5 h-5" /> },
              { title: "Agenda 100% organizada", desc: "Se acabó el desorden. Tu calendario se llena solo, sin solapamientos ni errores.", icon: <Calendar className="w-5 h-5" /> },
              { title: "Atención 24/7", desc: "Tu negocio sigue captando clientes mientras duermes o estás en una sesión.", icon: <Zap className="w-5 h-5" /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">{item.title}</h4>
                  <p className="text-zinc-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 border-l-4 border-emerald-500 pl-6">Beneficios Estratégicos</h2>
          <div className="space-y-6">
            {[
              { title: "Imagen Profesional", desc: "Tus clientes percibirán un nivel de modernidad y eficiencia superior al de tu competencia.", icon: <ShieldCheck className="w-5 h-5" /> },
              { title: "Mejor Experiencia", desc: "Respuestas instantáneas y un proceso de reserva fluido que los clientes aman.", icon: <User className="w-5 h-5" /> },
              { title: "Aumento de Ingresos", desc: "Al no perder mensajes, conviertes más consultas en citas pagadas.", icon: <TrendingUp className="w-5 h-5" /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">{item.title}</h4>
                  <p className="text-zinc-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="precios" className="py-24 bg-zinc-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Inversión clara, sin sorpresas</h2>
        <p className="text-lg text-zinc-600">Una solución profesional que se paga sola con las primeras citas que recuperas.</p>
      </div>
      
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-emerald-100 relative">
        <div className="bg-emerald-600 text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
          Plan Todo Incluido
        </div>
        <div className="p-10 text-center">
          <div className="mb-8">
            <p className="text-zinc-500 text-sm font-medium mb-2">Implementación inicial</p>
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl font-bold text-zinc-400">$</span>
              <span className="text-5xl font-black text-zinc-900 tracking-tight">150</span>
            </div>
            <p className="text-zinc-400 text-xs mt-1">Pago único por configuración</p>
          </div>
          
          <div className="h-px bg-zinc-100 w-full mb-8" />
          
          <div className="mb-10">
            <p className="text-zinc-500 text-sm font-medium mb-2">Mantenimiento mensual</p>
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl font-bold text-zinc-400">$</span>
              <span className="text-5xl font-black text-emerald-600 tracking-tight">39</span>
            </div>
            <p className="text-zinc-400 text-xs mt-1">Soporte y actualizaciones incluidas</p>
          </div>
          
          <ul className="text-left space-y-4 mb-10">
            {[
              "Configuración completa del sistema",
              "Adaptación a tu tipo de negocio",
              "Integración con tu calendario",
              "Soporte técnico prioritario",
              "Sin contratos de permanencia"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {text}
              </li>
            ))}
          </ul>
          
          <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
            Comenzar Ahora
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { q: "¿Es difícil de instalar?", a: "Para nada. Nosotros nos encargamos de toda la configuración técnica. Solo necesitas tener una cuenta de WhatsApp Business activa." },
    { q: "¿Necesito conocimientos técnicos?", a: "Cero. El sistema está diseñado para que tú solo veas cómo se llena tu agenda. No tienes que programar ni configurar nada complejo." },
    { q: "¿Funciona para mi tipo de negocio?", a: "Sí, siempre que gestiones citas o reservas. Es ideal para clínicas, consultorios, spas, peluquerías, abogados, coaches y más." },
    { q: "¿Puedo ver una demo antes?", a: "¡Claro! Puedes solicitar una demo gratuita donde te mostraremos exactamente cómo funcionaría con tu propio flujo de citas." },
    { q: "¿Puedo seguir atendiendo manualmente?", a: "Por supuesto. El asistente puede encargarse de lo repetitivo, pero tú siempre tienes el control total del chat y puedes intervenir cuando quieras." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="font-bold text-zinc-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-zinc-600 leading-relaxed bg-zinc-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-zinc-900 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Cada mensaje sin responder puede ser una cita perdida.</h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Convierte tu WhatsApp en una recepcionista automática y deja que tu negocio siga generando citas incluso cuando estás ocupado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/40">
            Solicitar Demo Gratuita
          </button>
          <button className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            Hablar por WhatsApp
          </button>
        </div>
      </div>
      
      <div className="h-px bg-white/10 w-full mb-12" />
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <MessageSquare className="text-white w-5 h-5" />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight">
            Recepcionista<span className="text-emerald-500">IA</span>
          </span>
        </div>
        <div className="text-zinc-500 text-sm">
          © 2026 Recepcionista IA. Todos los derechos reservados.
        </div>
        <div className="flex gap-6 text-zinc-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function DesignV1() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        
        {/* Demo Section */}
        <section className="py-24 bg-emerald-50/50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12">Mira la IA en acción</h2>
            <div className="max-w-4xl mx-auto aspect-video bg-zinc-900 rounded-3xl shadow-2xl flex items-center justify-center relative group overflow-hidden border-8 border-white">
              <img 
                src="https://picsum.photos/seed/demo/1200/800" 
                alt="Demo Video Placeholder" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-emerald-600 border-b-[10px] border-b-transparent ml-1" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <p className="text-white font-bold text-lg">Simulación de conversación real</p>
                <p className="text-white/70 text-sm">Descubre cómo la IA maneja objeciones y agenda citas.</p>
              </div>
            </div>
          </div>
        </section>

        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
