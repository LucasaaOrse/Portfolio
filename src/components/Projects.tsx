'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/projects';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [xEnd, setXEnd] = useState(0);

  useEffect(() => {
    if (!carouselRef.current) return;

    const calculateScroll = () => {
      const scrollWidth = carouselRef.current?.scrollWidth || 0;
      const clientWidth = carouselRef.current?.parentElement?.clientWidth || 0;
      setXEnd(Math.max(scrollWidth - clientWidth + 24, 0));
    };

    calculateScroll();

    window.addEventListener('resize', calculateScroll);
    return () => window.removeEventListener('resize', calculateScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -xEnd]);

  return (
    // Aumentei de h-[300vh] para h-[450vh]. Como agora são 7 projetos, a esteira é mais longa.
    // Mais altura vertical garante que o scroll não passe rápido demais pelos seus projetos.
    <section id="projects" className="py-24 md:py-0">
      <div className="mb-10 md:hidden">
        <h2 className="text-2xl font-bold text-[#FAFAFA]">Projetos em Destaque</h2>
        <p className="text-sm text-[#A1A1AA] mt-2">
          Cases selecionados com problema, solução e stack utilizada.
        </p>
      </div>

      <div className="grid gap-6 md:hidden">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div ref={targetRef} className="relative hidden h-[420vh] md:block">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="mb-12 w-full max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#FAFAFA]">Projetos em Destaque</h2>
            <p className="text-sm text-[#A1A1AA] mt-2">
              Role para baixo para navegar pelos cases de sistemas, APIs e automações.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto px-4">
            <motion.div ref={carouselRef} style={{ x }} className="flex gap-6 w-max">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: (typeof projects)[number];
};

function ProjectCard({ project }: ProjectCardProps) {
  const externalLabel = project.linkLabel ?? 'Ver online';

  return (
    <article className="w-full md:w-[420px] shrink-0 group relative rounded-2xl border border-[#27272A] bg-[#111111] overflow-hidden transition-colors hover:border-[#A1A1AA]/30">
      <div className="aspect-video w-full bg-[#18181B] overflow-hidden border-b border-[#27272A]/50">
        <Image
          src={project.image}
          alt={`Tela do projeto ${project.title}`}
          width={840}
          height={472}
          sizes="(min-width: 768px) 420px, 100vw"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col justify-between min-h-[380px]">
        <div>
          <h3 className="text-base font-semibold text-[#FAFAFA] tracking-tight group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
            {project.description}
          </p>

          <div className="mt-5 grid gap-3 text-xs leading-relaxed">
            <div className="rounded-xl border border-[#27272A]/70 bg-[#18181B]/70 p-3">
              <span className="font-semibold text-blue-300">Problema: </span>
              <span className="text-[#A1A1AA]">{project.problem}</span>
            </div>
            <div className="rounded-xl border border-[#27272A]/70 bg-[#18181B]/70 p-3">
              <span className="font-semibold text-emerald-300">Solução: </span>
              <span className="text-[#A1A1AA]">{project.solution}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#27272A] bg-[#18181B] text-[#FAFAFA]">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#27272A]/40 flex gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir código do projeto ${project.title}`} className="flex items-center gap-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded transition-colors">
                <FaGithub size={14} /> <span>Código</span>
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${externalLabel.toLowerCase()} do projeto ${project.title}`} className="flex items-center gap-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded transition-colors">
                <ExternalLink size={14} /> <span>{externalLabel}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}