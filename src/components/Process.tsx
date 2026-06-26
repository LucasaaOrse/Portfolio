"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Diagnóstico",
    desc: "Entendo o processo atual, as tarefas manuais e onde a operação perde tempo.",
  },
  {
    title: "Mapeamento",
    desc: "Transformo o fluxo em requisitos claros, priorizando o que gera mais impacto.",
  },
  {
    title: "Desenvolvimento",
    desc: "Crio a automação, API ou sistema com foco em usabilidade, performance e manutenção.",
  },
  {
    title: "Entrega",
    desc: "Faço deploy, documentação básica e ajustes finais para deixar a solução pronta para uso.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-[#FAFAFA]">Como eu trabalho</h2>
        <p className="mt-3 text-sm text-[#A1A1AA] max-w-2xl">
          Um processo direto para sair do problema operacional e chegar em uma solução digital funcional.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <span className="text-xs font-mono text-blue-300">0{index + 1}</span>
              <h3 className="mt-3 font-semibold text-[#FAFAFA]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}