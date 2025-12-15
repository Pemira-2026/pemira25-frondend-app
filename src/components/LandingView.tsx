"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { timeline } from "@/lib/data";
import AboutSection from "@/components/AboutSection";
import { Calendar, Users, Vote, TrendingUp, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingView({ stats }: { stats: { totalVoters: number; votesCast: number; turnout: string } }) {
     return (
          <div className="flex flex-col gap-16 md:gap-24 pb-24">
               {/* Hero Section */}
               <section id="hero" className="relative pt-24 px-4 text-center pb-8 overflow-hidden">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         className="max-w-4xl mx-auto z-10 relative"
                    >
                         <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/50 text-primary text-xs md:text-sm font-bold tracking-wide border border-primary/10">
                              PEMIRA STTNF 2025
                         </div>
                         <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight text-slate-900 leading-tight">
                              Suaramu Menentukan <br />
                              <span className="text-primary">Masa Depan Kampus</span>
                         </h1>
                         <p className="text-base md:text-xl text-neutral-slate mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                              Mari wujudkan demokrasi yang jujur, adil, dan transparan.
                              Gunakan hak pilihmu untuk STT Terpadu Nurul Fikri yang lebih baik.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                              <Link href="/vote" className="w-full sm:w-auto">
                                   <Button size="lg" className="w-full sm:w-auto rounded-full text-base md:text-lg h-12 md:h-14 px-8 bg-primary hover:bg-primary-light shadow-lg shadow-primary/20 transition-all hover:scale-105">
                                        Vote Sekarang <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                                   </Button>
                              </Link>
                              <Link href="/candidates" className="w-full sm:w-auto">
                                   <Button size="lg" variant="ghost" className="w-full sm:w-auto rounded-full text-base md:text-lg h-12 md:h-14 px-8 text-neutral-slate hover:text-primary hover:bg-white/50">
                                        Lihat Kandidat
                                   </Button>
                              </Link>
                         </div>
                    </motion.div>

                    {/* Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-white/30 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />
               </section>

               {/* Stats Section */}
               <section id="stats" className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 }}
                         >
                              <Card className="bg-surface shadow-xl shadow-slate-200/50 border-slate-100 hover:border-primary/20 transition-colors group">
                                   <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="text-sm font-medium text-neutral-slate">Total Pemilih</CardTitle>
                                        <Users className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                                   </CardHeader>
                                   <CardContent>
                                        <div className="text-4xl font-bold text-slate-900">{stats.totalVoters}</div>
                                        <p className="text-xs text-slate-400 mt-1">Mahasiswa aktif</p>
                                   </CardContent>
                              </Card>
                         </motion.div>
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                         >
                              <Card className="bg-surface shadow-xl shadow-slate-200/50 border-slate-100 hover:border-green-100 transition-colors group">
                                   <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="text-sm font-medium text-neutral-slate">Suara Masuk</CardTitle>
                                        <Vote className="h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
                                   </CardHeader>
                                   <CardContent>
                                        <div className="text-4xl font-bold text-slate-900">{stats.votesCast}</div>
                                        <p className="text-xs text-slate-400 mt-1">Telah menggunakan hak pilih</p>
                                   </CardContent>
                              </Card>
                         </motion.div>
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 }}
                         >
                              <Card className="bg-surface shadow-xl shadow-slate-200/50 border-slate-100 hover:border-secondary/50 transition-colors group">
                                   <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="text-sm font-medium text-neutral-slate">Partisipasi</CardTitle>
                                        <TrendingUp className="h-5 w-5 text-secondary group-hover:scale-110 transition-transform" />
                                   </CardHeader>
                                   <CardContent>
                                        <div className="text-4xl font-bold text-slate-900">{stats.turnout}</div>
                                        <p className="text-xs text-slate-400 mt-1">Dari total pemilih</p>
                                   </CardContent>
                              </Card>
                         </motion.div>
                    </div>
               </section>

               {/* About Section */}
               <AboutSection />

               {/* Timeline Section */}
               <section id="timeline" className="container mx-auto px-4">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl font-bold mb-4 text-slate-900">Jadwal PEMIRA</h2>
                         <p className="text-neutral-slate">Catat tanggal-tanggal penting berikut ini</p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-6">
                         {timeline.map((item, index) => (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
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
               <section id="tutorial" className="container mx-auto px-4">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl font-bold mb-4 text-slate-900">Tutorial Voting</h2>
                         <p className="text-neutral-slate">Simak video panduan berikut untuk tata cara pemilihan</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                         <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
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
               </section>

          </div>
     );
}
