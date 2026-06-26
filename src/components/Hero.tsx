'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Terminal, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center pt-20">
      
      {/* Tag de impacto superior */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#27272A] bg-[#111111]/80 backdrop-blur text-xs text-[#A1A1AA] mb-6"
      >
        <Terminal size={14} className="text-blue-500" />
        <span>Automatizando processos. Desenvolvendo soluções.</span>
      </motion.div>

      {/* Nome e Título Principal */}
      <motion.h1 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-6xl font-bold tracking-tight text-[#FAFAFA] max-w-3xl leading-[1.15]"
      >
        Lucas Orse <br />
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Desenvolvedor Full Stack
        </span>
      </motion.h1>

      {/* Descrição Subtítulo */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-lg text-[#A1A1AA] max-w-xl leading-relaxed"
      >
        Especialista em Automações, APIs e Sistemas Web. Ajudo empresas a economizar tempo e reduzir tarefas manuais através de engenharia de software sob medida.
      </motion.p>

      {/* Call to Actions (Botões) */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <a 
          href="#projects" 
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-[#FAFAFA] text-[#09090B] font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Ver Projetos
        </a>
        <a 
          href="#contact" 
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg border border-[#27272A] bg-[#111111]/50 backdrop-blur text-[#FAFAFA] font-medium transition-colors hover:bg-[#111111] hover:border-[#A1A1AA]/30"
        >
          Entrar em contato
          <ArrowUpRight size={16} className="text-[#A1A1AA]" />
        </a>
      </motion.div>

      {/* Indicador de Rolagem */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.6, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-xs text-[#A1A1AA]"
      >
        <span>Role para explorar</span>
        <ArrowDown size={14} />
      </motion.div>

    </section>
  );
}