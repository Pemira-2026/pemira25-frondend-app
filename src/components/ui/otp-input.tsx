import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface OtpInputProps {
     length?: number;
     value: string;
     onChange: (value: string) => void;
     onComplete?: (value: string) => void;
     className?: string;
     disabled?: boolean;
}

export function OtpInput({
     length = 6,
     value,
     onChange,
     onComplete,
     className,
     disabled = false,
}: OtpInputProps) {
     const [activeInputIndex, setActiveInputIndex] = useState(0);
     const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

     // Initialize value array
     const valueItems = React.useMemo(() => {
          const valueArray = value.split("");
          const items: string[] = [];

          for (let i = 0; i < length; i++) {
               items.push(valueArray[i] || "");
          }
          return items;
     }, [length, value]);

     const focusInput = (index: number) => {
          const activeInput = Math.max(Math.min(length - 1, index), 0);
          if (inputRefs.current[activeInput]) {
               inputRefs.current[activeInput]?.focus();
               setActiveInputIndex(activeInput);
          }
     };

     const handleChange = (
          e: React.ChangeEvent<HTMLInputElement>,
          index: number
     ) => {
          const { value: newValue } = e.target;
          // Handle single digit input
          if (newValue.length <= 1) {
               const nextValueItems = [...valueItems];
               nextValueItems[index] = newValue;
               const newOtp = nextValueItems.join("");
               onChange(newOtp);

               if (newValue && index < length - 1) {
                    focusInput(index + 1);
               }
          }
     };

     // Handle paste event
     const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
          e.preventDefault();
          const pastedData = e.clipboardData.getData("text/plain").slice(0, length - activeInputIndex).replace(/[^0-9]/g, "");
          if (!pastedData) return;

          const nextValueItems = [...valueItems];
          for (let i = 0; i < pastedData.length; i++) {
               if (activeInputIndex + i < length) {
                    nextValueItems[activeInputIndex + i] = pastedData[i];
               }
          }
          const newOtp = nextValueItems.join("");
          onChange(newOtp);

          // Move focus
          const nextIndex = Math.min(activeInputIndex + pastedData.length, length - 1);
          focusInput(nextIndex);
     };

     const handleKeyDown = (
          e: React.KeyboardEvent<HTMLInputElement>,
          index: number
     ) => {
          if ((e.key === "Backspace" || e.key === "Delete")) {
               e.preventDefault();

               if (valueItems[index]) {
                    const nextValueItems = [...valueItems];
                    nextValueItems[index] = "";
                    onChange(nextValueItems.join(""));
               } else {
                    if (index > 0) {
                         const nextValueItems = [...valueItems];
                         nextValueItems[index - 1] = "";
                         onChange(nextValueItems.join(""));
                         focusInput(index - 1);
                    }
               }
          } else if (e.key === "ArrowLeft") {
               e.preventDefault();
               focusInput(index - 1);
          } else if (e.key === "ArrowRight") {
               e.preventDefault();
               focusInput(index + 1);
          }
     };

     useEffect(() => {
          if (value.length === length && onComplete) {
               onComplete(value);
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [value, length]);

     return (
          <div className={cn("flex gap-2 justify-center", className)}>
               {Array.from({ length }, (_, index) => (
                    <input
                         key={index}
                         type="text"
                         inputMode="numeric"
                         autoComplete="one-time-code"
                         pattern="\d{1}"
                         maxLength={1}
                         className={cn(
                              "w-12 h-14 text-center text-2xl font-bold rounded-xl border border-slate-200 outline-none transition-all",
                              "focus:border-primary focus:ring-2 focus:ring-primary/20",
                              disabled && "opacity-50 cursor-not-allowed bg-slate-50"
                         )}
                         value={valueItems[index]}
                         onChange={(e) => handleChange(e, index)}
                         onKeyDown={(e) => handleKeyDown(e, index)}
                         onPaste={handlePaste}
                         onFocus={() => setActiveInputIndex(index)}
                         ref={(ref) => {
                              inputRefs.current[index] = ref;
                         }}
                         disabled={disabled}
                    />
               ))}
          </div>
     );
}
