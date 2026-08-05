export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-64 h-24">
          <svg
            viewBox="0 0 260 100"
            className="w-full h-full"
            fill="none"
          >
            <path
              d="M0 50 H70 L85 20 L100 80 L115 35 L130 65 L145 50 H260"
              stroke="#CCFBF1"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0 50 H70 L85 20 L100 80 L115 35 L130 65 L145 50 H260"
              stroke="#0F766E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="260"
              strokeDashoffset="260"
              className="animate-[dash_1.8s_ease-in-out_infinite]"
            />
          </svg>
          <div className="absolute top-1/2 left-[38.5%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F59E0B] animate-ping" />
          <div className="absolute top-1/2 left-[38.5%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F59E0B]" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-[#0F172A] font-semibold text-lg tracking-tight">
            Just a moment
          </p>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-bounce" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 260;
          }
          60% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
