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
  <div className="relative overflow-hidden py-4">
    <div className={`flex gap-8 animate-marquee-${direction} whitespace-nowrap`}>
      {[...items, ...items].map((item, i) => (
        <div key={i} className="flex items-center gap-3 text-zinc-500 font-medium text-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
          {item.icon}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const DashboardPreview = () => (
  <div className="relative mt-12 lg:mt-20">
    <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="border-b border-zinc-800 p-4 flex items-center justify-between bg-zinc-900/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-zinc-800" />
          <div className="w-3 h-3 rounded-full bg-zinc-800" />
          <div className="w-3 h-3 rounded-full bg-zinc-800" />
        </div>
        <div className="bg-zinc-800 rounded-md px-3 py-1 text-[10px] text-zinc-500 font-mono">
          dashboard.recepcionista.ia/analytics
        </div>
        <div className="w-10" />
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black border border-zinc-800 p-4 rounded-xl">
              <p className="text-zinc-500 text-xs mb-1">Citas Agendadas</p>
              <p className="text-2xl font-bold text-white">1,284</p>
              <div className="mt-2 flex items-center gap-1 text-emerald-500 text-[10px]">
                <TrendingUp className="w-3 h-3" /> +24% este mes
              </div>
            </div>
            <div className="bg-black border border-zinc-800 p-4 rounded-xl">
              <p className="text-zinc-500 text-xs mb-1">Tiempo Ahorrado</p>
              <p className="text-2xl font-bold text-white">42h</p>
              <div className="mt-2 flex items-center gap-1 text-emerald-500 text-[10px]">
                <Clock className="w-3 h-3" /> Automatización activa
              </div>
            </div>
          </div>
          <div className="bg-black border border-zinc-800 p-4 rounded-xl h-48 flex flex-col">
            <p className="text-zinc-500 text-xs mb-4">Actividad de Conversaciones</p>
            <div className="flex-1 flex items-end gap-1">
              {[40, 70, 45, 90, 65, 80, 50, 60, 85, 40, 75, 95, 60, 50].map((h, i) => (
                <div key={i} className="flex-1 bg-zinc-800 rounded-t-sm hover:bg-emerald-500 transition-colors" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-black border border-zinc-800 p-4 rounded-xl">
            <p className="text-zinc-500 text-xs mb-4">Últimas Reservas</p>
            <div className="space-y-3">
              {[
                { name: "Juan Pérez", time: "10:30 AM", service: "Consulta" },
                { name: "Maria Garcia", time: "11:45 AM", service: "Corte" },
                { name: "Carlos Ruiz", time: "02:15 PM", service: "Asesoría" }
              ].map((res, i) => (
                <div key={i} className="flex items-center justify-between border-b border-zinc-900 pb-2 last:border-0">
                  <div>
                    <p className="text-white text-xs font-medium">{res.name}</p>
                    <p className="text-zinc-500 text-[10px]">{res.service}</p>
                  </div>
                  <p className="text-zinc-400 text-[10px] font-mono">{res.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-3 h-3 text-emerald-500 fill-emerald-500" />
              <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider">AI Autopilot</p>
            </div>
            <p className="text-white text-xs leading-relaxed">La IA está gestionando el 94% de tus consultas sin intervención humana.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function DesignV2() {
  const partners = [
    { name: "Clínicas Médicas", icon: <CheckCircle2 className="w-4 h-4" /> },
    { name: "Salones de Belleza", icon: <CheckCircle2 className="w-4 h-4" /> },
    { name: "Estudios Jurídicos", icon: <CheckCircle2 className="w-4 h-4" /> },
    { name: "Consultores", icon: <CheckCircle2 className="w-4 h-4" /> },
    { name: "Talleres", icon: <CheckCircle2 className="w-4 h-4" /> },
    { name: "Gimnasios", icon: <CheckCircle2 className="w-4 h-4" /> }
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
              Nuevo: Recepcionista IA Autopilot v2.0
              <ArrowRight className="w-3 h-3" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              <GlitchText text="Inteligencia Artificial" className="text-white" />
              <br />
              <span className="text-zinc-500">para tu WhatsApp</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Basedash es la plataforma de BI nativa de IA para equipos que quieren respuestas confiables, tableros y flujos de trabajo de informes sin una configuración pesada.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button className="bg-white text-black px-8 py-3 rounded-xl text-base font-bold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Empezar gratis
              </button>
              <button className="bg-zinc-900 text-white border border-zinc-800 px-8 py-3 rounded-xl text-base font-bold hover:bg-zinc-800 transition-all">
                Agendar Demo
              </button>
            </div>

            <DashboardPreview />
          </div>
        </section>

        {/* Social Proof Marquee */}
        <section className="py-12 border-y border-zinc-900">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-xs font-bold text-zinc-600 uppercase tracking-widest mb-8">
              Confiado por equipos modernos en todo el mundo
            </p>
            <Marquee items={partners} />
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Pregunta lo que sea sobre tu negocio</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Obtén respuestas instantáneas, descubre tendencias importantes y toma decisiones con confianza más rápido.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Respuesta Nativa", 
                  desc: "La IA entiende el contexto de tu negocio y responde como si fueras tú.", 
                  icon: <MessageSquare className="w-5 h-5 text-emerald-500" /> 
                },
                { 
                  title: "Agendamiento Real", 
                  desc: "Se conecta a tu calendario y reserva espacios reales sin errores.", 
                  icon: <Calendar className="w-5 h-5 text-purple-500" /> 
                },
                { 
                  title: "Alertas Inteligentes", 
                  desc: "Recibe notificaciones cuando un cliente VIP escribe o hay un hueco en tu agenda.", 
                  icon: <Bell className="w-5 h-5 text-yellow-500" /> 
                },
                { 
                  title: "Multi-idioma", 
                  desc: "Atiende a tus clientes en cualquier idioma de forma fluida.", 
                  icon: <Layout className="w-5 h-5 text-blue-500" /> 
                },
                { 
                  title: "Seguridad Total", 
                  desc: "Datos encriptados y cumplimiento con normativas de privacidad.", 
                  icon: <ShieldCheck className="w-5 h-5 text-red-500" /> 
                },
                { 
                  title: "Escalabilidad", 
                  desc: "Maneja 1 o 1,000 chats simultáneos sin perder la calidad.", 
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

        {/* How it works with Video Vignette feel */}
        <section id="how" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative border border-zinc-800">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent -z-0" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">Implementación en menos de 30 minutos</h2>
                  <p className="text-zinc-400 leading-relaxed">
                    No necesitas un equipo de ingeniería. Conectamos tu WhatsApp, entrenamos la IA con tus servicios y listo.
                  </p>
                  <ul className="space-y-4 pt-4">
                    {[
                      "Conexión segura vía QR",
                      "Entrenamiento con tus PDFs o sitio web",
                      "Sincronización con Google Calendar",
                      "Pruebas en vivo antes de lanzar"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-all flex items-center gap-2">
                      Ver demo técnica <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="relative aspect-square bg-black rounded-3xl border border-zinc-800 shadow-2xl flex items-center justify-center overflow-hidden">
                   <img 
                    src="https://picsum.photos/seed/tech/600/600" 
                    alt="Tech" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                    referrerPolicy="no-referrer"
                   />
                   <div className="relative w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform">
                      <Zap className="w-8 h-8 text-white fill-white" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 bg-zinc-950">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Precios simples para equipos ambiciosos</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[2rem] text-left space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementación</h3>
                  <p className="text-zinc-500 text-sm">Configuración inicial y entrenamiento.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-zinc-500 text-sm">pago único</span>
                </div>
                <ul className="space-y-3 pt-4">
                  {["Configuración QR", "Entrenamiento IA", "Sincronización Agenda"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-zinc-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-10 rounded-[2rem] text-left space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">Popular</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">Mantenimiento</h3>
                  <p className="text-zinc-500 text-sm">Soporte 24/7 y actualizaciones de IA.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-black">$39</span>
                  <span className="text-zinc-500 text-sm">/mes</span>
                </div>
                <ul className="space-y-3 pt-4">
                  {["Soporte prioritario", "Actualizaciones de modelo", "Analíticas avanzadas"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-zinc-800 transition-all">
                  Empezar ahora
                </button>
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
