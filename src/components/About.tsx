"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-bold"
        >
          Sobre mim
        </motion.h2>

        <motion.p
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="mt-6 text-[#A1A1AA] leading-relaxed"
>
          Sou desenvolvedor full stack focado em automação de processos,
          sistemas web e APIs.
          <br />
          <br />
          Minha especialidade é transformar tarefas manuais em sistemas
          automatizados que reduzem tempo operacional e aumentam eficiência.
          <br />
          <br />
          Trabalho com Node.js, React, Next.js, PostgreSQL e ferramentas de
          automação como robôs e filas assíncronas.
        </motion.p>
      </div>
    </section>
  );
}