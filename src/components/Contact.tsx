'use client';

import { Mail, MessageCircle } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="p-12 rounded-3xl border border-[#27272A] bg-[#111111]/50 backdrop-blur text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#FAFAFA]">Vamos conversar?</h2>
        <p className="mt-4 text-[#A1A1AA]">
          Estou disponível para novos projetos de automação e sistemas web. 
          Solicite um orçamento ou apenas diga um oi!
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:lucas.orse@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
            <Mail size={18} /> Email
          </a>
          <a href="https://wa.me/19982399626" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#27272A] bg-[#18181B] text-[#FAFAFA] hover:border-[#A1A1AA]/30 transition-colors">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
        <div className="mt-12 flex justify-center gap-8 text-[#A1A1AA]">
          <a href="#" className="hover:text-[#FAFAFA] transition-colors"><FaGithub size={24} /></a>
          <a href="#" className="hover:text-[#FAFAFA] transition-colors"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </section>
  );
}