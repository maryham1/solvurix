function CompanyLogo() {
  return (
    <div className="hidden relative  items-center justify-center laptop:flex">
      <div className="absolute w-full h-full bg-radial-[at_center] from-blue-500/30  to-blue-600/5 rounded-full blur-3xl z-10 pointer-events-none"></div>
      <img
        src="/solvurix-company-logo.png"
        className="w-[600px] h-[600px] relative z-10"
      />
    </div>
  );
}

export default CompanyLogo;
