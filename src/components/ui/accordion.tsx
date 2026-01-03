/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext<{
     openItemId: string | null
     setOpenItemId: (id: string | null) => void
} | null>(null)

const Accordion = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement> & {
          type?: "single"
          collapsible?: boolean
     }
>(({ className, children, type: _type, collapsible: _collapsible, ...props }, ref) => {
     const [openItemId, setOpenItemId] = React.useState<string | null>(null)

     return (
          <AccordionContext.Provider value={{ openItemId, setOpenItemId }}>
               <div ref={ref} className={cn("space-y-4", className)} {...props}>
                    {children}
               </div>
          </AccordionContext.Provider>
     )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
     return (
          <div
               ref={ref}
               className={cn("border border-slate-200 rounded-xl bg-white overflow-hidden", className)}
               data-value={value}
               {...props}
          >
               {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                         return React.cloneElement(child as any, { value })
                    }
                    return child
               })}
          </div>
     )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
     HTMLButtonElement,
     React.ButtonHTMLAttributes<HTMLButtonElement> & { value?: string }
>(({ className, children, value, ...props }, ref) => {
     const context = React.useContext(AccordionContext)
     if (!context) throw new Error("AccordionTrigger must be used within Accordion")

     const isOpen = context.openItemId === value

     return (
          <button
               ref={ref}
               onClick={() => context.setOpenItemId(isOpen ? null : value!)}
               className={cn(
                    "flex flex-1 items-center justify-between py-4 px-6 font-medium transition-all hover:bg-slate-50 w-full text-left [&[data-state=open]>svg]:rotate-180",
                    className
               )}
               data-state={isOpen ? "open" : "closed"}
               {...props}
          >
               {children}
               <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-slate-400" />
          </button>
     )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement> & { value?: string }
>(({ className, children, value, ...props }, ref) => {
     const context = React.useContext(AccordionContext)
     if (!context) throw new Error("AccordionContent must be used within Accordion")

     const isOpen = context.openItemId === value

     return (
          <AnimatePresence initial={false}>
               {isOpen && (
                    <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.2, ease: "easeInOut" }}
                         className="overflow-hidden"
                    >
                         <div
                              ref={ref}
                              className={cn("px-6 pb-4 pt-0 text-sm text-slate-600 leading-relaxed", className)}
                              {...props}
                         >
                              {children}
                         </div>
                    </motion.div>
               )}
          </AnimatePresence>
     )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
