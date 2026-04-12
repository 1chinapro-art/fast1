import { motion } from "motion/react";
import { Code, Zap, Globe, Cpu, Layout, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function HtmlPage() {
  const telegramLink = "https://t.me/your_telegram_handle";

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-50 selection:bg-neon-green selection:text-slate-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group cursor-pointer">
            <Zap className="text-neon-green fill-neon-green" size={24} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">FastMotion</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">
            <ArrowLeft size={16} />
            Назад
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue/10 border border-electric-blue/20 mb-8">
              <Code size={16} className="text-electric-blue" />
              <span className="text-sm font-bold tracking-wider uppercase text-electric-blue">Технології майбутнього</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tighter leading-none mb-8 uppercase">
              HTML5 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-purple-500">Анімація</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Створюємо інтерактивні та легкі креативи, які працюють всюди. 
              Від банерів до складних веб-інтерфейсів.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: <Globe className="text-neon-green" />,
                title: "Кросплатформенність",
                desc: "Ваш креатив виглядає ідеально на iPhone, Android, Windows та Mac. Жодних плагінів не потрібно."
              },
              {
                icon: <Cpu className="text-electric-blue" />,
                title: "Висока швидкість",
                desc: "HTML5 анімація важить у 10 разів менше за відео. Миттєве завантаження навіть при слабкому інтернеті."
              },
              {
                icon: <Layout className="text-purple-400" />,
                title: "Інтерактивність",
                desc: "Користувач може взаємодіяти з мультиком. Кліки, ховери, ігрові механіки — все можливо."
              },
              {
                icon: <Zap className="text-yellow-400" />,
                title: "SEO Friendly",
                desc: "Текст всередині анімації індексується пошуковими системами, що дає додатковий буст вашому сайту."
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-12 rounded-[3rem] border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-blue to-purple-500" />
            <h2 className="text-3xl font-bold mb-6">Потрібна HTML5 анімація?</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto font-light">
              Ми розробляємо банери для Google Ads, Facebook та індивідуальні рішення для сайтів. 
              Напишіть нам, і ми підберемо найкращий формат.
            </p>
            <a 
              href={telegramLink}
              className="cta-button bg-white text-slate-950 hover:bg-electric-blue hover:text-white transition-all px-12 py-5 text-xl font-black uppercase tracking-widest inline-flex items-center gap-3"
            >
              <Send size={20} />
              Обговорити проєкт
            </a>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-xs font-bold uppercase tracking-widest">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Zap size={14} className="text-neon-green" />
          <span>© 2026 FastMotion Studio</span>
        </div>
      </footer>
    </div>
  );
}
