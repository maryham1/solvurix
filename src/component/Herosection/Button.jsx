function Button({ type, children, icon }) {
  const baseStyles =
    "px-10 py-4 text-center rounded-lg capitalize outline-0 flex gap-4 items-center justify-center text-xl font-semibold laptop:px-8 laptop:py-4 laptop:justify-normal laptop:text-xl tablet:text-sm tablet:px-6 tablet:py-3";
  const variants = {
    blueBg: "bg-blue-600 ",
    noneBg: "bg-transparent border border-white border-[3px]",
    white:
      "bg-white text-blue-600 font-semibold py-4 px-12 laptop:py-4 laptop:px-8 tablet:px-8 tablet:py-4 ",
    borderWhite:
      "bg-transparent border-white border-[3px] text-white font-semibold py-4 px-12 laptop:py-4 laptop:px-8 tablet:px-8 tablet:py-4",
  };

  return (
    <button className={`${baseStyles} ${variants[type]} `}>
      {icon}
      <a className="cursor-pointer text-center">{children}</a>
    </button>
  );
}

export default Button;
