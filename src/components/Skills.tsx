'use client';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Uso em produção' },
      { name: 'TypeScript', level: 'Uso em produção' },
      { name: 'PostgreSQL', level: 'Intermediário/Avançado' },
      { name: 'Redis / BullMQ', level: 'Intermediário' },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 'Uso em produção' },
      { name: 'Tailwind CSS', level: 'Uso em produção' },
      { name: 'Framer Motion', level: 'Intermediário' },
      { name: 'Shadcn/UI', level: 'Intermediário' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-2xl font-bold text-[#FAFAFA] mb-4 text-center">Stack Técnica</h2>
      <p className="text-sm text-[#A1A1AA] text-center max-w-2xl mx-auto mb-12">
        Tecnologias que utilizo para construir APIs, dashboards, integrações e produtos web completos.
      </p>
      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
         {skillGroups.map((group, idx) => (
            <div key={idx} className="rounded-2xl border border-[#27272A] bg-[#111111]/70 p-6">
                <h3 className="text-[#A1A1AA] text-sm font-medium mb-6 uppercase tracking-widest">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="rounded-xl border border-[#27272A] bg-[#18181B] px-4 py-3"
                >
                  <span className="block text-sm font-medium text-[#FAFAFA]">{skill.name}</span>
                  <span className="mt-1 block text-[11px] text-blue-300">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}