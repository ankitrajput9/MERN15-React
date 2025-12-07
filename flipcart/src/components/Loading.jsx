import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900/80 z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Outer spinning ring */}
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-sky-500/30 border-t-sky-500 animate-spin" />

          {/* Inner glow circle */}
          <div className="absolute inset-2 rounded-full bg-sky-500/10 blur-sm" />
        </div>

        {/* Text */}
        <p className="text-sky-100 text-sm tracking-[0.35em] uppercase">
          Loading
        </p>
      </div>
    </div>
  );
};

export default Loading;
