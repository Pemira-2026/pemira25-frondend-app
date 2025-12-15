/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import CandidateCard from "@/components/CandidateCard";

export default function CandidatesView({ candidatesData }: { candidatesData: any[] }) {
     return (
          <div className="container mx-auto px-4 py-6 pb-20 md:py-10">
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
               >
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-900">Kandidat Ketua & Wakil BEM</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg">
                         Kenali calon pemimpinmu. Pelajari visi, misi, dan program kerja mereka sebelum menentukan pilihan.
                    </p>
               </motion.div>

               <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
                    {candidatesData.map((candidate, index) => (
                         <motion.div
                              key={candidate.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.2 }}
                              className="w-full max-w-[320px]"
                         >
                              <CandidateCard candidate={candidate} />
                         </motion.div>
                    ))}
               </div>
          </div>
     );
}
