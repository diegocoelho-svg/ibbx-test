export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-15 w-15 items-center justify-center ">
            <img className="" src="/logo.svg" alt="" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">IBBX</h1>
            <p className="text-xs text-gray-400">
              Monitoramento Industrial
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
