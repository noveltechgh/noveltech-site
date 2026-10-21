"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black antialiased">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <nav className="flex justify-between font-mono text-xs tracking-widest mb-24">
          <span className="font-bold">NOVELTECH.STUDIO</span>
          <span className="text-neutral-500">BELLVILLE — CAPE TOWN — REMOTE</span>
        </nav>

        <motion.h1 
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8"
        >
          Websites that<br/>convert.
          Apps that<br/>work.
          Bots that<br/>save hours.
        </motion.h1>

        <p className="text-xl text-neutral-600 max-w-xl mb-10">
          I build fast Next.js sites, Supabase web apps, and n8n automations for businesses tired of WordPress and slow devs.
        </p>

        <div className="flex gap-3 mb-28">
          <a href="https://wa.me/27631385114" className="bg-black text-white px-7 py-3 text-sm font-mono">WHATSAPP ME</a>
          <div className="border px-7 py-3 text-sm font-mono">FROM R2,999</div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 border-t border-black pt-10 font-mono text-[13px] leading-relaxed">
          <div><b>01 / SITES</b><br/><span className="text-neutral-600">90+ Lighthouse, SEO, Tailwind. You own the code. No monthly hostage.</span></div>
          <div><b>02 / APPS</b><br/><span className="text-neutral-600">Booking, dashboards, client portals. Next.js + Supabase + FastAPI.</span></div>
          <div><b>03 / AUTOMATIONS</b><br/><span className="text-neutral-600">WhatsApp bots, invoices, leads. n8n on your server. R499/mo retainer.</span></div>
        </div>

        <div className="mt-28 border bg-neutral-50 p-6 font-mono text-xs">
          Stack: Next.js • Tailwind • Supabase • FastAPI • Qdrant • n8n • Tauri • Docker — all live on this machine.
        </div>
      </div>
    </main>
  );
}