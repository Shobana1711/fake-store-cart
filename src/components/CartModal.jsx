function CartModal({ cart, closeModal, removeFromCart }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] md:w-[700px] max-h-[80vh] overflow-y-auto rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            Cart Items
          </h2>

          <button
            onClick={closeModal}
            className="text-red-500 text-xl font-bold"
          >
            X
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            Cart is Empty
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-4 border p-4 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-24 object-contain"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-green-600 font-bold">
                    ${item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;