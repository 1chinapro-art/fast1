import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft, Send, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  const telegramLink = "https://t.me/your_telegram_handle";

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-50 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-green/5 blur-[150px] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full glass-card p-12 sm:p-20 rounded-[3rem] text-center border-white/10 relative"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-green via-electric-blue to-purple-500" />
        
        <div className="w-24 h-24 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-neon-green/20">
          <CheckCircle2 size={48} className="text-neon-green" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-display font-black mb-6 uppercase tracking-tighter">Дякуємо!</h1>
        <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
          Ваша заявка прийнята. Ми вже готуємо ідеї для вашого проєкту. 
          <span className="block mt-4 text-white font-medium">Напишіть нам у Telegram для миттєвого старту.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href={telegramLink}
            className="cta-button bg-neon-green text-slate-950 neon-shadow px-10 py-5 rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-3"
          >
            <Send size={20} />
            Telegram
          </a>
          <Link 
            to="/"
            className="px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-bold uppercase tracking-widest flex items-center justify-center gap-3"
          >
            <ArrowLeft size={20} />
            На головну
          </Link>
        </div>

        <div className="mt-16 pt-10 border-t border-white/5 flex items-center justify-center gap-3 opacity-50">
          <Zap size={16} className="text-neon-green" />
          <span className="text-xs font-bold uppercase tracking-widest">FastMotion Studio</span>
        </div>
      </motion.div>
    </div>
  );
}
