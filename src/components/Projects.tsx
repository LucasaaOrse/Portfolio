'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/projects';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [xEnd, setXEnd] = useState(0);

  useEffect(() => {
    if (!carouselRef.current) return;

    const calculateScroll = () => {
      const scrollWidth = carouselRef.current?.scrollWidth || 0;
      const clientWidth = carouselRef.current?.parentElement?.clientWidth || 0;
      
      // O cálculo perfeito: Largura total de todos os cards juntos MENOS o espaço visível da tela.
      // Adicionamos +24 pixels para o último card manter um espaçamento elegante da borda esquerda.
      setXEnd(scrollWidth - clientWidth + 24);
    };

    // Executa no mount da página
    calculateScroll();

    // Recalcula dinamicamente se o usuário redimensionar a janela (responsividade)
    window.addEventListener('resize', calculateScroll);
    return () => window.removeEventListener('resize', calculateScroll);
  }, []);

  // Captura o progresso do scroll vertical
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Agora mapeia de 0px até o valor negativo exato calculado dinamicamente
  const x = useTransform(scrollYProgress, [0, 1], [0, -xEnd]);

  return (
    // Aumentei de h-[300vh] para h-[450vh]. Como agora são 7 projetos, a esteira é mais longa.
    // Mais altura vertical garante que o scroll não passe rápido demais pelos seus projetos.
    <section ref={targetRef} id="projects" className="relative h-[450vh]">
      
      {/* Mantém a tela travada visualmente enquanto você rola */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Título e legenda fixos */}
        <div className="mb-12 w-full max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#FAFAFA]">Projetos em Destaque</h2>
          <p className="text-xs text-[#A1A1AA] mt-1">Role para baixo para navegar pela esteira de sistemas</p>
        </div>

        {/* Container da esteira */}
        <div className="w-full max-w-5xl mx-auto px-4">
          <motion.div 
            ref={carouselRef} 
            style={{ x }} 
            className="flex gap-6 w-max"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-[80vw] sm:w-[420px] shrink-0 group relative rounded-2xl border border-[#27272A] bg-[#111111] overflow-hidden transition-colors hover:border-[#A1A1AA]/30"
              >
                {/* Thumbnail do Projeto */}
                <div className="aspect-video w-full bg-[#18181B] overflow-hidden border-b border-[#27272A]/50">
                  <div className="w-full h-full flex items-center justify-center text-xs tracking-wider text-[#27272A] font-mono group-hover:scale-105 group-hover:text-blue-500/40 transition-all duration-500 bg-gradient-to-b from-transparent to-black/20">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col justify-between h-[240px]">
                  <div>
                    <h3 className="text-base font-semibold text-[#FAFAFA] tracking-tight group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#A1A1AA] line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#27272A] bg-[#18181B] text-[#FAFAFA]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Ações/Links */}
                    <div className="mt-6 pt-4 border-t border-[#27272A]/40 flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                        >
                          <FaGithub size={14} /> <span>Code</span>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                        >
                          <ExternalLink size={14} /> <span>Deploy</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}