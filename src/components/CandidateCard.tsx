import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
     Dialog,
     DialogContent,
     DialogDescription,
     DialogTitle,
     DialogTrigger,
     DialogClose,
} from "@/components/ui/dialog";
import { SquareCheckBig, CheckCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";

interface Candidate {
     id: number;
     president: {
          name: string;
          photo: string;
          major: string;
          batch: string;
     };
     vicePresident: {
          name: string;
          photo: string;
          major: string;
          batch: string;
     };
     vision: string;
     mission: string[];
     programs?: string[];
}

export default function CandidateCard({ candidate }: { candidate: Candidate }) {
     return (
          <motion.div
               whileHover={{ y: -5 }}
               transition={{ duration: 0.3 }}
               className="h-full"
          >
               <Card className="overflow-hidden max-w-[320px] border border-slate-100 shadow-lg bg-white rounded-3xl h-full flex flex-col group">
                    <div className="relative aspect-4/5 bg-slate-50 w-full overflow-hidden">
                         <Image
                              src={candidate.president.photo}
                              alt={`Pasangan Calon ${candidate.id} `}
                              fill
                              loading="eager"
                              className="object-cover"
                         />
                         <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/90 via-slate-900/50 to-transparent p-5 pt-24 text-white">
                              <div className="flex justify-between items-end gap-4">
                                   <div className="text-left flex-1 min-w-0">
                                        <p className="text-slate-200 text-[10px] uppercase font-bold tracking-wider mb-1">Presma</p>
                                        <p className="font-bold text-sm leading-tight truncate">{candidate.president.name}</p>
                                   </div>
                                   <div className="text-right flex-1 min-w-0">
                                        <p className="text-slate-200 text-[10px] uppercase font-bold tracking-wider mb-1">Wapresma</p>
                                        <p className="font-bold text-sm leading-tight truncate">{candidate.vicePresident.name}</p>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <CardHeader className="text-center pb-2 pt-2">
                         <CardTitle className="text-lg font-bold text-slate-900">Pasangan Calon {candidate.id}</CardTitle>
                    </CardHeader>

                    <CardContent className="px-6 pb-6 grow flex flex-col">
                         <div className="mb-4">
                              <p className="text-sm text-slate-600 italic leading-relaxed text-center line-clamp-3">
                                   &quot;{candidate.vision}&quot;
                              </p>
                         </div>

                         <div className="mt-auto pt-2">
                              <Dialog>
                                   <DialogTrigger asChild>
                                        <Button variant="outline" className="w-full rounded-xl border-slate-200 text-slate-700 hover:text-primary hover:border-primary/50 hover:bg-slate-50 transition-all">
                                             Detail Kandidat
                                        </Button>
                                   </DialogTrigger>
                                   <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden rounded-3xl bg-white border-0 shadow-2xl flex flex-col md:flex-row">

                                        {/* Accessibility: Hidden Title & Description */}
                                        <div className="sr-only">
                                             <DialogTitle>Detail Pasangan Calon {candidate.id}</DialogTitle>
                                             <DialogDescription>
                                                  Visi dan Misi lengkap dari pasangan calon nomor urut {candidate.id}, {candidate.president.name} dan {candidate.vicePresident.name}.
                                             </DialogDescription>
                                        </div>

                                        {/* Left Side: Photo (Fixed on Desktop, Top on Mobile) */}
                                        <div className="relative w-full md:w-5/12 h-64 md:h-auto bg-slate-100 shrink-0">
                                             <Image
                                                  src={candidate.president.photo}
                                                  alt={`Pasangan Calon ${candidate.id} `}
                                                  fill
                                                  className="object-cover object-top"
                                             />
                                             <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/90 via-slate-900/50 to-transparent p-5 pt-32 text-white">
                                                  <div className="flex justify-between items-end gap-4">
                                                       <div className="text-left flex-1 min-w-0">
                                                            <p className="text-slate-200 text-2xl uppercase font-bold tracking-wider mb-1">Presma</p>
                                                            <p className="font-bold text-xl leading-tight truncate">{candidate.president.name}</p>
                                                       </div>
                                                       <div className="text-right flex-1 min-w-0">
                                                            <p className="text-slate-200 text-2xl uppercase font-bold tracking-wider mb-1">Wapresma</p>
                                                            <p className="font-bold text-xl leading-tight truncate">{candidate.vicePresident.name}</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                        {/* Right Side: Content (Scrollable) */}
                                        <div className="w-full md:w-7/12 flex flex-col max-h-[60vh] md:max-h-[85vh] overflow-y-auto bg-white/50">
                                             <div className="p-8 md:p-10 space-y-8">

                                                  {/* Vision & Mission Section */}
                                                  <div>
                                                       <div className="flex items-center gap-3 mb-6">
                                                            <div className="p-2.5 bg-blue-50 rounded-xl text-primary">
                                                                 <SquareCheckBig className="w-6 h-6" />
                                                            </div>
                                                            <h1 className="text-2xl font-bold text-slate-900">
                                                                 Visi & Misi
                                                            </h1>
                                                       </div>

                                                       <div className="space-y-8">
                                                            {/* Visi */}
                                                            <div>
                                                                 <p className="text-slate-700 text-lg leading-relaxed italic bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                                                      &quot;{candidate.vision}&quot;
                                                                 </p>
                                                            </div>

                                                            {/* Misi */}
                                                            <div>
                                                                 <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                                      <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                                                                      Misi
                                                                 </h3>

                                                                 <ul className="grid gap-3">
                                                                      {candidate.mission.map((m: string, i: number) => (
                                                                           <li key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                                                                <div className="shrink-0 mt-0.5">
                                                                                     <CheckCircle className="w-5 h-5 text-primary" />
                                                                                </div>
                                                                                <span className="text-slate-600 leading-relaxed text-base">{m}</span>
                                                                           </li>
                                                                      ))}
                                                                 </ul>
                                                            </div>
                                                       </div>
                                                  </div>

                                                  {/* Flagship Programs Section */}
                                                  <div>
                                                       <div className="flex items-center gap-3 mb-6">
                                                            <div className="p-2.5 bg-orange-50 rounded-xl text-orange-500">
                                                                 <Rocket className="w-6 h-6" />
                                                            </div>
                                                            <h1 className="text-2xl font-bold text-slate-900">
                                                                 Program Unggulan
                                                            </h1>
                                                       </div>

                                                       <div className="grid gap-4">
                                                            {candidate.programs && candidate.programs.length > 0 ? (
                                                                 candidate.programs.map((program, i) => (
                                                                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                                                                           <span className="shrink-0 w-8 h-8 rounded-lg bg-white text-orange-500 font-bold flex items-center justify-center shadow-sm text-sm border border-orange-100">
                                                                                {i + 1}
                                                                           </span>
                                                                           <span className="text-slate-700 font-medium pt-1">{program}</span>
                                                                      </div>
                                                                 ))
                                                            ) : (
                                                                 <div className="text-center py-6 text-slate-400 ">
                                                                      Belum ada data program unggulan
                                                                 </div>
                                                            )}
                                                       </div>
                                                  </div>

                                                  {/* Close Button */}
                                                  <div className="pt-4 border-t border-slate-100">
                                                       <DialogClose asChild>
                                                            <Button className="w-full h-12 rounded-xl text-base font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-lg shadow-slate-200">
                                                                 Tutup
                                                            </Button>
                                                       </DialogClose>
                                                  </div>
                                             </div>
                                        </div>
                                   </DialogContent>
                              </Dialog>
                         </div>
                    </CardContent>
               </Card>
          </motion.div>
     );
}
