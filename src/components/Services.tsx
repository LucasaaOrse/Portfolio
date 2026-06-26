"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Automações",
    desc: "Robôs, integrações e rotinas agendadas para eliminar processos repetitivos.",
  },
  {
    title: "Sistemas Web",
    desc: "Aplicações responsivas com login, área administrativa e fluxos sob medida.",
  },
  {
    title: "APIs",
    desc: "APIs REST com autenticação, banco de dados, documentação e integrações externas.",
  },
  {
    title: "Dashboards",
    desc: "Painéis administrativos para acompanhar indicadores, operações e registros em tempo real.",
  },
  {
    title: "Micro SaaS",
    desc: "Produtos enxutos para validar ideias, automatizar nichos e gerar receita recorrente.",
  },
  {
    title: "Bots",
    desc: "Bots para atendimento, notificações, coleta de dados e fluxos operacionais.",
  },
];


export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-10">O que eu desenvolvo</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-white/60 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}