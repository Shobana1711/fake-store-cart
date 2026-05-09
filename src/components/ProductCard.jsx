function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
      
      <img
        src={product.image}
        alt={product.title}
        className="h-52 object-contain mb-4"
      />

      <h2 className="font-semibold text-lg">
        {product.title.split(" ").slice(0, 3).join(" ")}
      </h2>

      <p className="text-green-600 text-xl font-bold mt-4 mb-4">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-[#356aa0] text-white py-2 rounded-lg hover:bg-[#2c539e] transition w-full"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;