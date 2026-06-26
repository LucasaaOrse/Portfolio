"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Automações",
    desc: "Robôs e scripts que eliminam tarefas manuais e repetitivas.",
  },
  {
    title: "Sistemas Web",
    desc: "Plataformas completas com dashboards e área administrativa.",
  },
  {
    title: "APIs",
    desc: "Integração entre sistemas e serviços externos.",
  },
  {
    title: "Dashboards",
    desc: "Painéis em tempo real para tomada de decisão.",
  },
  {
    title: "Micro SaaS",
    desc: "Soluções sob medida para problemas específicos.",
  },
  {
    title: "Bots",
    desc: "Automação de processos em sistemas internos ou externos.",
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