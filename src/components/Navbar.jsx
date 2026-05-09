function Navbar({ cartCount, openModal }) {
  return (
    <nav className="bg-[#2c539e] text-white px-6 py-4 flex justify-between items-center sticky top-0">
      <h1 className="text-2xl font-bold">
        Fake Store
      </h1>

      <button
        onClick={openModal}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;