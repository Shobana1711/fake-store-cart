import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  
  const addToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);

    if (alreadyAdded) {
      alert("Item already added to the cart");
      return;
    }

    setCart([...cart, product]);
  };

  
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        cartCount={cart.length}
        openModal={() => setShowModal(true)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {showModal && (
        <CartModal
          cart={cart}
          closeModal={() => setShowModal(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;