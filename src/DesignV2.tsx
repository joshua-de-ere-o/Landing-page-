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
  Cpu
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const GlitchText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: [1, 0.8, 1, 0.9, 1],
          x: [0, -1, 1, -0.5, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          times: [0, 0.1, 0.2, 0.3, 1]
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

const Navbar = () => (
  <header className="sticky top-0 z-40 border-b backdrop-blur border-zinc-800 bg-black/85">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
          <Bot className="text-black w-4 h-4" />
        </div>
        <span className="font-sans font-bold text-lg tracking-tight text-white">
          Recepcionista<span className="text-zinc-400">IA</span>
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Funciones</a>
        <a href="#how" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Cómo funciona</a>
        <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Precios</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block">Log in</button>
        <button className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-zinc-200 transition-all">
          Sign up
        </button>
      </div>
    </div>
  </header>
);

const Marquee = ({ items, direction = "left" }: { items: any[]; direction?: "left" | "right" }) => (
  <div className="relative overflow-hidden py-8">
    <div className={`flex gap-12 animate-marquee-${direction} whitespace-nowrap`}>
      {[...items, ...items].map((item, i) => (
        <div key={i} className="group flex items-center gap-4 text-zinc-400 font-bold text-lg opacity-60 hover:opacity-100 hover:text-emerald-400 hover:brightness-150 hover:scale-110 transition-all duration-300 cursor-default">
          <span className="text-emerald-500/30 group-hover:text-emerald-400 transition-colors">•</span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
    {/* Subtle gradient overlays for smooth fade */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
  </div>
);

export default function DesignV2() {
  const partners = [
    { name: "Clínicas y Consultorios" },
    { name: "Salones y Estéticas" },
    { name: "Despachos Jurídicos" },
    { name: "Consultores y Coaches" },
    { name: "Academias" },
    { name: "Talleres Técnicos" },
    { name: "Gimnasios" },
    { name: "Centros de Terapia" },
    { name: "Inmobiliarias" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-zinc-800 selection:text-white">
      <Navbar />
      
      <main className="isolate">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs font-medium text-zinc-400"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Disponible 24/7: Tu negocio siempre atendido
              <ArrowRight className="w-3 h-3" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              <GlitchText text="Tu WhatsApp ahora es una" className="text-white" />
              <br />
              <span className="text-zinc-500">recepcionista automática</span>
            </h1>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed font-medium">
                Responde a tus clientes al instante y organiza tus citas sin errores, incluso cuando estás ocupado o fuera de horario.
              </p>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                Atención 24/7 para que no pierdas ni una sola consulta por falta de tiempo.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button className="bg-white text-black px-8 py-3 rounded-xl text-base font-bold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Probar en mi negocio
              </button>
              <button className="bg-zinc-900 text-white border border-zinc-800 px-8 py-3 rounded-xl text-base font-bold hover:bg-zinc-800 transition-all">
                Ver cómo funciona
              </button>
            </div>
          </div>
        </section>

        {/* Social Proof Marquee */}
        <section className="py-12 border-y border-zinc-900 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-bold text-zinc-500 uppercase tracking-widest mb-10">
              Negocios que ya están automatizando su atención
            </p>
            <Marquee items={partners} />
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Tu negocio nunca se detiene</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Automatiza la atención y el agendamiento para que tú te enfoques en lo que mejor sabes hacer.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Respuestas Humanas", 
                  desc: "La IA entiende el contexto de tu negocio y responde de forma natural, como si fueras tú.", 
                  icon: <MessageSquare className="w-5 h-5 text-emerald-500" /> 
                },
                { 
                  title: "Agenda Inteligente", 
                  desc: "Tus citas se organizan automáticamente dentro de tu panel de control. Evita solapamientos, visualiza tu agenda y mantén todo tu negocio bajo control.", 
                  icon: <Calendar className="w-5 h-5 text-purple-500" /> 
                },
                { 
                  title: "Notificaciones al Instante", 
                  desc: "Recibe alertas en tiempo real cuando un cliente agenda o tiene una duda urgente.", 
                  icon: <Bell className="w-5 h-5 text-yellow-500" /> 
                },
                { 
                  title: "Atención Multi-idioma", 
                  desc: "Atiende a tus clientes en cualquier idioma de forma fluida y profesional.", 
                  icon: <Layout className="w-5 h-5 text-blue-500" /> 
                },
                { 
                  title: "Privacidad Garantizada", 
                  desc: "Tus datos y los de tus clientes están protegidos con los más altos estándares.", 
                  icon: <ShieldCheck className="w-5 h-5 text-red-500" /> 
                },
                { 
                  title: "Sin Límites", 
                  desc: "Maneja cientos de conversaciones simultáneas sin perder la calidad ni la velocidad.", 
                  icon: <Cpu className="w-5 h-5 text-orange-500" /> 
                }
              ].map((feature, i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors group">
                  <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 border border-zinc-800 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works - Flow */}
        <section id="how" className="py-24 px-6 bg-black">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Tu negocio en piloto automático</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Mira cómo Recepcionista IA atiende a tus clientes por ti, sin que tengas que mover un dedo.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 z-0" />
              
              {[
                {
                  step: "01",
                  title: "El cliente escribe",
                  desc: "Tu cliente envía un mensaje por WhatsApp en cualquier momento, incluso de madrugada.",
                  icon: <MessageSquare className="w-6 h-6 text-emerald-500" />
                },
                {
                  step: "02",
                  title: "La IA responde",
                  desc: "Tu recepcionista responde al instante con lenguaje natural, resolviendo dudas y ofreciendo disponibilidad.",
                  icon: <Bot className="w-6 h-6 text-purple-500" />
                },
                {
                  step: "03",
                  title: "Elige día y hora",
                  desc: "El cliente selecciona el horario que mejor le conviene directamente en el chat, sin esperas.",
                  icon: <Calendar className="w-6 h-6 text-blue-500" />
                },
                {
                  step: "04",
                  title: "Agenda organizada",
                  desc: "La cita queda registrada automáticamente en tu sistema. Recibes una notificación y listo.",
                  icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                }
              ].map((item, i) => (
                <div key={i} className="relative z-10 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-zinc-700 transition-all group">
                  <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest absolute top-4 left-6">{item.step}</div>
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-zinc-800 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activation Section */}
        <section id="activation" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative border border-zinc-800">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/5 to-transparent -z-0" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">Nosotros configuramos todo, tú solo recibes las citas</h2>
                  <p className="text-zinc-400 leading-relaxed">
                    Un proceso llave en mano diseñado para que no pierdas ni un segundo en configuraciones técnicas. Empezar es más fácil de lo que imaginas.
                  </p>
                  <button className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-all flex items-center gap-2">
                    Activar mi recepcionista ahora <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid gap-4">
                  {[
                    { t: "Conexión segura", d: "Vinculamos tu WhatsApp de forma oficial y protegida." },
                    { t: "Entrenamiento a medida", d: "Adaptamos la IA a los servicios y tono de tu negocio." },
                    { t: "Panel de gestión", d: "Gestiona y visualiza todas tus citas en tiempo real." },
                    { t: "Pruebas en vivo", d: "Verificamos que todo funcione perfecto antes de activar." }
                  ].map((item, i) => (
                    <div key={i} className="bg-black/40 border border-zinc-800/50 p-4 rounded-xl flex gap-4 items-start">
                      <div className="mt-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.t}</h4>
                        <p className="text-zinc-500 text-[11px] leading-tight">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Planes para automatizar la atención de tu negocio</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-16">
              Empieza con la implementación inicial y escala tu sistema con automatizaciones más avanzadas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              {/* Plan 1: Recommended/Most Popular */}
              <div className="bg-zinc-900 border-2 border-emerald-500/50 p-10 rounded-[2.5rem] text-left space-y-6 relative overflow-hidden flex flex-col shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)]">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-6 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-lg">
                  Más Popular • Solo 10 cupos
                </div>
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">Fase de Lanzamiento</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Plan Inicial de Automatización</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Configuramos tu recepcionista IA y dejamos tu WhatsApp listo para responder clientes y agendar citas automáticamente.</p>
                  
                  <div className="bg-zinc-950/50 p-4 rounded-2xl border border-zinc-800">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Ideal para:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Spas", "Peluquerías", "Consultorios", "Freelancers"].map((ex, i) => (
                        <span key={i} className="bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-lg text-[10px] font-medium border border-zinc-700/50">{ex}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div className="space-y-2">
                    <p className="text-emerald-400 text-[11px] font-bold uppercase tracking-tight">Inversión única de implementación</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">$150</span>
                      <span className="text-zinc-500 text-sm font-medium">pago único</span>
                    </div>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {[
                      "Conexión segura con tu WhatsApp",
                      "Entrenamiento inicial de la IA",
                      "Panel para gestionar tus citas",
                      "Pruebas en vivo antes de activar"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-5 rounded-2xl bg-zinc-950/30 border border-zinc-800/50 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Mantenimiento Mensual</h4>
                      <span className="text-xl font-bold text-white">$49<span className="text-xs text-zinc-500 font-normal">/mes</span></span>
                    </div>
                    <p className="text-zinc-500 text-[10px] leading-snug italic">Mantiene tu sistema funcionando, actualizado y con soporte técnico continuo.</p>
                    <ul className="grid grid-cols-1 gap-2">
                      {["Soporte prioritario 24/7", "Actualizaciones de IA", "Hosting en la nube y gestión de API"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[10px] text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)] hover:-translate-y-1 active:scale-95">
                    Reservar mi cupo ahora
                  </button>
                  <p className="text-center text-zinc-500 text-[10px] font-medium">⚡ Implementación en 24–48 horas hábiles</p>
                </div>
              </div>

              {/* Plan 2: Advanced/Enterprise */}
              <div className="bg-zinc-950 border border-zinc-800 p-10 rounded-[2.5rem] text-left space-y-6 relative overflow-hidden flex flex-col group">
                <div className="absolute top-0 right-0 bg-zinc-800 text-zinc-500 px-6 py-1.5 text-[10px] font-black uppercase tracking-widest">
                  Personalizado
                </div>
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Automatización Avanzada</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Sistema de Automatización Completa</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Transforma tu WhatsApp en un sistema inteligente para gestionar clientes, citas y conversaciones desde un solo lugar.</p>
                  
                  <div className="bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Ideal para:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Clínicas", "Academias", "Empresas de servicios", "Alto volumen"].map((ex, i) => (
                        <span key={i} className="bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-lg text-[10px] font-medium border border-zinc-700/30">{ex}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
                    <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                      Integramos tu recepcionista IA con herramientas de gestión para que tu negocio pueda atender, organizar y dar seguimiento a cada cliente de forma automática.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Implementación personalizada</h4>
                    <p className="text-zinc-500 text-[11px] leading-relaxed italic">
                      Cada negocio tiene procesos distintos. Por eso diseñamos e integramos un sistema de automatización adaptado a tu operación.
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Integración con sistema de agenda profesional",
                      "Gestión centralizada de información de clientes",
                      "Panel tipo CRM para seguimiento de conversaciones",
                      "Automatizaciones diseñadas para tu proceso"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                        <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all border border-zinc-700 group-hover:border-zinc-500">
                    Solicitar diagnóstico de automatización
                  </button>
                  <p className="text-center text-zinc-600 text-[10px] mt-3">Análisis de procesos incluido sin costo inicial</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">¿Listo para automatizar?</h2>
            <p className="text-zinc-400 text-lg">Únete a cientos de negocios que ya están escalando su atención al cliente con Recepcionista IA.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-black px-10 py-4 rounded-xl text-lg font-bold hover:bg-zinc-200 transition-all">
                Solicitar Demo Gratuita
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 bg-black py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <Bot className="text-black w-4 h-4" />
            </div>
            <span className="font-sans font-bold text-lg tracking-tight text-white">
              Recepcionista<span className="text-zinc-400">IA</span>
            </span>
          </div>
          <p className="text-zinc-600 text-sm">© 2026 Recepcionista IA. Built for the future of business.</p>
          <div className="flex gap-6 text-zinc-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
