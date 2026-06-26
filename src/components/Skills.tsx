'use client';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis / BullMQ', level: 75 },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 70 },
      { name: 'Shadcn/UI', level: 85 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-2xl font-bold text-[#FAFAFA] mb-12 text-center">Stack Técnica</h2>
      <div className="grid md:grid-cols-2 gap-16">
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-[#A1A1AA] text-sm font-medium mb-6 uppercase tracking-widest">{group.title}</h3>
            <div className="space-y-6">
              {group.skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-[#FAFAFA]">{skill.name}</span>
                    <span className="text-[#A1A1AA]">{skill.level}%</span>
                  </div>
                  <div className="h-1 w-full bg-[#18181B] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}