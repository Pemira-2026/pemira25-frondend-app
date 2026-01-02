'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Vote, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
     const highlights = [
          {
               icon: Vote,
               title: 'Demokratis',
               description: 'Setiap suara memiliki nilai yang sama untuk masa depan.',
               color: 'text-blue-600',
               bg: 'bg-blue-50'
          },
          {
               icon: ShieldCheck,
               title: 'Jujur & Adil',
               description: 'Bebas dari kecurangan, transparan, dan dapat dipertanggungjawabkan.',
               color: 'text-blue-600',
               bg: 'bg-blue-50'
          },
          {
               icon: Eye,
               title: 'Transparan',
               description: 'Seluruh tahapan dapat diawasi secara terbuka oleh publik.',
               color: 'text-blue-600',
               bg: 'bg-blue-50'
          },
     ];

     return (
          <section id="about" className="container mx-auto px-4 py-20 relative">
               {/* Background decoration */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 blur-3xl -z-10 rounded-full opacity-60" />

               <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6 }}
                    >
                         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                              Tentang <span className="text-primary">PEMIRA</span>
                         </h2>
                         <p className="text-lg text-slate-600 leading-relaxed">
                              Pesta demokrasi terbesar di STT Terpadu Nurul Fikri. Momentum melahirkan pemimpin berintegritas yang siap membawa perubahan nyata.
                         </p>
                    </motion.div>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => {
                         const Icon = item.icon;
                         return (
                              <motion.div
                                   key={index}
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ delay: index * 0.15, duration: 0.5 }}
                              >
                                   <Card className="h-full border-0 shadow-xl shadow-slate-200/40 bg-white/80 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
                                        <CardContent className="p-8 flex flex-col items-center text-center">
                                             <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 shadow-sm`}>
                                                  <Icon size={32} />
                                             </div>
                                             <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                             <p className="text-slate-500 leading-relaxed">
                                                  {item.description}
                                             </p>
                                        </CardContent>
                                   </Card>
                              </motion.div>
                         )
                    })}
               </div>
          </section>
     );
}
