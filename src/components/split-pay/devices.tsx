export function LaptopShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-t-[22px] bg-[#1b1b1b] p-3 pb-0 shadow-mock">
        <div className="relative overflow-hidden rounded-t-[12px] bg-white">
          <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#1b1b1b]" />
          {children}
        </div>
      </div>
      <div className="h-2.5 bg-[#242424]" />
      <div className="relative h-3 bg-[#2e2e2c]">
        <div className="absolute inset-x-[8%] top-0 h-px bg-white/10" />
      </div>
      <div className="mx-auto h-1.5 w-[92%] rounded-b-[10px] bg-[#1a1a1a]" />
    </div>
  );
}

export function PosChassis({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full">
      <div className="rounded-[28px] border border-[#d8d8d6] bg-[#2b2b2b] p-3 shadow-mock md:p-4">
        <div className="mb-3 hidden h-3 items-center justify-between px-2 md:flex">
          <span className="text-[10px] font-medium tracking-wide text-white/40">VERTEX POS</span>
          <span className="h-1.5 w-16 rounded-full bg-white/20" />
          <span className="text-[10px] text-white/40">{title}</span>
        </div>
        <div className="overflow-hidden rounded-2xl bg-white">{children}</div>
      </div>
      <div className="mx-auto h-5 w-12 bg-[#2b2b2b]" />
      <div className="mx-auto h-1.5 w-36 rounded-full bg-[#1a1a1a]" />
    </div>
  );
}
