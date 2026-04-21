function Logo() {
  return (
    <div className="flex gap-1 items-center  laptop:gap-4">
      <img
        src="\solvurix-company-logo.png"
        className="w-[40px] h-[40px] laptop:2-[60px] laptop:h-[60px] "
      />
      <h1 className="text-xl uppercase font-semibold laptop:text-3xl">
        solvurix
      </h1>
    </div>
  );
}

export default Logo;
