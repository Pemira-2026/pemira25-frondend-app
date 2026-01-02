/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { timeline } from "@/lib/data";
import AboutSection from "@/components/AboutSection";
import { Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingView({ stats }: { stats: { totalVoters: number; votesCast: number; turnout: string } }) {
     return (
          <div className="flex flex-col gap-16 md:gap-24 pb-24">
               {/* Hero Section */}
               <section id="hero" className="relative pt-8 pb-12 lg:pt-20 lg:pb-24 overflow-hidden">

                    {/* Background Pattern - Dot Grid */}
                    <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-cream bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                         {/* Left: Text Content */}
                         <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8 }}
                              className="text-center lg:text-left z-10"
                         >

                              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-slate-900 leading-[1.1]">
                                   Saatnya <span className="text-primary">Memilih</span><br />
                                   <span className="text-primary">Pemimpin </span>Baru
                              </h1>

                              <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                   PEMIRA STT Terpadu Nurul Fikri merupakan sarana resmi pemilihan pimpinan mahasiswa yang menjunjung tinggi nilai integritas, partisipasi aktif, dan tanggung jawab bersama demi masa depan kampus yang lebih baik.
                              </p>

                              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                                   <Link href="/vote" className="w-full sm:w-auto">
                                        <Button size="lg" className="w-full sm:w-auto rounded-full text-base font-bold h-14 px-8 bg-primary hover:bg-primary-light text-white shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-300">
                                             Vote Sekarang <ChevronRight className="ml-2 h-5 w-5" />
                                        </Button>
                                   </Link>
                                   <Link href="/candidates" className="w-full sm:w-auto">
                                        <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base font-bold h-14 px-8 bg-white/50 border-slate-300 hover:bg-white hover:text-primary transition-all duration-300">
                                             Lihat Kandidat
                                        </Button>
                                   </Link>
                              </div>
                         </motion.div>

                         {/* Right: Floating Visual (Logo) */}
                         <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="relative hidden lg:flex items-center justify-center h-125 w-full"
                         >
                              {/* Abstract Decorative blobs */}
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-primary/10 rounded-full blur-3xl -z-10" />

                              {/* Floating Logo */}
                              <div
                                   className="relative z-20 w-96 h-96 lg:w-125 lg:h-125"
                              >
                                   <Image
                                        src="/pemira-logo-text.svg"
                                        alt="Logo PEMIRA STTNF"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                   />
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* About Section */}
               <AboutSection />

               {/* Timeline Section */}
               <section id="timeline" className="container mx-auto px-4">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Jadwal <span className="text-primary">PEMIRA</span></h2>
                         <p className="text-lg text-slate-600 leading-relaxed">Catat tanggal-tanggal penting berikut ini</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                         {timeline.map((item, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.1 }}
                                   className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-surface border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                              >
                                   <div className="w-14 h-14 rounded-2xl bg-neutral-cream text-primary flex items-center justify-center mb-4 rotate-3 group-hover:rotate-6 transition-transform">
                                        <Calendar className="h-7 w-7" />
                                   </div>
                                   <h3 className="font-bold text-slate-900 mb-2">{item.event}</h3>
                                   <p className="text-sm text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-full">{item.date}</p>
                              </motion.div>
                         ))}
                    </div>
               </section>

               {/* Tutorial Section */}
               <section id="tutorial" className="container mx-auto px-4 py-20 bg-slate-50 rounded-[3rem] my-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6 }}
                         >
                              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                                   Cara <span className="text-primary">Voting</span>
                              </h2>
                              <p className="text-lg text-slate-600 leading-relaxed">
                                   Simak video panduan berikut untuk memahami tata cara pemilihan yang benar, mudah, dan sah.
                              </p>
                         </motion.div>
                    </div>

                    <motion.div
                         initial={{ opacity: 0, scale: 0.95 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8 }}
                         className="max-w-5xl mx-auto"
                    >
                         {/* Browser Window Frame */}
                         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/60 ring-1 ring-slate-900/5">
                              {/* Browser Header */}
                              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                                   <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                   </div>
                                   <div className="mx-auto bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 font-medium flex items-center gap-1.5 min-w-50 justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                             <path fillRule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.696l5.925-2.662 5.925 2.662a.75.75 0 001.075-.696V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clipRule="evenodd" />
                                        </svg>
                                        pemira.nurulfikri.ac.id
                                   </div>
                              </div>

                              {/* Video Container */}
                              <div className="relative w-full pb-[56.25%] bg-slate-900">
                                   <iframe
                                        src="https://www.youtube.com/embed/ym1GnhgPJ_g?si=CvfbcHRbP1tSIwsj"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full"
                                   ></iframe>
                              </div>
                         </div>

                         {/* Glow Effect behind */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/20 blur-[100px] -z-10 rounded-full opacity-50 pointer-events-none"></div>
                    </motion.div>
               </section>

          </div>
     );
}
