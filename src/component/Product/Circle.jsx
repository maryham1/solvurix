function Circle() {
  return (
    <div className="order-1 laptop:order-2">
      <h4 className="text-blue-600  capitalize text-left text-xl font-semibold cursor-pointer absolute bottom-65 laptop:relative laptop:bottom-0 tablet:bottom-85">
        explore product &rarr;
      </h4>
      <div className="flex items-center justify-center z-10 order-1 laptop:order-2">
        <div className="absolute border-gray-900 border-[0.5px] rounded-full flex items-center justify-center z-10 w-[400px] h-[400px] p-20 top-10/14 laptop:top-10/17 laptop:w-[700px] laptop:h-[700px] tablet:w-[950px] tablet:h-[950px] tablet:top-10/15">
          <div className="absolute bottom-15 flex items-center flex-col space-y-5 laptop:bottom-30 tablet:bottom-30">
            <figure className="bg-white rounded-full w-[60px] h-[60px] laptop:w-[80px] h-[80px] tablet:w-[80px] tablet:h-[80px] flex items-center justify-center p-5 border-gray-400 border-[1px] shadow shadow-md">
              <img
                src="/solvurix-company-logo.png "
                className="w-[40px] h-[40px] laptop:w-[50px] laptop:h-[50px] object-cover"
              />
            </figure>
            <p className=" capitalize text-sm font-semibold cursor-pointer laptop:text-xl tablet:text-lg">
              expanding imapct &rarr;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Circle;
