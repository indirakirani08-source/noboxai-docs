import { Lightbulb, AlertTriangle } from 'lucide-react';

export function Tips({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 not-prose">
      <div className="rounded-[2rem] border border-emerald-200 bg-[#eefaf3] p-6 pt-7 shadow-sm dark:border-emerald-900/30 dark:bg-emerald-950/20">
        <div className="flex items-start gap-4">
          {/* Icon Box */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-200/50 bg-[#c6f0d9] text-emerald-800 shadow-sm dark:bg-emerald-900/50 dark:text-emerald-400">
            <Lightbulb size={24} strokeWidth={2} />
          </div>

          {/* Content Wrapper */}
          <div className="flex flex-col flex-1 gap-1">
            <div className="text-[15px] leading-relaxed text-emerald-900/80 dark:text-emerald-200/80
              [&_h2]:text-[17px] [&_h2]:font-bold [&_h2]:text-emerald-950 [&_h2]:dark:text-emerald-50 [&_h2]:mt-0 [&_h2]:mb-1
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mt-3 [&_li]:mt-1.5
              [&_p]:mt-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Kendala({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 not-prose">
      <div className="rounded-[2rem] border border-red-100 bg-[#fdf2f2] p-6 pt-7 shadow-sm dark:border-red-900/30 dark:bg-red-950/20">
        <div className="flex items-start gap-4">
          {/* Icon Box */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-red-200/50 bg-[#f9d7d7] text-red-800 shadow-sm dark:bg-red-900/50 dark:text-red-400">
            <AlertTriangle size={24} strokeWidth={2} />
          </div>

          {/* Content Wrapper */}
          <div className="flex flex-col flex-1 gap-1">
            <div className="text-[15px] leading-relaxed text-red-900/80 dark:text-red-200/80
              [&_h2]:text-[17px] [&_h2]:font-bold [&_h2]:text-red-950 [&_h2]:dark:text-red-50 [&_h2]:mt-0 [&_h2]:mb-1
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mt-3 [&_li]:mt-1.5
              [&_p]:mt-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}