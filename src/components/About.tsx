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
          Sou desenvolvedor full stack focado em transformar processos manuais em produtos digitais úteis: automações, APIs, dashboards e sistemas web sob medida.
          <br />
          <br />
          Gosto de entender o fluxo real do negócio antes de codar, mapear gargalos e entregar soluções que sejam simples de usar, fáceis de manter e preparadas para evoluir.
          <br />
          <br />
          Trabalho com Node.js, React, Next.js, PostgreSQL, filas assíncronas e integrações com APIs externas para criar sistemas que reduzem retrabalho e dão mais visibilidade para a operação.
        </motion.p>
      </div>
    </section>
  );
}