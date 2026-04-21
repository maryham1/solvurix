function ProductImage() {
  return (
    <div className="z-20 order-2 laptop:order-1">
      <img
        src="\product.jpeg"
        className=" w-[400px] h-[150px] rounded-2xl shadow-xl shadow-gray-300 object-cover hover:scale-[1.05] laptop:w-[600px] laptop:h-[350px]"
      />
    </div>
  );
}

export default ProductImage;
