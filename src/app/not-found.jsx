import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-6">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="90" fill="#F0FDFA" />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#CCFBF1"
              strokeWidth="3"
              strokeDasharray="6 8"
            />
            <rect
              x="55"
              y="60"
              width="90"
              height="80"
              rx="10"
              fill="#FFFFFF"
              stroke="#0F766E"
              strokeWidth="3"
            />
            <rect x="55" y="60" width="90" height="20" rx="10" fill="#0F766E" />
            <line x1="75" y1="52" x2="75" y2="68" stroke="#0F766E" strokeWidth="4" strokeLinecap="round" />
            <line x1="125" y1="52" x2="125" y2="68" stroke="#0F766E" strokeWidth="4" strokeLinecap="round" />
            <line x1="80" y1="105" x2="120" y2="125" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
            <line x1="120" y1="105" x2="80" y2="125" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-6xl font-bold text-[#0F766E] tracking-tight">404</p>
          <h1 className="text-xl font-semibold text-[#0F172A]">
            This page isn&apos;t on the schedule
          </h1>
          <p className="text-[#475569] text-sm leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg bg-[#0F766E] text-white text-sm font-medium hover:bg-[#115E59] transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/doctors"
            className="px-5 py-2.5 rounded-lg bg-[#F59E0B] text-white text-sm font-medium hover:bg-[#D97706] transition-colors"
          >
            Browse doctors
          </Link>
        </div>
      </div>
    </div>
  );
}
