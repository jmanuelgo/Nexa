import { motion } from 'framer-motion'
import { FaInstagram as Instagram, FaFacebook as Facebook, FaPhone as Phone, FaComment as MessageCircle, FaPlay } from 'react-icons/fa'

// Placeholders for images (you can replace these URLs with local imports later)
const PlaceholderImage = ({ text, className }) => (
  <div className={`flex items-center justify-center bg-surface border border-white/10 rounded-xl overflow-hidden ${className}`}>
    <span className="text-text-muted font-medium">{text}</span>
  </div>
);

const VideoCard = ({ href, src, alt, className }) => {
  const content = (
    <>
      <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      {href && (
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.5)] scale-75 group-hover:scale-100 transition-transform duration-300">
            <FaPlay className="ml-1" />
          </div>
        </div>
      )}
    </>
  );

  const wrapperClass = `relative group block rounded-xl overflow-hidden border border-white/10 ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={wrapperClass}>
        {content}
      </a>
    );
  }

  return (
    <div className={wrapperClass}>
      {content}
    </div>
  );
};

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30">

      {/* 1. Header / Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-6 grid-bg">
        {/* Abstract shapes for background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>

        <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
          <div className="flex items-center gap-2">
            <img src="/nexa-logo.png" alt="NEXA Logo" className="h-8 object-contain" />
          </div>
          <a href="#contact" className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium">
            Contáctanos
          </a>
        </nav>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto z-10"
        >
          <div className="mb-8 flex justify-center">
            {/* Logo Placeholder */}
            <div className="w-32 h-32 md:w-48 md:h-48 border-2 border-white/50 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              <img src="/nexa-logo.png" alt="" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">N E X A</h1>
          <p className="text-xl md:text-2xl text-text-muted font-light tracking-wide">Conectando ideas, impulsando negocios</p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-text-muted">Descubre más</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-text-muted to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. About Us */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">QUIÉNES <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">SOMOS</span></h2>
              <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                <p><span className="text-white font-medium">En NEXA transformamos ideas en estrategias reales.</span></p>
                <p>Somos una empresa de Marketing y Publicidad joven, dinámica y creativa, especializada en desarrollo estratégico para empresas, instituciones y emprendimientos que buscan evolucionar, destacar y dejar huella.</p>
                <p>Creemos en la planificación inteligente, la comunicación efectiva y el diseño de soluciones a medida, acompañando a nuestros clientes desde la construcción de identidad hasta el fortalecimiento de su presencia en el mercado.</p>
                <p className="border-l-4 border-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] pl-4 text-white italic">"Somos ese equipo aliado que se involucra de verdad, analiza, propone y ejecuta con pasión. NEXA es estrategia con alma, con propósito y con impacto."</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative h-[500px]">
              <img src="/Somos.png" alt="Foto del Equipo NEXA" className="w-full h-full" />
              {/* <PlaceholderImage text="Foto del Equipo NEXA" className="w-full h-full" /> */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-24 px-6 bg-surface/50 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Mission */}
            <motion.div variants={fadeUp} className="glass-panel p-10 md:p-14 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors"></div>
              <h3 className="text-3xl font-bold mb-6">MISIÓN</h3>
              <p className="text-text-muted text-lg leading-relaxed relative z-10">
                En NEXA, potenciamos el desarrollo de empresas mediante servicios especializados.
                <br /><br />
                Nuestro compromiso es lograr un impacto real en el crecimiento y éxito de nuestros clientes, adaptándonos a sus requerimientos con innovación y excelencia. Aportando así a la construcción de una dinámica económica más sólida y sostenible para todos.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeUp} className="glass-panel p-10 md:p-14 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-colors">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/20 transition-colors"></div>
              <h3 className="text-3xl font-bold mb-6">VISIÓN</h3>
              <p className="text-text-muted text-lg leading-relaxed relative z-10">
                Convertirnos en un referente en servicios especializados, reconocidos por nuestra capacidad para acompañar a las empresas en la implementación efectiva de estrategias que fomenten su desarrollo exitoso.
                <br /><br />
                Aspiramos a consolidarnos como una empresa que provea soluciones integrales para la mejora continua de nuestros clientes tanto a nivel local como internacional.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Clients / Logos */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16">EMPRESAS QUE AVALAN<br />NUESTRO TRABAJO</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              "Chita.png",
              "Club blanco .PNG",
              "Coscaña.png",
              "Cutai.jpeg",
              "Happy Puppies.PNG",
              "Huascar.png",
              "Medicina.png",
              "Prado.png",
              "Suliete.png",
              "THATSOUND.PNG",
              "Toloma.png",
              "WOW.PNG"
            ].map((logo, i) => (
              <div key={i} className="aspect-[3/2] flex items-center justify-center glass-panel rounded-lg hover:bg-white/5 hover:scale-105 transition-all duration-300 p-6 group">
                <img
                  src={`/Logos/${encodeURIComponent(logo)}`}
                  alt={`Logo Cliente ${i + 1}`}
                  className="max-w-full max-h-full object-contain group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. Portfolio */}
      <section className="py-24 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">CASOS DE <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">ÉXITO</span></h2>
            <p className="text-xl text-text-muted">Fotografía, Video y Diseño del Feed</p>
          </motion.div>

          <div className="space-y-32">
            {/* Portfolio Item 1 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeUp} className="lg:col-span-1 flex flex-col justify-center">
                <h3 className="text-sm text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] uppercase tracking-widest font-bold mb-2">CLIENTE</h3>
                <h4 className="text-3xl font-bold mb-2">COSCAÑA UYUNI HOTEL</h4>
                <p className="text-text-muted mb-8">Hotel en Uyuni</p>
                <div className="w-16 h-1 bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>
              </motion.div>
              <motion.div variants={fadeUp} className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                <VideoCard href="https://www.facebook.com/share/r/1DVJvQpucR/" src="/Coscaña/Coscaña%201.jpeg" alt="Coscaña Feed 1" className="aspect-[9/16] w-full" />
                <VideoCard href="https://m.facebook.com/story.php?story_fbid=pfbid0pwBhiFD6RoEGxPR1VJvRz87AUqZASh8vKoAKXEjQfNVChimJ9xd26SkD2jnNEXhSl&id=61567100376270&mibextid=ZbWKwL" src="/Coscaña/Coscaña%203.png" alt="Coscaña Feed 2" className="aspect-[9/16] w-full" />
                <VideoCard href="https://www.facebook.com/share/r/1L3QQfqjuY/" src="/Coscaña/Coscaña%204.png" alt="Coscaña Feed 3" className="aspect-[9/16] w-full" />
                <VideoCard href="https://www.facebook.com/share/r/1JBuL9Ztbm/" src="/Coscaña/Coscaña%205.png" alt="Coscaña Post" className="aspect-[9/16] w-full" />
              </motion.div>
            </motion.div>

            {/* Portfolio Item 2 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeUp} className="lg:col-span-1 lg:order-2 flex flex-col justify-center lg:pl-12">
                <h3 className="text-sm text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] uppercase tracking-widest font-bold mb-2">CLIENTE</h3>
                <h4 className="text-3xl font-bold mb-2">TOLOMA GRAN HOTEL</h4>
                <p className="text-text-muted mb-8">Hotel 4 estrellas en Cochabamba</p>
                <div className="w-16 h-1 bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>
              </motion.div>
              <motion.div variants={fadeUp} className="lg:col-span-2 lg:order-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                <VideoCard href="https://www.facebook.com/share/r/1Fynr5JzaC/" src="/Toloma/Toloma%201.png" alt="Toloma Foto 1" className="aspect-[9/16] w-full" />
                <VideoCard href="https://www.facebook.com/share/r/1Z6n8qhRun/" src="/Toloma/Toloma%202.jpeg" alt="Toloma Foto 2" className="aspect-[9/16] w-full" />
                <VideoCard href="https://www.facebook.com/share/r/14jKagMn7WW/" src="/Toloma/Toloma%203.png" alt="Toloma Foto 3" className="aspect-[9/16] w-full" />
                <VideoCard href="https://www.facebook.com/share/r/1BzknCUrz9/" src="/Toloma/Toloma%204.png" alt="Toloma Feed" className="aspect-[9/16] w-full" />
              </motion.div>
            </motion.div>

            {/* Portfolio Item 3 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeUp} className="lg:col-span-1 flex flex-col justify-center">
                <h3 className="text-sm text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] uppercase tracking-widest font-bold mb-2">CLIENTE</h3>
                <h4 className="text-3xl font-bold mb-2">SILUETTE</h4>
                <p className="text-text-muted mb-8">Club de mujeres</p>
                <div className="w-16 h-1 bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>
              </motion.div>
              <motion.div variants={fadeUp} className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                <VideoCard href="https://www.instagram.com/reel/DPjS78TER_-/?igsh=MXc3dHZqNDh2OXJqOQ==" src="/Siluette/Siluette%201.png" alt="Siluette Foto 1" className="aspect-[9/16] w-full" />
                <VideoCard href="https://www.instagram.com/reel/DOtLP_HESlj/?igsh=NGhnOGYxOXNoZjBh" src="/Siluette/Siluette%202.jpeg" alt="Siluette Foto 2" className="aspect-[9/16] w-full" />
                <VideoCard href="https://www.instagram.com/reel/DYYFzGWxKA-/?igsh=MXBzbHcyM2QzNmlnOQ==" src="/Siluette/Siluette%203.png" alt="Siluette Foto 3" className="aspect-[9/16] w-full" />
                <VideoCard href="https://www.instagram.com/reel/DYYFzGWxKA-/?igsh=MXBzbHcyM2QzNmlnOQ==" src="/Siluette/Siluette%204.jpeg" alt="Siluette Feed" className="aspect-[9/16] w-full" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Video / CTA */}
      <section className="py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-purple-500/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl grid-bg opacity-30"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10"
        >
          <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-10 bg-surface/50 backdrop-blur-md">
            <img src="/nexa-logo.png" alt="" className="h-10 object-contain" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-12">Botón directo a nuestro<br />video explicativo</h2>

          <motion.a
            href="https://www.instagram.com/reel/DPHry4pCcfP/?igsh=eDFoMnc0dXBlZjR1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white rounded-full text-black font-bold text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all flex items-center gap-3 mx-auto w-max"
          >
            CLICK AQUÍ
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Video Placeholders */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full relative z-10">
          <img src="/Miniatura%20video%201.png" alt="Miniatura de Video 1" className="aspect-video w-full object-cover rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-transform duration-300" />
          <img src="/Miniatura%20video%202.png" alt="Miniatura de Video 2" className="aspect-video w-full object-cover rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-transform duration-300" />
        </div>
      </section>

      {/* 7. Footer / Contact */}
      <footer id="contact" className="py-10 px-6 border-t border-white/5 bg-surface relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center mb-6">
            <img src="/nexa-logo.png" alt="" className="h-6 object-contain" />
          </div>

          <h2 className="text-2xl font-bold mb-8 tracking-wider">CONTACTO</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
            <a href="https://www.instagram.com/nexabolivia?igsh=aHV0NXZndGd0cDRp" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-white/20 transition-colors text-white">
                <Instagram size={20} />
              </div>
              <span className="text-sm text-text-muted group-hover:text-white transition-colors">@nexabolivia</span>
            </a>

            <a href="tel:77058280" className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-white/20 transition-colors text-white">
                <Phone size={20} />
              </div>
              <span className="text-sm text-text-muted group-hover:text-white transition-colors">77058280</span>
            </a>

            <a href="#" className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-white/20 transition-colors text-white">
                <Facebook size={20} />
              </div>
              <span className="text-sm text-text-muted group-hover:text-white transition-colors">NEXA Conectando ideas</span>
            </a>
          </div>

          <div className="text-xs text-text-muted/50 w-full border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 NEXA Marketing y Publicidad. Todos los derechos reservados.</p>
            <p>Conectando ideas, impulsando negocios.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
