import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  
  const cartTotal = cart.reduce((total, product) => {
  return total + product.price;
}, 0);


  const addToCart = (product) => {
    console.log('Product added to cart:', product);
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
  let removedOnce = false;

  setCart(cart.filter((product) => {
    if (product.id === productId && !removedOnce) {
      removedOnce = true;
      return false; 
    }
      return true;
    })
  );
};



  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      name: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      name: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  return (
    <div className="app">
      <Header cartCount={cart.length} />
      <Hero 
        title="Welcome to the ComponentCorner"
        subtitle="Discover amazing products and electronic components"
        ctaText="Shop Now!"
      />
      <main className="main-content">
      <h2>Featured Products</h2>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={`$${product.price}`}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </main>
      <section className="cart-section">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <><div className="cart-items-list">
              {cart.map((product) => (
                <CartItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  onRemove={removeFromCart} />
              ))}
            </div>
            <h3 className="cart-total">
                  Total: ${cartTotal.toFixed(2)}
            </h3></>
      )}
      </section>
      <Footer 
        title="Component Corner"
        email="Email:hello@componentcorner.com"
        phonenumber="(555) 123-4567"
        address="Address: 123 React Street, Component City, RC 12345"
      />
    </div>
  );
}

export default App;